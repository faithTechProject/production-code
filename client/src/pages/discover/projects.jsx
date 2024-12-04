import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import styles from './projects.module.css';
import axios from 'axios';
import {fillTable} from '../dbTable';
import { DownloadButton } from "../KevinDownloadPlaybook";


export function DiscoverProjects() {
    var pageName = 'Projects';
    useEffect(() => {
        axios.get(`http://localhost:3000/matrix-reflections/${pageName}`).then(res => {
            var tableData = res.data;
            tableData.sort((a, b) => a.entry_pos - b.entry_pos); // orders data by entry_pos
            for (let i in tableData) {
                fillTable(i, tableData, pageName);
            }
        })

        axios.get(`http://localhost:3000/text-area-reflections/Projects`).then(res => { // Grab and load textarea(s) from db
            var dbData = res.data;
            dbData.sort((a, b) => a.entry_pos - b.entry_pos); // orders data by entry_pos
            for (let response of dbData) {
                document.getElementById('textarea'+response.entry_pos).value = response.reply;
            }
        })
    }, [])
    
    function toggle(x) {
        if (getComputedStyle(document.getElementsByClassName(styles.iCardCover)[x]).getPropertyValue('height') !== '90px') {
            document.getElementsByClassName(styles.iCardCover)[x].style.setProperty('height','var(--button-height)')
        } else {
            document.getElementsByClassName(styles.iCardCover)[x].style.setProperty('height','calc(var(--var-height) - var(--image-height))')
        }
    }
    function saveData(textarea) {
        axios.patch(`http://localhost:3000/text-area-reflections/?page=Projects&entry_pos=${textarea.target.id.substr(8)}`, {
            reply: textarea.target.value
        });
    }

    return (
        <>
            <div id={styles.oTopImage}>
                <h3 className={styles.oTitle}>SOURCING <sc>CREATE</sc> PROJECTS</h3>
            </div>
            <div className="body">
                <p className={styles.instructions}>Click on the cards below to learn about the different exercises.</p>
                <div className={styles.iDeck}>
                    <div className={styles.iCard}>
                        <div className={styles.iCardImg}></div>
                            <ul className={styles.iCardContent}>
                                <li>Invite your community to brainstorming workshops and hear what breaks their hears for their communities. You could also invite tech professionals and local leaders to these sessions.</li>
                                <li>Develop a system to evaluate and prioritize the generated ideas based on redemptive technology impact.</li>
                            </ul>
                        <button id="cover" className={styles.iCardCover} onClick={() => toggle(0)}>Host Ideation Sessions</button>
                    </div>
                    <div className={styles.iCard}>
                        <div className={styles.iCardImg}></div>
                            <ul className={styles.iCardContent}>
                                <li>Organize small groups to walk through different areas of your community, observing and noting technological challenges or opportunities that affect marginalized communities.</li>
                                <li>Attend local government meetings where you can discover community issues that could benefit from technological solutions.</li>
                            </ul>
                        <button id="cover" className={styles.iCardCover} onClick={() => toggle(1)}>Identify Local Needs</button>
                    </div>
                    <div className={styles.iCard}>
                        <div className={styles.iCardImg}></div>
                            <ul className={styles.iCardContent}>
                                <li>Reach out to local non-profits who may have technological needs but lack resources to address them.</li>
                                <li>Connect with churches who often have insights into community needs and may have their own technological challenges.</li>
                                <li>Attend charity events to learn about ongoing projects that need technical support.</li>
                            </ul>
                        <button id="cover" className={styles.iCardCover} onClick={() => toggle(2)}>Partner with Non-Profits/ Churches</button>
                    </div>
                    <div className={styles.iCard}>
                        <div className={styles.iCardImg}></div>
                            <ul className={styles.iCardContent}>
                                <li>Consider partnering with computer science departments including those at Christian institutions who may have ongoing projects or research that benefit from community collaboration.</li>
                                <li>Reach out to student groups at universities who sometimes have tech-for-good or social entrepreneurship clubs that might be interested in collaboration.</li>
                                <li>Propose a mentorship program where your group mentors students on redemptive technology design through building projects.</li>
                            </ul>
                        <button id="cover" className={styles.iCardCover} onClick={() => toggle(3)}>Engaging Local Schools and Universities</button>
                    </div>
                    <div className={styles.iCard}>
                        <div className={styles.iCardImg}></div>
                            <ul className={styles.iCardContent}>
                                <li>Conduct a technology audit: Assess how technology is currently used in your community and identify areas for improvement.</li>
                                <li>Look for tech disparities: Identify groups or areas in your community that may be underserved by current technology.</li>
                                <li>Consider emerging technologies: Brainstorm how new technologies (e.g., AI, IoT, blockchain) could be applied redemptively in your community.</li>
                            </ul>
                        <button id="cover" className={styles.iCardCover} onClick={() => toggle(4)}>Analyzing Existing Technology Use</button>
                    </div>
                </div>
            <div className={styles.section}>
                <h1 className={styles.projects}>Host Ideation Session</h1>
                <p>Use the box below to document all ideas from your idea session. Include a short list of potential projects.</p>
                <h2 className={styles.projects}>List of Ideas</h2>
                <textarea id='textarea0' className={styles.response} onChange={(e) => saveData(e)}></textarea>
            </div>
            <div className={styles.section}>
                <h1 className={styles.projects}>Identifying Local Needs</h1>
                <p>Highlight three areas in your community where technology could address local challenges. 
                    Label the area of your community in the "Title" section, and use the space below it to note technological challenges or issues that technology could address.
                </p>
                <h2 className={styles.projects}>Community Needs</h2>
                <div className={styles.cDeck}>
                    <div className={styles.cCard}>
                        <textarea id='textarea1' className={styles.cCardTitle}
                            placeholder='Title...'
                            onChange={(e) => saveData(e)}>
                        </textarea>
                        <textarea id='textarea2' className={styles.cCardDescription}
                            placeholder='Description of challenges...'
                            onChange={(e) => saveData(e)}>
                        </textarea>
                    </div>
                    <div className={styles.cCard}>
                        <textarea id='textarea3' className={styles.cCardTitle}
                            placeholder='Title...'
                            onChange={(e) => saveData(e)}>
                        </textarea>
                        <textarea id='textarea4' className={styles.cCardDescription}
                            placeholder='Description of challenges...'
                            onChange={(e) => saveData(e)}>
                        </textarea>
                    </div>
                    <div className={styles.cCard}>
                        <textarea id='textarea5' className={styles.cCardTitle}
                            placeholder='Title...'
                            onChange={(e) => saveData(e)}>
                        </textarea>
                        <textarea id='textarea6' className={styles.cCardDescription}
                            placeholder='Description of challenges...'
                            onChange={(e) => saveData(e)}>
                        </textarea>
                    </div>
                </div>
            </div>
            <div className={styles.section}>
                <h1 className={styles.projects}>Partnering with Non-Profits/Churches</h1>
                <p>Use the matrix below to list potential non-profit and church partners, their needs, and potential project ideas.</p>
                <h2 className={styles.projects}>Partnership Matrix</h2>
                <div className={styles.tableBox}>
                    <div id="table0" className={styles.solutionTable}>
                    <table>
                        <th>Organization Name</th>
                        <th>Organization Needs</th>
                        <th>Project Ideas</th>
                        <tbody>
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>


            <div className={styles.section}>
                <h1 className={styles.projects}>Engage with Local Schools and Universities</h1>
                <p>Use the template provided below to develop a proposal for a collaborative project or mentorship program with a local educational institution.</p>
                <h2 className={styles.projects}>Proposal Template</h2>
                <DownloadButton 
                    fileName="Proposal-Template.docx"
                    displayName="Download Proposal Template"
                    filePath="/Proposal-Template.docx"
                />
            </div>
            <div className={styles.section}>
                <h1 className={styles.projects}>Analyze Existing Technology</h1>
                <p>Use the following boxes to highlight current uses, gaps, and opportunities for redemptive technology projects.</p>
                <h2 className={styles.projects}>Technology Use</h2>
                <p>Technology Audit: Assess how technology is currently used.</p>
                <textarea id='textarea7' className={styles.response} onChange={(e) => saveData(e)}></textarea>
                <p>Technology Disparities: Identify gaps.</p>
                <textarea id='textarea8' className={styles.response} onChange={(e) => saveData(e)}></textarea>
                <p>Emerging Technology: Brainstorm opportunities.</p>
                <textarea id='textarea9' className={styles.response} onChange={(e) => saveData(e)}></textarea>
            </div>
            <div className='bottomLinks'>
                    <div>
                        <p>Previous</p>
                        <Link to="/discover/overview">Discover Overview</Link>
                    </div>
                    <div>
                        <p>Next</p>
                        <Link to="/discover/teams">Teams</Link>
                    </div>
                </div>
            </div>
        </>
    )
}