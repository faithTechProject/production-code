
import React, { useState, useRef } from "react";
import pageStyles from "../develop/tickets.module.css";
import styles from "./TicketComponent.module.css";
import axios from "axios";
import styles from "../stylesheets/tickets.module.css";
import pageStyles from "./TicketComponent.module.css";

export const DragNDrop = ({data, setData}) => {
    const [dragging, setDragging] = useState(false);
    const dragItem = useRef();
    const dragNode = useRef();
    const oldState = useRef();
    const mouse = useRef()

    const handleDragStart = (e, params) => {
        
        //e.dataTransfer.dropEffect("move")
        console.log('drag starting');
        dragItem.current = params;
        dragNode.current = e.target;
        
        dragNode.current.addEventListener('dragend', handelDragEnd);
        
        setDragging(true);
    }

    const handleDragEnter = (e ,params) => {
        
        const currentItem = dragItem.current;
        
        console.log("entering drag", params);
        document.body.style.cursor = 'default';
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

        //axios.patch(`http://localhost:3000/tickets/}`)
        

        console.log("Ending drag");
        console.log(dragItem.current)
        console.log(data)
        axios.patch(`http://localhost:3000/tickets/?id=${dragItem.current.item.id}`, {
            id: dragItem.current.item.id,
            status: dragItem.current.item.status,
            row_index: dragItem.current.item.row_index
        })
        console.log(data[dragItem.current.grp_index].tasks[dragItem.current.item_index].status)
        console.log("Ending drag");
        setDragging(false);
        dragNode.current.removeEventListener('dragend', handelDragEnd);
        dragItem.current = null;
        dragNode.current = null;
    }

    const getStyles = (params) => {
        const currerntItem = dragItem.current;
        if (currerntItem.grp_index === params.grp_index && currerntItem.item_index === params.item_index) {
            return "kevin-ticket-component-ticket kevin-cursor";
                    
            
        }

        return 'kevin-ticket-component-ticket kevin-cursor';
        

    }
    // element is the name of the ticket property that needs to be changed
    const handleTaskChange = (e, grp_index, item_index, element) => {
        let newList = JSON.parse(JSON.stringify(data))
        newList[grp_index].tasks[item_index][element] = e;
        setData(newList)
        console.log(newList)
    }

    const handleTaskDelete = (grp_index, item_index, item) => {
        let newList = JSON.parse(JSON.stringify(data)) // copy data
        const deletedTaskId = newList[grp_index].tasks[item_index].id;
        newList[grp_index].tasks.splice(item_index, 1) // remove task
        
        //const getFetch = (callback) => {
        axios.delete(`http://localhost:3000/tickets/${item.id}`)
            
        //}

        //const callback = (data) => {
        //    console.log(data)
        //}

        //for (let i=0; i<10; ++i) {
        //    getFetch(callback)
        //}
        //getFetch(callback)




        for (let i=0; i < newList.length; ++i) {
            for (let j=0; j < newList[i].tasks.length; ++j) {
                if (newList[i].tasks[j].id > deletedTaskId) {
                    --newList[i].tasks[j].id;
                }
                
            //console.log(data[i].tasks);
            }
        }
        console.log(newList)
        setData(newList)

    }
    
    return (
        <div className={pageStyles.kevin_drag_n_drop}>
        <div className={pageStyles.kevin_drag_n_drop}>
            
            {data.map((grp, grp_index) => (
                <div 
                key={grp.group} 
                className={pageStyles.kevin_dnd_group}
                className={pageStyles.kevin_dnd_group}
                onDragEnter={dragging && !grp.tasks.length ? (e) => handleDragEnter(e, {grp_index, item_index: 0}):null}>
                
                    <div className={pageStyles.kevin_dnd_group_title}></div>
                    <div className={pageStyles.kevin_dnd_group_title}></div>
                    {grp.tasks.map((item, item_index) => (
                        <div
                        draggable 
                        onDragStart={((e) => {handleDragStart(e, {grp_index, item_index, item})})}
                        onDragEnter= {dragging ? (e) => {handleDragEnter(e, {grp_index, item_index, item})} : null}
                        key={item.id}
                        //className={styles.kevin-ticket-component-ticket"
                        className= {dragging ? getStyles({grp_index, item_index}): "kevin_ticket_component_ticket"}
                        //className={styles.kevin-ticket-component-ticket"
                        className= {dragging ? getStyles({grp_index, item_index}): "kevin_ticket_component_ticket"}
                        
                        //style={{
                            
                        //    cursor: dragging ? 'grabbing' : 'grab'
                        //}}                        
                        >
                            
                            <div className={styles.kevin_ticket_component_title_content}>
                            <div className={styles.kevin_ticket_component_title_content}>
                                <div>
                                    {item.id}
                                   <button onClick={() => {handleTaskChange(!data[grp_index].tasks[item_index].is_open, grp_index, item_index, 'is_open')}}>^</button>
                                    <input className="kevin-ticket-component-title-input" type="text" maxLength="20" placeholder="Title"
                                    value={data[grp_index].tasks[item_index].title}
                                    onChange={(e) => {handleTaskChange(e.target.value, grp_index, item_index, 'title')}} 
                                    />
                                    
                                    <button onClick={() => {handleTaskDelete(grp_index, item_index, item)}}>X</button>
                                </div>
                            </div>
                            {data[grp_index].tasks[item_index].isOpen && (
                            <div className={styles.kevin_ticket_component_body_content}>
                                <textarea className={styles.kevin_ticket_component_textarea} rows={3} placeholder="Description:"
                                    value={data[grp_index].tasks[item_index].description}
                                    onChange={(e) => {handleTaskChange(e.target.value, grp_index, item_index, 'description')}}
                            {data[grp_index].tasks[item_index].is_open && (
                            <div className="kevin-ticket-component-body-content">
                                <textarea className="kevin-ticket-component-textarea" rows={3} placeholder="Description:"
                                    value={data[grp_index].tasks[item_index].description}
                                    onChange={(e) => {handleTaskChange(e.target.value, grp_index, item_index, 'description')}}
                                />
                                <div>
                                    <input className={styles.kevin_ticket_component_ticket_input_align_left}
                                    <input className={styles.kevin_ticket_component_ticket_input_align_left}
                                        placeholder="Date Created:"
                                        value={data[grp_index].tasks[item_index].date_created}
                                        onChange={(e) => {handleTaskChange(e.target.value, grp_index, item_index, 'date_created')}}
                                        
                                        />
                                    <input className="kevin-ticket-component-ticket-input-align-right"
                                        placeholder="Due Date:"
                                        value={data[grp_index].tasks[item_index].date_due}
                                        onChange={(e) => {handleTaskChange(e.target.value, grp_index, item_index, 'date_due')}}
                                        />
                                </div>
                                <div>
                                    <input className="kevin-ticket-component-ticket-input-align-left"
                                        placeholder="Sprint:"
                                        value={data[grp_index].tasks[item_index].sprint}
                                        onChange={(e) => {handleTaskChange(e.target.value, grp_index, item_index, 'sprint')}}
                                        />
                                    <input className="kevin-ticket-component-ticket-input-align-right" 
                                        placeholder="% Complete:"
                                        value={data[grp_index].tasks[item_index].percent_complete}
                                        onChange={(e) => {handleTaskChange(e.target.value, grp_index, item_index, 'percent_complete')}}
                                        />
                                </div>
                                <textarea className="kevin-ticket-component-textarea" rows={3} 
                                    placeholder="Assigned to:" 
                                    value={data[grp_index].tasks[item_index].assigned_to}
                                    onChange={(e) => {handleTaskChange(e.target.value, grp_index, item_index, 'assigned_to')}}
                                    />
                            </div>
                            )}
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