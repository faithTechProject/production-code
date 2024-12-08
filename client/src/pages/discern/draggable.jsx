import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import styles from './analysis.module.css';
import { useState } from 'react';
import axios from 'axios';

export function Draggable({ id, children, solution, solutions, setSolutions}) {
  const [isDraggingDisabled, setIsDraggingDisabled] = useState(false)
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
    disabled: isDraggingDisabled
  });
  
  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
    padding: '8px',
    margin: '4px',
    backgroundColor: '#f0f0f0',
    cursor: 'grab',
    border: '1px solid var(--color-primary)'
  };

  // Function to handle Solutions change
  const handleSolutionsChange = (id, value) => {
    console.log(value)
    console.log("onChange")
    const updatedSolutions = [...solutions];
    let index = 0;
    for(let i=0; i<solutions.length; ++i) {
      if(solutions[i].id === id) {
        index = i;
        break;
      }
    }
    
    updatedSolutions[index].explanation = value;
    setSolutions(updatedSolutions);

    axios.patch(`http://localhost:3000/analysis/?id=${id}`, {
      explanation: value
  })
};

const handleFocus = () => {
  setIsDraggingDisabled(true)
}

const handleBlur = () => {
  setIsDraggingDisabled(false)
}

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {children}
      <div className={styles.solution_explanation}>
          <p>{solution.solution || 'Unnamed Solution'}</p>
          <textarea className={styles.textarea} rows={3} cols={40}
            placeholder="Enter explanation here..."
            value={solution.explanation}
            onFocus={() => handleFocus(true)}
            onBlur={() => handleBlur(false)}
            onChange={(e) => handleSolutionsChange(solution.id, e.target.value)}
          />
        </div>
    </div>
  );
}
