import { Link } from "react-router-dom"
import styles from './lament.module.css';
import { useEffect, useState } from "react";
import axios from "axios";

export function DiscoverLament() {
    
	const[scriptureReflection, setScriptureReflection] = useState([])
	const[lament, setLament] = useState([])
    const[Reflection1, setReflection1] = useState([])
	const[Reflection2, setReflection2] = useState([])

    useEffect(()=> {
        axios.get(`http://localhost:3000/text-area-reflections/Lament`).then(res => {
            const lamentData = res.data;
            lamentData.sort((a, b) => a.entry_pos - b.entry_pos);
			setScriptureReflection(lamentData[0].reply)
            setLament(lamentData[1].reply);
            setReflection1(lamentData[2].reply)
			setReflection2(lamentData[3].reply)
            console.log("here")
        })
    }, [])


    const handleSubmit = (e, id) => {
        axios.patch(`http://localhost:3000/text-area-reflections/?page=Lament&entry_pos=${id}`, {
            reply: e.target.value
        })
    }

	return (
        <>
				<div id={styles.oLamentTopImage}>
					<h3 class={styles.oTitle}>LAMENT</h3>
				</div>
				<div className='body'>
				<p>This activity will help you to craft a lament for the problem facing the community, people, or organization you are serving.
				Doing so will help you think about the problem in light of God's presence and love.
				</p>
				<h1>Nehemiah's Approach for Problem Discovery</h1>
				<p>Nehemiah provides us with a great example of what it looks like to lament.
				Read through Nehemiah chapter 1 to hear his Lament to God after seeing destruction of the walls in Jerusalem.
				</p>
				<h2 className={styles.oLamenth2}>Nehemiah 1:4-6</h2>
				<div class={styles.oBibleQuoteBox}>
					<p class={styles.oQuoteText}>
						When I heard these things, I sat down and wept.
						For some days I mourned and fasted and prayed before the God of heaven.
						Then I said:
						"Lord, the God of heaven, the great and awesome God, who keeps his covenant of love with those who love him and keep his commandments, let your ear be attentive and your eyes open to hear the prayer your servance is praying before you day and night for your servants, the people of Israel."
					</p>
				</div>
				<h2 className={styles.oLamenth2}>Scripture Reflection</h2>
				<div className={styles.oScriptureBoxOne}>
					<div className={styles.oNumberBox}>
						<p2 className={styles.oLamentp2}>
							<num>1		</num>
						</p2>
					</div>
					<p2 className={styles.oLamentp2}>Notice how Nehemiah laments over Jerusalem (1:4). How does he bring this to God?</p2>
				</div>
				<br></br>
				<div className={styles.oScriptureBoxTwo}>
					<div className={styles.oNumberBox}>
						<p2 className={styles.oLamentp2}>
							<num>2		</num>
						</p2>
					</div>
					<p2 className={styles.oLamentp2}>How might lament clarify our vision and purpose for the people and the problem they face?</p2>
				</div>
				<br></br>
				<div className={styles.oScriptureBoxThree}>
					<div className={styles.oNumberBox}>
						<p2 className={styles.oLamentp2}>
							<num>3		</num>
						</p2>
					</div>
					<p2 className={styles.oLamentp2}>How does Nehemiah present the problem to God?</p2>
				</div>
				<br></br>
				<div className={styles.oScriptureBoxFour}>
					<div className={styles.oNumberBox}>
						<p2 className={styles.oLamentp2}>
							<num>4		</num>
						</p2>
					</div>
					<p2 className={styles.oLamentp2}>How does he empathize with the pain of those who are experiencing the problem?</p2>
				</div>
				<br></br>
				<div className={styles.oScriptureBoxFive}>
					<div className={styles.oNumberBox}>
						<p2 className={styles.oLamentp2}>
							<num>5		</num>
						</p2>
					</div>
					<p2 className={styles.oLamentp2}>How does he contextualize this in God's presence?</p2>	
				</div>
				<p>
					Write down some or all of your answers to the scripture reflection here:
					<form id='0'>
						<textarea name="Lament" rows={8} cols={40} 
						placeholder="Type here..." 
						value={scriptureReflection}
						onChange={(e) => {setScriptureReflection(e.target.value); handleSubmit(e, 0)}}
						/>
					</form>
				</p>
				<h2 className={styles.oLamenth2}>Phases</h2>
				<p>The methodology of this Discover step will move us through these phases:</p>
				<div className={styles.phasesContainer}>
					<div className={styles.oPhase1Box}>
						<div className={styles.oInnerPhaseBox}>
							<p3 className={styles.oPhaseTextp3}>
								<num><strong>1</strong></num>
							</p3>
							<p3 className={styles.oPhaseTextp3}>We will lament.</p3>
						</div>
						<div id={styles.oPhase1}></div>
					</div>
					<div className={styles.oPhase2Box}>
						<div className={styles.oInnerPhaseBox}>
							<p3 className={styles.oPhaseTextp3}>
								<num><strong>2</strong></num>
							</p3>
							<p3 className={styles.oPhaseTextp3}>We will identify with those who are facing the problem.</p3>
						</div>
						<div id={styles.oPhase2}></div>
					</div>
					<div className={styles.oPhase3Box}>
						<div className={styles.oInnerPhaseBox}>
							<p3 className={styles.oPhaseTextp3}>
								<num><strong>3</strong></num>
							</p3>
							<p3 className={styles.oPhaseTextp3}>We will embrace the gap, and ask God to help us identify the opportunities.</p3>
						</div>
						<div id={styles.oPhase3}></div>
					</div>
				</div>
				<p className={styles.oLamentp}>
					As innovators, we tend to run to the solution.
					<oBold> Press pause on that for a moment. </oBold>
					As Nehemiah shows us, there is an appropriate time to lament the problem, deepen our compassion for those it affects, and present it with pre-emptive praise to God.
				</p>
				<h1>Craft Your Lament</h1>
				<p>
					Follow these steps to create a lament for the problem you identified.
					Work on the lament as a team.
					This lament becomes your team's prayer as you begin working on the project.
				</p>
				<table className={styles.oTable}>
					<tr>
						<td>
							<div className={styles.oLamentStep}>
								<div className={styles.oLamentStepHeader}>
									<p4 className={styles.lamentStepHeaderText}><strong>Step 1</strong></p4>
								</div>
								<p5 className={styles.lamentStepText}>
									<ul>
										<li>Address God</li>
										<li>Acknowledge Him as holy</li>
										<li>Recognize that He's the ultimate answer to our challenge</li>
									</ul>
								</p5>
							</div>
						</td>
						<td>
							<div className={styles.oLamentStep}>
								<div className={styles.oLamentStepHeader}>
									<p4 className={styles.lamentStepHeaderText}><strong>Step 2</strong></p4>
								</div>
								<p5 className={styles.lamentStepText}>
									<ul>
										<li>Bring the problem to Him</li>
										<li>Express to Him any anger, pain, heartache, or saddness you feel</li>
									</ul>
								</p5>
							</div>
						</td>
						<td>
							<div className={styles.oLamentStep}>
								<div className={styles.oLamentStepHeader}>
									<p4 className={styles.lamentStepHeaderText}><strong>Step 3</strong></p4>
								</div>
								<p5 className={styles.lamentStepText}>
									<ul>
										<li>Recall past experiences of God's presence and faithfulness</li>
										<li>Express trust in Him for the present</li>
									</ul>
								</p5>
							</div>
						</td>
					</tr>
					<tr>
						<td>
							<div className={styles.oLamentStep}>
								<div className={styles.oLamentStepHeader}>
									<p4 className={styles.lamentStepHeaderText}><strong>Step 4</strong></p4>
								</div>
								<p5 className={styles.lamentStepText}>
									<ul>
										<li>Bring Him your petition</li>
										<li>Make your request clear</li>
										<li>Hold nothing back</li>
									</ul>
								</p5>
							</div>
						</td>
						<td>
							<div className={styles.oLamentStep}>
								<div className={styles.oLamentStepHeader}>
									<p4 className={styles.lamentStepHeaderText}><strong>Step 5</strong></p4>
								</div>
								<p5 className={styles.lamentStepText}>
									<ul>
										<li>Tell God why He should intervene</li>
										<li>Acknowledge barriers (people, situations, needs) before God</li>
									</ul>
								</p5>
							</div>
						</td>
						<td>
							<div className={styles.oLamentStep}>
								<div className={styles.oLamentStepHeader}>
									<p4 className={styles.lamentStepHeaderText}><strong>Step 6</strong></p4>
								</div>
								<p5 className={styles.lamentStepText}>
									<ul>
										<li>Praise God in advance</li>
										<li>Offer thanks to God in the moment, even without yet seeing a resolution</li>
									</ul>
								</p5>
							</div>
						</td>
					</tr>
				</table>
				<p className={styles.oLamentp}>
					Team Lament
					<form id='1'>
						<textarea name="Lament" rows={8} cols={40} 
						placeholder="Type out your team lament here..." 
						value={lament}
						onChange={(e) => {setLament(e.target.value); handleSubmit(e, 1)}}
						/>
					</form>
				</p>
				<h1>Reflection Questions</h1>
				<p className={styles.oLamentp}>
					How did the process of lament change your perspective on the problem?
					<form id='2'>
						<textarea name="Lament" rows={5} cols={40} 
						placeholder="Type here..." 
						value={Reflection1}
						onChange={(e) => {setReflection1(e.target.value); handleSubmit(e, 2)}}
						/>
					</form>
				</p>
				<p className={styles.oLamentp}>
					In what ways did you feel God's presence during this exercise?
					<form id='3'>
						<textarea name="Lament" rows={5} cols={40}
						placeholder="Type here..." 
						value={Reflection2}
						onChange={(e) => {setReflection2(e.target.value); handleSubmit(e, 3)}}
						/>
					</form>
				</p>
				<p className={styles.oLamentp}>
				Remember, the goal of this stage is to deeply understand the problem and its impact on people, viewing it through the compassionate lens of Christ.
				</p>
				<br></br>
				<div className='bottomLinks'>
                    <div>
                        <p>Previous</p>
                        <Link to="/discover/problem">Problem</Link>
                    </div>
                    <div>
                        <p>Next</p>
                        <Link to="/discern/overview">Discern Overview</Link>
                    </div>
                </div>
			</div>
        </>
    )
}