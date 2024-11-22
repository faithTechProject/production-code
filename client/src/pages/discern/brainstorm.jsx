import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect} from 'react';
import {fillTable} from '../dbTable';
import styles from './brainstorm.module.css';

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
            fillTable(1, brainstormData, pageName);
            fillTable(2, brainstormData, pageName);
            fillTable(3, brainstormData, pageName);
        })
        axios.get(`http://localhost:3000/text-area-reflections/Lament`).then(res => {
            res.data.sort(function(a,b) { // Sort tables based on entry_pos
                return parseInt(a.entry_pos) - parseInt(b.entry_pos)
            });
            document.getElementById('lament').innerHTML = res.data[0].reply;
        })
        axios.get(`http://localhost:3000/text-area-reflections/Problems`).then(res => {
            res.data.sort(function(a,b) { // Sort tables based on entry_pos
                return parseInt(a.entry_pos) - parseInt(b.entry_pos)
            });
            document.getElementById('group1').innerHTML = `How can we help ${res.data[2].reply}?`;
            document.getElementById('group2').innerHTML = `How can we help ${res.data[3].reply}?`;
            document.getElementById('group3').innerHTML = `How can we help ${res.data[4].reply}?`;
        })
        axios.get(`http://localhost:3000/text-area-reflections/Brainstorm`).then(res => {
            res.data.sort(function(a,b) { // Sort tables based on entry_pos
                return parseInt(a.entry_pos) - parseInt(b.entry_pos)
            });
            document.getElementById('jesusTextbox').value = res.data[0].reply;
            document.getElementById('howMightJesus').innerHTML = `How Might Jesus ${res.data[0].reply}?`;
        })
    })
    function saveResponse(entry) { // Saves data
        var inputData = entry.target.value;
        document.getElementById('howMightJesus').innerHTML = `How Might Jesus ${inputData}?`;
        axios.patch(`http://localhost:3000/text-area-reflections/?page=Brainstorm&entry_pos=0`, {
            reply: inputData
        });
    }

    return (
        <>
            <div id={styles.oTopImage}>
                <h3 className={styles.oTitle}>BRAINSTORM</h3>
            </div>
            <div className='body'>
                <p>Now we will begin the process of developing solutions to our problem.</p>
                <p>First, take a look at your lament and try to reframe it into a "How might Jesus ____?" question. For example "How might Jesus address social media addiction?"</p>
                <div className={styles.lamentAlign}>
                    <p id='lament' className={styles.lamentBox}></p>
                    <div className={styles.arrow}></div>
                    <div className={styles.jesusBox}>
                        <p>How Might Jesus</p>
                        <input id='jesusTextbox' type='text' className={styles.jesusTextarea} onChange={(e)=> saveResponse(e)}></input>
                        <p>?</p>
                    </div>
                </div>
                <p>Now brainstorm at least 3 solutions for each of the three groups you indicated on the problems page. If you have a solution that does not fit into those groups you can add it to the fourth table for other groups.</p>
                <h2 id="howMightJesus">How Might Jesus ______?</h2>
                <div className={styles.solutions}>
                    <div className={styles.tableBox}>
                        <p id='group1' className={styles.tableHeader}>Solutions</p>
                        <div id="0" className={styles.solutionTable}>
                        <table>
                            <tbody>
                            </tbody>
                        </table>
                        </div>
                    </div>
                    <div className={styles.tableBox}>
                        <p id='group2' className={styles.tableHeader}>Solutions</p>
                        <div id="1" className={styles.solutionTable}>
                        <table>
                            <tbody>
                            </tbody>
                        </table>
                        </div>
                    </div>
                    <div className={styles.tableBox}>
                        <p id='group3' className={styles.tableHeader}>Solutions</p>
                        <div id="2" className={styles.solutionTable}>
                        <table>
                            <tbody>
                            </tbody>
                        </table>
                        </div>
                    </div>
                    <div className={styles.tableBox}>
                        <p id='group4' className={styles.tableHeader}>How can we help others?</p>
                        <div id="3" className={styles.solutionTable}>
                        <table>
                            <tbody>
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}