import { Link } from 'react-router-dom';
import { useEffect} from 'react';
import axios from 'axios';
import impactStyle from './impact.module.css';


export function DemonstrateImpact() {
    useEffect(() => {
        axios.get(`http://localhost:3000/text-area-reflections/CoCreation`).then(res => {
            var dbData = res.data;
            dbData.sort((a,b) => a.entry_pos - b.entry_pos);
            document.getElementById("solution").innerHTML = 'Solution: ' + dbData[0].reply;
        })

        axios.get(`http://localhost:3000/text-area-reflections/Impact`).then(res => { // Grab and load textarea(s) from db
            var dbData = res.data;
            dbData.sort((a, b) => a.entry_pos - b.entry_pos); // orders data by entry_pos
            for (let response of dbData) {
                document.getElementById('textarea'+response.entry_pos).value = response.reply;
            }
        })
    })

    function saveData(textarea) {
        axios.patch(`http://localhost:3000/text-area-reflections/?page=Impact&entry_pos=${textarea.target.id.substr(8)}`, {
            reply: textarea.target.value
        });
    }

    return (
        <>
            <div id ={impactStyle.oTopImage}>
                <h3 className={impactStyle.oTitle}><sc>IMPACT</sc></h3>
            </div>
            <div className='body'>
            <h1>Redemptive Impact Planning</h1>
            <p className = {impactStyle.textbody}>In this exercise, you will identify 3-5 key relationships that will be impacted by your solution. 
            For each relationship, outline the current state of
            the relationship, the desired state after implementing your solution, and specific actions you can take
            to deepen this relationship over time. Enter the name of the relationship in the rectangle below, and
            then each of outlined categories in their respective hexagons.</p>
            <br></br>
            <h1 className={impactStyle['sol-text']} id="solution">Solution</h1>
            <div className={impactStyle.lineDownShort}></div>
            <textarea id='textarea0' placeholder="Name or type of relationship..." className={impactStyle["userTextInputRelationship"]} onChange={(e) => saveData(e)}></textarea>
            <div className={impactStyle.lineDownShort}></div>
            <div className = {impactStyle['hexes-container']}>
                <div className={impactStyle['hexes-column']}>
                    <div className = {impactStyle['hex-first']}>
                        <h3 className = {impactStyle['hex-text']}>Current State
                        <textarea id='textarea1' placeholder="type here..." className={impactStyle["userTextInput"]} onChange={(e) => saveData(e)}></textarea>
                        </h3>
                    </div>
                    <div className = {impactStyle['hexagon']}>
                    <div className = {impactStyle['hex-body']}>
                        <h3 className = {impactStyle['hex-text']}>Actions
                        <textarea id='textarea3' placeholder="type here..." className={impactStyle["userTextInput"]} onChange={(e) => saveData(e)}></textarea>
                        </h3>
                    </div>
                </div>
                </div>
                <div className={impactStyle['hexes-column']}>
                    <div className={impactStyle.lineDownLeft}></div>
                    <div className={impactStyle.lineDownRight}></div>
                    <div className={impactStyle.lineDownLeft}></div>
                </div>
                <div className={impactStyle['hexes-column']}>
                    <div className = {impactStyle['hex-body']}>
                        <h3 className = {impactStyle['hex-text']}>Desired State
                        <textarea id='textarea2' placeholder="type here..." className={impactStyle["userTextInput"]} onChange={(e) => saveData(e)}></textarea>
                        </h3>
                    </div>
                </div>
            </div>
            <div className={impactStyle.lineDownShort}></div>
            <textarea id='textarea4' placeholder="Name or type of relationship..." className={impactStyle["userTextInputRelationship"]} onChange={(e) => saveData(e)}></textarea>
            <div className={impactStyle.lineDownShort}></div>
            <div className = {impactStyle['hexes-container']}>
                <div className={impactStyle['hexes-column']}>
                    <div className = {impactStyle['hex-first']}>
                        <h3 className = {impactStyle['hex-text']}>Current State
                        <textarea id='textarea5' placeholder="type here..." className={impactStyle["userTextInput"]} onChange={(e) => saveData(e)}></textarea>
                        </h3>
                    </div>
                    <div className = {impactStyle['hexagon']}>
                    <div className = {impactStyle['hex-body']}>
                        <h3 className = {impactStyle['hex-text']}>Actions
                        <textarea id='textarea7' placeholder="type here..." className={impactStyle["userTextInput"]} onChange={(e) => saveData(e)}></textarea>
                        </h3>
                    </div>
                </div>
                </div>
                <div className={impactStyle['hexes-column']}>
                    <div className={impactStyle.lineDownLeft}></div>
                    <div className={impactStyle.lineDownRight}></div>
                    <div className={impactStyle.lineDownLeft}></div>
                </div>
                <div className={impactStyle['hexes-column']}>
                    <div className = {impactStyle['hex-body']}>
                        <h3 className = {impactStyle['hex-text']}>Desired State
                        <textarea id='textarea6' placeholder="type here..." className={impactStyle["userTextInput"]} onChange={(e) => saveData(e)}></textarea>
                        </h3>
                    </div>
                </div>
            </div>
            <div className={impactStyle.lineDownShort}></div>
            <textarea id='textarea8' placeholder="Name or type of relationship..." className={impactStyle["userTextInputRelationship"]} onChange={(e) => saveData(e)}></textarea>
            <div className={impactStyle.lineDownShort}></div>
            <div className = {impactStyle['hexes-container']}>
                <div className={impactStyle['hexes-column']}>
                    <div className = {impactStyle['hex-first']}>
                        <h3 className = {impactStyle['hex-text']}>Current State
                        <textarea id='textarea9' placeholder="type here..." className={impactStyle["userTextInput"]} onChange={(e) => saveData(e)}></textarea>
                        </h3>
                    </div>
                    <div className = {impactStyle['hexagon']}>
                    <div className = {impactStyle['hex-body']}>
                        <h3 className = {impactStyle['hex-text']}>Actions
                        <textarea id='textarea11' placeholder="type here..." className={impactStyle["userTextInput"]} onChange={(e) => saveData(e)}></textarea>
                        </h3>
                    </div>
                </div>
                </div>
                <div className={impactStyle['hexes-column']}>
                    <div className={impactStyle.lineDownLeft}></div>
                    <div className={impactStyle.lineDownRight}></div>
                    <div className={impactStyle.lineDownLeft}></div>
                </div>
                <div className={impactStyle['hexes-column']}>
                    <div className = {impactStyle['hex-body']}>
                        <h3 className = {impactStyle['hex-text']}>Desired State
                        <textarea id='textarea10' placeholder="type here..." className={impactStyle["userTextInput"]} onChange={(e) => saveData(e)}></textarea>
                        </h3>
                    </div>
                </div>
            </div>
            <div className={impactStyle['lineAcross']}></div>
            <div className='bottomLinks'>
                <div>
                    <p>Previous</p>
                    <Link to="/demonstrate/overview">Demonstrate Overview</Link>
                </div>
                <div>
                    <p>Next</p>
                    <Link to="/demonstrate/measure">Measure</Link>
                </div>
            </div>
            </div>
        </>
    )
}