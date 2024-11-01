import React from "react";
import "./Table.css";

export const Table = ({rows, deleteRow, editRow}) => {
    return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Skills</th>
                    <th>Past Experiences</th>
                    <th>Areas for Growth</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    rows.map((row, idx) => {
                        return <tr key={idx}>
                            <td>{row.name}</td>
                            <td>{row.skills}</td>
                            <td>{row.past_experiences}</td>
                            <td>{row.areas_for_growth}</td>
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