import style from "./CoCreationTable.module.css"
import axios from "axios";
import { useSortable } from "@dnd-kit/sortable"
import { CoCreation } from "../develop/co_creation";
import  {CSS} from "@dnd-kit/utilities";
import { useEffect, useState } from "react";
export const Task = ({
    tasks,
    setTasks,
    id,
    status,
    row_index,
    title,
    description,
    assigned_to,
    date_created,
    date_due,
    sprint,
    percent_complete,
    }) => {

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

    const handleTaskChange = (value, id, property) => {
        console.log(tasks);
        let newList = JSON.parse(JSON.stringify(tasks))
        newList[newList.findIndex(newList => newList.id === id)][property] = value;
        
        axios.patch(`http://localhost:3000/tickets/update?id=${id}`, {
            [property]: value
        })

        setTasks(newList)
    }

    const removeTask = (id) => {
        axios.delete(`http://localhost:3000/tickets/${id}`)
        const taskIndex = tasks.findIndex(tasks => tasks.id === id)
        const status = tasks[taskIndex].status;

        let newTasks = tasks.filter((_, index) => index !== taskIndex)

        for (let i=0; i<newTasks.length; ++i) {
            if (newTasks[i].id > id) {
                --newTasks[i].id
            }
        }

        let row_index = 0;
        for (let i=0; i<newTasks.length; ++i) {
            if (newTasks[i].status === status) {
                newTasks[i].row_index = row_index;
                ++row_index
            }
        }


        setTasks(newTasks)
    }

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

    const handleTaskChangeDropDown = (value, id, property) => {
        const index = tasks.findIndex(tasks => tasks.id === id)
        const status = tasks[index].status;
        if (value !== status) {
            let newList = JSON.parse(JSON.stringify(tasks))

            let replaceIndex = 0;
            for (let i=0; i<newList.length; ++i) {
                if (newList[i].status === value) {
                    replaceIndex = i;
                    break;
                }
            }

            newList[index][property] = value;
            
            if (index >= replaceIndex) {
                newList.splice(replaceIndex, 0, newList.splice(index, 1)[0])
            }
            else {
                newList.splice(replaceIndex - 1, 0, newList.splice(index, 1)[0])
            }

            newList = updateRowIndecies(status, value, newList)
            axios.patch(`http://localhost:3000/tickets/?id=${id}`, {
              id: id,
                status: value,
                row_index: 0
            })
            setTasks(newList)
        }
    }
    
    return (
        <tr className={style.task}>

            <td className={style.td}>
                <textarea className={style.input}
                    placeholder="Enter text here..."
                    value={title}
                    onChange={(e) => handleTaskChange(e.target.value, id, 'title')}/>
                </td>
            
            <td className={style.td}>
                <textarea className={style.input} name="skills"
                    placeholder="Enter text here..."
                    value={description}
                    onChange={(e) => handleTaskChange(e.target.value, id, 'description')}
                    /></td>

            <td className={style.td}>
                <select className={style.select} value={status} onChange={(e) => handleTaskChangeDropDown(e.target.value, id, 'status')}>
                    
                    <option value="not started">Not Started</option>
                    <option value="in progress">In Progress</option>
                    <option value="completed">Completed</option>
                </select>
                
            </td>
            <td className={style.td}>        
                    <textarea className={style.input} name="skills"
                    placeholder="Enter text here..."
                    value={assigned_to}
                    onChange={(e) => handleTaskChange(e.target.value, id, 'assigned_to')}
                    />

                </td>
            
            <td>
                <button
                    type="button"
                    onClick={() => removeTask(id)}
                    className={style.remove_button}
                    >
                    <CloseIcon />
                </button>
            </td>
        
        </tr>) 
}