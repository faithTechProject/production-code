
import React, { useState, useRef } from "react";
import "../stylesheets/tickets.css";
import "./TicketComponent.css";

export const DragNDrop = ({data, setData}) => {
    const [dragging, setDragging] = useState(false);
    const dragItem = useRef();
    const dragNode = useRef();
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
        
        console.log(currentItem)
        console.log("entering drag", params);
        document.body.style.cursor = 'default';
        setData(oldList => {
            let newList = JSON.parse(JSON.stringify(oldList))
            newList[params.grp_index].tasks.splice(params.item_index, 0, newList[currentItem.grp_index].tasks.splice(currentItem.item_index, 1)[0]);
            dragItem.current = params;
            
            return newList;


        })
        
    }
    
    const handelDragEnd = () => {
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

    const handleTaskDelete = (grp_index, item_index) => {
        let newList = JSON.parse(JSON.stringify(data)) // copy data
        const deletedTaskId = newList[grp_index].tasks[item_index].id;
        newList[grp_index].tasks.splice(item_index, 1) // remove task
        

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
        <div className="kevin-drag-n-drop">
            
            {data.map((grp, grp_index) => (
                <div 
                key={grp.group} 
                className="kevin-dnd-group"
                onDragEnter={dragging && !grp.tasks.length ? (e) => handleDragEnter(e, {grp_index, item_index: 0}):null}>
                
                    <div className="kevin-dnd-group-title"></div>
                    {grp.tasks.map((item, item_index) => (
                        <div
                        draggable 
                        onDragStart={((e) => {handleDragStart(e, {grp_index, item_index})})}
                        onDragEnter= {dragging ? (e) => {handleDragEnter(e, {grp_index, item_index})} : null}
                        key={item.id}
                        //className="kevin-ticket-component-ticket"
                        className= {dragging ? getStyles({grp_index, item_index}): "kevin-ticket-component-ticket"}
                        
                        //style={{
                            
                        //    cursor: dragging ? 'grabbing' : 'grab'
                        //}}                        
                        >
                            
                            <div className="kevin-ticket-component-title-content">
                                <div>
                                   <button onClick={() => {handleTaskChange(!data[grp_index].tasks[item_index].isOpen, grp_index, item_index, 'isOpen')}}>^</button>
                                    <input className="kevin-ticket-component-title-input" type="text" maxLength="20" placeholder="Title"
                                    value={data[grp_index].tasks[item_index].title}
                                    onChange={(e) => {handleTaskChange(e.target.value, grp_index, item_index, 'title')}} 
                                    />
                                    
                                    <button onClick={() => {handleTaskDelete(grp_index, item_index)}}>X</button>
                                </div>
                            </div>
                            {data[grp_index].tasks[item_index].isOpen && (
                            <div className="kevin-ticket-component-body-content">
                                <textarea className="kevin-ticket-component-textarea" rows={3} placeholder="Description:"
                                    value={data[grp_index].tasks[item_index].description}
                                    onChange={(e) => {handleTaskChange(e.target.value, grp_index, item_index, 'description')}}
                                />
                                <div>
                                    <input className="kevin-ticket-component-ticket-input-align-left"
                                        placeholder="Date Created:"
                                        
                                        />
                                    <input className="kevin-ticket-component-ticket-input-align-right" placeholder="Due Date:"/>
                                </div>
                                <div>
                                    <input className="kevin-ticket-component-ticket-input-align-left" placeholder="Sprint:"/>
                                    <input className="kevin-ticket-component-ticket-input-align-right" placeholder="% Complete:"/>
                                </div>
                                <textarea className="kevin-ticket-component-textarea" rows={3} placeholder="Assigned to:" />
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
        <div ref={setNodeRef} {...attributes} {...listeners} style={{style}} className="kevin-ticket-component">
            <input type="checkbox" className="kevin.checkbox" />;
            {title}
        </div>

   
   <div ref={setNodeRef} {...attributes} {...listeners} style={style} className="kevin-ticket-component-ticket">
        <div className="kevin-ticket-component-title-content">
            <div>
                <input className="kevin-ticket-component-title-input" type="text" maxLength="20" placeholder="Title" />
            </div>
        </div>
        <div className="kevin-ticket-component-body-content">
            <textarea className="kevin-ticket-component-textarea" rows={4} placeholder="Description:" />
            <div>
                <input className="kevin-ticket-component-ticket-input-align-left" placeholder="Date Created:"/>
                <input className="kevin-ticket-component-ticket-input-align-right" placeholder="Due Date:"/>
            </div>
            <div>
                <input className="kevin-ticket-component-ticket-input-align-left" placeholder="Sprint:"/>
                <input className="kevin-ticket-component-ticket-input-align-right" placeholder="% Complete:"/>
            </div>
            <textarea className="kevin-ticket-component-textarea" rows={4} placeholder="Assigned to:" />
        </div>
    </div>
    
    )
}
*/

/*
    return (
        <div className="kevin-drag-n-drop">
            {list.map((grp, grp_index) => (
                <div 
                key={grp.title} 
                className="kevin-dnd-group"
                onDragEnter={dragging && !grp.items.length ? (e) => handleDragEnter(e, {grp_index, item_index: 0}):null}>
                
                    <div className="kevin-dnd-group-title">{grp.title}</div>
                    {grp.items.map((item, item_index) => (
                        <div
                        draggable 
                        onDragStart={((e) => {handleDragStart(e, {grp_index, item_index})})}
                        onDragEnter= {dragging ? (e) => {handleDragEnter(e, {grp_index, item_index})} : null}
                        key={item}
                        className= {dragging ? getStyles({grp_index, item_index}): "kevin-dnd-item"}
                        >
                            <div className="kevin-ticket-component-ticket">
                                <div className="kevin-ticket-component-title-content">
                                    <div>
                                        <button onClick={() => setIsOpen(!isOpen)}>^</button>
                                        <input className="kevin-ticket-component-title-input" type="text" maxLength="20" placeholder="Title" />
                                        <button onClick={() => setIsOpen(!isOpen)}>X</button>
                                    </div>
                                </div>
                                {isOpen && (
                                <div className="kevin-ticket-component-body-content">
                                    <textarea className="kevin-ticket-component-textarea" rows={3} placeholder="Description:" />
                                    <div>
                                        <input className="kevin-ticket-component-ticket-input-align-left" placeholder="Date Created:"/>
                                        <input className="kevin-ticket-component-ticket-input-align-right" placeholder="Due Date:"/>
                                    </div>
                                    <div>
                                        <input className="kevin-ticket-component-ticket-input-align-left" placeholder="Sprint:"/>
                                        <input className="kevin-ticket-component-ticket-input-align-right" placeholder="% Complete:"/>
                                    </div>
                                    <textarea className="kevin-ticket-component-textarea" rows={3} placeholder="Assigned to:" />
                                </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
        */