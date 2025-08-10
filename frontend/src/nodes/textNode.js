// textNode.js

import { useMemo, useState } from "react";
import { Position } from "reactflow";
import { NodeBase } from "./nodeBase";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");

  function extractTemplateVars(str) {
    const regex = /{{\s*([^}]+?)\s*}}/g;
    const result = [];
    let match;
    while ((match = regex.exec(str)) !== null) {
      result.push(match[1].trim());
    }
    return result;
  }

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  const labelsArr = [
    {
      inner: (
        <>
          Text:
          <input type="text" value={currText} onChange={handleTextChange} />
        </>
      ),
    },
  ];

  const handlesArr = useMemo(() => {
    const handles = [
      { type: "source", position: Position.Right, id: `${id}-output` },
    ];

    extractTemplateVars(currText).forEach((el) => {
      const handle = {
        type: "source",
        position: Position.Left,
        id: `${id}-${el}`,
      };

      handles.push(handle)
    });

    return handles
  }, [currText,id]);

  return (
    <NodeBase labelsArr={labelsArr} handlesArr={handlesArr} head={"Text"} />
  );
};
