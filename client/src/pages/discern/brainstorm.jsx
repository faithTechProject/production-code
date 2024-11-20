import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect} from 'react';
import {fillTable, addRow} from '../dbTable';
//import '../stylesheets/discernBrainstorm.css';

export function DiscernBrainstorm() {
    // Creates global variables for brainstorm tables
    var brainstormData;
    var pageName = "Brainstorm";
    useEffect(() => {
       // Get page related tables
        axios.get(`http://localhost:3000/matrix-reflections/${pageName}`).then(res => {
            brainstormData = res.data;
            brainstormData.sort(function(a,b) { // Sort tables based on entry_pos
                return parseInt(a.entry_pos) - parseInt(b.entry_pos)
            });
            fillTable(0, brainstormData, pageName);
        })
    })
    

    return (
        <>
            <div id="oTopImage">
                <h3 class="oTitle">BRAINSTORM</h3>
            </div>
            <h1>Generate Solutions</h1>
            <div id="0">
            <table>
                <thead>
                    <th>Solutions</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                </tbody>
            </table>
            <button onClick={() => addRow(0, brainstormData, pageName)}>Add Row</button>
            </div>
        </>
    )
}