// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {
  return (
    <div className="toolbar">
      <div className="toolbar-nodes">
        <DraggableNode type='customInput' label='Input' />
        <DraggableNode type='llm' label='LLM' />
        <DraggableNode type='customOutput' label='Output' />
        <DraggableNode type='text' label='Text' />
        <DraggableNode type='add' label='Add' />
        <DraggableNode type='subtract' label='Subtract' />
        <DraggableNode type='multiply' label='Multiply' />
        <DraggableNode type='uppercase' label='Uppercase' />
        <DraggableNode type='concat' label='Concat' />
      </div>
    </div>
  );
};
