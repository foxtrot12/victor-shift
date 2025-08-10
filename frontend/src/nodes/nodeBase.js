import { Handle } from "reactflow";

export const NodeBase = ({ handlesArr, labelsArr, head, title }) => {
  return (
    <div className="flex flex-col relative border-solid border-slate-700 rounded-lg border-2">
      <div className="flex flex-col absolute justify-evenly w-full h-full">
        {handlesArr?.map((handleProps, ind) => (
          <Handle key={ind} {...handleProps} />
        ))}
      </div>

      <div className="flex flex-col">
        {head && (
          <div>
            <span>{head}</span>
          </div>
        )}
        {title && (
          <div>
            <span>{title}</span>
          </div>
        )}
      </div>

      <div className="flex flex-col z-10">
        {labelsArr?.map(({ props, inner }, ind) => (
          <label className="flex flex-col" key={ind} {...props}>
            {inner}
          </label>
        ))}
      </div>
    </div>
  );
};
