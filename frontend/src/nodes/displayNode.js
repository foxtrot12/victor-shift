// displayNode.js

import { Position } from "reactflow";
import { NodeBase } from "./nodeBase";

export const DisplayNode = ({ id, data }) => {
  const handlesArr = [
    {
      type: "target",
      position: Position.Left,
      id: `${id}-system`,
      style: { top: `${100 / 3}%` },
    },
    {
      type: "target",
      position: Position.Left,
      id: `${id}-prompt`,
      style: { top: `${200 / 3}%` },
    },
  ];

  return <NodeBase handlesArr={handlesArr} head="Display" title="This is a display Node." />;
};
