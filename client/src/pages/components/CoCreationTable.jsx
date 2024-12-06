import React from "react";
import style from "./CoCreationTable.module.css"
import { Task } from "./CoCreationTasks";

export const CoCreationTable = ({steps, setSteps}) => {
    return (
    <table className={style.table}>
        <thead>
            <tr>
                <th className={style.th}>Steps</th>
                <th className={style.th}>Description</th>
                <th className={style.th}>Progress</th>
                <th className={style.th}>Responsible</th>
                <th className={style.th}></th>
            </tr>
        </thead>
        <tbody>
            {steps.map(item => (
            
            <Task steps={steps} 
                setSteps={setSteps}
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
        </tbody>
    </table>
    )}