import { useState } from 'react';
import { BaseNode } from './baseNode';

export const MultiplyNode = ({ id, data }) => {
  const [a, setA] = useState(data?.a || 0);
  const [b, setB] = useState(data?.b || 0);

  return (
    <BaseNode
      id={id}
      title="Multiply"
      handles={[
        { type: 'target', position: 'left', id: 'a', style: { top: '30%' } },
        { type: 'target', position: 'left', id: 'b', style: { top: '70%' } },
        { type: 'source', position: 'right', id: 'product' },
      ]}
    >
      <label>
        A:
        <input type="number" value={a} onChange={(e) => setA(e.target.value)} />
      </label>
      <label>
        B:
        <input type="number" value={b} onChange={(e) => setB(e.target.value)} />
      </label>
    </BaseNode>
  );
};
