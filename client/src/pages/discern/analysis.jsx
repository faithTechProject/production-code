import styles from './analysis.module.css';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { DndContext } from '@dnd-kit/core';
import { Draggable } from './draggable';
import { Droppable } from './droppable';
import { v4 as uuidv4 } from 'uuid';

export function DiscernAnalysis() {
  const [Solutions, setSolutions] = useState([
    { id: uuidv4(), text: '', explanation: '', category: 'unassigned' },
  ]);

  // Function to handle Solutions change
  const handleSolutionsChange = (index, field, value) => {
    const updatedSolutions = [...Solutions];
    updatedSolutions[index][field] = value;
    setSolutions(updatedSolutions);
  };

  // Function to add a new Solutions input field
  const addSolutions = () => {
    setSolutions([
      ...Solutions,
      { id: uuidv4(), text: '', explanation: '', category: 'unassigned' },
    ]);
  };

  // Function to remove a specific Solutions
  const removeSolutions = (indexToRemove) => {
    if (Solutions.length === 1) return;
    setSolutions(Solutions.filter((_, index) => index !== indexToRemove));
  };

  // Close icon as SVG
  const CloseIcon = () => (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );

  // Handle drag end event
  const handleDragEnd = (event) => {
    const { active, over } = event;

    // If the Solutions was dropped over a droppable area
    if (over) {
      setSolutions((prevSolutions) =>
        prevSolutions.map((solution) =>
          solution.id === active.id
            ? { ...solution, category: over.id }
            : solution
        )
      );
    }
  };

  return (
    <>
      <div className={styles.hero_analysis_page}>
        <div className={styles.hero_analysis_header}>
          <h1>Analysis</h1>
        </div>

        <div className={styles.three_rc_analysis}>
          <h1>3RC Analysis</h1>
          <p>
            For each of your brainstormed solutions, categorize them into one of
            the four 3RC postures:
          </p>
          <ul>
            <li>
              <strong>Reject</strong>: the solution is not the answer
            </li>
            <li>
              <strong>Receive</strong>: there is an existing solution that can
              be used
            </li>
            <li>
              <strong>Reimagine</strong>: there is an existing solution that can
              be re-purposed
            </li>
            <li>
              <strong>Create</strong>: a new solution needs to be built
            </li>
          </ul>
        </div>

        <div className={styles.hero_solutions}>
          <div className={styles.solutions_input}>
            <label>Enter your solutions</label>
            {Solutions.map((solution, index) => (
              <div key={solution.id} className={styles.solutions_field}>
                <div className={styles.input_wrapper}>
                  <input
                    type="text"
                    value={solution.text}
                    onChange={(e) =>
                      handleSolutionsChange(index, 'text', e.target.value)
                    }
                    placeholder={`Solution ${index + 1}`}
                    className={styles.input_field}
                  />
                  <textarea
                    value={solution.explanation}
                    onChange={(e) =>
                      handleSolutionsChange(index, 'explanation', e.target.value)
                    }
                    placeholder={`Explanation for Solution ${index + 1}`}
                    className={styles.input_field}
                  />
                  {Solutions.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeSolutions(index)}
                      className={styles.remove_button}
                      aria-label="Remove Solution"
                    >
                      <CloseIcon />
                    </button>
                  )}
                </div>
              </div>
            ))}
            <button type="button" onClick={addSolutions} className={styles.add_button}>
              Enter Solution
            </button>
          </div>

          <DndContext onDragEnd={handleDragEnd}>
            <div className={styles.unassigned-Solutions}>
              <h2>Unassigned Solutions</h2>
              {Solutions.filter((solution) => solution.category === 'unassigned')
                .map((solution) => (
                  <Draggable key={solution.id} id={solution.id}>
                    <div className={styles.solution_explanation}>
                      <p1>{solution.text || 'Unnamed Solution'}</p1>
                      <p>{solution.explanation || 'No explanation provided.'}</p>
                    </div>
                  </Draggable>
                ))}
            </div>

            <div className={styles.solution_categories}>
                <div className={styles.organize_solutions}>
                    <Droppable id="Reject">
                        <h3>Reject</h3>
                        <div className={styles.explanation_solution_title}>
                            <h4> Solution </h4>
                            <h4> Explanation</h4>
                        </div>
                        {Solutions.filter((solution) => solution.category === 'Reject')
                        .map((solution) => (
                            <Draggable key={solution.id} id={solution.id}>
                            <div className={styles.solution_explanation}>
                                <p1>{solution.text}</p1>
                                <p>{solution.explanation}</p>
                            </div>
                            </Draggable>
                        ))}
                    </Droppable>
                </div>
                <div className={styles.organize_solutions}>
              <Droppable id="Receive">
                <h3>Receive</h3>
                <div className={styles.explanation_solution_title}>
                    <h4> Solution </h4>
                    <h4> Explanation</h4>
                </div>
                {Solutions.filter((solution) => solution.category === 'Receive')
                  .map((solution) => (
                    <Draggable key={solution.id} id={solution.id}>
                      <div className={styles.solution_explanation}>
                        <p1>{solution.text}</p1>
                        <p>{solution.explanation}</p>
                      </div>
                    </Draggable>
                  ))}
              </Droppable>
              </div>
              <div className={styles.organize_solutions}>
              <Droppable id="Reimagine">
                <h3>Reimagine</h3>
                <div className={styles.explanation_solution_title}>
                    <h4> Solution </h4>
                    <h4> Explanation</h4>
                </div>
                {Solutions.filter((solution) => solution.category === 'Reimagine')
                  .map((solution) => (
                    <Draggable key={solution.id} id={solution.id}>
                      <div className={styles.solution_explanation}>
                        <p1>{solution.text}</p1>
                        <p>{solution.explanation}</p>
                      </div>
                    </Draggable>
                  ))}
              </Droppable>
              </div>
              <div className={styles.organize_solutions}>
              <Droppable id="Create">
                <h3>Create</h3>
                <div className={styles.explanation_solution_title}>
                    <h4> Solution </h4>
                    <h4> Explanation</h4>
                </div>
                {Solutions.filter((solution) => solution.category === 'Create')
                  .map((solution) => (
                    <Draggable key={solution.id} id={solution.id}>
                      <div className={styles.solution_explanation}>
                        <p1>{solution.text}</p1>
                        <p>{solution.explanation}</p>
                      </div>
                    </Draggable>
                  ))}
              </Droppable>
              </div>

            </div>
          </DndContext>
        </div>
        <div className='bottomLinks'>
                    <div>
                        <p>Previous</p>
                        <Link to="/discern/brainstorm">Brainstorm</Link>
                    </div>
                    <div>
                        <p>Next</p>
                        <Link to="/discern/timeline">Timeline</Link>
                    </div>
                </div>
      </div>
    </>
  );
}
