import styles from './analysis.module.css';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { DndContext } from '@dnd-kit/core';
import { Draggable } from './draggable';
import { Droppable } from './droppable';
import axios from 'axios';

export function DiscernAnalysis() {
  
  const [solutions, setSolutions] = useState([]);

  function combineAnalysisData(brainstormData) {
    axios.get(`http://localhost:3000/analysis`).then(res => {
      
      //combine data from the brainstorm page into the analysis data.
      let analysisSolution = []
      for (let i=0; i< brainstormData.length; ++i) {
        const rows = res.data.filter(item => item.brainstorm_table_id === i).sort((a, b) => a.brainstorm_id - b.brainstorm_id)
        rows.forEach((item, index) => (item.solution = brainstormData[i].input[index].solution))
        analysisSolution = [...analysisSolution, ...rows]
      }
      setSolutions(analysisSolution)
      })
  }

  console.log(solutions)
  useEffect(() => {
    axios.get(`http://localhost:3000/matrix-reflections/Brainstorm`).then(res => {
      const data = res.data.sort((a, b) => a.id - b.id);
      combineAnalysisData(data)

    })
    }, [])


  // Handle drag end event
  const handleDragEnd = (event) => {
    const { active, over } = event;
    

    // If the Solutions was dropped over a droppable area
    if (over) {
      axios.patch(`http://localhost:3000/analysis/?id=${active.id}`, {
        category: over.id 
    })
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

          <DndContext onDragEnd={handleDragEnd}>  
              <h2 className={styles.solutions_title}>Unassigned Solutions</h2>
              <div className={styles.unassigned_Solutions}>
              {solutions.filter((solution) => solution.category === 'unassigned')
                .map((solution) => (
                  <Draggable key={solution.id} id={solution.id} solution={solution} solutions={solutions} setSolutions={setSolutions}></Draggable>
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
                    {solutions.filter((solution) => solution.category === 'Reject')
                    .map((solution) => (
                        <Draggable  key={solution.id} id={solution.id} solution={solution} solutions={solutions} setSolutions={setSolutions}></Draggable>
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
            {solutions.filter((solution) => solution.category === 'Receive')
              .map((solution) => (
                <Draggable key={solution.id} id={solution.id} solution={solution} solutions={solutions} setSolutions={setSolutions}></Draggable>
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
            {solutions.filter((solution) => solution.category === 'Reimagine')
              .map((solution) => (
                <Draggable key={solution.id} id={solution.id} solution={solution} solutions={solutions} setSolutions={setSolutions}></Draggable>
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
            {solutions.filter((solution) => solution.category === 'Create')
              .map((solution) => (
                <Draggable key={solution.id} id={solution.id} solution={solution} solutions={solutions} setSolutions={setSolutions}></Draggable>
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
