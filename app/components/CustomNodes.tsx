import { Handle, Position } from "@xyflow/react";
type Props = {
  data: {
    label: string;
    bg?: string;
  };
};


export const Internet = ({ data }: Props) => {
  return (
    <div
      className="rounded-2xl shadow-md py-4 px-6 text-sm font-semibold text-center"
      style={{ backgroundColor: data.bg || "#d1d5db" }}
    >
      <Handle
        type="source"
        id="left"
        position={Position.Left}
        className="w-2 h-2 bg-black"
      />
      <div>{data.label}</div>
      <Handle
        type="source"
        id="right"
        position={Position.Right}
        className="w-2 h-2 bg-black"
      />
      <Handle
        type="target"
        id="top"
        position={Position.Top}
        className="w-2 h-2 bg-black"
      />
    </div>
  );
};

export const HTML = ({ data }: Props) => {
  return (
    <div
      className={`rounded-2xl shadow-md py-4 px-8 text-sm font-semibold text-center ${
        data.bg || "bg-gray-200"
      }`}
    >
      <Handle
        type="target"
        id="right"
        position={Position.Right}
        className="w-2 h-2 bg-black"
      />
      <div>{data.label}</div>
      <Handle
        type="source"
        id="top"
        position={Position.Top}
        className="w-2 h-2 bg-black"
      />
      <Handle
        type="source"
        id="right2"
        position={Position.Right}
        className="w-2 h-2 bg-black"
      />
    </div>
  );
};
