import { Link } from "react-router-dom";
import React from 'react';
import styles from './story.module.css';
import { useEffect, useState } from 'react';
import axios from "axios";
import team_pic from '../images/hostIdeaSessions.jpg';  

export function Story() {
    const [form_data, setform_data] = useState({
        id: 0,
        user_name: '',
        email: '',
        project_state:'',
        challenges: '',
        project_status: '',
        project_summary: '',
        project_link: '',
        project_images: '',
        project_fulfillment: '',
        additional_info: '',
        share_info: '',
    });

    const baseURL = "http://localhost:3000/story"
    
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setform_data({ ...form_data, [name]: value });
    };
    
    const submit_form = (e) => {
        e.preventDefault();
        console.log("Submitting form data:", form_data);
        axios.post(baseURL, form_data)
            .then(() => {
                console.log("Form submitted successfully");
                // Optionally, reset the form or navigate to another page
            })
            .catch(error => {
                if (error.response) {
                    console.error("Server error details:", error.response.data);
                } else {
                    console.error("Error submitting form:", error);
                }
            });
    };
    

    useEffect(() => {
        axios.get(baseURL)
            .then(response => {
                console.log(response.data)
                const fetchedData = response.data[response.data.length -1] || {};
                setform_data(prevFormData => ({
                    ...prevFormData,
                    ...fetchedData,
                }));
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, []);
     
    return (
        <>
           <div className={styles.hero_story_container}>
                <div className={styles.hero_story_header}>
                    <h1> Share Your Story </h1>
                </div>

                <div className={styles.stories_instructions}>
                    <h1> Wher to share? </h1>
                    <p> Share your story with your FaithTech community. Share regularly at community gatherings or meetups. Consider sharing with local churches, schools, nonprofits, or whoever might benefit from hearing your solution. </p>

                    <h1> How to Share?</h1>
                    <p> Pause and take time to share project challenges and celebrate key milestones. The Presentation Guide will walk you through some talking points you can cover when presenting your solution. Feel free to skip certain questions or add your own. These questions were created with the FaithTech community in mind as an audience. Consider how different audiences should impact your talking points. </p>
                </div>
                <div className={styles.presenatation_guide_container}>
                    <h2 className={styles.oLamenth2}> Presentation Guide </h2>
                    <div className={styles.oScriptureBoxOne}>
                        <div className={styles.oNumberBox}>
                            <p2 className={styles.oLamentp2}>
                                <num>1		</num>
                            </p2>
                        </div>
                        <p2 className={styles.oLamentp2}>Who are you? Tell them about your team.</p2>
                    </div>
                    <br></br>
                    <div className={styles.oScriptureBoxTwo}>
                        <div className={styles.oNumberBox}>
                            <p2 className={styles.oLamentp2}>
                                <num>2		</num>
                            </p2>
                        </div>
                        <p2 className={styles.oLamentp2}>What are you working on? Share details about your project.</p2>
                    </div>
                    <br></br>
                    <div className={styles.oScriptureBoxThree}>
                        <div className={styles.oNumberBox}>
                            <p2 className={styles.oLamentp2}>
                                <num>3		</num>
                            </p2>
                        </div>
                        <p2 className={styles.oLamentp2}>What is going well? Highlight your progress and successes.</p2>
                    </div>
                    <br></br>
                    <div className={styles.oScriptureBoxFour}>
                        <div className={styles.oNumberBox}>
                            <p2 className={styles.oLamentp2}>
                                <num>4		</num>
                            </p2>
                        </div>
                        <p2 className={styles.oLamentp2}>What has not gone well, or what challenges have you faced in the project? Share the obstacles you've encountered.</p2>
                    </div>
                    <br></br>
                    <div className={styles.oScriptureBoxFive}>
                        <div className={styles.oNumberBox}>
                            <p2 className={styles.oLamentp2}>
                                <num>5	</num>
                            </p2>
                        </div>
                        <p2 className={styles.oLamentp2}>What are you enjoying? Discuss the aspects of the project you find most rewarding.
                        </p2>
                    </div>
                    <br></br>
                    <div className={styles.oScriptureBoxSix}>
                        <div className={styles.oNumberBox}>
                            <p2 className={styles.oLamentp2}>
                                <num>6		</num>
                            </p2>
                        </div>
                        <p2 className={styles.oLamentp2}>Demo the current state of the project. Showcase your solution to the audience.</p2>
                    </div>
                </div>

                <div className={styles.stories}>
                    <h1> Stories</h1>
                    <p> Fill out the information below to apply to have your project featured in stories. Allowing us to share your story here is a great way to inspire FaithTech communities all over the world. </p>
                    <div className={styles.story_form}>
                    <form className={styles.stories_form} onSubmit={(e) => submit_form(e, form_data)}>
                        <h1>Share Your Story</h1>
                        <p>Inspire FaithTech communities by sharing your project and reflections.</p>

                        <div className={styles.form_group}>
                            <label htmlFor="user_name">Your Name:</label>
                            <textarea
                            type="text"
                            id="user_name"
                            name="user_name"
                            value={form_data.user_name}
                            onChange={handleChange}
                            required
                            />
                        </div>

                        <div className={styles.form_group}>
                            <label htmlFor="email">Email Address:</label>
                            <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder='Enter your email address'
                            value={form_data.email}
                            onChange={handleChange}
                            required
                            />
                        </div>

                        <div className={styles.form_group}>
                            <label htmlFor="project_tate"> Are you running Create as part of a community? </label>
                            <textarea
                            id="project_state"
                            name="project_state"
                            value={form_data.project_state}
                            onChange={handleChange}
                            rows="4"
                            placeholder='Is this part of a local FaithTech community, please share the city name or Online if you are working online'

                            />
                        </div>

                        <div className={styles.form_group}>
                            <label htmlFor="project_name"> Which Project did you work on? </label>
                            <textarea
                            id="challenges"
                            name="challenges"
                            value={form_data.challenges}
                            onChange={handleChange}
                            rows="2"
                            placeholder="Enter you Answer"
                            />
                        </div>

                        <div className={styles.form_group}>
                            <label htmlFor="project_status"> How would you describe your teams project status </label>
                            <textarea
                            id="project_status"
                            name="project_status"
                            value={form_data.project_status}
                            onChange={handleChange}
                            rows="2"
                            placeholder='inprogress, complete'
                            />
                        </div>


                        <div className={styles.form_group}>
                            <label htmlFor="project_summary"> Please share a quick summary of your project </label>
                            <textarea
                            id="project_summary"
                            name="project_summary"
                            value={form_data.project_summary}
                            onChange={handleChange}
                            
                            rows="8"
                            placeholder="Feel free to cover areas like: what you are doing, why the project matters , Tech stack your are building on what input and support you could use"
                            />
                        </div>


                        <div className={styles.form_group}>
                            <label htmlFor="project_link"> Does you project have a live website is so share the link below</label>
                            <textarea
                            id="project_link"
                            name="project_link"
                            value={form_data.project_link}
                            onChange={handleChange}
                            
                            rows="4"
                            placeholder="Enter link"
                            />
                        </div>

                        <div className={styles.form_group}>
                            <label htmlFor="challenges"> Do you have any photos of your team or screenshots you'd like to share? Please attach them below"</label>
                            <textarea
                            id="project_images"
                            name="project_images"
                            value={form_data.project_images}
                            onChange={handleChange}
                            
                            rows="4"
                            placeholder="Create a image attachment section"
                            />
                        </div>

                        <div className={styles.form_group}>
                            <label htmlFor="project_fulfillment"> How has the FaithTech Create program impacted you personally </label>
                            <textarea
                            id="project_fulfillment"
                            name="project_fulfillment"
                            value={form_data.project_fulfillment}
                            onChange={handleChange}
                            
                            rows="4"
                            placeholder="Enter your answer"
                            />
                        </div>

                        <div className={styles.form_group}>
                            <label htmlFor="additional_info"> Anything else you'd like to share  </label>
                            <textarea
                            id="additional_info"
                            name="additional_info"
                            value={form_data.additional_info}
                            onChange={handleChange}
                            
                            rows="4"
                            placeholder="Enter your answer"
                            />
                        </div>

                        <div className={styles.form_group}>
                            <label htmlFor="share_info"> May we share some of the information in our marketing </label>
                            <textarea
                            id="share_info"
                            name="share_info"
                            value={form_data.share_info}
                            onChange={handleChange}
                            
                            rows="4"
                            placeholder="We'd love to share impact on this project with our donors and communitu in things like reports and social media. We'll only use first names in nay personal refrencess"
                            />
                        </div>
                        <button  type="submit" value="save">Submit Your Story</button>
                        </form>
                    </div>
                </div>
                <div className={styles.reflection_questions}>
                    <p> In what ways might this approach to demonstrating impact change your development process </p>
                    <form className={styles.reflection_questions_field}>
                         <textarea
                            id="share_info"
                            name="share_info"
                            value={form_data.reflection}
                            onChange={handleChange}
                            
                            rows="4"
                            placeholder="Enter answer"
                            />
                        <input type="submit" value="Save" />
                    </form>
                </div>

                <p> In the Demonstrate stage, we focus on the relational and spiritual impact of our work. Remember that true redemptive impact often takes time and is measured in transformed lives and communities. </p>

            <div className='bottomLinks'>
                <Link to="/discern/timeline">Timeline</Link>
                
            </div>

           </div>
           <div className='bottomLinks'>
                    <div>
                        <p>Previous</p>
                        <Link to="/demonstrate/measure">Measure</Link>
                    </div>
                    <div>
                        <p>Next</p>
                        <Link to="/demonstrate/conclusion">Conclusion</Link>
                    </div>
                </div>
        </>
    )
}