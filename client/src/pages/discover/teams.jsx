import { Link } from 'react-router-dom';
import styles from './teams.module.css';
import React, { useState } from 'react';
import logo from '../images/logo.svg';
import { useEffect } from "react";
import axios from "axios";
import team_pic from '../images/hostIdeaSessions.jpg';
import { DownloadButton } from "../components/DownloadComponent";
import { fillTable } from '../dbTable';



export function DiscoverTeams() {

    const [tasks, setTasks] = useState(['']);
    const [roles, setRoles] = useState(['']);
    const [otherForm, setOtherForm] = useState([])

    var pageName = 'Teams';
    useEffect(()=> {
        // Grab and load textarea(s) from db
        axios.get(`http://localhost:3000/text-area-reflections/${pageName}`).then(res => {
            var dbData = res.data;
            dbData.sort((a, b) => a.entry_pos - b.entry_pos); // orders data by entry_pos
            for (let response of dbData) {
                document.getElementById('textarea'+response.entry_pos).value = response.reply;
            }
        })
        // Grab and load table(s) from db
        axios.get(`http://localhost:3000/matrix-reflections/${pageName}`).then(res => {
            var tableData = res.data;
            tableData.sort((a, b) => a.entry_pos - b.entry_pos); // orders data by entry_pos
            for (let i in tableData) {
                fillTable(i, tableData, pageName);
            }
            setTasks(res.data[0].tasks_rows)
            setRoles(res.data[0].roles_columns)
            setOtherForm(res.data.map((item) => item.rci_input)[0])
        })
    }, [])

    function saveData(textarea) {
        axios.patch(`http://localhost:3000/text-area-reflections/?page=Teams&entry_pos=${textarea.target.id.substr(8)}`, {
            reply: textarea.target.value
        });
    }

    const [flippedCards, setFlippedCards] = useState({});
    // State to hold tasks and roles

    const handleFlip = (index) => {
        setFlippedCards((prevState) => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    };

    const raci_roles = [
        { title: 'Responsible', letter: 'R', description: 'The person who completes the task' },
        { title: 'Accountable', letter: 'A', description: 'The person who ensures the task is completed' },
        { title: 'Consulted', letter: 'C', description: 'The person who provides advice or guidance' },
        { title: 'Informed', letter: 'I', description: 'The person who is kept up to date on the tasks progress' }
    ];

    // Function to handle input changes in the form
    const handleInputChange = (e, row, col) => {
        let canAdd = true;
        for (let i = 0; i < otherForm.length; ++i)
            if ((otherForm[i].row === row) && (otherForm[i].col === col)) {
                canAdd = false;
                otherForm[i].name = `${e.target.value}`;
                setOtherForm([...otherForm])
                break
            }
        if (canAdd) {
            setOtherForm([...otherForm, {name: `${e.target.value}`, row: row, col: col}]);
        }
        else {
            console.log("could not add")
        }
    };

    function getFormValue(row, col) {
        for (let i = 0; i < otherForm.length; ++i) {
            if ((otherForm[i].row === row) && (otherForm[i].col === col)) {
                return otherForm[i].name;
            }
        }
        setOtherForm([...otherForm, {name: "Responsible", row: row, col: col}])
        console.log("no value")
    }
    // Function to handle roles change
    const handleRolesChange = (index, value) => {
        const updatedRoles = [...roles];
        updatedRoles[index] = value;
        setRoles(updatedRoles);
    };

    // Function to handle tasks change
    const handleTasksChange = (index, value) => {
        const updatedTasks = [...tasks];
        updatedTasks[index] = value;
        setTasks(updatedTasks);
    };

    // Function to add a new role input field
    const addRole = () => {
        setRoles([...roles, '']);
    };
   
    const removeRole = (indexToRemove) => {
        // Don't remove if it's the last task
        if (roles.length === 1) return;
        
        setRoles(roles.filter((_, index) => index !== indexToRemove));
        setOtherForm(otherForm.filter((item) => item.col !== indexToRemove))
        for (let i = 0; i < otherForm.length; ++i) {
            if (otherForm[i].col > indexToRemove)
                --otherForm[i].col;
        }


    };

    // Function to add a new task input field
    const addTask = () => {
        setTasks([...tasks, '']);
    };
     // Function to remove a specific task
    const removeTask = (indexToRemove) => {
        // Don't remove if it's the last task
        if (tasks.length === 1) return;
        console.log(indexToRemove)
        setTasks(tasks.filter((_, index) => index !== indexToRemove));
        setOtherForm(otherForm.filter((item) => item.row !== indexToRemove))
        for (let i = 0; i < otherForm.length; ++i) {
            if (otherForm[i].row > indexToRemove)
                --otherForm[i].row;
        }
        //console.log(JSON.stringify(myVar) + "text");//.includes(`task${!index}`)) )
        //console.log("text")
    };

    //close icon as SVG
    const CloseIcon = () => (
        <svg 
        viewBox="0 0 24 24" 
        width="16" 
        height="16" 
        stroke="currentColor" 
        strokeWidth="2" 
        fill="none" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        >
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
    );
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.patch(`http://localhost:3000/matrix-reflections/?page=Teams&entry_pos=${e.target.id}`, {
            tasks_rows: tasks,
            roles_columns: roles,
            rci_input: otherForm
        
        })
    }
 
    return (
        <>
            <div id={styles.oTopImage}>
                <h3 className={styles.oTitle}>FORMING <sc>TEAMS</sc></h3>
            </div>
            <div className='body'>
            <div className={styles.hero_teams_page}>
                <p>Creating effective teams is crucial for the success of your Create projects. This guide will help you form balanced, diverse, and collaborative teams that embody redemptive technology principles.</p>
                <h2 className={styles.skills_title}>Assess Skills and Experiences</h2>
                <div className={styles.hero_team_members}>
                    <div className={styles.members}>
                    <img className={styles.member_image_placeholder} src={team_pic} alt="Conduct Skill Inventory" />
                        
                        <ul>
                            <h3> <num className={styles.decorate_list}> 1 </num> Conduct skills inventory </h3>
                            <li> Technical skills (e.g programming languages, design tools) </li>
                            <li>Soft skills (e.g communication, leadership, empathy)</li>
                            <li> Domain expertise revelant to the project </li>
                        </ul>  
                    </div>
                    <div className={styles.members}>
                    <img className={styles.member_image_placeholder} src={team_pic} alt="Conduct Skill Inventory" />
                        <ul>
                            <h3> <num className={styles.decorate_list}> 2 </num> Consider past Experiences </h3>
                            <li> previous redemptive technology project </li>
                            <li> Volunteer work or community involvement </li>
                            <li> Professional background </li>
                        </ul>  
                    </div>
                    <div className={styles.members}>
                    <img className={styles.member_image_placeholder} src={team_pic} alt="Conduct Skill Inventory" />

                        <ul>
                            <h3> <num className={styles.decorate_list}> 3 </num> Identify areas of growth </h3>
                            <li> Skills team members want to develop  </li>
                            <li> Oppiortunities for mentorship within the team  </li>
                        </ul>  
                    </div>
                </div>
                <div className={styles.hero_skills_matrix}>
                    <p> Exersice: Use the table below to create a skills matrix for your
                        community mapping individuals to their strengths and areas for growth The goal of this exercise is to help
                        you create a well rounded team
                    </p>
                    <h1 className={styles.skills_matrix_title}> Skills Matrix </h1>
                    <div className={styles.tableBox}>
                        <div id="table0" className={styles.solutionTable}>
                        <table>
                            <th>Name</th>
                            <th>Skills</th>
                            <th>Areas for Growth</th>
                            <th>Past Experiences</th>
                            <tbody>
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>
                <div className={styles.hero_member_role}>
                    <h1 className={styles.member_roles_title}> Balance Technical and Non-Technical Roles </h1>
                    <p> Aim for a mix of roles such as ...</p>
             
                    <div className={styles.roles_container}>
                        <div className={styles.title_circle}>
                            <h3>Technical Roles</h3>
                            <div className={styles.role}>
                                
                            <ul>
                                <li> Software developers </li>
                                <li> UX/UI designers </li>
                                <li> Data Analysts </li>
                                <li> DevOps </li>
                            </ul>
                            </div>
                        </div>
                        <div className={styles.arrow}></div>
                        <div className={styles.title_circle}>
                            <h3>Non-technical Roles</h3>
                            <div className={styles.role} >
                                
                                <ul>
                                    <li> Player leads </li>
                                    <li> Project managers </li>
                                    <li> Community liaisons </li>
                                    <li> Subject matter experts </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.hero_roles_needed}>
                <p> In the box below list the essential roles needed</p>
                <p> Identify...</p>
                <textarea id='textarea0' onChange={(e) => saveData(e)} placeholder='Enter text here...'></textarea>
            
            </div>
            <div className={styles.roles_and_responsibility}>
                <h1> Define team Roles and Responsibilities </h1>
                <p>  Clear roles help teams function smoothly</p>
                <ul>
                    <li> <num className={styles.decorate_list}> 1 </num> Define key responsibilities for each role </li>
                    <li> <num className={styles.decorate_list}> 2 </num>Establish decision-making process </li>
                    <li> <num className={styles.decorate_list}> 3 </num> Create a RACI (Responsible, Accountable, Consulted, informed) matrix for major projects task </li>
                    <li> <num className={styles.decorate_list}> 4 </num> Allow for flexibility as the project evolves</li>
                </ul> 
            </div>

            <div className={styles.hero_raci_matrix_container}>
                <h1> RACI CHART </h1>
                <p className={styles.race_matrix_explanation}>  
                 A RACI chart—also known as a responsibility assignment matrix—is a diagram used in project management to define team roles across 4 categories: Responsible, Accountable, Consulted, and Informed. It helps clarify who does the work, who calls the shots, whose opinion matters, and who needs to stay in the loop for each task, milestone, or decision.
                </p>

                <div className={styles.raci_matrix}>
                    {raci_roles.map((role, index) => (
                        <div key={index} className={`${styles.flip_card} ${flippedCards[index] ? styles.flipped : ''}`} onClick={() => handleFlip(index)}>
                            <div className={styles.flip_card_inner}>
                                <div className={styles.flip_card_front}>
                                    {role.letter}
                                </div>
                                <div className={styles.flip_card_back}>
                                    <h3>{role.title}</h3>
                                    <p>{role.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={styles.hero_download_raci_matrix}>
                    <p>Click to download an example </p>
                    <DownloadButton 
                        fileName="RACI Matrix"
                        displayName="Download RACI Matrix"
                        filePath="/raci_matrix.png"
                    />

                </div>

                <div className={styles.hero_matrix_container}>
                    <div className={styles.input_fields_container}>
                        <div className={styles.task_input}>
                            <label>Enter tasks:</label>
                            {tasks.map((task, index) => (
                            <div key={index} className={styles.task_field}>
                                <div className={styles.input_wrapper}>
                                <input
                                    type="text"
                                    value={task}// || formData[`task${index + 1}`]}
                                    onChange={(e) => handleTasksChange(index, e.target.value)}
                                    placeholder={`Task ${index + 1}`}
                                    className={styles.input_field}
                                />
                                {tasks.length > 1 && (
                                    <button
                                    type="button"
                                    onClick={() => removeTask(index)}
                                    className={styles.remove_button}
                                    aria-label="Remove task"
                                    >
                                    <CloseIcon />
                                    </button>
                                )}
                                </div>
                            </div>
                            ))}
                            <button type="button" onClick={addTask} className={styles.add_button}>
                            Add Task
                            </button>
                        </div>
                        <div className={styles.role_input}>
                            <label>Enter team roles:</label>
                            {roles.map((role, index) => (
                            <div key={index} className={styles.role_field}>
                                <div className={styles.input_wrapper}>
                                <input
                                    type="text"
                                    value={role}
                                    onChange={(e) => handleRolesChange(index, e.target.value)}
                                    placeholder={`Role ${index + 1}`}
                                    className={styles.input_field}
                                />
                                {roles.length > 1 && (
                                    <button
                                    type="button"
                                    onClick={() => removeRole(index)}
                                    className={styles.remove_button}
                                    aria-label="Remove role"
                                    >
                                    <CloseIcon />
                                    </button>
                                )}
                            </div>
                            </div>
                            ))}
                            <button type="button" onClick={addRole} className={styles.add_button}>
                            Add Role
                            </button>
                        </div>
                    </div>
                    <form id="0" className={styles.raci_matrix_form} onSubmit={handleSubmit} >
                        <table className={styles.hero_matrix}>
                        <thead>
                            <tr>
                                <th>Task</th>
                                {roles.map((role, index) => (<th key={index}>{role || `Role ${index + 1}`}</th> ))}
                            </tr>
                        </thead>
                        <tbody>
                            {console.log("here")}
                            {tasks.map((task, rowIndex) => (
                            <tr key={rowIndex}>
                                {/* Input field for task name */}
                                {/*<td><input type="text" name={`task${rowIndex + 1}`} value={formData[`task${rowIndex + 1}`] || task} onChange={handleInputChange} placeholder="Enter task" /></td>*/}
                                <td><input type="text" name={`task${rowIndex + 1}`} value={task} onChange={(e) => handleTasksChange(rowIndex, e.target.value)} placeholder="Enter task" /></td>
                                {/* Dropdowns for each role responsibility */}
                                {roles.map((_, roleIndex) => (
                                <td key={roleIndex}>
                                    {/*<select name={`task${rowIndex + 1}_role${roleIndex + 1}`} value={formData[`task${rowIndex + 1}_role${roleIndex + 1}`] || 'Responsible'} onChange={handleInputChange}>*/}
                                    <select name={`task${rowIndex + 1}_role${roleIndex + 1}`} onChange={(e) => handleInputChange(e, rowIndex, roleIndex)} value={getFormValue(rowIndex, roleIndex)}>
                                    <option value="Responsible">Responsible</option>
                                    <option value="Accountable">Accountable</option>
                                    <option value="Consulted">Consulted</option>
                                    <option value="Informed">Informed</option>
                                    </select>
                                </td>
                                ))}
                            </tr>
                            ))}
                        </tbody>
                        </table>
                        {/* Submit button for the form */}
                        <button type="submit">Submit</button>
                    </form>
                </div>             
            </div>
            <div className={styles.hero_faith_integration}> 
                <h1> Integrate Faith </h1>
                <p> Here are some ideas to intergrate faith into your team dynamics:</p>
                <ul>
                    <li>  <num className={styles.decorate_list}> 1 </num>  Start meetings with prayer to devotional reflections </li>
                    <li>  <num className={styles.decorate_list}> 2 </num>  Emphasize that our work should always point to jesus </li>
                    <li>  <num className={styles.decorate_list}> 3 </num> Highlight the importance of being Spirit-led in decision making </li>
                    <li>  <num className={styles.decorate_list}> 4 </num> Encourage team members to share with and pray for each other </li>
                </ul> 
            </div>

            <div className={styles.hero_faithtech_pillars}>
                <div className={styles.roof}>
                    <div className={styles.name_logo}>
                        <img className={styles.logo} src={logo} alt="Logo" />
                        <div className={styles.logo_name_fp}>FAITH</div>
                        <div className={styles.logo_name_lp}>TECH</div>
                    </div>
                </div>

                    <div className={styles.pillars}>
                        <div className={styles.pillar}>
                            <div className={styles.top_long_box}></div>
                            <div className={styles.top_short_box}> </div>
                            <div className={styles.middle_box}> 
                            <div className={styles.line_container}>
                                    <div className={styles.line}></div>
                                    <div className={styles.line}></div>
                                    <div className={styles.line}></div>
                                </div>
                            </div>
                            <div className={styles.bottom_short_box}> 
                                <div className={styles.text}>It all points </div>
                            </div>
                            <div className={styles.bottom_long_box}>
                            <div className={styles.text}> back to Jesus</div>   
                            </div>
                    
                        </div>
                        <div className={styles.pillar}>
                            <div className={styles.top_long_box}></div>
                            <div className={styles.top_short_box}> </div>
                            <div className={styles.middle_box}> 
                            <div className={styles.line_container}>
                                    <div className={styles.line}></div>
                                    <div className={styles.line}></div>
                                    <div className={styles.line}></div>
                                </div>
                            </div>
                            <div className={styles.bottom_short_box}>
                                <div className={styles.text}>Led  by </div>
                             </div>
                            <div className={styles.bottom_long_box}>
                                <div className={styles.text}>the Spirit</div>    
                            </div>
                            
                        </div>
                        <div className={styles.pillar}>
                        <div className={styles.top_long_box}></div>
                            <div className={styles.top_short_box}> </div>
                            <div className={styles.middle_box}> 
                                <div className={styles.line_container}>
                                    <div className={styles.line}></div>
                                    <div className={styles.line}></div>
                                    <div className={styles.line}></div>
                                </div>
                            </div>
                            <div className={styles.bottom_short_box}> 
                            <div className={styles.text}>Take a sacrificial </div>
                            </div>
                            <div className={styles.bottom_long_box}> 
                                <div className={styles.text}> posture</div>
                            </div>
                            
                        </div>
                        <div className={styles.pillar}>
                        <div className={styles.top_long_box}></div>
                            <div className={styles.top_short_box}> </div>
                            <div className={styles.middle_box}> 
                                <div className={styles.line_container}>
                                    <div className={styles.line}></div>
                                    <div className={styles.line}></div>
                                    <div className={styles.line}></div>
                                </div>
                            </div>
                            <div className={styles.bottom_short_box}> 
                            <div className={styles.text}>People</div>
                            </div>
                            <div className={styles.bottom_long_box}> 
                                <div className={styles.text}> over Products</div>
                            </div> 
                        </div>
                        <div className={styles.pillar}>
                        <div className={styles.top_long_box}></div>
                            <div className={styles.top_short_box}> </div>
                            <div className={styles.middle_box}> 
                                <div className={styles.line_container}>
                                    <div className={styles.line}></div>
                                    <div className={styles.line}></div>
                                    <div className={styles.line}></div>
                                </div>
                            </div>
                            <div className={styles.top_short_box}>
                                <div class={styles.text}>Don't take ourselves </div>
                            </div>
                            <div className={styles.bottom_long_box}> 
                                <div className={styles.text}> "too seriously" </div>
                            </div>
                        </div>
                    </div>
            </div>

            <div className={styles.hero_core_pillar_exercise}>
            <p> These are the core pillars that define everything we do at FaithTech. Develop values in addition 
                        to these that will guide your teams's work and decision making. 
                    </p>
                <div className={styles.exercise}>
                    <label >
                        <p>Document yout values in the space provided below</p>
                        <textarea className={styles.exercise_form} id='textarea1' placeholder="Enter text here..." onChange={(e) => saveData(e)}></textarea>
                    </label>
                </div>
                <div className={styles.Reflection_questions}>
                    <h1> Reflection Questions </h1>
                    
                    <div className={styles.exercise}>
                        <label >
                            <p className={styles.exercise_paragraph}>Are we obedient to the Holy Spirit as we build out our teams?</p>
                            <textarea className={styles.exercise_label} id='textarea2' placeholder="Enter text here..." onChange={(e) => saveData(e)}></textarea>
                        </label>
                    </div>
                    <div className={styles.exercise}>
                        <label>
                            <p className={styles.exercise_paragraph}>Are we leveraging the diverse gifts and experiences God has given our communty memberrs?</p>
                            <textarea className={styles.exercise_label} id='textarea3' placeholder="Enter text here..." onChange={(e) => saveData(e)}></textarea>
                        </label>
                    </div>
                    <div className={styles.exercise}>
                        <label>
                            <p className={styles.exercise_paragraph}>How can we ensure that every team member feels valued and has Opportunities to contribute meaningfully?</p>
                            <textarea className={styles.exercise_label} id='textarea4' placeholder="Enter text here..." onChange={(e) => saveData(e)}></textarea>
                            
                        </label>
                    </div>
                    <p> 
                        Remember, forming a team for a 4D cycle project is not just about assembling skills, but about bringing together
                        individuals who can collectively pursue technology development in a way that honors God and serves others.
                     </p>
                </div>

            </div>
            <div className='bottomLinks'>
                    <div>
                        <p>Previous</p>
                        <Link to="/discover/projects">Projects</Link>
                    </div>
                    <div>
                        <p>Next</p>
                        <Link to="/discover/problem">Problems</Link>
                    </div>
                </div>
            </div>
        </>
    );
}