import { useState } from 'react';
import { BaseNode } from './baseNode';

export const UppercaseNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || '');

  return (
    <BaseNode
      id={id}
      title="Uppercase"
      handles={[
        { type: 'target', position: 'left', id: 'input' },
        { type: 'source', position: 'right', id: 'output' },
      ]}
    >
      <label>
        Text:
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      </label>
    </BaseNode>
  );
};
