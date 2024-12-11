import { Link } from 'react-router-dom';
import styles from './timeline.module.css';
import stylest from './timelineExample.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
export function DiscernTimeline() {
    
    const[communication, setCommunication] = useState([])

    useEffect(()=> {
        axios.get(`http://localhost:3000/text-area-reflections/Timeline`).then(res => {
            const response = res.data;
            response.sort((a, b) => a.entry_pos - b.entry_pos);
            setCommunication(response[0].reply);
        })
    }, [])

    const handleSubmit = (e, replyData) => {
        e.preventDefault(); 
        axios.patch(`http://localhost:3000/text-area-reflections/?page=Timeline&entry_pos=${e.target.id}`, {
            reply: replyData
        })
    }
    
    return (
        <>
            <div id={styles.oTopImage}>
                <h3 className={styles.oTitle}><sc>Timeline</sc></h3>
            </div>
            <div className='body'>
                <div className={styles.section}>
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
                    <div className={styles.flex_container}>
                        <div className={styles.divcircle}><p>Short-term sprints (1-4 weeks)</p></div>
                        <div className={styles.divcircle}><p>Medium-term projects (1-3 months)</p></div>
                        <div className={styles.divcircle}><p>Long-term initiatives (3+ months)</p></div>
                    </div>
                    <p>You could run a 4-week Create Cycle if you're working on a short-term project. Alternatively, you could run a 12-week Create Cycle for a medium-term project. If you're leading multiple projects in your community, a 12-week Create Cycle may be a good rhythm that works well for short- and medium term projects. You can repeat multiple Create Cycles for long-term initiatives.</p>
                    <p>Exercise: For your chosen project, list pros and cons for each duration option. Discuss with your team to reach a consensus.</p>
                </div>
                <div className={styles.section}>
                    <h1>Develop a Create Roadmap</h1>
                    <p><num className={styles.decorate_list}> 1 </num>Identify the rhythm for your community meetups or team meetings.</p>
                    <p><num className={styles.decorate_list}> 2 </num>If needed, map out additional opportunities to meet.</p>
                    <p><num className={styles.decorate_list}> 3 </num>Allocate prep time for sourcing projects, team formation.</p>
                    <p><num className={styles.decorate_list}> 4 </num>Drop in key milestones for each 4D Cycle stage.</p>
                    <p><num className={styles.decorate_list}> 5 </num>Use project management tools (e.g., Trello, Asana) to visualize the roadmap.</p>
                    <p>Exercise: Develop a timeline for your Create Cycle, including key milestones for each stage (Discover, Discern, Develop, Demonstrate).</p>
                    <p>Also, consider setting sprint durations.</p>
                    <p>Example timeline:</p>
                    <div>
                        <div className={stylest.container_kK7J}><div class="Wrapper-sc-cif21b-0 bUTGgW vertical_alternating focus-visible js-focus-visible"><div class="TimelineMainWrapper-sc-cif21b-1 byhYHh vertical_alternating timeline-main-wrapper" id="timeline-main-wrapper" mode="VERTICAL_ALTERNATING" position="top"><div role="list" class="TimelineVerticalWrapper-sc-1427v1d-0 dBAArN"><li class="VerticalItemWrapper-sc-1427v1d-1 faoySa right vertical-item-row visible"><div class="TimelineCardContentWrapper-sc-1427v1d-2 kpotpU card-content-wrapper visible right" height="200"><section class="TimelineItemContentWrapper-sc-d7qjm1-0 iOwMkL timeline-card-content active rc-card" mode="VERTICAL_ALTERNATING" tabindex="0"><header class="TimelineCardHeader-sc-d7qjm1-1 jIatKG"><h1 class="CardTitle-sc-d7qjm1-3 bIwXBn">Setting up Create</h1><h1 class="CardTitle-sc-d7qjm1-3 ldRQon rc-card-title" data-class="rc-card-title">SETUP</h1><h2 class="CardSubTitle-sc-d7qjm1-2 gzbhke card-sub-title rc-card-subtitle">Meetup w/ a focus on two main ideas</h2></header><div aria-expanded="false" class="TimelineContentDetailsWrapper-sc-d7qjm1-7 jddVdV card-description rc-card-text" height="150"><div><h3 class="cardTitle_v62V">SETUP</h3><h4 class="cardSubtitle_v5RJ">Meetup w/ a focus on two main ideas</h4><ul class="cardList_wrPJ"><li class="cardListItem_TW3M">• Keynote focus // Highlight Revival in Tech</li><li class="cardListItem_TW3M">• Setting up for Create</li><li class="cardListItem_TW3M">Setting up for Create Breakdown:</li><li class="cardListItem_TW3M">- Successful Project Highlight</li><li class="cardListItem_TW3M">- Playbook Highlight</li><li class="cardListItem_TW3M">- Project Pitches (focused ones from previous event)</li><li class="cardListItem_TW3M">- Redemptive Framework Highlight (setting up Create Roadmap)</li></ul></div></div><span dir="right" offset="-8" class="TriangleIconWrapper-sc-d7qjm1-11 YVkNx"></span></section></div><div width="3" bg="#3b82f6" class="TimelinePointWrapper-sc-12rz3g8-0 gccaUx right"><button class="TimelinePointContainer-sc-12rz3g8-1 flMktI right timeline-vertical-circle" aria-label="select timeline"><div class="Shape-sc-18iuiou-3 gLdAEL active" dimension="16"></div></button></div></li><li class="VerticalItemWrapper-sc-1427v1d-1 faoySa right vertical-item-row visible"><div class="TimelineCardContentWrapper-sc-1427v1d-2 kpotpU card-content-wrapper visible right" height="200"><section class="TimelineItemContentWrapper-sc-d7qjm1-0 iOwMkL timeline-card-content  rc-card" mode="VERTICAL_ALTERNATING" tabindex="0"><header class="TimelineCardHeader-sc-d7qjm1-1 jIatKG"><h1 class="CardTitle-sc-d7qjm1-3 bIwXBn">Week 1</h1><h1 class="CardTitle-sc-d7qjm1-3 ldRQon rc-card-title" data-class="rc-card-title">DISCOVER</h1><h2 class="CardSubTitle-sc-d7qjm1-2 gzbhke card-sub-title rc-card-subtitle">Kickoff Create Cycle</h2></header><div aria-expanded="false" class="TimelineContentDetailsWrapper-sc-d7qjm1-7 jddVdV card-description rc-card-text" height="150"><div><h3 class="cardTitle_v62V">DISCOVER</h3><h4 class="cardSubtitle_v5RJ">Kickoff Create Cycle</h4><ul class="cardList_wrPJ"><li class="cardListItem_TW3M">4D Cycle | Discover</li></ul></div></div><span dir="right" offset="-8" class="TriangleIconWrapper-sc-d7qjm1-11 YVkNx"></span></section></div><div width="3" bg="#3b82f6" class="TimelinePointWrapper-sc-12rz3g8-0 gccaUx right"><button class="TimelinePointContainer-sc-12rz3g8-1 flMktI right timeline-vertical-circle" aria-label="select timeline"><div dimension="16" class="Shape-sc-18iuiou-3 gLdAEL"></div></button></div></li><li class="VerticalItemWrapper-sc-1427v1d-1 faoySa right vertical-item-row visible"><div class="TimelineCardContentWrapper-sc-1427v1d-2 kpotpU card-content-wrapper visible right" height="200"><section class="TimelineItemContentWrapper-sc-d7qjm1-0 iOwMkL timeline-card-content  rc-card" mode="VERTICAL_ALTERNATING" tabindex="0"><header class="TimelineCardHeader-sc-d7qjm1-1 jIatKG"><h1 class="CardTitle-sc-d7qjm1-3 bIwXBn">Week 2</h1><h1 class="CardTitle-sc-d7qjm1-3 ldRQon rc-card-title" data-class="rc-card-title">DISCERN</h1><h2 class="CardSubTitle-sc-d7qjm1-2 gzbhke card-sub-title rc-card-subtitle">Continue Create Cycle</h2></header><div aria-expanded="false" class="TimelineContentDetailsWrapper-sc-d7qjm1-7 jddVdV card-description rc-card-text" height="150"><div><h3 class="cardTitle_v62V">DISCERN</h3><h4 class="cardSubtitle_v5RJ">Continue Create Cycle</h4><ul class="cardList_wrPJ"><li class="cardListItem_TW3M">4D Cycle | Discern</li></ul></div></div><span dir="right" offset="-8" class="TriangleIconWrapper-sc-d7qjm1-11 YVkNx"></span></section></div><div width="3" bg="#3b82f6" class="TimelinePointWrapper-sc-12rz3g8-0 gccaUx right"><button class="TimelinePointContainer-sc-12rz3g8-1 flMktI right timeline-vertical-circle" aria-label="select timeline"><div dimension="16" class="Shape-sc-18iuiou-3 gLdAEL"></div></button></div></li><li class="VerticalItemWrapper-sc-1427v1d-1 faoySa right vertical-item-row visible"><div class="TimelineCardContentWrapper-sc-1427v1d-2 kpotpU card-content-wrapper visible right" height="200"><section class="TimelineItemContentWrapper-sc-d7qjm1-0 iOwMkL timeline-card-content  rc-card" mode="VERTICAL_ALTERNATING" tabindex="0"><header class="TimelineCardHeader-sc-d7qjm1-1 jIatKG"><h1 class="CardTitle-sc-d7qjm1-3 bIwXBn">Week 3</h1><h1 class="CardTitle-sc-d7qjm1-3 ldRQon rc-card-title" data-class="rc-card-title">DEVELOP</h1><h2 class="CardSubTitle-sc-d7qjm1-2 gzbhke card-sub-title rc-card-subtitle">Continue Create Cycle</h2></header><div aria-expanded="false" class="TimelineContentDetailsWrapper-sc-d7qjm1-7 jddVdV card-description rc-card-text" height="150"><div><h3 class="cardTitle_v62V">DEVELOP</h3><h4 class="cardSubtitle_v5RJ">Continue Create Cycle</h4><ul class="cardList_wrPJ"><li class="cardListItem_TW3M">4D Cycle | Develop</li></ul></div></div><span dir="right" offset="-8" class="TriangleIconWrapper-sc-d7qjm1-11 YVkNx"></span></section></div><div width="3" bg="#3b82f6" class="TimelinePointWrapper-sc-12rz3g8-0 gccaUx right"><button class="TimelinePointContainer-sc-12rz3g8-1 flMktI right timeline-vertical-circle" aria-label="select timeline"><div dimension="16" class="Shape-sc-18iuiou-3 gLdAEL"></div></button></div></li><li class="VerticalItemWrapper-sc-1427v1d-1 faoySa right vertical-item-row visible"><div class="TimelineCardContentWrapper-sc-1427v1d-2 kpotpU card-content-wrapper visible right" height="200"><section class="TimelineItemContentWrapper-sc-d7qjm1-0 iOwMkL timeline-card-content  rc-card" mode="VERTICAL_ALTERNATING" tabindex="0"><header class="TimelineCardHeader-sc-d7qjm1-1 jIatKG"><h1 class="CardTitle-sc-d7qjm1-3 bIwXBn">Weeks 4 - 11</h1><h1 class="CardTitle-sc-d7qjm1-3 ldRQon rc-card-title" data-class="rc-card-title">CREATE TOUCHPOINTS</h1><h2 class="CardSubTitle-sc-d7qjm1-2 gzbhke card-sub-title rc-card-subtitle">Weekly Create Touchpoints</h2></header><div aria-expanded="false" class="TimelineContentDetailsWrapper-sc-d7qjm1-7 jddVdV card-description rc-card-text" height="150"><div><h3 class="cardTitle_v62V">CREATE TOUCHPOINTS</h3><h4 class="cardSubtitle_v5RJ">Weekly Create Touchpoints</h4><ul class="cardList_wrPJ"><li class="cardListItem_TW3M">(in person or via ZOOM) for project development cycle</li></ul></div></div><span dir="right" offset="-8" class="TriangleIconWrapper-sc-d7qjm1-11 YVkNx"></span></section></div><div width="3" bg="#3b82f6" class="TimelinePointWrapper-sc-12rz3g8-0 gccaUx right"><button class="TimelinePointContainer-sc-12rz3g8-1 flMktI right timeline-vertical-circle" aria-label="select timeline"><div dimension="16" class="Shape-sc-18iuiou-3 gLdAEL"></div></button></div></li><li class="VerticalItemWrapper-sc-1427v1d-1 faoySa right vertical-item-row visible"><div class="TimelineCardContentWrapper-sc-1427v1d-2 kpotpU card-content-wrapper visible right" height="200"><section class="TimelineItemContentWrapper-sc-d7qjm1-0 iOwMkL timeline-card-content  rc-card" mode="VERTICAL_ALTERNATING" tabindex="0"><header class="TimelineCardHeader-sc-d7qjm1-1 jIatKG"><h1 class="CardTitle-sc-d7qjm1-3 bIwXBn">Week 12</h1><h1 class="CardTitle-sc-d7qjm1-3 ldRQon rc-card-title" data-class="rc-card-title">DEMONSTRATE</h1><h2 class="CardSubTitle-sc-d7qjm1-2 gzbhke card-sub-title rc-card-subtitle">Meetup w/ subset of Create Cycle</h2></header><div aria-expanded="false" class="TimelineContentDetailsWrapper-sc-d7qjm1-7 jddVdV card-description rc-card-text" height="150"><div><h3 class="cardTitle_v62V">DEMONSTRATE</h3><h4 class="cardSubtitle_v5RJ">Meetup w/ subset of Create Cycle</h4><ul class="cardList_wrPJ"><li class="cardListItem_TW3M">4D Cycle | Demonstrate</li><li class="cardListItem_TW3M">Highlight &amp; Celebrate Project, Project Team and provide breakouts:</li><li class="cardListItem_TW3M">- Project Team Debrief / Next Steps</li><li class="cardListItem_TW3M">- What is FaithTech &amp; Plugging In</li><li class="cardListItem_TW3M">- Ideas for Future Projects</li></ul></div></div><span dir="right" offset="-8" class="TriangleIconWrapper-sc-d7qjm1-11 YVkNx"></span></section></div><div width="3" bg="#3b82f6" class="TimelinePointWrapper-sc-12rz3g8-0 gccaUx right"><button class="TimelinePointContainer-sc-12rz3g8-1 flMktI right timeline-vertical-circle" aria-label="select timeline"><div dimension="16" class="Shape-sc-18iuiou-3 gLdAEL"></div></button></div></li></div></div><div id="react-chrono-timeline-YEwYejA" class="TimelineContentRender-sc-cif21b-5 kYlNuD"></div></div></div>
                    </div>
                </div>
                <div className={styles.section}>
                    <h1>Manage Timeline Expectations</h1>
                    <p>INSERT GRAPHICS</p>
                    <img src="../images/TimelineExpecations.PNG" alt="graphics"></img>
                    <div className={styles.imageArea}></div>
                </div>
                <div className={styles.section}>
                    <h1>Communication Plan</h1>
                    <p>Share your team's communication method, platforms, or plan.</p>
                    <div className={styles.divbox}>
                        <form id='0' onSubmit={(e) => handleSubmit(e, communication)}>
                            <textarea className={styles.communication}
                            placeholder="Type here..." 
                            value={communication}
                            onChange={(e) => setCommunication(e.target.value)}
                            />
                            <input type="submit" value="Save" />
                        </form>
                    </div>
                </div>
                <div className='bottomLinks'>
                    <div>
                        <p>Previous</p>
                        <Link to="/discern/analysis">Analysis</Link>
                    </div>
                    <div>
                        <p>Next</p>
                        <Link to="/develop/overview">Develop Overview</Link>
                    </div>
                </div>
            </div>
        </>
    )
}