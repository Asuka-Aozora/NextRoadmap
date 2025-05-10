"use client";

import {
  Position,
  ReactFlow,
  BezierEdge,
  StraightEdge,
  StepEdge,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import {
  Internet,
  PaL,
  VCS,
  RPS,
  RDatabase,
  LearnAPIs,
  Auth,
  Caching,
  WS,
  Testing,
  CC,
  MaD,
  box,
  APISec,
  SD,
  SDA,
  AP,
  DesignDevPrin,
  CV,
  MB,
  SE,
  WebS,
  RTD,
  GraphQL,
  NoSQL,
  KV,
  BFS,
  MS,
  DU,
  BIK,
} from "@/app/components/CustomNodes2";
import { useEffect, useState } from "react";
import { EdgeDataFromDB, NodeDataFromDB } from "./types";
import { useAuth } from "@/app/lib/context/AuthContext";
import Opinion from "@/app/components/Opinion";
import toast, { Toaster } from "react-hot-toast";

const nodeTypes = {
  Internet,
  PaL,
  VCS,
  RPS,
  RDatabase,
  LearnAPIs,
  Auth,
  Caching,
  WS,
  Testing,
  CC,
  MaD,
  box,
  APISec,
  SD,
  SDA,
  AP,
  DesignDevPrin,
  CV,
  MB,
  SE,
  WebS,
  RTD,
  GraphQL,
  NoSQL,
  KV,
  BFS,
  MS,
  DU,
  BIK,
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
  style?: {
    background: string;
    color?: string;
    padding?: string;
    width?: string;
  };
};

type Edge = {
  id: string;
  source: string;
  target: string;
  type: string;
};

type Roadmap4Props = {
  onProgressUpdate?: (done: number, total: number) => void;
};

const Roadmap4 = ({ onProgressUpdate }: Roadmap4Props) => {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("PENDING");
  const { user } = useAuth();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!user) {
      return;
    }
    if (nodes.length > 0 && !loading) {
      const total = nodes.length;
      const done = nodes.filter((node) => node.data?.bg === "#22c55e").length;
      onProgressUpdate?.(done, total);
    }
    const fetchData = async () => {
      try {
        const [nodeRes, edgeRes, progressRes] = await Promise.all([
          fetch("/api/data2/nodes"),
          fetch("/api/data2/edges"),
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
        const progressData = progressJson.data ?? [];

        // Warna berdasarkan status
        const statusColorMap: Record<string, string> = {
          DONE: "#22c55e", // hijau
          IN_PROGRESS: "#eab308", // kuning
          SKIP: "#496b69", // hitam
          PENDING: "#FFEEBA", // abu-abu default
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
          const progress = progressData.find(
            (p: { node_id: string; status: string }) => p.node_id === node.id
          );
          const status = progress?.status || "PENDING";
          const bgColor = statusColorMap[status];

          const nodeStyle =
            node.type === null ? { background: bgColor } : undefined;

          return {
            id: node.id,
            type: node.type,
            position: {
              x: node.position_x,
              y: node.position_y,
            },
            data: {
              label: node.materi || "Untitled",
              bg: status === "PENDING" ? "#d1d5db" : statusColorMap[status],
            },
            style: nodeStyle,
            status: status,
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
  }, [user, onProgressUpdate]);

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
    setLoading(true);

    try {
      const res = await fetch(`/api/pencapaian`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: user?.userId,
          node_id: selectedNode,
          status: selectedStatus,
        }),
      });

      if (!res.ok) throw new Error("Gagal update status");

      const data = await res.json();
      console.log("Update sukses:", data);

      if (res.ok) {
        toast.success("Progress berhasil disimpan!");
        setIsModalOpen(false);
      } else {
        alert(data.message || "Gagal menyimpan progress.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Terjadi kesalahan.");
    } finally {
      setLoading(false);
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
            <div className="mb-4">
              <label
                htmlFor="status"
                className="block text-gray-700 font-medium mb-2"
              >
                Pilih Status Materi
              </label>
              <select
                id="status"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800"
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
              >
                <option value="PENDING">Pending</option>
                <option value="IN_PROGRESS">In Progress</option>
                <option value="DONE">Done</option>
                <option value="SKIP">Skip</option>
              </select>
            </div>
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
      <Toaster />
    </>
  );
};

export default Roadmap4;
