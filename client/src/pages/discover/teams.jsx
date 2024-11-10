import React, { useState } from 'react';
import logo from './logo.svg';
import { useEffect } from "react";
import axios from "axios";
import { Table } from '../components/SkillTable';
import { Modal } from '../components/Modal';

export function DiscoverTeams() {
    
    const[essentialRoles, setEssentialRoles] = useState([])
    const[values, setValues] = useState([])
    const[reflectionQuestion1, setReflectionQuestion1] = useState([])
    const[reflectionQuestion2, setReflectionQuestion2] = useState([])
    const[reflectionQuestion3, setReflectionQuestion3] = useState([])

    const[modalOpen, setModalOpen] = useState(false);
    const [rows, setRows] = useState([ 

        {name: "", skills: "", past_experiences: "", areas_for_growth: ""},
        {name: "", skills: "", past_experiences: "", areas_for_growth: ""},
        {name: "", skills: "", past_experiences: "", areas_for_growth: ""},
    ]);
    const [rowToEdit, setRowToEdit] = useState(null);

    const [tasks, setTasks] = useState(['']);
    const [roles, setRoles] = useState(['']);
    const [otherForm, setOtherForm] = useState([])
    console.log(tasks)
    console.log(roles)
    console.log(otherForm)

    useEffect(()=> {
        axios.get(`http://localhost:3000/text-area-reflections/Teams`).then(res => {
            const teamsResponse = res.data;
            teamsResponse.sort((a, b) => a.entry_pos - b.entry_pos);
            setEssentialRoles(teamsResponse[0].reply);
            setValues(teamsResponse[1].reply)
            setReflectionQuestion1(teamsResponse[2].reply)
            setReflectionQuestion2(teamsResponse[3].reply)
            setReflectionQuestion3(teamsResponse[4].reply)

            axios.get("http://localhost:3000/matrix-reflections/Teams").then(res => {
                if (res.data[0].input.length > 0) {
                    setRows(res.data.map((item) => item.input)[0])
                }
                console.log("text")
                console.log(res.data)
                setTasks(res.data[0].tasks_rows)
                setRoles(res.data[0].roles_columns)
                setOtherForm(res.data.map((item) => item.rci_input)[0])
            })
        })
    }, [])

    const handleSubmit_database = (e, replyData) => {
        e.preventDefault();
        axios.patch(`http://localhost:3000/text-area-reflections/?page=Teams&entry_pos=${e.target.id}`, {
            reply: replyData
            
        })
    }
    const handleDeleteRow = (targetIndex) => {
        const data = rows.filter((_, idx) => idx !== targetIndex)
        setRows(data)
        
        axios.patch(`http://localhost:3000/matrix-reflections/?page=Teams&entry_pos=${0}`, {
            input: data
        });       
    }

    const handleEditRow = (idx) => {
        setRowToEdit(idx);
        setModalOpen(true);
    }
    
    const handleSubmit_matrix = (newRow) => {
        rowToEdit === null ?  
        
        setRows([...rows, newRow]) :
        
        setRows(rows.map((currRow, idx) => {
            if (idx !== rowToEdit) return currRow;
             return newRow
        }))
        
        
        let data = []
        rowToEdit === null ?  
        
        data = [...rows, newRow]:
        

        data = (rows.map((currRow, idx) => {
            if (idx !== rowToEdit) return currRow;
             return newRow
        }))

        axios.patch(`http://localhost:3000/matrix-reflections/?page=Teams&entry_pos=${0}`, {
            input: data
        });
    }

    const [flippedCards, setFlippedCards] = useState({});
    // State to hold tasks and roles

    
 
    // State to hold form data, initialized with default values
    const [formData, setFormData] = useState([]);
    //console.log(formData)

    //console.log(formData)

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
        console.log(e.target)
        const { name, value } = e.target;
        console.log(e.target.textContent);
        // Update formData state with the new value for the changed field
        //setOtherForm([{name: "responsible"}])
        //setFormData([{
        //...formData,
        //[name]: value,
        //}]);
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
    // Function to handle form submission
    /*
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        // Client-side validation to ensure required fields are filled in
        if (!formData.task1) {
        alert('Please enter at least one task.');
        return;
        }

        try {
        // Send formData to the backend API endpoint
        const response = await fetch('http://localhost:3000/matrix/submit', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json', // Specify that the request body is JSON
            },
            body: JSON.stringify(formData), // Convert formData to JSON string
        });

        // Check if the response is successful
        if (response.ok) {
            alert('Data submitted successfully!');
        } else {
            alert('Failed to submit data');
        }
        } catch (error) {
        console.error('Error:', error); // Log any errors that occur during the fetch
        }
    };
    */
    return (
        <div class="hero_teams_container">
            <div class="hero_teams_header">
                <h1>Forming Teams</h1>
                <div class="image_placeholder">
                    <p>Team pic</p>
                </div>
            </div>
            <div class="hero_teams_page">
                <h1>Create Effective Teams</h1>
                <h2 class="skills_title">Assess Skills and Experiences</h2>
                <div class="hero_team_members">
                    <div class="members">
                        <pic class="member_image_placeholder"> stock img </pic>
                        <h3> 1. Conduct skills inventory </h3>
                        <ul>
                            <li> Technical skills (e.g programming languages, design tools) </li>
                            <li>Soft skills (e.g communication, leadership, empathy)</li>
                            <li> Domain expertise revelant to the project </li>
                        </ul>  
                    </div>
                    <div class="members">
                        <pic class="member_image_placeholder"> stock img </pic>
                        <h3> 2. Consider past Experiences </h3>
                        <ul>
                            <li> previous redemptive technology project </li>
                            <li> Volunteer work or community involvement </li>
                            <li> Professional background </li>
                        </ul>  
                    </div>
                    <div class="members">
                        <pic class="member_image_placeholder"> stock img </pic>
                        <h3> 3. Identify areas of growth </h3>
                        <ul>
                            <li> Skills team members want to develop  </li>
                            <li> Oppiortunities for mentorship within the team  </li>
                        </ul>  
                    </div>
                </div>
                <div className="hero_skills_matrix">
                    <p> Exersice: Use the table below to create a skills matrix for your
                        community mapping individuals to their strengths and areas for growth The goal of this exercise is to help
                        you create a well rounded team
                    </p>
                    <h1 className="skills_matrix_title"> Skills Matrix </h1>
                    <Table rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
                        <button onClick={() => setModalOpen(true)}>Add Entry</button>

                        {modalOpen && (
                            <Modal closeModal={() => {
                                setModalOpen(false);
                                setRowToEdit(null);
                            }}
                            onSubmit={handleSubmit_matrix}
                            defaultValue={rowToEdit !== null && rows[rowToEdit]}
                            />
                    )}
                </div>
                <div className="hero_member_roles">
                    <h1 className = "member_roles_title"> Balance Technical and Non-Technical Roles </h1>
                    <p> Aim for a mix of roles such as ...</p>
             
                    <div className="roles-container">
                        <div className="title_circle">
                            <h3>Technical Roles</h3>
                            <div className="role technical">
                                
                            <ul>
                                <li> Software developers </li>
                                <li> UX/UI designers </li>
                                <li> Data Analysts </li>
                                <li> DevOps </li>
                            </ul>
                            </div>
                        </div>
                        <div className="arrow"></div>
                        <div className="title_circle">
                            <h3>Non-technical Roles</h3>
                            <div className="role non-technical">
                                
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
            <div className="hero_roles_needed">
                <p> In the box below list the essential roles needed</p>
                <p> Identify...</p>
                <label>
                    <form id='0' onSubmit={(e) => handleSubmit_database(e, essentialRoles)}>
                        <textarea name="skills" rows={10} cols={20}
                        placeholder="Enter text here..."
                        value={essentialRoles}
                        onChange={(e) => setEssentialRoles(e.target.value)}
                        />
                        <input type="submit" value="Save" />
                    </form>
                </label>
            
            </div>
            <div className="roles_and_responsibility">
                <h1> Define team Roles and Responsibilities </h1>
                <p>  Clear roles help teams function smoothly</p>
                <ul>
                    <li> 1. Define key responsibilities for each role </li>
                    <li> 2. Establish decision-making process </li>
                    <li> 3. Create a RACI (Responsible, Accountable, Consulted, informed) matrix for major projects task </li>
                    <li> 4. Allow for flexibility as the project evolves</li>
                </ul> 
            </div>

            <div className="hero_raci_matrix_container">
                <h1> RACI CHART </h1>
                <p className="race_matrix_explanation">  
                 A RACI chart—also known as a responsibility assignment matrix—is a diagram used in project management to define team roles across 4 categories: Responsible, Accountable, Consulted, and Informed. It helps clarify who does the work, who calls the shots, whose opinion matters, and who needs to stay in the loop for each task, milestone, or decision.
                </p>

                <div className="raci_matrix">
                    {raci_roles.map((role, index) => (
                        <div key={index} className={`flip_card ${flippedCards[index] ? 'flipped' : ''}`} onClick={() => handleFlip(index)}>
                            <div className="flip_card_inner">
                                <div className="flip_card_front">
                                    {role.letter}
                                </div>
                                <div className="flip_card_back">
                                    <h3>{role.title}</h3>
                                    <p>{role.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="hero_download_raci_matrix">
                    <p>Click to download an example </p>
                    <button> RACI Matrix </button>
                </div>

                <div class="hero_matrix_container">
                    <div className="input_fields_container">
                        <div className="task-input">
                            <label>Enter tasks:</label>
                            {tasks.map((task, index) => (
                            <div key={index} className="task-field">
                                <div className="input-wrapper">
                                <input
                                    type="text"
                                    value={task}// || formData[`task${index + 1}`]}
                                    onChange={(e) => handleTasksChange(index, e.target.value)}
                                    placeholder={`Task ${index + 1}`}
                                    className="input-field"
                                />
                                {tasks.length > 1 && (
                                    <button
                                    type="button"
                                    onClick={() => removeTask(index)}
                                    className="remove-button"
                                    aria-label="Remove task"
                                    >
                                    <CloseIcon />
                                    </button>
                                )}
                                </div>
                            </div>
                            ))}
                            <button type="button" onClick={addTask} className="add-button">
                            Add Task
                            </button>
                        </div>
                        <div className="role-input">
                            <label>Enter team roles:</label>
                            {roles.map((role, index) => (
                            <div key={index} className="role-field">
                                <div className="input-wrapper">
                                <input
                                    type="text"
                                    value={role}
                                    onChange={(e) => handleRolesChange(index, e.target.value)}
                                    placeholder={`Role ${index + 1}`}
                                    className="input-field"
                                />
                                {roles.length > 1 && (
                                    <button
                                    type="button"
                                    onClick={() => removeRole(index)}
                                    className="remove-button"
                                    aria-label="Remove role"
                                    >
                                    <CloseIcon />
                                    </button>
                                )}
                            </div>
                            </div>
                            ))}
                            <button type="button" onClick={addRole} className="add-button">
                            Add Role
                            </button>
                        </div>
                    </div>
                    <form id="0" className='raci_matrix_form' onSubmit={handleSubmit} >
                        <table className="hero-matrix">
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
            <div className='hero_faith_integration'> 
                <h1> Integrate Faith </h1>
                <p> Here are some ideas to intergrate faith into your team dynamics:</p>
                <ul>
                    <li> 1. Start meetings with praye ot devotional reflections </li>
                    <li> 2. Emphasize that our work should always point to jesus </li>
                    <li> 3. Highlight the importance of being Spirit-led in decision making </li>
                    <li> 4. Encourage team members to share with and pray for each other </li>
                </ul> 
            </div>

            <div className='hero_faithtech_pillars'>
                <div class="roof">
                    <div className='name_logo'>
                        <img className='logo' src={logo} alt="Logo" />
                        <div className='logo_name_fp'>FAITH</div>
                        <div className='logo_name_lp'>TECH</div>
                    </div>
                </div>
                    <div class="pillars">
                        <div class="pillar">
                            <div className='top_long_box'></div>
                            <div className='top_short_box'> </div>
                            <div className='middle_box'> 
                            <div className='line_container'>
                                    <div className='line'></div>
                                    <div className='line'></div>
                                    <div className='line'></div>
                                </div>
                            </div>
                            <div className='bottom_short_box'> </div>
                            <div className='bottom_long_box'>
                            <div class="text">It all points back to Jesus</div>   
                            </div>
                    
                        </div>
                        <div class="pillar">
                            <div className='top_long_box'></div>
                            <div className='top_short_box'> </div>
                            <div className='middle_box'> 
                            <div className='line_container'>
                                    <div className='line'></div>
                                    <div className='line'></div>
                                    <div className='line'></div>
                                </div>
                            </div>
                            <div className='bottom_short_box'> </div>
                            <div className='bottom_long_box'>
                                <div class="text">Led by the Spirit</div>    
                            </div>
                            
                        </div>
                        <div class="pillar">
                        <div className='top_long_box'></div>
                            <div className='top_short_box'> </div>
                            <div className='middle_box'> 
                                <div className='line_container'>
                                    <div className='line'></div>
                                    <div className='line'></div>
                                    <div className='line'></div>
                                </div>
                            </div>
                            <div className='bottom_short_box'> </div>
                            <div className='bottom_long_box'> 
                                <div class="text">Take a sacrificial posture</div>
                            </div>
                            
                        </div>
                        <div class="pillar">
                            <div className='top_long_box'></div>
                            <div className='top_short_box'> </div>
                            <div className='middle_box'> 
                            <div className='line_container'>
                                    <div className='line'></div>
                                    <div className='line'></div>
                                    <div className='line'></div>
                                </div>
                            </div>
                            <div className='bottom_short_box'> </div>
                            <div className='bottom_long_box'> 
                                <div class="text">People over Products</div>
                            </div> 
                        </div>
                        <div class="pillar">
                            <div className='top_long_box'></div>
                            <div className='top_short_box'> </div>
                            <div className='middle_box'> 
                            <div className='line_container'>
                                    <div className='line'></div>
                                    <div className='line'></div>
                                    <div className='line'></div>
                                </div>
                            </div>
                            <div className='bottom_short_box'>
                                <div class="text">Don't take ourselves </div>
                            </div>
                            <div className='bottom_long_box'> 
                                <div class="text"> too seriously</div>
                            </div>
                        </div>
                    </div>
            </div>

            <div className='hero_core_pillar_exercise'>
            <p> These are the core pillars that define everything we do at FaithTech. Develop values in addition 
                        to these that will guide your teams's work and decision making. 
                    </p>
                <div className='exercise'>
                    <label >
                        <p>
                            Document yout values in the space provided below
                        </p>
                        <form id='1' onSubmit={(e) => handleSubmit_database(e, values)}>
                            <textarea name="values" rows={10} cols={20}
                            placeholder="Enter text here..."
                            value={values}
                            onChange={(e) => setValues(e.target.value)}
                            />
                            <input type="submit" value="Save" />
                        </form>
                    </label>
                </div>
                <div className='Reflection_questions'>
                    <h1> Reflection Questions </h1>
                    
                    <div className='exercise'>
                        <label >
                            <p className='exercise_paragraph'>
                                Are we obedient to the Holy Spirit as we build out our teams?
                            </p>
                            <form id='2' onSubmit={(e) => handleSubmit_database(e, reflectionQuestion1)}>
                                <textarea className='exercise_label' rows={10} cols={20}
                                placeholder="Enter text here..."
                                value={reflectionQuestion1}
                                onChange={(e) => setReflectionQuestion1(e.target.value)}
                                />
                                <input type="submit" value="Save" />
                            </form>
                        </label>
                    </div>
                    <div className='exercise'>
                        <label>
                            <p className='exercise_paragraph' >
                                Are we leveraging the diverse gifts and experiences God has given our communty memberrs?
                            </p>
                            
                            <form id='3' onSubmit={(e) => handleSubmit_database(e, reflectionQuestion2)}>
                                <textarea className='exercise_label' rows={10} cols={20}
                                placeholder="Enter text here..."
                                value={reflectionQuestion2}
                                onChange={(e) => setReflectionQuestion2(e.target.value)}
                                />
                                <input type="submit" value="Save" />
                            </form>
                        </label>
                    </div>
                    <div className='exercise'>
                        
                        <label>
                            <p className='exercise_paragraph'>  
                                How can we ensure that every team member feels valued and has Oppiortunities to contribute meaningfully?      
                            </p>
                            <form id='4' onSubmit={(e) => handleSubmit_database(e, reflectionQuestion3)}>
                                <textarea className='exercise_label' rows={10} cols={20}
                                placeholder="Enter text here..."
                                value={reflectionQuestion3}
                                onChange={(e) => setReflectionQuestion3(e.target.value)}
                                />
                                <input type="submit" value="Save" />
                            </form>
                            
                        </label>
                    </div>

                    <p> 
                        Remember, forming a team for a 4D cycle project is not just about assembling skills, but about bringing together
                        individuals who can collectively pursue technology development in a way that honors God and serves others.
                     </p>
                </div>

            </div>
        </div>
    );
}

