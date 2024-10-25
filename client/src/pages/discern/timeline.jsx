import { Link } from 'react-router-dom';
import '../stylesheets/problem.css';
export function DiscernTimeline() {
    return (
        <>
            <div id="oTopImage">
                <h3 class="oTitle"><sc>Timeline</sc></h3>
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
                <div class="flex-container">
                    <div class="divcircle"><p>Short-term sprints (1-4 weeks)</p></div>
                    <div class="divcircle"><p>Medium-term projects (1-3 months)</p></div>
                    <div class="divcircle"><p>Long-term initiatives (3+ months)</p></div>
                </div>
                <p>You could run a 4-week Create Cycle if you're working on a short-term project. Alternatively, you could run a 12-week Create Cycle for a medium-term project. If you're leading multiple projects in your community, a 12-week Create Cycle may be a good rhythm that works well for short- and medium term projects. You can repeat multiple Create Cycles for long-term initiatives.</p>
                <p>Exercise: For your chosen project, list pros and cons for each duration option. Discuss with your team to reach a consensus.</p>
            </div>
            <div className='body'>
                <h1>Develop a Create Roadmap</h1>
                <p>
                    <li>Identify the rhythm for your community meetups or team meetings.</li>
                    <li>If needed, map out additional opportunities to meet.</li>
                    <li>Allocate prep time for sourcing projects, team formation</li>
                    <li>Drop in key milestones for each 4D Cycle stage.</li>     
                    <li>Use project management tools (e.g., Trello, Asana) to visualize the roadmap</li>
                </p>
                <p>Exercise: Develop a timeline for your Create Cycle, including key milestones for each stage (Discover, Discern, Develop, Demonstrate).</p>
                <p>Also, consider setting sprint durations.</p>
                <p>Example timeline:</p>
                <div class="imageArea"></div>
            </div>
            <div className='body'>
                <h1>Manage Timeline Expectations</h1>
                <p>INSERT GRAPHICS</p>
            </div>
            <div className='body'>
                <h1>Communication Plan</h1>
                <p>Share your team's communication method, platforms, or plan.</p>
                <div class="divbox"><form><textarea className='communication'>...</textarea></form></div>
            </div>
        </>
    )
}