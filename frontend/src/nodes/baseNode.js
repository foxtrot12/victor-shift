import React from 'react';
import { Handle, Position } from 'reactflow';

const positionMap = {
  left: Position.Left,
  right: Position.Right,
  top: Position.Top,
  bottom: Position.Bottom,
};

export const BaseNode = ({ id, title, handles = [], children, style }) => {
  const defaultStyle = {
    width: 200,
    minHeight: 80,
    border: '1px solid #555',
    borderRadius: 8,
    padding: 8,
    background: '#fff',
  };

  return (
    <div className="vs-node" style={{ ...defaultStyle, ...style }}>
      {handles
        .filter((h) => h.type === 'target')
        .map((h, i) => (
          <Handle
            key={`t-${i}`}
            type="target"
            position={positionMap[h.position] || Position.Left}
            id={`${id}-${h.id}`}
            style={h.style}
          />
        ))}
      <div className="node-title">{title}</div>
      <div className="node-content">{children}</div>
      {handles
        .filter((h) => h.type === 'source')
        .map((h, i) => (
          <Handle
            key={`s-${i}`}
            type="source"
            position={positionMap[h.position] || Position.Right}
            id={`${id}-${h.id}`}
            style={h.style}
          />
        ))}
    </div>
  );
};
