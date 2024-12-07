import styles from './analysis.module.css';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { DndContext } from '@dnd-kit/core';
import { Draggable } from './draggable';
import { Droppable } from './droppable';
import axios from 'axios';


export function DiscernAnalysis() {
  //const [Solutions, setSolutions] = useState([]);
    //{ id: 1, solution: '', explanation: '', category: 'unassigned' }
  const [Solutions, setSolutions] = useState([
    //{firstBox: []},
    //{secoundBox: []},
    //{thirdBox: []},
    //{forthBox: []}
  ]);

  console.log(Solutions)
  useEffect(() => {
    axios.get(`http://localhost:3000/analysis`).then(res => {
      res.data.sort((a, b) => a.id - b.id);
      setSolutions(res.data.map((item) => item))
      
      /*
      let myArray0 = res.data[0].input;
      let myArray1 = res.data[1].input;
      let myArray2 = res.data[2].input;
      let myArray3 = res.data[3].input;

      let finalArray = [...myArray0, ...myArray1, ...myArray2, ...myArray3,]
      setSolutions(finalArray)
      //res.data.sort((a, b) => a.id - b.id);
      //setSolutions(res.data.map((item) => item))
      */
      })
    }, [])
  // Function to handle Solutions change
  
  
  const handleSolutionsChange = (id, field, value) => {
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
            <div className={styles.unassigned_Solutions}>
              <h2>Unassigned Solutions</h2>
              {Solutions.filter((solution) => solution.category === 'unassigned')
                .map((solution) => (
                  <Draggable key={solution.id} id={solution.id}>
                    <div className={styles.solution_explanation}>
                      <p1>{"hi" || 'Unnamed Solution'}</p1>
                      <textarea rows={3} cols={100}/>
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
