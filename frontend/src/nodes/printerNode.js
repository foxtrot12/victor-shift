// printerNode.js

import { useState } from "react";
import { Position } from "reactflow";
import { NodeBase } from "./nodeBase";

export const PrinterNode = ({ id, data }) => {
  const [outputType, setOutputType] = useState(data.outputType || "Text");

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  const handlesArr = [
    {
      type: "target",
      position: Position.Left,
      id: `${id}-value`,
    },
  ];

  const labelsArr = [
    {
      inner: (
        <>
          Type:
          <select value={outputType} onChange={handleTypeChange}>
            <option value="B&W">Black and White</option>
            <option value="Color">Color</option>
          </select>
        </>
      ),
    },
  ];

  return <NodeBase head="Printer" labelsArr={labelsArr} handlesArr={handlesArr} />;
};
