import axios from 'axios';
import { DragNDrop } from '../components/TicketComponent';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import styles from './tickets.module.css';

export function DevelopTickets() {
    
    // isMounted is used to make useEffect render once.
    const isMounted = useRef(false)

    // hook for the tickets
    const [data, setData] = useState([
        {group: 'not started', tasks: []},
        {group: 'in progress', tasks: []},
        {group: 'completed', tasks: []}
    ])
    
    // Runs when the page is loaded or refreshed.
    useEffect(() => {
        if (!isMounted.current){
            
            // api request to the database to get all tickets.
            axios.get(`http://localhost:3000/tickets`).then(res => {
                
                // Placing the tickets in the correct groups.
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

                // Sorting the tickets in each group, making sure they are in ascending order.
                data[0].tasks.sort((a, b) => a.row_index - b.row_index);
                data[1].tasks.sort((a, b) => a.row_index - b.row_index);
                data[2].tasks.sort((a, b) => a.row_index - b.row_index);
                
                // A React "trick" needed to trigger a render.
                let newList = JSON.parse(JSON.stringify(data))
                
                // update the react hook with the ticket data.
                setData(newList)
            })
            
            isMounted.current = true;      
        }
    }, [])

    // addTask updates the useState data hook with a new ticket and posts a new ticket to the database.
    // The function recieves as input an index number value to access the correct ticket group (eg: "not started", "in progress" or "completed") in the data list.
    const addTask = (groupIndex) => {
        let nextId = 0;
        for (let i=0; i < data.length; ++i) {
            for (let j=0; j < data[i].tasks.length; ++j) {
                if (data[i].tasks[j].id > nextId) {
                    nextId = data[i].tasks[j].id;
                }    
            }
        }

        // api request to add a new ticket to the database.
        axios.post(`http://localhost:3000/tickets`,
            {
                id: nextId + 1,
                status: data[groupIndex].group,
                row_index: data[groupIndex].tasks.length,
                title: 'title',
                description: '',
                date_created: '',
                sprint: '',
                date_due: '',
                percent_complete: '',
                assigned_to: ''
            }
        )

        // create a deep copy of the data list and add in the new ticket.
        let newList = JSON.parse(JSON.stringify(data))
        newList[groupIndex].tasks = [...newList[groupIndex].tasks, {id: nextId + 1, status: newList[groupIndex].group, row_index: newList[groupIndex].tasks.length, title: 'title', description: '', date_created: '', sprint: '', date_due: '', percent_complete: '', assigned_to: ''}];
        
        // update useState data hook, adding the new ticket.
        setData(newList)
    }

    return (
    <>
    <div className={styles.kevin_bannar}>
        <h3 className={styles.kevin_title}>TICKETS</h3>
    </div>
    <div>    
        <p className={styles.kevin_text}>
            If you already created assignments on the co-creation page, tickets will automatically be added within this page.  
            You can also use this page to add new tickets and rearrange them into different categories depending on the status.
            Creating tickets helps to track the assignments and progress team members are making.
            Tickets can be deleted and minimized for convienince.
        </p>
    </div>

    <div className={styles.kevin_header}>
        <div className={`${styles.kevin_center} ${styles.kevin_text_status}`}>
            <p><strong>Not Started</strong></p>
            <p><strong>In Progress</strong></p>
            <p><strong>Completed</strong></p>
        </div>
        <div className={styles.kevin_center}>
            <button className={styles.kevin_button} onClick={() => {addTask(0)}}>+ Add Task</button>
            <button className={styles.kevin_button} onClick={() => {addTask(1)}}>+ Add Task</button>
            <button className={styles.kevin_button} onClick={() => {addTask(2)}}>+ Add Task</button>
        </div>
            <DragNDrop data={data} setData={setData} />
            <div className="bottomLinks">
                <Link to="/develop/co_creation">Co-Creation</Link>
                <Link className='next_page' to="/demonstrate/story">Story</Link>
            </div>
    </div>
    <div className='bottomLinks'>
        <Link to="/develop/co_creation">Co-Creation</Link>
        <Link className='next_page' to="/develop/"></Link>
    </div>
</>
)}