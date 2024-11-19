import React from "react";
//import "./Table.css";
//import "../stylesheets/table_of_contents.css"

export const Table = ({rows, deleteRow, editRow}) => {
    return (
    <div>
        <table className="kevin-table">
            <thead>
                <tr>
                    <th className="kevin-th">Name</th>
                    <th className="kevin-th">Skills</th>
                    <th className="kevin-th">Past Experiences</th>
                    <th className="kevin-th">Areas for Growth</th>
                    <th className="kevin-th">Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    rows.map((row, idx) => {
                        return <tr key={idx}>
                            <td className="kevin-td">{row.name}</td>
                            <td className="kevin-td">{row.skills}</td>
                            <td className="kevin-td">{row.past_experiences}</td>
                            <td className="kevin-td">{row.areas_for_growth}</td>
                            <td className="kevin-td">
                                <button onClick={() => deleteRow(idx)}>delete</button>
                                <button onClick={() => editRow(idx)}>edit</button>
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
)}