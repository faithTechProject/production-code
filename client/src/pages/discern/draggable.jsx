import React from 'react';
import { useDraggable } from '@dnd-kit/core';

export function Draggable({ id, children }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });
  
  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
    padding: '8px',
    margin: '4px',
    backgroundColor: '#f0f0f0',
    //border: '1px solid #ccc',
    cursor: 'grab',
    border: '1px solid var(--color-primary)'
  };

  //console.log(children)
  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {children}
    </div>
  );
}
