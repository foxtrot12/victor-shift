import { Handle } from "reactflow";

export const NodeBase = ({ handlesArr, labelsArr, head, title }) => {
  return (
    <div style={{ width: 200, height: 80, border: "1px solid black" }}>
      <div>
        {handlesArr?.map((handleProps, ind) => (
          <Handle key={ind} {...handleProps} />
        ))}
      </div>

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
      <div>
        {labelsArr?.map(({ props, inner }, ind) => (
          <label key={ind} {...props}>
            {inner}
          </label>
        ))}
      </div>
    </div>
  );
};
