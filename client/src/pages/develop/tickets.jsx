import { useEffect, useRef, useState } from 'react';
import styles from './tickets.module.css';
import { DragNDrop } from '../components/TicketComponent';
import axios from 'axios';
import { Link } from 'react-router-dom';
import pageStyles from '../components/TicketComponent.module.css';

export function DevelopTickets() {
    const isMounted = useRef(false)
    const [data, setData] = useState([
        {group: 'not started', tasks: []},
        {group: 'in progress', tasks: []},
        {group: 'completed', tasks: []}
    ])
    
    useEffect(() => {
        if (!isMounted.current){
            axios.get(`http://localhost:3000/tickets`).then(res => {
                for(let i=0; i<res.data.length; ++i) {
                    
                    if (res.data[i].status === 'not started') {
                        data[0].tasks = [...data[0].tasks, res.data[i]]
                    }
                    
                    if (res.data[i].status === 'in progress') {
                        data[1].tasks = [...data[1].tasks, res.data[i]]
                    }
                    
                    if (res.data[i].status === 'completed') {
                        data[2].tasks = [...data[2].tasks, res.data[i]]
                    }
                }

                data[0].tasks.sort((a, b) => a.row_index - b.row_index);
                data[1].tasks.sort((a, b) => a.row_index - b.row_index);
                data[2].tasks.sort((a, b) => a.row_index - b.row_index);
                
                // A React "trick" needed to trigger a render.
                let newList = JSON.parse(JSON.stringify(data))
                setData(newList)
            })
            isMounted.current = true;      
        }
    }, [])

    const addTask = (group) => {
        
        let indexToAddAt = 0;
        for (let i=0; i < data.length; ++i) {
            for (let j=0; j < data[i].tasks.length; ++j) {
                if (data[i].tasks[j].id > indexToAddAt) {
                    indexToAddAt = data[i].tasks[j].id;
                }    
            }
        }

        axios.post(`http://localhost:3000/tickets`,
            {
                id: indexToAddAt + 1,
                status: data[group].group,
                row_index: data[group].tasks.length,
                title: 'title',
                description: '',
                date_created: '',
                sprint: '',
                date_due: '',
                percent_complete: '',
                assigned_to: ''
            }
        )

        let newList = JSON.parse(JSON.stringify(data))
        newList[group].tasks = [...newList[group].tasks, {id: indexToAddAt + 1, status: newList[group].group, row_index: newList[group].tasks.length, title: 'title', description: '', date_created: '', sprint: '', date_due: '', percent_complete: '', assigned_to: ''}];
        console.log(newList);
        setData(newList)
    }

    return (
    <>
    <div className={styles.kevin_bannar}>
        <h3 className={styles.kevin_title}>TICKETS</h3>
    </div>
    <div>    
        <p className={pageStyles.kevin_text}>
            If you already created assignments on the co-creation page, tickets will automatically be added within this page.  
            You can also use this page to add new tickets and rearrange them into different categories depending on the status.
            Creating tickets helps to track the assignments and progress team members are making.
            Tickets can be deleted and minimized for convienince.
        </p>
    </div>

    <div className={styles.kevin_header}>
        <div className={`${styles.kevin_center} ${pageStyles.kevin_text_status}`}>
            <p><strong>Not Started</strong></p>
            <p><strong>In Progress</strong></p>
            <p><strong>Completed</strong></p>
        </div>
        <div className={styles.kevin_center}>
            <button className={pageStyles.kevin_button} onClick={() => {addTask(0)}}>+ Add Task</button>
            <button className={pageStyles.kevin_button} onClick={() => {addTask(1)}}>+ Add Task</button>
            <button className={pageStyles.kevin_button} onClick={() => {addTask(2)}}>+ Add Task</button>
        </div>
            <DragNDrop data={data} setData={setData} />
            <div className="bottomLinks">
                <Link to="/develop/co_creation">Co-Creation</Link>
                <Link className='next_page' to="/demonstrate/story">Story</Link>
            </div>
    </div>
</>
)}