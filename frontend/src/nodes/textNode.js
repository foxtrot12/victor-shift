// textNode.js

import { useEffect, useMemo, useRef, useState } from "react";
import { Position } from "reactflow";
import { NodeBase } from "./nodeBase";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");
  const textAreaRef = useRef(null)

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
          <textarea ref={textAreaRef} className="overflow-hidden resize-none" type="text" value={currText} onChange={handleTextChange} />
        </>
      ),
    },
  ];

  const maxInputHeight = 400

  const handlesArr = useMemo(() => {
    const handles = [
      { type: "source", position: Position.Right, id: `${id}-output` },
    ];

    extractTemplateVars(currText).forEach((el) => {
      const handle = {
        type: "target",
        position: Position.Left,
        id: `${id}-${el}`,
        style:{position : 'relative', top:'0',transform:'none'}
      };

      handles.push(handle)
    });

    return handles
  }, [currText,id]);

  useEffect(()=>{
    textAreaRef.current.style.height = Math.min(textAreaRef.current.scrollHeight, maxInputHeight) + 'px'
  },[textAreaRef,currText])

  return (
    <NodeBase labelsArr={labelsArr} handlesArr={handlesArr} head={"Text"} />
  );
};
