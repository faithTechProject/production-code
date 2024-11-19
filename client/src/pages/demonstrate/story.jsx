import React, { useState } from 'react';
import '../stylesheets/story.css';

export function Story() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        projectTitle: '',
        projectDescription: '',
        challenges: '',
        milestones: '',
        currentState: '',
        comments: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Submit form data to your server or API
        console.log('Form Submitted:', formData);
      };
    return (
        <>
           <div className="hero_story">
                <div className="hero_analysis_header">
                    <h1> Share Your Story </h1>
                    <div className="image_placeholder">
                        <p>Team pic</p>
                    </div>
                </div>

                <div>
                    <h1> Wher to share? </h1>
                    <p> Share your story with your FaithTech community. Share regularly at community gatherings or meetups. Consider sharing with local churches, schools, nonprofits, or whoever might benefit from hearing your solution. </p>

                    <h1> How to Share?</h1>
                    <p> Pause and take time to share project challenges and celebrate key milestones. The Presentation Guide will walk you through some talking points you can cover when presenting your solution. Feel free to skip certain questions or add your own. These questions were created with the FaithTech community in mind as an audience. Consider how different audiences should impact your talking points. </p>
                </div>

                <div className="presentation_guide"> 
                    <h1> Presentation Guide </h1>
                    <ul>
                        <li>Who are you? Tell them about your team.</li>
                        <li> What are you working on? Share details about your project.</li>
                        <li> What is going well? Highlight your progress and successes.</li>
                        <li> What has not gone well, or what challenges have you faced in the project? Share the obstacles you've encountered.</li>
                        <li>What are you enjoying? Discuss the aspects of the project you find most rewarding.</li>
                        <li>Demo the current state of the project. Showcase your solution to the audience.</li>
                    </ul>
                </div>

                <div className="stories">
                    <h1> Stories</h1>
                    <p> Fill out the information below to apply to have your project featured in stories. Allowing us to share your story here is a great way to inspire FaithTech communities all over the world. </p>
                    <div className="story_form">
                    <form className="stories-form" onSubmit={handleSubmit}>
                        <h1>Share Your Story</h1>
                        <p>Inspire FaithTech communities by sharing your project and reflections.</p>

                        <div className="form-group">
                            <label htmlFor="name">Your Name:</label>
                            <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email Address:</label>
                            <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder='Enter your email address'
                            value={formData.email}
                            onChange={handleChange}
                            required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="project_tate"> Are you running Create as part of a community? </label>
                            <textarea
                            id="project_state"
                            name="project_state"
                            value={formData.project_state}
                            onChange={handleChange}
                            rows="4"
                            placeholder='Is this part of a local FaithTech community, please share the city name or Online if you are working online'

                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="project_name"> Which Project did you work on? </label>
                            <textarea
                            id="challenges"
                            name="challenges"
                            value={formData.challenges}
                            onChange={handleChange}
                            rows="2"
                            placeholder="Enter you Answer"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="projectStatus"> How would you describe your teams project status </label>
                            <textarea
                            id="projectStatus"
                            name="projectStatus"
                            value={formData.projectStatus}
                            onChange={handleChange}
                            rows="2"
                            placeholder='inprogress, complete'
                            />
                        </div>


                        <div className="form-group">
                            <label htmlFor="project_summary"> Please share a quick summary of your project </label>
                            <textarea
                            id="project_summary"
                            name="project_summary"
                            value={formData.project_summary}
                            onChange={handleChange}
                            
                            rows="8"
                            placeholder="Feel free to cover areas like: what you are doing, why the project matters , Tech stack your are building on what input and support you could use"
                            />
                        </div>


                        <div className="form-group">
                            <label htmlFor="project_link"> Does you project have a live website is so share the link below</label>
                            <textarea
                            id="project_link"
                            name="project_link"
                            value={formData.project_link}
                            onChange={handleChange}
                            
                            rows="4"
                            placeholder="Enter link"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="challenges"> Do you have any photos of your team or screenshots you'd like to share? Please attach them below"</label>
                            <textarea
                            id="project_images"
                            name="project_images"
                            value={formData.project_images}
                            onChange={handleChange}
                            
                            rows="4"
                            placeholder="Create a image attachment section"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="project_fulfillment"> How has the FaithTech Create program impacted you personally </label>
                            <textarea
                            id="project_fulfillment"
                            name="project_fulfillment"
                            value={formData.project_fulfillment}
                            onChange={handleChange}
                            
                            rows="4"
                            placeholder="Enter your answer"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="additional_info"> Anything else you'd like to share  </label>
                            <textarea
                            id="additional_info"
                            name="additional_info"
                            value={formData.additional_info}
                            onChange={handleChange}
                            
                            rows="4"
                            placeholder="Enter your answer"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="share_info"> May we share some of the information in our marketing </label>
                            <textarea
                            id="share_info"
                            name="share_info"
                            value={formData.share_info}
                            onChange={handleChange}
                            
                            rows="4"
                            placeholder="We'd love to share impact on this project with our donors and communitu in things like reports and social media. We'll only use first names in nay personal refrencess"
                            />
                        </div>
                        <button type="submit">Submit Your Story</button>
                        </form>
                    </div>
                </div>
                <div className='reflection_questions'>
                    <p> In what ways might this approach to demonstrating impact change your development process </p>
                    <form >
                        <textarea name="skills" rows={10} cols={20}
                        placeholder="Prayer...."
                        >   
                        </textarea>
                        <input type="submit" value="Save" />
                    </form>
                </div>

                <p> In the Demonstrate stage, we focus on the relational and spiritual impact of our work. Remember that true redemptive impact often takes time and is measured in transformed lives and communities. </p>

           </div>
        </>
    )
}