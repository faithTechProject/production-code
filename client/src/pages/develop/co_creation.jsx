import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import styles from './co_creation.module.css';
import { CoCreationTable } from '../components/CoCreationTable';
import style from "../components/CoCreationTable.module.css";


export function DevelopCoCreation() {
    const[requestForm0, setRequestForm0] = useState([])
    const[requestForm1, setRequestForm1] = useState([])
    const[requestForm2, setRequestForm2] = useState([])
    const[requestForm3, setRequestForm3] = useState([])
    const[requestForm4, setRequestForm4] = useState([])
    const[requestForm5, setRequestForm5] = useState([])

    const isMounted = useRef(false)
    const[steps, setSteps] = useState([])

    const [solutions, setSolutions] = useState([])

function combineAnalysisData(brainstormData) {
    axios.get(`http://localhost:3000/analysis`).then(res => {
    
    //combine data from the brainstorm page into the analysis data.
    let analysisSolutions = []
    for (let i=0; i< brainstormData.length; ++i) {
    const rows = res.data.filter(item => item.brainstorm_table_id === i).sort((a, b) => a.brainstorm_id - b.brainstorm_id)
    rows.forEach((item, index) => (item.solution = brainstormData[i].input[index].solution))
    analysisSolutions = [...analysisSolutions, ...rows]
    }

    console.log(analysisSolutions)
    
    // find all the solutions that have the following categories: Reimagin, Recieve and Create
    // The solutions hook is updated with the solutions that are displayed on the page
    setSolutions([
        ...analysisSolutions.filter(item => item.category === 'Reimagine'),
        ...analysisSolutions.filter(item => item.category === 'Receive'),
        ...analysisSolutions.filter(item => item.category === 'Create')
    ])
    })
}


    useEffect(() => {
        if (!isMounted.current) {            
            
            axios.get(`http://localhost:3000/text-area-reflections/CoCreation`).then(response => {
                console.log(response.data)
                const data = response.data;
                data.sort((a,b) => a.entry_pos - b.entry_pos)
                
                const co_creation_response = data;
                setRequestForm0(co_creation_response[0].reply);
                setRequestForm1(co_creation_response[1].reply);
                setRequestForm2(co_creation_response[2].reply);
                setRequestForm3(co_creation_response[3].reply);
                setRequestForm4(co_creation_response[4].reply);
                setRequestForm5(co_creation_response[5].reply);
            })

            axios.get(`http://localhost:3000/matrix-reflections/Brainstorm`).then(res => {
                const data = res.data.sort((a, b) => a.id - b.id);
                combineAnalysisData(data)
            })
            
            axios.get(`http://localhost:3000/tickets`).then(res => {
                
                // Varifying the rows in the database are sorted correctly when the page is loaded.
                // Sorted by: not started, in progress and completed.
                let notStarted = []
                let inProgress = []
                let completed = []
                
                for (let i=0; i<res.data.length; ++i) {
                    if (res.data[i].status === 'not started') { notStarted = [...notStarted, res.data[i]] }

                    if (res.data[i].status === 'in progress') { inProgress = [...inProgress, res.data[i]] }

                    if (res.data[i].status === 'completed') { completed = [...completed, res.data[i]] }
                }

                notStarted.sort((a, b) => a.row_index - b.row_index);
                inProgress.sort((a, b) => a.row_index - b.row_index);
                completed.sort((a, b) => a.row_index - b.row_index);

                setSteps([...notStarted, ...inProgress, ...completed]);
            })
            
            isMounted.current = true;      
        }
    }, [])

console.log(solutions)

    const handleAddStep = () => {
        let newList = JSON.parse(JSON.stringify(steps))
        let step_index = 0;
        let row_index = 0;
        
        // All new steps added are considered 'not started'
        
        for (let i=0; i<newList.length; ++i) {
            if (newList[i].status === 'not started') {
                ++row_index
                step_index = i + 1;
            }
        }
        
        axios.post(`http://localhost:3000/tickets`,
            {
                id: newList.length + 1,
                status: 'not started',
                row_index: row_index,
                title: 'title',
                description: '',
                date_created: '',
                sprint: '',
                date_due: '',
                percent_complete: '',
                assigned_to: ''
            }
        )

        // Insert the new task step into the step hook.
        newList.splice(step_index, 0, {id: newList.length + 1, status: 'not started', row_index: row_index, title: '', description: '', assigned_to: '', date_created: '', date_due: '', sprint: '', percent_complete: ''})
        setSteps(newList)
        
    }

    const handleSubmit = (value, entry_pos) => {
        axios.patch(`http://localhost:3000/text-area-reflections/?page=CoCreation&entry_pos=${entry_pos}`, {
            reply: value
        })
    }

    //Timer
    let timerInterval;
    let timeRemaining = 600;
    let isRunning = false;


    const startButton = document.getElementById('startButton');
    if (startButton) {
        startButton.addEventListener('click', startTimer);
    }

    const pauseButton = document.getElementById('pauseButton');
    if (pauseButton) {
        pauseButton.addEventListener('click', pauseTimer);
    }

    const resetButton = document.getElementById('resetButton');
    if (resetButton){
        resetButton.addEventListener('click', resetTimer);
    }

    const timerDisplay = document.getElementById('timerDisplay')
    
    function startTimer() {
        if (!isRunning) {
            timerInterval = setInterval(() => {
            timeRemaining--;
            updateDisplay();
            }, 1000);
            isRunning = true;
        }
    }

    function pauseTimer() {
        if (isRunning) {
            clearInterval(timerInterval);
            isRunning = false;
        }
    }

    function resetTimer() {
        clearInterval(timerInterval);
        timeRemaining = 600;
        isRunning = false;
        updateDisplay();
    }

    function updateDisplay() {
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        timerDisplay.textContent = `${pad(minutes)}:${pad(seconds)}`;
    }

    function pad(number) {
        return (number < 10 ? '0' : '') + number;
    }

    return (
        <div className={styles.hero_co_creatioin_container}>
            <div className={styles.hero_co_creatoin_header}>
                <h1> Co-Creation </h1>
            </div>
            
            <div className='body'>
            <div className={styles.hero_solutions}>
                <p> Before starting the co-creation cycle choose one of your solutions from the discern stage  </p>
                <p> click on one of the solutions below </p>
                <div className={styles.potential_solutions}>
                    <h1>Choose A Solution</h1>
                    <div className={styles.three_cs}>
                        <div className={styles.solutions}>
                            <h1> Reimagine </h1>
                            {solutions.filter((solution) => solution.category === 'Reimagine')
                            .map((item, index) => (
                            <button className={styles.solutionsButton} onClick={() => {setRequestForm0(item.solution); handleSubmit(item.solution, 0)}}>
                                <div key={index} className={styles.solution_item}>
                                    {item.solution}
                                </div>
                            </button>
                            ))}
                        </div>
                        <div className={styles.solutions}>
                            <h1> Receive </h1>
                            {solutions.filter((solution) => solution.category === 'Receive')
                            .map((item, index) => (
                            <button className={styles.solutionsButton} onClick={() => {setRequestForm0(item.solution); handleSubmit(item.solution, 0)}}>
                                <div key={index} className={styles.solution_item}>
                                    {item.solution}
                                </div>
                            </button>
                            ))}
                        </div>
                        <div className={styles.solutions}>
                            <h1> Create </h1>
                            {solutions.filter((solution) => solution.category === 'Create')
                            .map((item, index) => (
                            <button className={styles.solutionsButton} onClick={() => {setRequestForm0(item.solution); handleSubmit(item.solution, 0)}}>
                                <div key={index} className={styles.solution_item}>
                                    {item.solution}
                                </div>
                            </button>
                            ))}
                        </div>
                     </div>
                </div>
            </div>
            <div className={styles.Request}> 
                <p className={styles.text_align_left}>Chosen Solution</p>
                <form id='0'>
                    <textarea className={styles.response} rows={10} cols={20}
                    placeholder="Solution..."
                    value={requestForm0}
                    onChange={(e) => {setRequestForm0(e.target.value); handleSubmit(e.target.value, 0)}}
                    />
                </form>
            </div>
            <div className={styles.co_creation_cycle}>
                <h1> Co-Creation Cycle </h1>
                <p> The Co-Creation cycle is a simple structure that can be repeated as iterations. We "keep asking," creating a rhythm of Spirit-led inspiration and planning as we develop. If your project is short, maybe you'll only go through this cycle once. However, if it's longer, the idea is that your team will cycle through these steps multiple times. Our recommendation is for your team to go through the Co-Creation cycle at the start of every sprint, or whenever you're planning the next sprint. Click the "New Cycle" button to create new areas for input for each activity. </p>
                <button className={styles.new_cycle}> New Cycle </button>
                <div className={styles.Request}> 
                    <p> Write a payer inviting the Holy Spirit into your development process</p>
                    <form id='1'>
                        <textarea className={styles.response} rows={10} cols={20}
                        placeholder="Request...."
                        value={requestForm1}
                        onChange={(e) => {setRequestForm1(e.target.value); handleSubmit(e.target.value, 1)}}
                        />
                    </form>
                </div>

                <div className= {styles.Receive}>
                    <h2> Receive </h2>
                    <p> Spend 10 minutes in silence, listening for guidance </p>
                    <div className= {styles.timer}>
                        <p className= {styles.time_testing} id="timerDisplay"> 10:00 </p>
                    </div>
                    <div className= {styles.timer_controls}>
                        <button id='startButton' className= {styles.start} > Start </button>
                        <button id='pauseButton' className= {styles.pause} > Pause </button>
                        <button id='resetButton' className= {styles.delete} > Delete </button>
                    </div>
                    <p> Note any thoughts, images or scriptures that come to mind in these 10 minutes here. Try to keep your notes brief, so the focus of this time can be to listen and recieve </p>
                    <form id='2'>
                        <textarea className={styles.response} rows={10} cols={20}
                        placeholder="Request...."
                        value={requestForm2}
                        onChange={(e) => {setRequestForm2(e.target.value); handleSubmit(e.target.value, 2)}}
                        />
                    </form>
                </div>

                <div className= {styles.review}>
                    <h2> Review </h2>
                    <p> Use this space to expand on the insights you recieved. Write down what God was telling you. Talk about the connections between the thoughts, images, and/or scriptures that come to mind. Write about how you can use these insights to guide you through the development stage </p>
                    <form id='3'>
                        <textarea className={styles.response} rows={10} cols={20}
                        placeholder="Review...."
                        value={requestForm3}
                        onChange={(e) => {setRequestForm3(e.target.value); handleSubmit(e.target.value, 3)}}
                        />
                    </form>
                </div>

                <div className='render'>
                    <h2> Render </h2>
                    <p> Outline the next steps for implementing these insights. Focus on what can be accomplished in the upcoming or current sprint. Each 'step' is a task, similar to what you entered in your RACI Matrix, except more specific. For example, let's say 3 of the tasks on your matrix were design features, develop features, and test features. Here, it'd be the same, except for a specific feature for each task. It could even just be part of a feature if you think it'll take more than one sprint to accomplish. In the table below, enter the step, a description of it, and which person or people are responsible for it.</p>
                </div>
            </div>
                <CoCreationTable steps={steps} setSteps={setSteps}/>
            <button type="button" onClick={handleAddStep} className={style.add_button}>
                + Add Step
            </button>

            <div className='reflection_questions'>
                <p> How did this process differ from your usual development approach? </p>
                <form id='4'>
                        <textarea className={styles.response} rows={10} cols={20}
                        placeholder="Request...."
                        value={requestForm4}
                        onChange={(e) => {setRequestForm4(e.target.value); handleSubmit(e.target.value, 4)}}
                        />
                    </form>
                <p> What challenges did you face trying to co-create with the holy spirit  hrcv</p>
                <form id='5'>
                        <textarea className={styles.response} rows={10} cols={20}
                        placeholder="Request...."
                        value={requestForm5}
                        onChange={(e) => {setRequestForm5(e.target.value); handleSubmit(e.target.value, 5)}}
                        />
                    </form>
            </div>
            <div className='bottomLinks'>
                    <div>
                        <p>Previous</p>
                        <Link to="/develop/overview">Develop Overview</Link>
                    </div>
                    <div>
                        <p>Next</p>
                        <Link to="/develop/tickets">Tickets</Link>
                    </div>
                </div>
        </div>
        </div>
    )
}



