import { useState } from 'react';
import { BaseNode } from './baseNode';

export const ConcatNode = ({ id, data }) => {
  const [a, setA] = useState(data?.a || '');
  const [b, setB] = useState(data?.b || '');

  return (
    <BaseNode
      id={id}
      title="Concat"
      handles={[
        { type: 'target', position: 'left', id: 'a', style: { top: '30%' } },
        { type: 'target', position: 'left', id: 'b', style: { top: '70%' } },
        { type: 'source', position: 'right', id: 'output' },
      ]}
    >
      <label>
        A:
        <input type="text" value={a} onChange={(e) => setA(e.target.value)} />
      </label>
      <label>
        B:
        <input type="text" value={b} onChange={(e) => setB(e.target.value)} />
      </label>
    </BaseNode>
  );
};
