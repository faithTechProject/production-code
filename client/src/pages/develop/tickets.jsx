
import { useState } from 'react';
import '../stylesheets/tickets.css';
import '../stylesheets/common.css'
import { DragNDrop } from '../components/TicketComponent';

export function DevelopTickets() {
    const [data, setData] = useState([
        {group: 'Not Started', tasks: [{id: 1, title: 'title1', discription: '', dateCreated: '', sprint: '', dateDue: '', pctComplete: 0, assignedTo: '', isOpen: true}, {id: 2, title: 'title2', discription: '', dateCreated: '', sprint: '', dateDue: '', pctComplete: 0, assignedTo: '', isOpen: true}]},
        {group: 'In Progress', tasks: [{id: 3, title: 'title3', discription: '', dateCreated: '', sprint: '', dateDue: '', pctComplete: 0, assignedTo: '', isOpen: true}]},
        {group: 'Completed', tasks: [{id: 4, title: 'title4', discription: '', dateCreated: '', sprint: '', dateDue: '', pctComplete: 0, assignedTo: '', isOpen: true}]}
    ])
    const addTask = (group) => {
        
        let indexToAddAt = 0;
        for (let i=0; i < data.length; ++i) {
            for (let j=0; j < data[i].tasks.length; ++j) {
                if (data[i].tasks[j].id > indexToAddAt) {
                    indexToAddAt = data[i].tasks[j].id;
                }    
            }
        }

        let newList = JSON.parse(JSON.stringify(data))
        newList[group].tasks = [...newList[group].tasks, {id: indexToAddAt + 1, title: 'title', discription: '', dateCreated: '', sprint: '', dateDue: '', pctComplete: 0, assignedTo: '', isOpen: true}];
        console.log(newList);
        setData(newList)
    }

    return (
    <>
    <div className="kevin-bannar">
        <h3 className="kevin-title">TICKETS</h3>
    </div>
    <div class="kevin-text">    
        <strong><p>If you already created assignments on the co-creation page, tickets will automatically be added within this page.  
            You can also use this page to add new tickets and rearrange them into different categories depending on the status.
            Creating ticket helps to track the assignments and progress team members are making.
            Tickets can be deleted and minimized for convienince.
        </p></strong>
    </div>

    <div className="kevin-header">
        <div className="kevin-center kevin-text">
            <p><strong>Not Started</strong></p>
            <p>I<strong>n Progress</strong></p>
            <p><strong>Completed</strong></p>
        </div>
        <div className="kevin-center">
            <button class="kevin-button" onClick={() => {addTask(0)}}>+ Add Task</button>
            <button class="kevin-button" onClick={() => {addTask(1)}}>+ Add Task</button>
            <button class="kevin-button" onClick={() => {addTask(2)}}>+ Add Task</button>
        </div>

            <DragNDrop data={data} setData={setData} />
    </div>
</>
)}