import styles from './analysis.module.css';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { DndContext } from '@dnd-kit/core';
import { Draggable } from './draggable';
import { Droppable } from './droppable';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';


export function DiscernAnalysis() {
  const [Solutions, setSolutions] = useState([
    //{ id: 1, solution: '', explanation: '', category: 'unassigned' }
  ]);
  
  useEffect(() => {
    axios.get(`http://localhost:3000/analysis`).then(res => {
      res.data.sort((a, b) => a.id - b.id);
      setSolutions(res.data.map((item) => item))
      })
    }, [])
  // Function to handle Solutions change
  const handleSolutionsChange = (id, field, value) => {
    //console.log(id)
    //console.log(field)
    //console.log(value)
    const updatedSolutions = [...Solutions];
    let index = 0;
    for(let i=0; i<Solutions.length; ++i) {
      if(Solutions[i].id === id) {
        index = i;
        break;
      }
    }
    
    updatedSolutions[index][field] = value;
    setSolutions(updatedSolutions);

    axios.patch(`http://localhost:3000/analysis/?id=${id}`, {
      [field]: value
  })
  };

  // Function to add a new Solutions input field
  const addSolutions = () => {
    //for (let i=0; i<Solutions.length; ++i) {

    //}
    const id = Solutions.length + 1;
    
    setSolutions([
      ...Solutions,
      { id: id, page_type: 'Discern', page_name: 'Analysis', solution: '', explanation: '', category: 'unassigned' },
    ]);

    axios.post(`http://localhost:3000/analysis`, {
      id: id,
      page_type: 'discern',
      page_name: 'analysis',
      solution: '',
      explanation: '',
      category: 'unassigned'
  })
    //console.log(Solutions)
  };

  // Function to remove a specific Solutions
  const removeSolutions = (idToRemove) => {
    if (Solutions.length === 1) return;
    console.log(idToRemove)
    //setSolutions(Solutions.filter((_, index) => index !== indexToRemove));

    let newList = JSON.parse(JSON.stringify(Solutions))
    newList = newList.filter((item) => item.id !== idToRemove);
    
    for(let i=0; i<newList.length; ++i) {
      if(newList[i].id > idToRemove)
        --newList[i].id;
    }
    console.log(newList)
    setSolutions(newList);
    axios.delete(`http://localhost:3000/analysis/?id=${idToRemove}`)
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
      axios.patch(`http://localhost:3000/analysis/?id=${active.id}`, {
        category: over.id 
    })
      //console.log(active.id);
      //console.log(over.id);
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
                {solution.id}
                <div className={styles.input_wrapper}>
                  <input
                    type="text"
                    value={solution.solution}
                    onChange={(e) =>
                      handleSolutionsChange(solution.id, 'solution', e.target.value)
                    }
                    placeholder={`Solution ${index + 1}`}
                    className={styles.input_field}
                  />
                  <textarea
                    value={solution.explanation}
                    onChange={(e) =>
                      handleSolutionsChange(solution.id, 'explanation', e.target.value)
                    }
                    placeholder={`Explanation for Solution ${index + 1}`}
                    className={styles.input_field}
                  />
                  {Solutions.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeSolutions(solution.id)}
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
          </div>
          <DndContext onDragEnd={handleDragEnd}>
            <div className={styles.unassigned_Solutions}>
              <h2>Unassigned Solutions</h2>
              {Solutions.filter((solution) => solution.category === 'unassigned')
                .map((solution) => (
                  <Draggable key={solution.id} id={solution.id}>
                    <div className={styles.solution_explanation}>
                    {solution.id + "hi"}
                      <p1>{solution.solution || 'Unnamed Solution'}</p1>
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
                                <p1>{solution.solution}</p1>
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
                        <p1>{solution.solution}</p1>
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
                        <p1>{solution.solution}</p1>
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
                        <p1>{solution.solution}</p1>
                        <p>{solution.explanation}</p>
                      </div>
                    </Draggable>
                  ))}
              </Droppable>
              </div>

            </div>
          </DndContext>
        
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
