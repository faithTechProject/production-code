import { Link } from "react-router-dom";
import styles from './conclusion.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

//className = {styles.}
export function Conclusion() {
    useEffect(() => {
        axios.get(`http://localhost:3000/text-area-reflections/Conclusion`).then(res => { // Grab and load textarea(s) from db
            var dbData = res.data;
            dbData.sort((a, b) => a.entry_pos - b.entry_pos); // orders data by entry_pos
            for (let response of dbData) {
                document.getElementById('textarea'+response.entry_pos).value = response.reply;
            }
        })
    }, [])

    function saveData(textarea) {
        axios.patch(`http://localhost:3000/text-area-reflections/?page=Conclusion&entry_pos=${textarea.target.id.substr(8)}`, {
            reply: textarea.target.value
        });
    }

    return (
        <>
            <div id={styles.oConclusionTopImage}>
                <h3 className={styles.oTitle}>CONCLUSION</h3>
            </div>
            <div className='body'>
                <h2>4D Cycle Complete!</h2>
                <div id={styles.o4D}></div>
                <h2>Concluding Thoughts</h2>
                <p>As you complete this workbook, take a moment to reflect on your journey through the 4D Cycle by answering the following questions:</p>
                <p>How has this process changed your approach to technology development?</p>
                <textarea id='textarea0' placeholder="Type here..." className={styles.otextarea} onChange={(e) => saveData(e)}></textarea>
                <p>What new insights have you gained about integrating your faith with your work?</p>
                <textarea id='textarea1' placeholder="Type here..." className={styles.otextarea} onChange={(e) => saveData(e)}></textarea>

                <p className={styles.oQuoteText}>
                    Continue to apply these principles in your work, always seeking to build technology that helps humanity
                    become persons who love God and love others more deeply.
                </p>

                <h2>Future Work</h2>
                <p>Remember, you can always come back to the workbook if you find new ways to add to your redemptive impact. 
                    Use the space below to consider possible future work:</p>
                    <p>What would future work on this project look like?</p>
                    <textarea id='textarea2' placeholder="Type here..." className={styles.otextarea} onChange={(e) => saveData(e)}></textarea>

                <p>
                    How might you be able to use the workbook to help you with your future work?
                    Remember, the setup of this workbook is a cycle, which means you can go through the 4D Cycle as many times
                    as you'd like. Specifically regarding future work, it might be helpful to repeat certain stages.
                    Consider how each D in the 4D Cycle could be used to help with future work.</p>
                    <p>How might you use the Discover Phase in your future work?</p>
                    <textarea id='textarea3' placeholder="Type here..." className={styles.otextarea} onChange={(e) => saveData(e)}></textarea>
                    <p>How might you use the Discern Phase in your future work?</p>
                    <textarea id='textarea4' placeholder="Type here..." className={styles.otextarea} onChange={(e) => saveData(e)}></textarea>
                    <p>How might you use the Develop Phase in your future work?</p>
                    <textarea id='textarea5' placeholder="Type here..." className={styles.otextarea} onChange={(e) => saveData(e)}></textarea>
                    <p>How might you use the Demonstrate Phase in your future work?</p>
                    <textarea id='textarea6' placeholder="Type here..." className={styles.otextarea} onChange={(e) => saveData(e)}></textarea>

                <p className={styles.oQuoteText}>
                    No matter how you want to use it, the FaithTech Workbook is always
                    available for you to use. Don't hesitate to use its resources to assist in the future of this
                    redemptive project, or other future projects.
                </p>
                <h2>Thank you for Choosing Redemptive Technology over Reckless!</h2>
                <br></br>
            </div>
            <div className='bottomLinks'>
                <div>
                    <p>Previous</p>
                    <Link to="/demonstrate/story">Story</Link>
                </div>
                <br></br>
            </div>
        </>
    )
}