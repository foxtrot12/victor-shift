// textNode.js

import { useState, useEffect, useRef } from 'react';
import { BaseNode } from './baseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [vars, setVars] = useState([]);
  const textRef = useRef(null);

  const handleTextChange = (e) => {
    const value = e.target.value;
    setCurrText(value);
    const matches = [...value.matchAll(/\{\{\s*([a-zA-Z_$][\w$]*)\s*\}\}/g)];
    const names = [...new Set(matches.map((m) => m[1]))];
    setVars(names);
  };

  useEffect(() => {
    if (textRef.current) {
      textRef.current.style.height = 'auto';
      textRef.current.style.height = textRef.current.scrollHeight + 'px';
    }
  }, [currText]);

  const width = Math.max(200, Math.min(400, currText.length * 8));
  const height = Math.max(80, textRef.current ? textRef.current.scrollHeight + 40 : 80);

  const handles = [
    ...vars.map((v, i) => ({
      type: 'target',
      position: 'left',
      id: v,
      style: { top: 40 + i * 20 },
    })),
    { type: 'source', position: 'right', id: 'output' },
  ];

  return (
    <BaseNode id={id} title="Text" handles={handles} style={{ width, height }}>
      <label>
        Text:
        <textarea
          ref={textRef}
          value={currText}
          onChange={handleTextChange}
          style={{ width: '100%', resize: 'none', overflow: 'hidden' }}
        />
      </label>
    </BaseNode>
  );
};
