import { useEffect, useState } from "react";
import axios from "axios";

export function DiscoverTeams() {
    
    const[skills, setSkills] = useState([])
    const[experience, setExperience] = useState([])

    useEffect(()=> {
        axios.get(`http://localhost:3000/text-area-reflections/Teams`).then(res => {
            const teamsResponse = res.data;
            teamsResponse.sort((a, b) => a.entry_pos - b.entry_pos);
            setSkills(teamsResponse[0].reply);
            setExperience(teamsResponse[1].reply)
            console.log("here")
        })
    }, [])

    const handleSubmit = (e, replyData) => {
        e.preventDefault(); 
        axios.patch(`http://localhost:3000/text-area-reflections/?page=Teams&entry_pos=${e.target.id}`, {
            reply: replyData
        })
    }

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
                        <p class="image_placeholder">Pic (ex: person coding)</p>
                        <div class="member_skills">
                            <div className="skills">
                                <h3> skills </h3>
                                <label>
                                <form id='0' onSubmit={(e) => handleSubmit(e, skills)}>
                                    <textarea name="skills" rows={4} cols={40}
                                    placeholder="Enter text here..."
                                    value={skills}
                                    onChange={(e) => setSkills(e.target.value)}
                                    />
                                    <input type="submit" value="Save" />
                                </form>
                                </label>
                            </div>
                            <div className="Experience">
                                <h3> Experience </h3>
                                <label>
                                <form id='1' onSubmit={(e) => handleSubmit(e, experience)}>
                                    <textarea name="experience" rows={4} cols={40}
                                    placeholder="Enter text here..."
                                    value={experience}
                                    onChange={(e) => setExperience(e.target.value)}
                                    />
                                    <input type="submit" value="Save" />
                                </form>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero_skills_matrix">
                    <p> Use the table below to create a skills matrix for your
                        community mapping individuals to their strengths and areas for growth The goal of this exercise is to help
                        you create a well rounded team
                    </p>
                    <h1 className="skills_matrix_title"> Skills Matrix </h1>
                    <div className="skills-matrix">
                    <table>
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Skills</th>
                            <th>Past Experiences</th>
                            <th>Areas for Growth</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>row</td>
                            <td>skills</td>
                            <td>past_experiences</td>
                            <td>areas_for_growth</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
                <div className="hero_member_roles">
                    <h1 className = "member_roles_title"> Balance Technical and Non-Technical Roles </h1>
                    <p> Aim for a mix of roles such as ...</p>
             
                    <div className="roles-container">
                        <div className="title_circle">
                            <h3>Technical Roles</h3>
                            <div className="role technical">
                                
                                <ul>
                                <li> Leadership </li>
                                <li>Role 2</li>
                                <li>Role 3</li>
                                <li>Role 4</li>
                                </ul>
                            </div>
                        </div>
                        <div className="arrow"></div>
                        <div className="title_circle">
                            <h3>Non-technical Roles</h3>
                            <div className="role non-technical">
                                
                                <ul>
                                <li> c++ </li>
                                <li>Role 2</li>
                                <li>Role 3</li>
                                <li>Role 4</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero_roles_needed">
                <p> In the box below list the essential roles needed </p>
                <p> Identify...</p>
                <label>
                    <textarea name="skills" rows={10} cols={40} />
                </label>
            
                <div className="roles_and_responsibility">
                    <h1> Define team Roles and Responsibilities </h1>
                    <p> Clear roles help teams function smoothly </p>
                    <nmb> 1 </nmb>
                    <li> Define </li>
                    <nmb> 2 </nmb>
                    <li> Extablish </li>
                    <nmb> 3 </nmb>
                    <li>Create a RACI matrix </li>
                    <nmb> 4 </nmb>
                    <li> Allow </li>

                </div>
            </div>
        </div>
    );
}