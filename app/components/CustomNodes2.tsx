import { Handle, Position } from "@xyflow/react";
type Props = {
  data: {
    label: string;
    bg?: string;
    status?: string;
  };
};

export const Internet = ({ data }: Props) => {
  return (
    <div
      className="rounded-2xl shadow-md py-4 px-6 text-sm font-semibold text-center"
      style={{
        backgroundColor: data.status === "PENDING" ? "#d1d5db" : data.bg,
      }}
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

export const PaL = ({ data }: Props) => {
  return (
    <div
      className="rounded-2xl shadow-md py-4 px-6 text-sm font-semibold text-center"
      style={{
        backgroundColor: data.status === "PENDING" ? "#d1d5db" : data.bg,
      }}
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
        id="bottom"
        position={Position.Bottom}
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

export const VCS = ({ data }: Props) => {
  return (
    <div
      className="rounded-2xl shadow-md py-4 px-6 text-sm font-semibold text-center"
      style={{
        backgroundColor: data.status === "PENDING" ? "#d1d5db" : data.bg,
      }}
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
        id="top"
        position={Position.Top}
        className="w-2 h-2 bg-black"
      />
      <Handle
        type="target"
        id="left"
        position={Position.Left}
        className="w-2 h-2 bg-black"
      />
    </div>
  );
};

export const RPS = ({ data }: Props) => {
  return (
    <div
      className="rounded-2xl shadow-md py-4 px-6 text-sm font-semibold text-center"
      style={{
        backgroundColor: data.status === "PENDING" ? "#d1d5db" : data.bg,
      }}
    >
      <Handle
        type="source"
        id="bottom"
        position={Position.Bottom}
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
        type="target"
        id="right"
        position={Position.Right}
        className="w-2 h-2 bg-black"
      />
      <Handle
        type="source"
        id="right"
        position={Position.Right}
        className="w-2 h-2 bg-black"
      />
    </div>
  );
};
export const RDatabase = ({ data }: Props) => {
  return (
    <div
      className="rounded-2xl shadow-md py-4 px-6 text-sm font-semibold text-center"
      style={{
        backgroundColor: data.status === "PENDING" ? "#d1d5db" : data.bg,
      }}
    >
      <Handle
        type="source"
        id="bottom"
        position={Position.Bottom}
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
        id="right"
        position={Position.Right}
        className="w-2 h-2 bg-black"
      />
      <Handle
        type="target"
        id="left"
        position={Position.Left}
        className="w-2 h-2 bg-black"
      />
    </div>
  );
};

export const LearnAPIs = ({ data }: Props) => {
  return (
    <div
      className="rounded-2xl shadow-md py-4 px-6 text-sm font-semibold text-center"
      style={{
        backgroundColor: data.status === "PENDING" ? "#d1d5db" : data.bg,
      }}
    >
      <Handle
        type="source"
        id="bottom"
        position={Position.Bottom}
        className="w-2 h-2 bg-black"
      />
      <div>{data.label}</div>
      <Handle
        type="source"
        id="top"
        position={Position.Top}
        className="-ml-14 w-2 h-2 bg-black"
      />
      <Handle
        type="source"
        id="right"
        position={Position.Right}
        className="w-2 h-2 bg-black"
      />
      <Handle
        type="source"
        id="left"
        position={Position.Left}
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

export const Auth = ({ data }: Props) => {
  return (
    <>
      <div className="rounded-2xl bg-white py-36 shadow-md absolute -z-50 top-0 left-0 w-full h-full" />
      <div
        className="rounded-2xl bg-gray-200 py-4 px-26 text-sm font-semibold text-center"
        style={{
          backgroundColor: data.status === "PENDING" ? "#d1d5db" : data.bg,
        }}
      >
        <div>{data.label}</div>

        <Handle
          type="target"
          id="left"
          position={Position.Left}
          className="mt-20 w-2 h-2 bg-black"
        />
      </div>
    </>
  );
};

export const Caching = ({ data }: Props) => {
  return (
    <div
      className="rounded-2xl shadow-md py-4 px-6 text-sm font-semibold text-center"
      style={{
        backgroundColor: data.status === "PENDING" ? "#d1d5db" : data.bg,
      }}
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
        id="left"
        position={Position.Left}
        className="w-2 h-2 bg-black"
      />
      <Handle
        type="source"
        id="bottom"
        position={Position.Bottom}
        className="w-2 h-2 bg-black"
      />
    </div>
  );
};

export const WS = ({ data }: Props) => {
  return (
    <div
      className="rounded-2xl shadow-md py-4 px-6 text-sm font-semibold text-center"
      style={{
        backgroundColor: data.status === "PENDING" ? "#d1d5db" : data.bg,
      }}
    >
      <Handle
        type="target"
        id="top"
        position={Position.Top}
        className="w-2 h-2 bg-black"
      />
      <div>{data.label}</div>
      <Handle
        type="source"
        id="left"
        position={Position.Left}
        className="w-2 h-2 bg-black"
      />
      <Handle
        type="source"
        id="right"
        position={Position.Right}
        className="w-2 h-2 bg-black"
      />
      <Handle
        type="source"
        id="bottom"
        position={Position.Bottom}
        className="w-2 h-2 bg-black"
      />
    </div>
  );
};

export const Testing = ({ data }: Props) => {
  return (
    <div
      className="rounded-2xl shadow-md py-4 px-6 text-sm font-semibold text-center"
      style={{
        backgroundColor: data.status === "PENDING" ? "#d1d5db" : data.bg,
      }}
    >
      <Handle
        type="target"
        id="left"
        position={Position.Left}
        className="w-2 h-2 bg-black"
      />
      <div>{data.label}</div>
      <Handle
        type="source"
        id="bottom"
        position={Position.Bottom}
        className="w-2 h-2 bg-black"
      />
      <Handle
        type="source"
        id="right"
        position={Position.Right}
        className="w-2 h-2 bg-black"
      />
    </div>
  );
};

export const CC = ({ data }: Props) => {
  return (
    <div
      className="rounded-2xl shadow-md py-4 px-6 text-sm font-semibold text-center"
      style={{
        backgroundColor: data.status === "PENDING" ? "#d1d5db" : data.bg,
      }}
    >
      <Handle
        type="target"
        id="top"
        position={Position.Top}
        className="w-2 h-2 bg-black"
      />
      <div>{data.label}</div>
      <Handle
        type="source"
        id="bottom"
        position={Position.Bottom}
        className="w-2 h-2 bg-black"
      />
    </div>
  );
};

export const MaD = ({ data }: Props) => {
  return (
    <div
      className="rounded-2xl shadow-md py-4 px-6 text-sm font-semibold text-center"
      style={{
        backgroundColor: data.status === "PENDING" ? "#d1d5db" : data.bg,
      }}
    >
      <Handle
        type="target"
        id="top"
        position={Position.Top}
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
        type="source"
        id="bottom"
        position={Position.Bottom}
        className="w-2 h-2 bg-black"
      />
    </div>
  );
};

export const box = () => {
  return (
    <>
      <div className="rounded-2xl bg-white py-30 px-40 text-sm font-semibold text-center">
        <Handle
          type="target"
          id="top"
          position={Position.Top}
          className="w-2 h-2 bg-black"
        />
        <div className="absolute -left-[255px] -top-[85px] w-[600px]">
          <h1>Hashing Algorithms</h1>
        </div>
      </div>
    </>
  );
};

export const APISec = ({ data }: Props) => {
  return (
    <div
      className="rounded-2xl shadow-md py-4 px-14 text-sm font-semibold text-center"
      style={{
        backgroundColor: data.status === "PENDING" ? "#d1d5db" : data.bg,
      }}
    >
      <div>{data.label}</div>
    </div>
  );
};

export const SD = ({ data }: Props) => {
  return (
    <div
      className="rounded-2xl shadow-md py-4 px-6 text-sm font-semibold text-center"
      style={{
        backgroundColor: data.status === "PENDING" ? "#d1d5db" : data.bg,
      }}
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
        id="right"
        position={Position.Right}
        className="w-2 h-2 bg-black"
      />
      <Handle
        type="source"
        id="left"
        position={Position.Left}
        className="w-2 h-2 bg-black"
      />
    </div>
  );
};

export const SDA = ({ data }: Props) => {
  return (
    <div
      className="rounded-2xl shadow-md py-4 px-6 text-sm font-semibold text-center"
      style={{
        backgroundColor: data.status === "PENDING" ? "#d1d5db" : data.bg,
      }}
    >
      <Handle
        type="target"
        id="top"
        position={Position.Top}
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
        type="source"
        id="bottom"
        position={Position.Bottom}
        className="w-2 h-2 bg-black"
      />
    </div>
  );
};

export const AP = ({ data }: Props) => {
  return (
    <div
      className="rounded-2xl shadow-md py-4 px-6 text-sm font-semibold text-center"
      style={{
        backgroundColor: data.status === "PENDING" ? "#d1d5db" : data.bg,
      }}
    >
      <Handle
        type="target"
        id="left"
        position={Position.Left}
        className="w-2 h-2 bg-black"
      />
      <div>{data.label}</div>
      <Handle
        type="source"
        id="bottom"
        position={Position.Bottom}
        className="w-2 h-2 bg-black"
      />
    </div>
  );
};

export const DesignDevPrin = ({ data }: Props) => {
  return (
    <div
      className="rounded-2xl shadow-md py-4 px-6 text-sm font-semibold text-center"
      style={{
        backgroundColor: data.status === "PENDING" ? "#d1d5db" : data.bg,
      }}
    >
      <Handle
        type="target"
        id="top"
        position={Position.Top}
        className="w-2 h-2 bg-black"
      />
      <div>{data.label}</div>
      <Handle
        type="source"
        id="left"
        position={Position.Left}
        className="w-2 h-2 bg-black"
      />
      <Handle
        type="source"
        id="bottom"
        position={Position.Bottom}
        className="w-2 h-2 bg-black"
      />
    </div>
  );
};

export const CV = ({ data }: Props) => {
  return (
    <div
      className="rounded-2xl shadow-md py-4 px-6 text-sm font-semibold text-center"
      style={{
        backgroundColor: data.status === "PENDING" ? "#d1d5db" : data.bg,
      }}
    >
      <Handle
        type="target"
        id="top"
        position={Position.Top}
        className="w-2 h-2 bg-black"
      />
      <div>{data.label}</div>
      <Handle
        type="source"
        id="top"
        position={Position.Top}
        className="-ml-22 w-2 h-2 bg-black"
      />
      <Handle
        type="source"
        id="left"
        position={Position.Left}
        className="w-2 h-2 bg-black"
      />
      <Handle
        type="source"
        id="right"
        position={Position.Right}
        className="w-2 h-2 bg-black"
      />
    </div>
  );
};

export const MB = ({ data }: Props) => {
  return (
    <>
      <div className="rounded-2xl bg-white py-22 shadow-md absolute -z-50 top-0 left-0 w-full h-full" />
      <div
        className="rounded-2xl bg-gray-200 py-4 px-10 text-sm font-semibold text-center"
        style={{
          backgroundColor: data.status === "PENDING" ? "#d1d5db" : data.bg,
        }}
      >
        <div>{data.label}</div>

        <Handle
          type="target"
          id="top"
          position={Position.Top}
          className="w-2 h-2 bg-black"
        />
        <Handle
          type="source"
          id="left"
          position={Position.Left}
          className="w-2 h-2 bg-black"
        />
      </div>
    </>
  );
};

export const SE = ({ data }: Props) => {
  return (
    <>
      <div className="rounded-2xl bg-white py-22 shadow-md absolute -z-50 top-0 left-0 w-full h-full" />
      <div
        className="rounded-2xl bg-gray-200 py-4 px-10 text-sm font-semibold text-center"
        style={{
          backgroundColor: data.status === "PENDING" ? "#d1d5db" : data.bg,
        }}
      >
        <div>{data.label}</div>

        <Handle
          type="target"
          id="right"
          position={Position.Right}
          className="w-2 h-2 bg-black"
        />
        <Handle
          type="source"
          id="left"
          position={Position.Left}
          className="w-2 h-2 bg-black"
        />
      </div>
    </>
  );
};

export const WebS = ({ data }: Props) => {
  return (
    <div
      className="rounded-2xl shadow-md py-4 px-6 text-sm font-semibold text-center"
      style={{
        backgroundColor: data.status === "PENDING" ? "#d1d5db" : data.bg,
      }}
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
        id="left"
        position={Position.Left}
        className="w-2 h-2 bg-black"
      />
      <Handle
        type="source"
        id="bottom"
        position={Position.Bottom}
        className="w-2 h-2 bg-black"
      />
    </div>
  );
};

export const RTD = ({ data }: Props) => {
  return (
    <div
      className="rounded-2xl shadow-md py-4 px-6 text-sm font-semibold text-center"
      style={{
        backgroundColor: data.status === "PENDING" ? "#d1d5db" : data.bg,
      }}
    >
      <Handle
        type="target"
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
        type="source"
        id="bottom"
        position={Position.Bottom}
        className="w-2 h-2 bg-black"
      />
    </div>
  );
};

export const GraphQL = ({ data }: Props) => {
  return (
    <div
      className="rounded-2xl shadow-md py-4 px-6 text-sm font-semibold text-center"
      style={{
        backgroundColor: data.status === "PENDING" ? "#d1d5db" : data.bg,
      }}
    >
      <Handle
        type="target"
        id="top"
        position={Position.Top}
        className="w-2 h-2 bg-black"
      />
      <div>{data.label}</div>
      <Handle
        type="source"
        id="left"
        position={Position.Left}
        className="w-2 h-2 bg-black"
      />
    </div>
  );
};

export const NoSQL = ({ data }: Props) => {
  return (
    <div
      className="rounded-2xl shadow-md py-4 px-6 text-sm font-semibold text-center"
      style={{
        backgroundColor: data.status === "PENDING" ? "#d1d5db" : data.bg,
      }}
    >
      <Handle
        type="target"
        id="top"
        position={Position.Top}
        className="w-2 h-2 bg-black"
      />
      <div>{data.label}</div>
      <Handle
        type="source"
        id="top"
        position={Position.Top}
        className="-ml-18 w-2 h-2 bg-black"
      />
      <Handle
        type="source"
        id="bottom"
        position={Position.Bottom}
        className="w-2 h-2 bg-black"
      />
    </div>
  );
};

export const KV = ({ data }: Props) => {
  return (
    <>
      <div className="rounded-2xl bg-white py-22 shadow-md absolute -z-50 top-0 left-0 w-full h-full" />
      <div
        className="rounded-2xl bg-gray-200 py-4 px-14 text-sm font-semibold text-center"
        style={{
          backgroundColor: data.status === "PENDING" ? "#d1d5db" : data.bg,
        }}
      >
        <div>{data.label}</div>

        <Handle
          type="target"
          id="bottom"
          position={Position.Bottom}
          className="ml-14 -mb-31 w-2 h-2 bg-black"
        />
      </div>
    </>
  );
};

export const BFS = ({ data }: Props) => {
  return (
    <div
      className="rounded-2xl shadow-md py-4 px-6 text-sm font-semibold text-center"
      style={{
        backgroundColor: data.status === "PENDING" ? "#d1d5db" : data.bg,
      }}
    >
      <Handle
        type="target"
        id="top"
        position={Position.Top}
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
        type="source"
        id="left"
        position={Position.Left}
        className="w-2 h-2 bg-black"
      />
      <Handle
        type="source"
        id="bottom"
        position={Position.Bottom}
        className="w-2 h-2 bg-black"
      />
    </div>
  );
};

export const MS = ({ data }: Props) => {
  return (
    <>
      <div className="rounded-2xl bg-white py-39 shadow-md absolute -z-50 top-0 left-0 w-full h-full" />
      <div className="rounded-2xl max-w-[200px] py-4 px-5 text-sm font-semibold text-left">
        <div>{data.label}</div>
      </div>
    </>
  );
};

export const DU = ({ data }: Props) => {
  return (
    <>
      <div className="rounded-2xl bg-white py-24 shadow-md absolute -z-50 top-0 left-0 w-full h-full" />
      <div className="rounded-2xl py-4 px-14 text-sm font-semibold text-center">
        <div>{data.label}</div>

        <Handle
          type="target"
          id="Top"
          position={Position.Top}
          className="w-2 h-2 bg-black"
        />
      </div>
    </>
  );
};

export const BIK = ({ data }: Props) => {
  return (
    <div
      className="rounded-2xl shadow-md py-4 px-6 text-sm font-semibold text-center"
      style={{
        backgroundColor: data.status === "PENDING" ? "#d1d5db" : data.bg,
      }}
    >
      <Handle
        type="target"
        id="right"
        position={Position.Right}
        className="w-2 h-2 bg-black"
      />
      <div>{data.label}</div>
      <div className="absolute -left-[170px] -top-[25px] w-[600px] text-blue-600">
        <h1>Visit the DevOps Beginner Roadmap</h1>
      </div>
    </div>
  );
};
