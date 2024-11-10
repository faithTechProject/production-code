import React from "react";
import "./Table.css";

export const Table = ({rows, deleteRow, editRow}) => {
    return (
    <div>
        <table className="kevin-table">
            <thead>
                <tr>
                    <th className="kevin-th">Partner</th>
                    <th className="kevin-th">Needs</th>
                    <th className="kevin-th">Project Idea</th>
                    <th className="kevin-th">Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    rows.map((row, idx) => {
                        return <tr key={idx}>
                            <td className="kevin-td">{row.partner}</td>
                            <td className="kevin-td">{row.needs}</td>
                            <td className="kevin-td">{row.project_idea}</td>
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