import React from 'react';
import { useDroppable } from '@dnd-kit/core';

export function Droppable({ id, children }) {
  const { isOver, setNodeRef } = useDroppable({
    id,
  });
  //console.log(isOver)
  const style = {
    backgroundColor: isOver ? 'lightblue' : '#fafafa',
    padding: '16px',
    margin: '8px',
    minHeight: '100px',
    border: '2px dashed #ccc',
  };

  return (
    <div ref={setNodeRef} style={style}>
      {children}
    </div>
  );
}
