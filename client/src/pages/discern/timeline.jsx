import { Link } from 'react-router-dom';
import styles from './timeline.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
export function DiscernTimeline() {
    
    useEffect(() => {
        axios.get(`http://localhost:3000/text-area-reflections/Timeline`).then(res => { // Grab and load textarea(s) from db
            var dbData = res.data;
            dbData.sort((a, b) => a.entry_pos - b.entry_pos); // orders data by entry_pos
            for (let response of dbData) {
                document.getElementById('textarea'+response.entry_pos).value = response.reply;
            }
        })
    }, [])

    function saveData(textarea) {
        axios.patch(`http://localhost:3000/text-area-reflections/?page=Timeline&entry_pos=${textarea.target.id.substr(8)}`, {
            reply: textarea.target.value
        });
    }

    return (
        <>
            <div id={styles.oTopImage}>
                <h3 className={styles.oTitle}><sc>Timeline</sc></h3>
            </div>
            <div className='body'>
                <p>Effective timeline planning is crucial for the success of your 4D cycle projects. You may be leading one project or coordinating multiple projects in your community. This guide will help you create realistic and flexible timelines that balance urgency with thoughtfulness.</p>
                <h1>Choose Create Duration</h1>
                <p>When planning how long you should run Create, you may think of having it match up with how long you expect your project will take to complete. If you're leading multiple projects in your community, we strongly suggest that you synchronize Create Cycles across the various projects and teams. This makes it easier for you to organize teaching and demo sessions.</p>
                <p>When deciding on project duration, consider the following factors:
                    <br></br>
                    <li>Project complexity: More complex projects require longer timelines.</li>
                    <li>Team availability: Consider the time commitment your team can realistically make.</li>
                    <li>Urgency of the need: Some community needs may require faster action.</li>
                    <li>Resource availability: Ensure you have the necessary resources for the project duration.</li>      
                </p>
                <div className={styles.flex_container}>
                    <div className={styles.divcircle}><p>Short-term sprints (1-4 weeks)</p></div>
                    <div className={styles.divcircle}><p>Medium-term projects (1-3 months)</p></div>
                    <div className={styles.divcircle}><p>Long-term initiatives (3+ months)</p></div>
                </div>
                <p>You could run a 4-week Create Cycle if you're working on a short-term project. Alternatively, you could run a 12-week Create Cycle for a medium-term project. If you're leading multiple projects in your community, a 12-week Create Cycle may be a good rhythm that works well for short- and medium term projects. You can repeat multiple Create Cycles for long-term initiatives.</p>
                <p>Exercise: For your chosen project, list pros and cons for each duration option. Discuss with your team to reach a consensus.</p>
                <h1>Develop a Create Roadmap</h1>
                <p><num className={styles.decorate_list}> 1 </num>Identify the rhythm for your community meetups or team meetings.</p>
                <p><num className={styles.decorate_list}> 2 </num>If needed, map out additional opportunities to meet.</p>
                <p><num className={styles.decorate_list}> 3 </num>Allocate prep time for sourcing projects, team formation.</p>
                <p><num className={styles.decorate_list}> 4 </num>Drop in key milestones for each 4D Cycle stage.</p>
                <p><num className={styles.decorate_list}> 5 </num>Use project management tools (e.g., Trello, Asana) to visualize the roadmap.</p>
                <p>Exercise: Develop a timeline for your Create Cycle, including key milestones for each stage (Discover, Discern, Develop, Demonstrate).</p>
                <p>Also, consider setting sprint durations.</p>
                <p>Example timeline:</p>
                <iframe src="https://workbook.faithtech.com/prepare/timeline#developing-a-create-roadmap" width="50%" height="500"></iframe>
                <h1>Manage Timeline Expectations</h1>
                <div className = {styles.flex_container}>
                    <div className = {styles.bulletsdiv}>
                        <num className={styles.decorate_list}> 1 </num><p>Communicate timelines clearly to all stakeholders</p>
                        <num className={styles.decorate_list}> 2 </num><p>Provide regular updates on progress and any changes</p>
                    </div>
                    <div className = {styles.imageArea}></div>
                    <div className = {styles.bulletsdiv}>
                        <num className={styles.decorate_list}> 3 </num><p>Be transparent about challenges and delays</p>
                        <num className={styles.decorate_list}> 4 </num><p>Celebrate milestones to maintain motivation</p>
                    </div>
                </div>
                
                <br></br>
                <h1>Communication Plan</h1>
                <p>Share your team's communication method, platforms, or plan.</p>
                <div className={styles.divbox}>
                    <textarea id='textarea0' placeholder="Type here..." className={styles.communication} onChange={(e)=> saveData(e)}></textarea>
                </div>
                <div className='bottomLinks'>
                    <div>
                        <p>Previous</p>
                        <Link to="/discern/analysis">Analysis</Link>
                    </div>
                    <div>
                        <p>Next</p>
                        <Link to="/develop/overview">Develop Overview</Link>
                    </div>
                </div>
            </div>
        </>
    )
}