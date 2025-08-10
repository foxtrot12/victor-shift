// outputNode.js

import { useState } from "react";
import { Position } from "reactflow";
import { NodeBase } from "./nodeBase";

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace("customOutput-", "output_")
  );
  const [outputType, setOutputType] = useState(data.outputType || "Text");

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

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
          Name:
          <input type="text" value={currName} onChange={handleNameChange} />
        </>
      ),
    },
    {
      inner: (
        <>
          Type:
          <select value={outputType} onChange={handleTypeChange}>
            <option value="Text">Text</option>
            <option value="File">Image</option>
          </select>
        </>
      ),
    },
  ];

  return <NodeBase head="Output" labelsArr={labelsArr} handlesArr={handlesArr} />;
};
