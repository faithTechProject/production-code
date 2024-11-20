import { Link } from 'react-router-dom';
import styles from './problem.module.css';
import { useEffect, useState } from 'react';
import axios from "axios";

export function DiscoverProblem() {

    const [identify, setIdentify] = useState([])
    const [discribe, setDiscribe] = useState([])
    const [group1, setGroup1] = useState([])
    const [group2, setGroup2] = useState([])
    const [group3, setGroup3] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3000/text-area-reflections/Problems`).then (res => {
            const data = res.data.sort((a, b) => a.entry_pos - b.entry_pos); // sort by entry_pos in ascending order
            setIdentify(data[0].reply)
            setDiscribe(data[1].reply)
            setGroup1(data[2].reply)
            setGroup2(data[3].reply)
            setGroup3(data[4].reply)
        })
    }, [])

    const handleSubmit = (e, replyData) => {
        e.preventDefault();
        axios.patch(`http://localhost:3000/text-area-reflections/?page=Problems&entry_pos=${e.target.id}`, {
            reply: replyData
            
        })
        console.log("here")
    }   

    console.log(identify)
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
                    <form id='0' onSubmit={(e) => handleSubmit(e, identify)}>
                        <input type="text" id="probId" name="probId" placeholder="Problem Identified..." value={identify} onChange={(e) => setIdentify(e.target.value)}></input>
                        <input type="submit" value="Save" />
                    </form>
                </div>
                <div className={styles.section}>
                    <h1>Describe</h1>
                    <p>Write a brief 2-3 sentence description of the
                    problem. Start with a challenge statement if you have one (ie. How might we...?)
                    Note, a challenge statement is not necessary at this stage of the project.</p>
                    <form id='1' onSubmit={(e) => handleSubmit(e, discribe)}>
                        <input type="text" id="probDesc" name="probDesc" placeholder="Problem Description..." value={discribe} onChange={(e) => setDiscribe(e.target.value)}></input>
                        <input type="submit" value="Save" />
                    </form>
                </div>
                <div className={styles.section}>
                    <h1>Groups Affected</h1>        
                    <br></br>     
                    <div className={styles.rotate_element}><div className={styles.unrotate_element}>Problem</div></div>
                    <br></br>
                    <br></br>
                    <div className={styles.flex_container}>
                        <div className={styles.divbox}>
                            <form id='2' onSubmit={(e) => handleSubmit(e, group1)}>Group 1
                                <textarea className={styles.groupsAffected}
                                    placeholder='type here...'
                                    value={group1}
                                    onChange={(e) => setGroup1(e.target.value)} />
                                    <input type="submit" value="Save" />
                            </form>
                        </div>
                        <div className={styles.divbox}>
                            <form id='3' onSubmit={(e) => handleSubmit(e, group2)}>Group 2
                                <textarea className={styles.groupsAffected}
                                    placeholder='type here...'
                                    value={group2}
                                    onChange={(e) => setGroup2(e.target.value)} />
                                    <input type="submit" value="Save" />
                            </form>
                        </div>
                        <div className={styles.divbox}>
                            <form id='4' onSubmit={(e) => handleSubmit(e, group3)}>Group 3
                                <textarea className={styles.groupsAffected}
                                    placeholder='type here...'
                                    value={group3}
                                    onChange={(e) => setGroup3(e.target.value)} />
                                    <input type="submit" value="Save" />
                            </form>
                        </div>
                    </div>
                    <p>In the boxes above enter the three groups of people who are most affected
                    by this problem. Feel free to add more than one group to a box if three isn't enough to cover
                    the majority of those impacted by this issue</p>
                </div>
            </div>
            <div className='bottomLinks'>
                <Link to="/discover/teams">Teams</Link>
                <Link to="/discover/lament">Lament</Link>
            </div>
            </div>
        </>
    )
}