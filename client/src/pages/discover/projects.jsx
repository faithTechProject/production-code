import '../stylesheets/discoverProjects.css';
import { Link } from "react-router-dom";
export function DiscoverProjects() {
    function toggle(x) {
        console.log(getComputedStyle(document.getElementsByClassName('cover')[x]).getPropertyValue('height'))
        if (getComputedStyle(document.getElementsByClassName('cover')[x]).getPropertyValue('height') !== '90px') {
            document.getElementsByClassName('cover')[x].style.setProperty('height','var(--button-height)')
        } else {
            document.getElementsByClassName('cover')[x].style.setProperty('height','calc(var(--var-height) - var(--image-height))')
        }
    }
    return (
        <>
            <div id="oTopImage">
                <h3 class="oTitle">SOURCING <sc>CREATE</sc> PROJECTS</h3>
            </div>
            <div className="body">
                <h1>The 4D Cycle</h1>
                <p>To effectively lead projects using the 4D Cycle, it's crucial to have a deep understanding of each stage.</p>
                <div class="infoDeck">
                    <div className= "card">
                        <div class="image"></div>
                            <ul className='content'>
                                <li>Invite your community to brainstorming workshops and hear what breaks their hears for their communities. You could also invite tech professionals and local leaders to these sessions.</li>
                                <li>Develop a system to evaluate and prioritize the generated ideas based on redemptive technology impact.</li>
                            </ul>
                        <button id="cover" class="cover" onClick={() => toggle(0)}>Host Ideation Sessions</button>
                    </div>
                    <div className= "card">
                        <div class="image"></div>
                            <ul className='content'>
                                <li>Organize small groups to walk through different areas of your community, observing and noting technological challenges or opportunities that affect marginalized communities.</li>
                                <li>Attend local government meetings where you can discover community issues that could benefit from technological solutions.</li>
                            </ul>
                        <button id="cover" class="cover" onClick={() => toggle(1)}>Identify Local Needs</button>
                    </div>
                    <div className= "card">
                        <div class="image"></div>
                            <ul className='content'>
                                <li>Reach out to local non-profits who may have technological needs but lack resources to address them.</li>
                                <li>Connect with churches who often have insights into community needs and may have their own technological challenges.</li>
                                <li>Attend charity events to learn about ongoing projects that need technical support.</li>
                            </ul>
                        <button id="cover" class="cover" onClick={() => toggle(2)}>Partner with Non-Profits/Churches</button>
                    </div>
                    <div className= "card">
                        <div class="image"></div>
                            <ul className='content'>
                                <li>Consider partnering with computer science departments including those at Christian institutions who may have ongoing projects or research that benefit from community collaboration.</li>
                                <li>Reach out to student groups at universities who sometimes have tech-for-good or social entrepreneurship clubs that might be interested in collaboration.</li>
                                <li>Propose a mentorship program where your group mentors students on redemptive technology design through building projects.</li>
                            </ul>
                        <button id="cover" class="cover" onClick={() => toggle(3)}>Engaging Local Schools and Universities</button>
                    </div>
                    <div className= "card">
                        <div class="image"></div>
                            <ul className='content'>
                                <li>Conduct a technology audit: Assess how technology is currently used in your community and identify areas for improvement.</li>
                                <li>Look for tech disparities: Identify groups or areas in your community that may be underserved by current technology.</li>
                                <li>Consider emerging technologies: Brainstorm how new technologies (e.g., AI, IoT, blockchain) could be applied redemptively in your community.</li>
                            </ul>
                        <button id="cover" class="cover" onClick={() => toggle(4)}>Analyzing Existing Technology Use</button>
                    </div>
                </div>
            </div>
            <div className='body'>
                <h1>Host Ideation Session</h1>
                <p>Use the box below to document all ideas from your idea session. Include a short list of potential projects.</p>
                <h2>List of Ideas</h2>
                <textarea className="inputText projects"></textarea>
            </div>
            <div className='body'>
                <h1>Identifying Local Needs</h1>
                <p>Highlight three areas in your community where technology could address local challenges. 
                    Label the area of your community in the "Title" section, and use the space below it to note technological challenges or issues that technology could address.
                </p>
                <h2>Community Needs</h2>
                <div className='communityDeck'>
                    <div className='card'>
                        <textarea className='title  projects' placeholder='Title...'></textarea>
                        <textarea className='description projects' placeholder='Description of challenges...'></textarea>
                    </div>
                    <div className='card'>
                        <textarea className='title  projects' placeholder='Title...'></textarea>
                        <textarea className='description  projects' placeholder='Description of challenges...'></textarea>
                    </div>
                    <div className='card'>
                        <textarea className='title  projects' placeholder='Title...'></textarea>
                        <textarea className='description  projects' placeholder='Description of challenges...'></textarea>
                    </div>
                </div>
            </div>
            <div className='body'>
                <h1>Partnering with Non-Profits/Churches</h1>
                <p>Use the matrix below to list potential non-profit and church partners, their needs, and potential project ideas.</p>
                <h2>Partnership Matrix</h2>
            </div>
            <div className='body'>
                <h1>Engage with Local Schools and Universities</h1>
                <p>Use the template provided below to develop a proposal for a collaborative project or mentorship program with a local educational institution.</p>
                <h2>Proposal Template</h2>
                <textarea className='projects' id='educationProposal'></textarea>
            </div>
            <div className='body'>
                <h1>Analyze Existing Technology</h1>
                <p>Use the following boxes to highlight current uses, gaps, and opportunities for redemptive technology projects.</p>
                <h2>Technology Use</h2>
                <p>Technology Audit: Assess how technology is currently used.</p>
                <textarea className='projects' id='techAudit'></textarea>
                <p>Technology Disparities: Identify gaps.</p>
                <textarea className='projects' id='techGaps'></textarea>
                <p>Emerging Technology: Brainstorm opportunities.</p>
                <textarea className='projects' id='techOpportunities'></textarea>
            </div>
        </>
    )
}