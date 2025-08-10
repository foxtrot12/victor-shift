// toolbar.js

import { DraggableNode } from "./draggableNode";

export const PipelineToolbar = () => {
  const drabggableNodes = [
    {
      type: "customInput",
      label: "Input",
    },
    {
      type: "llm",
      label: "LLM",
    },
    {
      type: "customOutput",
      label: "Output",
    },
    {
      type: "text",
      label: "Text",
    },
    {
      type: "blackBox",
      label: "BlackBox",
    },
    {
      type: "cpu",
      label: "CPU",
    },
    {
      type: "display",
      label: "Display",
    },
    {
      type: "gpu",
      label: "GPU",
    },
    {
      type: "printer",
      label: "Printer",
    },
  ];

  return (
    <div style={{ padding: "10px" }}>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        {drabggableNodes.map((d) => (
          <DraggableNode {...d} />
        ))}
      </div>
    </div>
  );
};
