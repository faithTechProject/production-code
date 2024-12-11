import { Link } from 'react-router-dom';
import styles from './problem.module.css';
import { useEffect, useState } from 'react';
import axios from "axios";

export function DiscoverProblem() {

    useEffect(() => {
        axios.get(`http://localhost:3000/text-area-reflections/Problems`).then(res => { // Grab and load textarea(s) from db
            var dbData = res.data;
            dbData.sort((a, b) => a.entry_pos - b.entry_pos); // orders data by entry_pos
            for (let response of dbData) {
                document.getElementById('textarea'+response.entry_pos).value = response.reply;
            }
        })
    }, [])

    function saveData(textarea) {
        axios.patch(`http://localhost:3000/text-area-reflections/?page=Problems&entry_pos=${textarea.target.id.substr(8)}`, {
            reply: textarea.target.value
        });
    }

    return (
        <>
            <div id={styles.oTopImage}>
                <h3 className={styles.oTitle}><sc>PROBLEM</sc></h3>
            </div>
            <div className='body'>
            <div className={styles.problem}>
                <h2></h2>
                <div className={styles.section}>
                    <h1>Identify</h1>
                    <p>Now that you've identified impactful opportunities for redemptive technology in your community and have
                    started to form your team it's time to choose a problem. Feel free to refer back to the <a href="/#/discover/projects">Projects Page. </a> 
                    If you completed all the exercises on that page you should hopefully have numerous project
                    ideas. If you're still unsure take time to pray and ask God for direction. Ask your team to pray as
                    well and then gather together to discuss and decide on a problem you feel called
                    to work on.</p>
                    <input type="text" id='textarea0' placeholder="Problem Identified..." onChange={(e) => saveData(e)}></input>
                </div>
                <div className={styles.section}>
                    <h1>Describe</h1>
                    <p>Write a brief 2-3 sentence description of the
                    problem. Start with a challenge statement if you have one (ie. How might we...?)
                    Note, a challenge statement is not necessary at this stage of the project.</p>
                    <input type="text" id='textarea1' placeholder="Problem Description..." onChange={(e) => saveData(e)}></input>
                </div>
                <div className={styles.section}>
                    <h1>Groups Affected</h1>        
                    <br></br>     
                    <div className={styles.rotate_element}><div className={styles.unrotate_element}>Problem</div></div>
                    <br></br>
                    <br></br>
                    <div className={styles.flex_container}>
                        <div className={styles.divbox}>
                            <p>Group 1</p>
                            <textarea id='textarea2' placeholder="Type here..." className={styles.groupsAffected} onChange={(e) => saveData(e)}></textarea>
                        </div>
                        <div className={styles.divbox}>
                        <p>Group 2</p>
                            <textarea id='textarea3' placeholder="Type here..." className={styles.groupsAffected} onChange={(e) => saveData(e)}></textarea>
                        </div>
                        <div className={styles.divbox}>
                            <p>Group 3</p>
                            <textarea id='textarea4' placeholder="Type here..." className={styles.groupsAffected} onChange={(e) => saveData(e)}></textarea>
                        </div>
                    </div>
                    <p>In the boxes above enter the three groups of people who are most affected
                    by this problem. Feel free to add more than one group to a box if three isn't enough to cover
                    the majority of those impacted by this issue</p>
                </div>
            </div>
            <div className='bottomLinks'>
                    <div>
                        <p>Previous</p>
                        <Link to="/discover/teams">Teams</Link>
                    </div>
                    <div>
                        <p>Next</p>
                        <Link to="/discover/lament">Lament</Link>
                    </div>
                </div>
            </div>
        </>
    )
}