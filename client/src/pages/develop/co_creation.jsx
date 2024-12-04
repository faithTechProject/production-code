import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import styles from './co_creation.module.css';
import {closestCorners, DndContext} from "@dnd-kit/core"
import { CoCreationTable } from '../components/CoCreationTable';
import { arrayMove } from '@dnd-kit/sortable';
import style from "../components/CoCreationTable.module.css";


export function CoCreation() {
    const[requestForm0, setRequestForm0] = useState([])
    const[requestForm1, setRequestForm1] = useState([])
    const[requestForm2, setRequestForm2] = useState([])
    const[requestForm3, setRequestForm3] = useState([])
    const[requestForm4, setRequestForm4] = useState([])

    const isMounted = useRef(false)
    const[tasks, setTasks] = useState([])

    useEffect(() => {
        if (!isMounted.current){
            axios.get(`http://localhost:3000/tickets`).then(res => {
                let notStarted = []
                for(let i=0; i<res.data.length; ++i) {
                    if (res.data[i].status === 'not started') {
                        notStarted = [...notStarted, res.data[i]]
                    }
                }
                notStarted.sort((a, b) => a.row_index - b.row_index);
                
                let inProgress = []
                for(let i=0; i<res.data.length; ++i) {
                    if (res.data[i].status === 'in progress') {
                        inProgress = [...inProgress, res.data[i]]
                    }
                }
                inProgress.sort((a, b) => a.row_index - b.row_index);

                let completed = []
                for(let i=0; i<res.data.length; ++i) {
                    if (res.data[i].status === 'completed') {
                        completed = [...completed, res.data[i]]
                    }
                }
                completed.sort((a, b) => a.row_index - b.row_index);

                setTasks([...notStarted, ...inProgress, ...completed]);
            })
            isMounted.current = true;      
        }
    }, [])

    const getTaskPos = id => tasks.findIndex(tasks => tasks.id === id)
    const updateRowIndecies = (status1, status2, list) => {
        let row_index1 = 0;
        let row_index2 = 0;
        
        for (let i=0; i<list.length; ++i) {
            if (list[i].status === status1) {
                list[i].row_index = row_index1;
                ++row_index1
            }
            if (list[i].status === status2) {
                list[i].row_index = row_index2;
                ++row_index2
            }
        }
        return list;
    }

    const handleAddTask = () => {
        let newList = JSON.parse(JSON.stringify(tasks))
        let ticket_index = 0;
        let row_index = 0;
            
        for (let i=0; i<newList.length; ++i) {
            if (newList[i].status === 'not started') {
                ++row_index
                console.log(i)
                ticket_index = i + 1;
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

        newList.splice(ticket_index, 0, {id: newList.length + 1, status: 'not started', row_index: row_index, title: '', description: '', assigned_to: '', date_created: '', date_due: '', sprint: '', percent_complete: ''})
        setTasks(newList)
        
    }
    const handleDragEnd = (event) => {
        
        console.log("on drag end")
        console.log(event)
        const { active, over } = event;
        if(over === null) return;
        if(active.id === over.id) return;
        setTasks(tasks => {
            const originalPos = getTaskPos(active.id)
            const newPos = getTaskPos(over.id);
            const status1 = tasks[originalPos].status
            const status2 = tasks[newPos].status
            console.log(tasks[originalPos])
            console.log(tasks[newPos])
            tasks[originalPos].status = tasks[newPos].status;
            //tasks[originalPos].row_index = tasks[newPos].row_index;
            let newTasks = arrayMove(tasks, originalPos, newPos)
            newTasks = updateRowIndecies(status1, status2, newTasks)
            
            console.log(active.id)
            console.log(newTasks[originalPos].status)
            console.log(newTasks[newPos].row_index)

            axios.patch(`http://localhost:3000/tickets/?id=${active.id}`, {
                id: active.id,
                status: newTasks[newPos].status,
                row_index: newTasks[newPos].row_index
            })

            return newTasks;
        })

        console.log(tasks)
    }
    
    const baseURL = "http://localhost:3000/co_creation/"

    
    const save = (e, input_data) => {
        e.preventDefault();
        axios.patch(`${baseURL}?id=${e.target.id}`, {
            data: input_data
        })
    }

    useEffect (() => {
        axios.get(`${baseURL}`).then(response => {

            const data = response.data.map((item) => item)
            data.sort((a,b) => a.id - b.id)


            const co_creation_response = data;
            setRequestForm0(co_creation_response[0].data);
            setRequestForm1(co_creation_response[1].data);
            setRequestForm2(co_creation_response[2].data);
            setRequestForm3(co_creation_response[3].data);
            setRequestForm4(co_creation_response[4].data);
        })
    } ,[])

    return (
        <div className={styles.hero_co_creatioin_container}>
            <div className={styles.hero_co_creatoin_header}>
                <h1> Co-Creation </h1>
                <div className={styles.image_placeholder}>
                    <p>Team pic</p>
                </div>
            </div>

            <div className={styles.hero_solutions}>
                <p> Before starting the co-creation cycle choose one of your solutions from the discern stage  </p>
                <p> click on one of the solutions below </p>
                <div className={styles.potential_solutions}>
                    <h1>Choose A Solution</h1>
                    <div className={styles.three_cs}>
                        <div className={styles.solutions}>
                            <h1> Reimagine </h1>
                            <p> some text </p>
                        </div>
                        <div className={styles.solutions}>
                            <h1> Recieve </h1>
                            <p> some text </p>
                        </div>
                        <div className={styles.solutions}>
                            <h1> Create </h1>
                            <p> some text </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.co_creation_cycle}>
                <h1> Co-Creation Cycle </h1>
                <p> The Co-Creation cycle is a simple structure that can be repeated as iterations. We "keep asking," creating a rhythm of Spirit-led inspiration and planning as we develop. If your project is short, maybe you'll only go through this cycle once. However, if it's longer, the idea is that your team will cycle through these steps multiple times. Our recommendation is for your team to go through the Co-Creation cycle at the start of every sprint, or whenever you're planning the next sprint. Click the "New Cycle" button to create new areas for input for each activity. </p>
                <button className={styles.new_cycle}> New Cycle </button>
                <div className={styles.Request}> 
                    <p> Write a payer inviting the Holy Spirit into your development process</p>
                    <form className='request_form' id='0' onSubmit={(e) => save(e,requestForm0)}>
                        <textarea name="skills" rows={10} cols={20}
                        placeholder="Request...."
                        value={requestForm0}
                        onChange={(e) => setRequestForm0(e.target.value)}
                        />
                        <input type="submit" value="Save" />
                    </form>
                </div>

                <div className= {styles.Receive}>
                    <h> Receive </h>
                    <p> Spend 10 minutes in silence, listening for guidance </p>
                    <div className= {styles.timer}>
                        <p className= {styles.time_testing}> time </p>
                    </div>
                    <div className= {styles.timer_controls}>
                        <button className= {styles.start} > Start </button>
                        <button className= {styles.pause} > Pause </button>
                        <button className= {styles.delete} > Delete </button>
                    </div>
                    <p> Note any thoughts, images or scriptures that come to mind in these 10 minutes here. Try to keep your notes brief, so the focus of this time can be to listen and recieve </p>
                    <form className='request_form' id='1' onSubmit={(e) => save(e,requestForm1)}>
                        <textarea name="skills" rows={10} cols={20}
                        placeholder="Request...."
                        value={requestForm1}
                        onChange={(e) => setRequestForm1(e.target.value)}
                        />
                        <input type="submit" value="Save" />
                    </form>
                </div>

                <div className= {styles.review}>
                    <h> Review </h>
                    <p> Use this space to expand on the insights you recieved. Write down what God was telling you. Talk about the connections between the thoughts, images, and/or scriptures that come to mind. Write about how you can use these insights to guide you through the development stage </p>
                    <form className='request_form' id='2' onSubmit={(e) => save(e,requestForm2)}>
                        <textarea name="skills" rows={10} cols={20}
                        placeholder="Review...."
                        value={requestForm2}
                        onChange={(e) => setRequestForm1(e.target.value)}
                        />
                        <input type="submit" value="Save" />
                    </form>
                </div>

                <div className='render'>
                    <h> Render </h>
                    <p> Outline the next steps for implementing these insights. Focus on what can be accomplished in the upcoming or current sprint. Each 'step' is a task, similar to what you entered in your RACI Matrix, except more specific. For example, let's say 3 of the tasks on your matrix were design features, develop features, and test features. Here, it'd be the same, except for a specific feature for each task. It could even just be part of a feature if you think it'll take more than one sprint to accomplish. In the table below, enter the step, a description of it, and which person or people are responsible for it.</p>
                </div>
            </div>
            <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
                <CoCreationTable tasks={tasks} setTasks={setTasks}/>
            </DndContext>
            <button type="button" onClick={handleAddTask} className={style.add_button}>
                + Add Step
            </button>

            <div className='reflection_questions'>
                <p> How did this process differ from your usual development approach? </p>
                <form className='request_form' id='3' onSubmit={(e) => save(e,requestForm3)}>
                        <textarea name="skills" rows={10} cols={20}
                        placeholder="Request...."
                        value={requestForm3}
                        onChange={(e) => setRequestForm1(e.target.value)}
                        />
                        <input type="submit" value="Save" />
                    </form>
                <p> What challenges did you face trying to co-create with the holy spirit  hrcv</p>
                <form className='request_form' id='4' onSubmit={(e) => save(e,requestForm4)}>
                        <textarea name="skills" rows={10} cols={20}
                        placeholder="Request...."
                        value={requestForm4}
                        onChange={(e) => setRequestForm1(e.target.value)}
                        />
                        <input type="submit" value="Save" />
                    </form>
            </div>
            <div className='bottomLinks'>
                <Link to="/develop/overview">Develop Overview</Link>
                <Link className='next_page' to="/develop/tickets">Tickets</Link>
            </div>
        </div>
    )
}



