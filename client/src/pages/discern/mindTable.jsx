import React from "react";
import "../components/Table.css";

export const Table = ({rows, deleteRow, editRow}) => {
    return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Solutions</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    rows.map((row, idx) => {
                        return <tr key={idx}>
                            <td>{row.solution}</td>
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