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

export const HTML = ({ data }: Props) => {
  return (
    <div
      className="rounded-2xl shadow-md py-4 px-8 text-sm font-semibold text-center"
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

export const CSS = ({ data }: Props) => {
  return (
    <div
      className="rounded-2xl shadow-md py-4 px-8 text-sm font-semibold text-center"
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

export const JS = ({ data }: Props) => {
  return (
    <div
      className="rounded-2xl shadow-md py-4 px-8 text-sm font-semibold text-center"
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
    </div>
  );
};

export const VCS = ({ data }: Props) => {
  return (
    <div
      className="rounded-2xl shadow-md py-4 px-8 text-sm font-semibold text-center"
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

export const VCS_Hosting = ({ data }: Props) => {
  return (
    <div
      className="rounded-2xl shadow-md py-4 px-8 text-sm font-semibold text-center"
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
        id="top"
        position={Position.Top}
        className="w-2 h-2 bg-black"
      />
    </div>
  );
};

export const PM = ({ data }: Props) => {
  return (
    <div
      className="rounded-2xl shadow-md py-4 px-8 text-sm font-semibold text-center"
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
        id="bottom"
        position={Position.Bottom}
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

export const TEXT = ({ data }: Props) => {
  return (
    <div
      className="rounded-2xl max-w-[340px] shadow-md py-4 px-8 text-sm font-semibold text-center"
      style={{
        backgroundColor: data.status === "PENDING" ? "#d1d5db" : data.bg,
      }}
    >
      <div className="text-left" >{data.label}</div>
    </div>
  );
};


export const PaF = ({ data }: Props) => {
  return (
    <div
      className="rounded-2xl shadow-md py-4 px-8 text-sm font-semibold text-center"
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
    </div>
  );
};

export const WCSS = ({ data }: Props) => {
  return (
    <div
      className="rounded-2xl shadow-md py-4 px-8 text-sm font-semibold text-center"
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
        id="bottom"
        position={Position.Bottom}
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

export const CSSArch = ({ data }: Props) => {
  return (
    <div
      className="rounded-2xl shadow-md py-4 px-8 text-sm font-semibold text-center"
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
    </div>
  );
};

export const CSSPre = ({ data }: Props) => {
  return (
    <div
      className="rounded-2xl shadow-md py-4 px-8 text-sm font-semibold text-center"
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
        className="-ml-14 w-2 h-2 bg-black"
      />
      <Handle
        type="source"
        id="bottom2"
        position={Position.Bottom}
        className="ml-14 w-2 h-2 bg-black"
      />
      <Handle
        type="source"
        id="right"
        position={Position.Right}
        className=" w-2 h-2 bg-black"
      />

    </div>
  );
};

export const BTools = ({ data }: Props) => {
  return (
    <div
      className="rounded-2xl shadow-md py-4 px-8 text-sm font-semibold text-center"
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

export const LaF = ({ data }: Props) => {
  return (
    <div
      className="rounded-2xl shadow-md py-4 px-8 text-sm font-semibold text-center"
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
        id="top"
        position={Position.Top}
        className="-ml-14 w-2 h-2 bg-black"
      />
      <Handle
        type="source"
        id="top2"
        position={Position.Top}
        className="ml-14 w-2 h-2 bg-black"
      />
    </div>
  );
};

export const ModuleB = ({ data }: Props) => {
  return (
    <div
      className="rounded-2xl shadow-md py-4 px-13 text-sm font-semibold text-center"
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
    </div>
  );
};

export const Test = ({ data }: Props) => {
  return (
    <div
      className="rounded-2xl shadow-md py-4 px-8 text-sm font-semibold text-center"
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

export const Auth = ({ data }: Props) => {
  return (
    <div
      className="rounded-2xl shadow-md py-4 px-8 text-sm font-semibold text-center"
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
      <div className="absolute -left-[190px] top-15 w-[600px]">
        <h1>JWT, OAuth, SSO, Basic Auth, Session Auth</h1>
      </div>
    </div>
  );
};

export const WSB = ({ data }: Props) => {
  return (
    <div
      className="rounded-2xl shadow-md py-4 px-8 text-sm font-semibold text-center"
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
        id="bottom"
        position={Position.Bottom}
        className="w-2 h-2 bg-black"
      /><Handle
        type="source"
        id="top"
        position={Position.Top}
        className="w-2 h-2 bg-black"
      />
    </div>
  );
};

export const WebC = ({ data }: Props) => {
  return (
    <div
      className="rounded-2xl shadow-md py-4 px-8 text-sm font-semibold text-center"
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
      <Handle
        type="source"
        id="right"
        position={Position.Right}
        className="w-2 h-2 bg-black"
      />
    </div>
  );
};

export const TypeC = ({ data }: Props) => {
  return (
    <div
      className="rounded-2xl shadow-md py-4 px-8 text-sm font-semibold text-center"
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

export const SSR = ({ data }: Props) => {
  return (
    <div
      className="rounded-2xl shadow-md py-4 px-8 text-sm font-semibold text-center"
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
      <Handle
        type="source"
        id="right"
        position={Position.Right}
        className="w-2 h-2 bg-black"
      />
    </div>
  );
};

export const GraphQL = ({ data }: Props) => {
  return (
    <div
      className="rounded-2xl shadow-md py-4 px-8 text-sm font-semibold text-center"
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
        id="bottom"
        position={Position.Bottom}
        className="w-2 h-2 bg-black"
      />
      <Handle
        type="source"
        id="top"
        position={Position.Top}
        className="w-2 h-2 bg-black"
      />
    </div>
  );
};

export const PWAs = ({ data }: Props) => {
  return (
    <div
      className="rounded-2xl shadow-md py-4 px-8 text-sm font-semibold text-center"
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

export const box = () => {
  return (
    <div className="rounded-xl shadow-md py-[140px] px-[85px] text-sm font-semibold text-center bg-white">
      <Handle
        type="target"
        id="right"
        position={Position.Right}
        className="mt-22 w-2 h-2 bg-black"
      />
      <div className="absolute -left-[215px] -bottom-8 w-[600px]">
        <h1>Measure & Improve Perf.</h1>
      </div>
    </div>
  );
};
export const box2 = () => {
  return (
    <div className="rounded-xl shadow-md py-[240px] px-[2px] text-sm font-semibold text-center bg-white border-black border">
      <Handle
        type="target"
        id="right"
        position={Position.Right}
        className="-mt-46 w-2 h-2 bg-black"
      />
      <div className="absolute -right-[220px] -bottom-8 w-[600px]">
        <h1>Browser APIs</h1>
      </div>
    </div>
  );
};

export const PBP = ({ data }: Props) => {
  return (
    <div
      className="rounded-2xl shadow-md py-4 px-8 text-sm font-semibold text-center"
      style={{
        backgroundColor: data.status === "PENDING" ? "#655ddd" : data.bg,
      }}
    >
      <Handle
        type="target"
        id="top"
        position={Position.Top}
        className="w-2 h-2 bg-black"
      />
      <div>{data.label}</div>
    </div>
  );
};

export const SSG = ({ data }: Props) => {
  return (
    <div
      className="rounded-2xl shadow-md py-4 px-8 text-sm font-semibold text-center"
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
        type="source"
        id="bottom"
        position={Position.Bottom}
        className="w-2 h-2 bg-black"
      />
    </div>
  );
};

export const Mobile = ({ data }: Props) => {
  return (
    <div
      className="rounded-2xl shadow-md py-4 px-8 text-sm font-semibold text-center"
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
        id="top"
        position={Position.Top}
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

export const Desktop = ({ data }: Props) => {
  return (
    <div
      className="rounded-2xl shadow-md py-4 px-8 text-sm font-semibold text-center"
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
      {/* <Handle
        type="source"
        id="bottom"
        position={Position.Bottom}
        className="w-2 h-2 bg-black"
      /> */}
    </div>
  );
};