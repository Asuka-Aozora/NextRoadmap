"use client";

import {
  Position,
  ReactFlow,
  BezierEdge,
  StraightEdge,
  StepEdge,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { HTML, Internet } from "@/components/CustomNodes";
import { useEffect, useState } from "react";
import { EdgeDataFromDB, NodeDataFromDB } from "./types";

const nodeTypes = {
  Internet,
  HTML,
};

const edgeTypes = {
  bezier: BezierEdge,
  straight: StraightEdge,
  step: StepEdge,
};

type Node = {
  id: string;
  type: string;
  data: { label: string; bg?: string };
  position: { x: number; y: number };
  style?: { background: string };
};

type Edge = {
  id: string;
  source: string;
  target: string;
  type: string;
};

const Roadmap3 = () => {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [nodeRes, edgeRes] = await Promise.all([
          fetch("/api/data/nodes"),
          fetch("/api/data/edges"),
        ]);

        if (!nodeRes.ok || !edgeRes.ok) {
          throw new Error("Gagal fetch data dari API");
        }

        const nodesJson = await nodeRes.json();
        const edgesJson = await edgeRes.json();

        console.log("nodesData =", nodesJson); // debug di sini
        console.log("edgesData =", edgesJson); // debug di sini

        const nodesData = nodesJson.data ?? [];
        const edgesData = edgesJson.data ?? [];

        // mapping nodes
        const formattedNodes = nodesData.map((node: NodeDataFromDB) => {
          // Fungsi untuk memastikan position valid
          const getValidPosition = (pos: string | null | undefined): Position | undefined => {
            if (pos === "Bottom") return Position.Bottom;
            if (pos === "Top") return Position.Top;
            if (pos === "Left") return Position.Left;
            if (pos === "Right") return Position.Right;

            
            return undefined; 
          };

          return {
            id: node.id,
            type: node.type || "default",
            position: {
              x: node.position_x,
              y: node.position_y,
            },
            data: {
              label: node.materi || "Untitled",
            },
            style: node.node_style || {},
            
            sourcePosition: getValidPosition(node.source_position),
            targetPosition: getValidPosition(node.target_position),
          };
        });

        // mapping edges
        const formattedEdges = edgesData.map((edge: EdgeDataFromDB) => ({
          id: edge.id,
          source: edge.source_id,
          target: edge.target_id,
          animated: edge.animated,
          type: edge.type,
          sourceHandle: edge.source_handle || null,
          targetHandle: edge.target_handle || null,
        }));

        setNodes(formattedNodes);
        setEdges(formattedEdges);
      } catch (err) {
        console.error("Failed to load roadmap data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="p-4 text-center">Loading roadmap…</div>;
  }
  console.log("nodes =", nodes);

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView
        style={{ background: "#f0f4f8" }}
      />
    </div>
  );
};

export default Roadmap3;
