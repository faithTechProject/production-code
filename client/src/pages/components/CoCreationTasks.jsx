import axios from "axios";
import style from "./CoCreationTable.module.css"

export const Task = ({steps, setSteps, id, status, row_index, title, description, assigned_to, date_created, date_due, sprint, percent_complete }) => {

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

    // updates the database
    const handleTaskChange = (value, id, property) => {
        let newList = JSON.parse(JSON.stringify(steps))
        newList[newList.findIndex(newList => newList.id === id)][property] = value;
        
        axios.patch(`http://localhost:3000/tickets/update?id=${id}`, {
            [property]: value
        })

        setSteps(newList)
    }

    const removeTask = (id, status) => {
        axios.delete(`http://localhost:3000/tickets/${id}`)

        // Determine the index of the step that needs to be deleted in the steps hook and then remove the step task.
        let stepList = steps.filter((_, index) => index !== steps.findIndex(steps => steps.id === id))

        // Reduce the id values of the steps that where values higher than the step just deleted.
        for (let i=0; i<stepList.length; ++i) {
            if (stepList[i].id > id) {
                --stepList[i].id
            }
        }

        // Update the row_indicies of the group status that had a step removed.
        let row_index = 0;
        for (let i=0; i<stepList.length; ++i) {
            if (stepList[i].status === status) {
                stepList[i].row_index = row_index;
                ++row_index
            }
        }
        setSteps(stepList)
    }


    const handleTaskChangeDropDown = (id, newStatus, oldStatus) => {
        
        // Make a deep copy of the steps array within the react hook
        let newList = JSON.parse(JSON.stringify(steps))

        // Extract the step that matches the id for later.
        const step = newList.find((step) => step.id === id)
        step.status = newStatus
        
        // Remove the step that matches the id.
        newList = newList.filter((step) => step.id !== id)
        
        let indexToSplice = newList.indexOf((newList.find((step) => (step.status === newStatus))));
        if (indexToSplice === -1) {indexToSplice = 0}
        newList.splice(indexToSplice, 0, step)

        // Update the changed two group statuses.
        let row_index_new_status = 0;
        let row_index_old_status = 0;
        for (let i=0; i<newList.length; ++i) {
            if (newList[i].status === newStatus) {
                newList[i].row_index = row_index_new_status;
                ++row_index_new_status
            }
            if (newList[i].status === oldStatus) {
                newList[i].row_index = row_index_old_status;
                ++row_index_old_status
            }
        }
        
        axios.patch(`http://localhost:3000/tickets/?id=${id}`, {
            id: id,
            status: newStatus,
            row_index: 0
        })
        setSteps(newList)
    }
    
    return (
        <tr className={style.step}>
            <td className={style.td}>
                <textarea className={style.input}
                    placeholder="Enter text here..."
                    value={title}
                    onChange={(e) => handleTaskChange(e.target.value, id, 'title')}/>
                </td>
            <td className={style.td}>
                <textarea className={style.input}
                    placeholder="Enter text here..."
                    value={description}
                    onChange={(e) => handleTaskChange(e.target.value, id, 'description')}
                    />
            </td>
            <td className={style.td}>
                <select className={style.select} value={status} onChange={(e) => handleTaskChangeDropDown(id, e.target.value, status)}>
                    <option value="not started">Not Started</option>
                    <option value="in progress">In Progress</option>
                    <option value="completed">Completed</option>
                </select>
            </td>
            <td className={style.td}>        
                    <textarea className={style.input}
                    placeholder="Enter text here..."
                    value={assigned_to}
                    onChange={(e) => handleTaskChange(e.target.value, id, 'assigned_to')}
                    />
                </td>   
            <td>
                <button
                    type="button"
                    onClick={() => removeTask(id, status)}
                    className={style.remove_button}
                    >
                    <CloseIcon />
                </button>
            </td>      
        </tr>
    ) 
}