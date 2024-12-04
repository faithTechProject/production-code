
import React, { useState, useRef } from "react";
import axios from "axios";
import styles from '../develop/tickets.module.css';
import pageStyles from './TicketComponent.module.css';

export const DragNDrop = ({data, setData}) => {
    
    // the delete icon on the tickets.
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
    
    const [dragging, setDragging] = useState(false);
    const dragItem = useRef();
    const dragNode = useRef();



    const handleDragStart = (e, params) => {
        console.log('drag starting');
        dragItem.current = params;
        dragNode.current = e.target;
        dragNode.current.addEventListener('dragend', handelDragEnd);

        setDragging(true);
    }

    const handleDragEnter = (e ,params) => {
        
        const currentItem = dragItem.current;
        setData(oldList => {
            let newList = JSON.parse(JSON.stringify(oldList))
            newList[params.grp_index].tasks.splice(params.item_index, 0, newList[currentItem.grp_index].tasks.splice(currentItem.item_index, 1)[0]);
            
            
            newList[params.grp_index].tasks[params.item_index].status = data[params.grp_index].group;
            for (let i=0; i<newList.length; ++i) {
                for (let j=0; j<newList[i].tasks.length; ++j) {
                    newList[i].tasks[j].row_index = j;
                }
            }
            console.log(newList)
            dragItem.current = params;
            return newList;
        })
        
    }
    
    const handelDragEnd = () => {        
        axios.patch(`http://localhost:3000/tickets/?id=${dragItem.current.item.id}`, {
            id: dragItem.current.item.id,
            status: dragItem.current.item.status,
            row_index: dragItem.current.item.row_index
        })
        setDragging(false);
        dragNode.current.removeEventListener('dragend', handelDragEnd);
        dragItem.current = null;
        dragNode.current = null;
    }

    const getStyles = (params) => {
        const currerntItem = dragItem.current;
        if (currerntItem.grp_index === params.grp_index && currerntItem.item_index === params.item_index) {
            return pageStyles.kevin_ticket_component_ticket;      
        }

        return pageStyles.kevin_ticket_component_ticket;
        

    }
    const handleTaskChange = (value, grp_index, item_index, element) => {
        let newList = JSON.parse(JSON.stringify(data))
        newList[grp_index].tasks[item_index][element] = value;
        

        axios.patch(`http://localhost:3000/tickets/update?id=${data[grp_index].tasks[item_index].id}`, {
            [element]: value
        })
        setData(newList)
    }

    // This function handles deleting a ticket.  It reassigns the remaining tickets with ascending id values.
    // It also adjusts the order position values to for ording the tickets.
    const handleTaskDelete = (grp_index, item_index, item) => {
        let newList = JSON.parse(JSON.stringify(data)) // copy data
        const deletedTaskId = newList[grp_index].tasks[item_index].id;
        newList[grp_index].tasks.splice(item_index, 1) // remove task
        
        axios.delete(`http://localhost:3000/tickets/${item.id}`)

        for (let i=0; i < newList.length; ++i) {
            for (let j=0; j < newList[i].tasks.length; ++j) {
                if (newList[i].tasks[j].id > deletedTaskId) {
                    --newList[i].tasks[j].id;
                }
            }
        }

        for (let i=0; i < newList[grp_index].tasks.length; ++i) {
            newList[grp_index].tasks[i].row_index = i;
        }
        console.log(newList)
        setData(newList)
    }
    
    return (
        <div className={styles.kevin_drag_n_drop}>            
            {data.map((grp, grp_index) => (
                <div 
                key={grp.group} 
                className={styles.kevin_dnd_group}
                onDragEnter={dragging && !grp.tasks.length ? (e) => handleDragEnter(e, {grp_index, item_index: 0}):null}>
                {grp.tasks.map((item, item_index) => (
                    <div
                    draggable
                    onDragStart={((e) => {handleDragStart(e, {grp_index, item_index, item})})}
                    onDragEnter= {dragging ? (e) => {handleDragEnter(e, {grp_index, item_index, item})} : null}
                    key={item.id}
                    className= {dragging ? getStyles({grp_index, item_index}): pageStyles.kevin_ticket_component_ticket}>
                        
                        
                    <div className={pageStyles.kevin_ticket_component_title_content}>
                        <div>
                            <input className={pageStyles.kevin_ticket_component_title_input}
                            type="text"
                            maxLength="20"
                            placeholder="Title"
                            value={data[grp_index].tasks[item_index].title}
                            onChange={(e) => {handleTaskChange(e.target.value, grp_index, item_index, 'title')}} 
                            />
                            <button className={pageStyles.remove_button} onClick={() => {handleTaskDelete(grp_index, item_index, item)}}><CloseIcon /></button>
                        </div>
                    </div>
                    
                    <div className={pageStyles.kevin_ticket_component_body_content}>
                        <p className={pageStyles.small_Text}>Description:</p>
                        <textarea className={pageStyles.kevin_ticket_component_textarea}
                            rows={3}
                            value={data[grp_index].tasks[item_index].description}
                            onChange={(e) => {handleTaskChange(e.target.value, grp_index, item_index, 'description')}}
                        />
                        <div>
                            <p className={pageStyles.small_Text}>Date Created:</p>
                            <p className={pageStyles.small_Text2}>Due Date:</p>
                        </div> 
                        <div className={pageStyles.flex_container}>   
                                <textarea className={pageStyles.dual_textareas}
                                    rows={1}
                                    value={data[grp_index].tasks[item_index].date_created}
                                    onChange={(e) => {handleTaskChange(e.target.value, grp_index, item_index, 'date_created')}}
                                    />
                                    

                                <textarea className={pageStyles.dual_textareas}
                                    rows={1}
                                    value={data[grp_index].tasks[item_index].date_due}
                                    onChange={(e) => {handleTaskChange(e.target.value, grp_index, item_index, 'date_due')}}
                                    />
                            </div>
                        
                        <div>
                            <p className={pageStyles.small_Text}>Sprint #:</p>
                            <p className={pageStyles.small_Text2}>Completed %:</p>
                        </div>
                            <div className={pageStyles.flex_container}>
                                <textarea className={pageStyles.dual_textareas}
                                    rows={1}
                                    value={data[grp_index].tasks[item_index].sprint}
                                    onChange={(e) => {handleTaskChange(e.target.value, grp_index, item_index, 'sprint')}}
                                    />
                                <textarea className={pageStyles.dual_textareas} 
                                    rows={1}
                                    value={data[grp_index].tasks[item_index].percent_complete}
                                    onChange={(e) => {handleTaskChange(e.target.value, grp_index, item_index, 'percent_complete')}}
                                    />
                            </div>
                        
                        <p className={pageStyles.small_Text}>Assigned To:</p>
                        <textarea className={pageStyles.kevin_ticket_component_textarea} rows={3} 
                            value={data[grp_index].tasks[item_index].assigned_to}
                            onChange={(e) => {handleTaskChange(e.target.value, grp_index, item_index, 'assigned_to')}}
                            />
                        </div>
                    </div>
                ))}
                </div>
            ))}
        </div>
    )
}