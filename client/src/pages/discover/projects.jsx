import { useEffect, useState } from 'react';
import '../stylesheets/discoverProjects.css';
import { Link, useActionData } from "react-router-dom";
import axios from 'axios';
export function DiscoverProjects() {
    
    const[listOfIdeas, setListOfIdeas] = useState([])

    const[textAreaTitle1, setTextAreaTitle1] = useState([]);
    const[textAreaTitle2, setTextAreaTitle2] = useState([]);
    const[textAreaTitle3, setTextAreaTitle3] = useState([]);
    
    const[textAreaReply1, setTextAreaReply1] = useState([]); 
    const[textAreaReply2, setTextAreaReply2] = useState([]); 
    const[textAreaReply3, setTextAreaReply3] = useState([]); 

    const[proposalTemplate, setPropasalTemplate] = useState([])

    const[technologyAudit, setTechnologyAudit] = useState([])
    const[technologyDisparities, setTechnologyDisparities] = useState([])
    const[technologyEmerging, setTechnologyEmerging] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3000/text-area-reflections/Projects`).then(res => {
            const data = res.data.map((item) => item)
            data.sort((a, b) => a.entry_pos - b.entry_pos); // sort by entry_pos in ascending order
            
            setListOfIdeas(data[0].reply)

            setTextAreaTitle1(data[1].title)
            setTextAreaReply1(data[1].reply)

            setTextAreaTitle2(data[2].title)
            setTextAreaReply2(data[2].reply)

            setTextAreaTitle3(data[3].title)
            setTextAreaReply3(data[3].reply)

            setPropasalTemplate(data[4].reply)

            setTechnologyAudit(data[5].reply)
            setTechnologyDisparities(data[6].reply)
            setTechnologyEmerging(data[7].reply)

            })
    }, [])

    const handleSubmit = (e, titleData, replyData) => {
        e.preventDefault();
        console.log(titleData)
        console.log(typeof(titleData))
        console.log(typeof(replyData))
        axios.patch(`http://localhost:3000/text-area-reflections/?page=Projects&entry_pos=${e.target.id}`, {
            title: titleData,
            reply: replyData
        })

    }

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
                <form id='0' onSubmit={(e) => handleSubmit(e, "List of Ideas", listOfIdeas)}>
                    <textarea className="inputText"
                        value={listOfIdeas}
                        onChange={(e) => setListOfIdeas(e.target.value)}>
                    </textarea>
                    <input type="submit" value="Save" />
                </form>
            </div>
            <div className='body'>
                <h1>Identifying Local Needs</h1>
                <p>Highlight three areas in your community where technology could address local challenges. 
                    Label the area of your community in the "Title" section, and use the space below it to note technological challenges or issues that technology could address.
                </p>
                <h2>Community Needs</h2>
                <div className='communityDeck'>
                    <div>
                        <form className='card' id='1' onSubmit={(e) => handleSubmit(e, textAreaTitle1, textAreaReply1)}>
                            <textarea className='title' 
                                placeholder='Title...'
                                value={textAreaTitle1}
                                onChange={(e) => setTextAreaTitle1(e.target.value)}>
                            </textarea>
                            <textarea className='description'
                                placeholder='Description of challenges...'
                                value={textAreaReply1}
                                onChange={(e) => setTextAreaReply1(e.target.value)}>
                            </textarea>
                            <input type="submit" value="Save" />
                        </form>
                    </div>
                    <div>
                        <form className='card' id='2' onSubmit={(e) => handleSubmit(e, textAreaTitle2, textAreaReply2)}>
                            <textarea className='title'
                                placeholder='Title...'
                                value={textAreaTitle2}
                                onChange={(e) => setTextAreaTitle2(e.target.value)}>
                            </textarea>
                            <textarea className='description'
                                placeholder='Description of challenges...'
                                value={textAreaReply2}
                                onChange={(e) => setTextAreaReply2(e.target.value)}>
                            </textarea>
                            <input type="submit" value="Save" />
                        </form>
                    </div>
                    <div>
                        <form className='card' id='3' onSubmit={(e) => handleSubmit(e, textAreaTitle3, textAreaReply3)}>
                            <textarea className='title'
                                placeholder='Title...'
                                value={textAreaTitle3}
                                onChange={(e) => setTextAreaTitle3(e.target.value)}>
                            </textarea>
                            <textarea className='description'
                                placeholder='Description of challenges...'
                                value={textAreaReply3}
                                onChange={(e) => setTextAreaReply3(e.target.value)}>
                            </textarea>
                            <input type="submit" value="Save" />
                        </form>
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
                <form id='4' onSubmit={(e) => handleSubmit(e, "Proposal Template", proposalTemplate)}>
                    <textarea className="inputText"
                        value={proposalTemplate}
                        onChange={(e) => setPropasalTemplate(e.target.value)}>
                    </textarea>
                    <input type="submit" value="Save" />
                </form>
            </div>
            <div className='body'>
                <h1>Analyze Existing Technology</h1>
                <p>Use the following boxes to highlight current uses, gaps, and opportunities for redemptive technology projects.</p>
                <h2>Technology Use</h2>
                <p>Technology Audit: Assess how technology is currently used.</p>
                <form id='5' onSubmit={(e) => handleSubmit(e, "Technology Use", technologyAudit)}>
                    <textarea className="inputText"
                        value={technologyAudit}
                        onChange={(e) => setTechnologyAudit(e.target.value)}>
                    </textarea>
                    <input type="submit" value="Save" />
                </form>
                <p>Technology Disparities: Identify gaps.</p>
                <form id='6' onSubmit={(e) => handleSubmit(e, "Technology Use", technologyDisparities)}>
                    <textarea className="inputText"
                        value={technologyDisparities}
                        onChange={(e) => setTechnologyDisparities(e.target.value)}>
                    </textarea>
                    <input type="submit" value="Save" />
                </form>
                <p>Emerging Technology: Brainstorm opportunities.</p>
                <form id='7' onSubmit={(e) => handleSubmit(e, "Technology Use", technologyEmerging)}>
                    <textarea className="inputText"
                        value={technologyEmerging}
                        onChange={(e) => setTechnologyEmerging(e.target.value)}>
                    </textarea>
                    <input type="submit" value="Save" />
                </form>
            </div>
        </>
    )
}