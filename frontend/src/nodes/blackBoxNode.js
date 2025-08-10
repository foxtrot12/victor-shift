// blackBoxNode.js

import { useState } from "react";
import { Position } from "reactflow";
import { NodeBase } from "./nodeBase";

export const BlackBoxNode = ({ id, data }) => {
  const [currTitle, setCurrTitle] = useState(data?.text || 'Back Box');

  const handleTextChange = (e) => {
    setCurrTitle(e.target.value);
  };

  const labelsArr = [
    {
      inner: (
        <>
          Title:
          <input type="text" value={currTitle} onChange={handleTextChange} />
        </>
      ),
    },
  ];

  const handlesArr = [
    { type: "source", position: Position.Right, id: `${id}-output` },
  ];

  return <NodeBase labelsArr={labelsArr} handlesArr={handlesArr} head={"BlackBox"} title={currTitle} />;
};
