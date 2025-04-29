"use client";

import {
  Position,
  ReactFlow,
  BezierEdge,
  StraightEdge,
  StepEdge,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { HTML, Internet } from "@/app/components/CustomNodes";
import { useEffect, useState } from "react";
import { EdgeDataFromDB, NodeDataFromDB } from "./types";
import { useAuth } from "@/app/lib/context/AuthContext";
import Opinion from "@/app/components/Opinion";

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
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user } = useAuth();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [nodeRes, edgeRes, progressRes] = await Promise.all([
          fetch("/api/data/nodes"),
          fetch("/api/data/edges"),
          fetch(`/api/pencapaian/${user?.userId}`),
        ]);

        if (!nodeRes.ok || !edgeRes.ok || !progressRes.ok) {
          throw new Error("Gagal fetch data dari API");
        }

        const nodesJson = await nodeRes.json();
        const edgesJson = await edgeRes.json();
        const progressJson = await progressRes.json();

        const nodesData = nodesJson.data ?? [];
        const edgesData = edgesJson.data ?? [];
        const progressData = progressJson.data ?? []; // array of { node_id, status }

        // Warna berdasarkan status
        const statusColorMap: Record<string, string> = {
          DONE: "#22c55e", // hijau
          IN_PROGRESS: "#eab308", // kuning
          SKIP: "#000000", // hitam
          PENDING: "#d1d5db", // abu-abu default
        };

        // Fungsi bantu untuk mengubah posisi ke format React Flow
        const getValidPosition = (
          pos: string | null | undefined
        ): Position | undefined => {
          if (pos === "Bottom") return Position.Bottom;
          if (pos === "Top") return Position.Top;
          if (pos === "Left") return Position.Left;
          if (pos === "Right") return Position.Right;
          return undefined;
        };

        // mapping nodes
        const formattedNodes = nodesData.map((node: NodeDataFromDB) => {
          // Cari status dari progressData
          const progress = progressData.find((p: { node_id: string; status: string }) => p.node_id === node.id);
          const status = progress?.status || "PENDING";

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
            style: {
              background: statusColorMap[status],
            },
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
  }, [user]);

  if (loading) {
    return <div className="p-4 text-center">Loading roadmap…</div>;
  }

const onNodeClick = (event: React.MouseEvent, node: Node) => {
  event.preventDefault();
  setSelectedNode(node.id);
  setIsModalOpen(true);
};

const handleSubmit = async () => {
  if (!user || !selectedNode) {
    alert("User atau node belum dipilih.");
    return;
  }

  try {
    const res = await fetch(`/api/pencapaian`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: user.userId,
        node_id: selectedNode,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      alert("Progress berhasil disimpan!");
      setIsModalOpen(false);
    } else {
      alert(data.message || "Gagal menyimpan progress.");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Terjadi kesalahan.");
  }
};



  return (
    <>
      <div style={{ width: "100%", height: "100vh" }}>
      <Opinion />
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          onNodeClick={onNodeClick}
          fitView
          style={{ background: "#f0f4f8" }}
        />
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm z-50">
          <div className="bg-white/80 p-6 rounded-lg shadow-xl w-96 border border-gray-200 backdrop-blur-lg">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Selesaikan Materi?
            </h2>
            <p className="mb-6 text-gray-600 font-medium">
              Node ID: <span className="text-blue-500">{selectedNode}</span>
            </p>
            <div className="flex justify-end gap-2">
              <button
                className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors"
                onClick={() => setIsModalOpen(false)}
              >
                Batal
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors
                         disabled:bg-gray-400 disabled:cursor-not-allowed"
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="animate-spin mr-2">&#9696;</span>
                    Memproses...
                  </>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Roadmap3;
