import React from "react";
import style from "./CoCreationTable.module.css"
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable"
import { useSortable } from "@dnd-kit/sortable";
import { Task } from "./CoCreationTasks";

export const CoCreationTable = ({tasks, setTasks}) => {
    console.log(tasks)
    return (
    <table className={style.table}>
        <thead>
            <tr>
                <td className={style.th}>Step</td>
                <td className={style.th}>Description</td>
                <td className={style.th}>Responsible</td>
                <td className={style.th}></td>
                <td className={style.th}></td>
            </tr>
        </thead>
        <tbody>
            <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
            {tasks.map(item => (
            
            <Task tasks={tasks} 
                setTasks={setTasks}
                id={item.id}
                status={item.status}
                row_index={item.row_index}
                title={item.title}
                description={item.description}
                assigned_to={item.assigned_to}
                date_created={item.date_created}
                date_due={item.date_due}
                sprint={item.sprint}
                percent_complete={item.percent_complete}
                key={item.id}/>
            ))}
            </SortableContext>
        </tbody>
    </table>
    )}