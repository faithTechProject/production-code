import React from "react";
import "./Table.css";

export const Table = ({rows, deleteRow, editRow}) => {
    return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Partner</th>
                    <th>Needs</th>
                    <th>Project Idea</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    rows.map((row, idx) => {
                        return <tr key={idx}>
                            <td>{row.partner}</td>
                            <td>{row.needs}</td>
                            <td>{row.project_idea}</td>
                            <td>
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