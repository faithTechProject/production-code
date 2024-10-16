import { Link } from 'react-router-dom';
import '../stylesheets/problem.css';

export function DiscoverProblem() {
    return (
        <>
            <div id="oTopImage">
                <h3 class="oTitle"><sc>PROBLEM</sc></h3>
            </div>
            <div class="problem">
                <h2></h2>
                <div className='body'>
                    <h1>Identify</h1>
                    <p>Now that you've identified impactful opportunities for redemptive technology in your community and have
                    started to form your team it's time to choose a problem. Feel free to refer back to the <a href="/project#/project">Projects Page. </a> 
                    If you completed all the exercises on that page you should hopefully have numerous project
                    ideas. If you're still unsure take time to pray and ask God for direction. Ask your team to pray as
                    well and then gather together to discuss and decide on a problem you feel called
                    to work on.</p>
                    <input type="text" id="probId" name="probId" placeholder="Problem Identified..."></input>
                </div>
                <div className='body'>
                    <h1>Describe</h1>
                    <p>Write a brief 2-3 sentence description of the
                    problem. Start with a challenge statement if you have one (ie. How might we...?)
                    Note, a challenge statement is not necessary at this stage of the project.</p>
                    <input type="text" id="probDesc" name="probDesc" placeholder="Problem Description..."></input>
                </div>
                <div className='body'>
                    <h1>Groups Affected</h1>        
                    <br></br>     
                    <div class="rotate-element"><div class="unrotate-element">Problem</div></div>
                    <br></br>
                    <br></br>
                    <div class="flex-container">
                        <div class="divbox"><form>Group 1<textarea className='groupsAffected'>text</textarea></form></div>
                        <div class="divbox"><form>Group 2<textarea className='groupsAffected'>text</textarea></form></div>
                        <div class="divbox"><form>Group 3<textarea className='groupsAffected'>text</textarea></form></div>
                    </div>
                    <p>In the boxes above enter the three groups of people who are most affected
                    by this problem. Feel free to add more than one group to a box if three isn't enough to cover
                    the majority of those impacted by this issue</p>
                </div>
            </div>
        </>
    )
}