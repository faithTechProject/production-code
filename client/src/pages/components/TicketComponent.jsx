
import React, { useState, useRef } from "react";
import axios from "axios";
import styles from '../develop/tickets.module.css';
import pageStyles from './TicketComponent.module.css';

export const DragNDrop = ({data, setData}) => {
    const [dragging, setDragging] = useState(false);
    const dragItem = useRef();
    const dragNode = useRef();

    const handleDragStart = (e, params) => {
        console.log('drag starting');
        dragItem.current = params;
        dragNode.current = e.target;
        dragNode.current.addEventListener('dragend', handelDragEnd);
        //dragNode.current.addEventListener('dragover', (e) => {e.preventDefault()})
        
        
        setDragging(true);
    }

    const handleDragEnter = (e ,params) => {
        
        const currentItem = dragItem.current;
        //console.log(e.target)
        //dragNode.current = e.target;
        //dragNode.current.addEventListener('dragend', handelDragEnd);
        //dragNode.current.addEventListener('dragover', (e) => {e.preventDefault()})
        //console.log(dragNode.current);

        //console.log("entering drag", params);
        //console.log(dragItem)
       // oldState.current = params.item.status;
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

        //console.log("Ending drag");
        axios.patch(`http://localhost:3000/tickets/?id=${dragItem.current.item.id}`, {
            id: dragItem.current.item.id,
            status: dragItem.current.item.status,
            row_index: dragItem.current.item.row_index
        })
        setDragging(false);
        dragNode.current.removeEventListener('dragend', handelDragEnd);
        //dragNode.current.removeEventListener('dragover', handelDragEnd);
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
    // element is the name of the ticket property that needs to be changed
    const handleTaskChange = (value, grp_index, item_index, element) => {
        let newList = JSON.parse(JSON.stringify(data))
        newList[grp_index].tasks[item_index][element] = value;
        

        axios.patch(`http://localhost:3000/tickets/?id=${data[grp_index].tasks[item_index].id}`, {
            [element]: value
        })
        //console.log(value)
        console.log(value)
        setData(newList)
    }

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
        //<button onClick={() => {handleTaskChange(!data[grp_index].tasks[item_index].is_open, grp_index, item_index, 'is_open')}}>^</button>
        //{data[grp_index].tasks[item_index].is_open && (
    }
    
    return (
        <div className={styles.kevin_drag_n_drop}>            
            {data.map((grp, grp_index) => (
                <div 
                key={grp.group} 
                className={styles.kevin_dnd_group}
                onDragEnter={dragging && !grp.tasks.length ? (e) => handleDragEnter(e, {grp_index, item_index: 0}):null}>
                
                    <div className={styles.kevin_dnd_group_title}></div>
                    
                    {grp.tasks.map((item, item_index) => (
                        <div
                        draggable
                        onDragStart={((e) => {handleDragStart(e, {grp_index, item_index, item})})}
                        onDragEnter= {dragging ? (e) => {handleDragEnter(e, {grp_index, item_index, item})} : null}
                        key={item.id}
                        className= {dragging ? getStyles({grp_index, item_index}): pageStyles.kevin_ticket_component_ticket}>
                            
                            
                                <div className={pageStyles.kevin_ticket_component_title_content}>
                                    <div>
                                        
                                   
                                        <input className={pageStyles.kevin_ticket_component_title_input} type="text" maxLength="20" placeholder="Title"
                                        value={data[grp_index].tasks[item_index].title}
                                        onChange={(e) => {handleTaskChange(e.target.value, grp_index, item_index, 'title')}} 
                                        />
                                        
                                        <button onClick={() => {handleTaskDelete(grp_index, item_index, item)}}>X</button>
                                    </div>
                                </div>
                                
                                <div className={pageStyles.kevin_ticket_component_body_content}>
                                    <textarea className={pageStyles.kevin_ticket_component_textarea} rows={3} placeholder="Description:"
                                        value={data[grp_index].tasks[item_index].description}
                                        onChange={(e) => {handleTaskChange(e.target.value, grp_index, item_index, 'description')}}
                                    />
                                    <div>
                                        <input className={pageStyles.kevin_ticket_component_ticket_input_align_left}
                                            placeholder="Date Created:"
                                            value={data[grp_index].tasks[item_index].date_created}
                                            onChange={(e) => {handleTaskChange(e.target.value, grp_index, item_index, 'date_created')}}
                                            
                                            />
                                        <input className={pageStyles.kevin_ticket_component_ticket_input_align_right}
                                            placeholder="Due Date:"
                                            value={data[grp_index].tasks[item_index].date_due}
                                            onChange={(e) => {handleTaskChange(e.target.value, grp_index, item_index, 'date_due')}}
                                            />
                                    </div>
                                    <div>
                                        <input className={pageStyles.kevin_ticket_component_ticket_input_align_left}
                                            placeholder="Sprint:"
                                            value={data[grp_index].tasks[item_index].sprint}
                                            onChange={(e) => {handleTaskChange(e.target.value, grp_index, item_index, 'sprint')}}
                                            />
                                        <input className={pageStyles.kevin_ticket_component_ticket_input_align_right} 
                                            placeholder="% Complete:"
                                            value={data[grp_index].tasks[item_index].percent_complete}
                                            onChange={(e) => {handleTaskChange(e.target.value, grp_index, item_index, 'percent_complete')}}
                                            />
                                    </div>
                                    <textarea className={pageStyles.kevin_ticket_component_textarea} rows={3} 
                                        placeholder="Assigned to:" 
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


/*
export const Ticket = ({ id, title }) => {
    const {attributes, listeners, setNodeRef, transform, transition} = useDraggable({id})
    const style = {
        transition,
        transorm: CSS.Transform.toString(transform)
    }
    return (
        <div ref={setNodeRef} {...attributes} {...listeners} style={{style}} className={styles.kevin-ticket-component}>
            <input type="checkbox" className={styles.kevin.checkbox" />;
        <div ref={setNodeRef} {...attributes} {...listeners} style={{style}} className={styles.kevin-ticket-component}>
            <input type="checkbox" className={styles.kevin.checkbox" />;
            {title}
        </div>

   
   <div ref={setNodeRef} {...attributes} {...listeners} style={style} className={styles.kevin-ticket-component-ticket}>
        <div className={styles.kevin-ticket-component-title-content}>
   <div ref={setNodeRef} {...attributes} {...listeners} style={style} className={styles.kevin-ticket-component-ticket}>
        <div className={styles.kevin-ticket-component-title-content}>
            <div>
                <input className={styles.kevin-ticket-component-title-input" type="text" maxLength="20" placeholder="Title" />
                <input className={styles.kevin-ticket-component-title-input" type="text" maxLength="20" placeholder="Title" />
            </div>
        </div>
        <div className={styles.kevin-ticket-component-body-content}>
            <textarea className={styles.kevin-ticket-component-textarea" rows={4} placeholder="Description:" />
        <div className={styles.kevin-ticket-component-body-content}>
            <textarea className={styles.kevin-ticket-component-textarea" rows={4} placeholder="Description:" />
            <div>
                <input className={styles.kevin-ticket-component-ticket-input-align-left" placeholder="Date Created:"/>
                <input className={styles.kevin-ticket-component-ticket-input-align-right" placeholder="Due Date:"/>
                <input className={styles.kevin-ticket-component-ticket-input-align-left" placeholder="Date Created:"/>
                <input className={styles.kevin-ticket-component-ticket-input-align-right" placeholder="Due Date:"/>
            </div>
            <div>
                <input className={styles.kevin-ticket-component-ticket-input-align-left" placeholder="Sprint:"/>
                <input className={styles.kevin-ticket-component-ticket-input-align-right" placeholder="% Complete:"/>
                <input className={styles.kevin-ticket-component-ticket-input-align-left" placeholder="Sprint:"/>
                <input className={styles.kevin-ticket-component-ticket-input-align-right" placeholder="% Complete:"/>
            </div>
            <textarea className={styles.kevin-ticket-component-textarea" rows={4} placeholder="Assigned to:" />
            <textarea className={styles.kevin-ticket-component-textarea" rows={4} placeholder="Assigned to:" />
        </div>
    </div>
    
    )
}
*/

/*
    return (
        <div className={styles.kevin-drag-n-drop}>
        <div className={styles.kevin-drag-n-drop}>
            {list.map((grp, grp_index) => (
                <div 
                key={grp.title} 
                className={styles.kevin-dnd-group"
                className={styles.kevin-dnd-group"
                onDragEnter={dragging && !grp.items.length ? (e) => handleDragEnter(e, {grp_index, item_index: 0}):null}>
                
                    <div className={styles.kevin-dnd-group-title}>{grp.title}</div>
                    <div className={styles.kevin-dnd-group-title}>{grp.title}</div>
                    {grp.items.map((item, item_index) => (
                        <div
                        draggable 
                        onDragStart={((e) => {handleDragStart(e, {grp_index, item_index})})}
                        onDragEnter= {dragging ? (e) => {handleDragEnter(e, {grp_index, item_index})} : null}
                        key={item}
                        className= {dragging ? getStyles({grp_index, item_index}): "kevin-dnd-item"}
                        >
                            <div className={styles.kevin-ticket-component-ticket}>
                                <div className={styles.kevin-ticket-component-title-content}>
                            <div className={styles.kevin-ticket-component-ticket}>
                                <div className={styles.kevin-ticket-component-title-content}>
                                    <div>
                                        <button onClick={() => setIsOpen(!isOpen)}>^</button>
                                        <input className={styles.kevin-ticket-component-title-input" type="text" maxLength="20" placeholder="Title" />
                                        <input className={styles.kevin-ticket-component-title-input" type="text" maxLength="20" placeholder="Title" />
                                        <button onClick={() => setIsOpen(!isOpen)}>X</button>
                                    </div>
                                </div>
                                {isOpen && (
                                <div className={styles.kevin-ticket-component-body-content}>
                                    <textarea className={styles.kevin-ticket-component-textarea" rows={3} placeholder="Description:" />
                                <div className={styles.kevin-ticket-component-body-content}>
                                    <textarea className={styles.kevin-ticket-component-textarea" rows={3} placeholder="Description:" />
                                    <div>
                                        <input className={styles.kevin-ticket-component-ticket-input-align-left" placeholder="Date Created:"/>
                                        <input className={styles.kevin-ticket-component-ticket-input-align-right" placeholder="Due Date:"/>
                                        <input className={styles.kevin-ticket-component-ticket-input-align-left" placeholder="Date Created:"/>
                                        <input className={styles.kevin-ticket-component-ticket-input-align-right" placeholder="Due Date:"/>
                                    </div>
                                    <div>
                                        <input className={styles.kevin-ticket-component-ticket-input-align-left" placeholder="Sprint:"/>
                                        <input className={styles.kevin-ticket-component-ticket-input-align-right" placeholder="% Complete:"/>
                                        <input className={styles.kevin-ticket-component-ticket-input-align-left" placeholder="Sprint:"/>
                                        <input className={styles.kevin-ticket-component-ticket-input-align-right" placeholder="% Complete:"/>
                                    </div>
                                    <textarea className={styles.kevin-ticket-component-textarea" rows={3} placeholder="Assigned to:" />
                                    <textarea className={styles.kevin-ticket-component-textarea" rows={3} placeholder="Assigned to:" />
                                </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
        */