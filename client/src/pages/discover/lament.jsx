import { Link } from "react-router-dom"
import '../stylesheets/common.css';
import '../stylesheets/lament.css';
import { useEffect, useState } from "react";
import axios from "axios";

export function DiscoverLament() {
    
	const[lament, setLament] = useState([])
    const[Reflection1, setReflection1] = useState([])
	const[Reflection2, setReflection2] = useState([])

    useEffect(()=> {
        axios.get(`http://localhost:3000/text-area-reflections/Lament`).then(res => {
            const lamentData = res.data;
            lamentData.sort((a, b) => a.entry_pos - b.entry_pos);
            setLament(lamentData[0].reply);
            setReflection1(lamentData[1].reply)
			setReflection2(lamentData[2].reply)
            console.log("here")
        })
    }, [])

    const handleSubmit = (e, replyData) => {
        e.preventDefault(); 
        axios.patch(`http://localhost:3000/text-area-reflections/?page=Lament&entry_pos=${e.target.id}`, {
            reply: replyData
        })
    }

	return (
        <>
			<body>
				<div id="oLamentTopImage">
					<h3 class="oTitle">LAMENT</h3>
				</div>
				<p class="oLamentp">This activity will help you to craft a lament for the problem facing the community, people, or organization you are serving.
				Doing so will help you think about the problem in light of God's presence and love.
				</p>
				<h1 class="oLamenth1">Nehemiah's Approach for Problem Discovery</h1>
				<p class="oLamentp">Nehemiah provides us with a great example of what it looks like to lament.
				Read through Nehemiah chapter 1 to hear his Lament to God after seeing destruction of the walls in Jerusalem.
				</p>
				<h2 class="oLamenth2">Nehemiah 1:4-6</h2>
				<div class="oBibleQuoteBox">
					<p class="oQuoteText">
						When I heard these things, I sat down and wept.
						For some days I mourned and fasted and prayed before the God of heaven.
						Then I said:
						"Lord, the God of heaven, the great and awesome God, who keeps his covenant of love with those who love him and keep his commandments, let your ear be attentive and your eyes open to hear the prayer your servance is praying before you day and night for your servants, the people of Israel."
					</p>
				</div>
			</body>
			<body>
				<h2 class="oLamenth2">Scripture Reflection</h2>
				<div class="oScriptureBoxOne">
					<div class="oNumberBox">
						<p2 class="oLamentp2">
							<num>1		</num>
						</p2>
					</div>
					<p2 class="oLamentp2">Notice how Nehemiah laments over Jerusalem (1:4). How does he bring this to God?</p2>
				</div>
				<br></br>
				<div class="oScriptureBoxTwo">
					<div class="oNumberBox">
						<p2 class="oLamentp2">
							<num>2		</num>
						</p2>
					</div>
					<p2 class="oLamentp2">How might lament clarify our vision and purpose for the people and the problem they face?</p2>
				</div>
				<br></br>
				<div class="oScriptureBoxThree">
					<div class="oNumberBox">
						<p2 class="oLamentp2">
							<num>3		</num>
						</p2>
					</div>
					<p2 class="oLamentp2">How does Nehemiah present the problem to God?</p2>
				</div>
				<br></br>
				<div class="oScriptureBoxFour">
					<div class="oNumberBox">
						<p2 class="oLamentp2">
							<num>4		</num>
						</p2>
					</div>
					<p2 class="oLamentp2">How does he empathize with the pain of those who are experiencing the problem?</p2>
				</div>
				<br></br>
				<div class="oScriptureBoxFive">
					<div class="oNumberBox">
						<p2 class="oLamentp2">
							<num>5		</num>
						</p2>
					</div>
					<p2 class="oLamentp2">How does he contextualize this in God's presence?</p2>	
				</div>
				<p class="oLamentp">Feel free to write down some or all of your answers to the scripture reflection here. (enter text box below)</p>
				<h2 class="oLamenth2">Phases</h2>
				<p class="oLamentp">The methodology of this Discover step will move us through these phases:</p>
				<div class="oPhase1Box">
					<div class="oInnerPhaseBox">
						<p3 class="oPhaseTextp3">
							<num><strong>1</strong></num>
						</p3>
						<p3 class="oPhaseTextp3">We will lament.</p3>
					</div>
					<div id="oPhase1"></div>
				</div>
				<div class="oPhase2Box">
					<div class="oInnerPhaseBox">
						<p3 class="oPhaseTextp3">
							<num><strong>2</strong></num>
						</p3>
						<p3 class="oPhaseTextp3">We will identify with those who are facing the problem.</p3>
					</div>
					<div id="oPhase2"></div>
				</div>
				<div class="oPhase3Box">
					<div class="oInnerPhaseBox">
						<p3 class="oPhaseTextp3">
							<num><strong>3</strong></num>
						</p3>
						<p3 class="oPhaseTextp3">We will embrace the gap, and ask God to help us identify the opportunities.</p3>
					</div>
					<div id="oPhase3"></div>
				</div>
				<p class="oLamentp">
					As innovators, we tend to run to the solution.
					<oBold> Press pause on that for a moment. </oBold>
					As Nehemiah shows us, there is an appropriate time to lament the problem, deepen our compassion for those it affects, and present it with pre-emptive praise to God.
				</p>
				<h1 class="oLamenth1">Craft Your Lament</h1>
				<p class="oLamentp">
					Follow these steps to create a lament for the problem you identified.
					Work on the lament as a team.
					This lament becomes your team's prayer as you begin working on the project.
				</p>
				<table class="oTable">
					<tr>
						<td>
							<div class="oLamentStep">
								<div class="oLamentStepHeader">
									<p4 class="lamentStepHeaderText"><strong>Step 1</strong></p4>
								</div>
								<p5 class="lamentStepText">
									<ul>
										<li>Address God</li>
										<li>Acknowledge Him as holy</li>
										<li>Recognize that He's the ultimate answer to our challenge</li>
									</ul>
								</p5>
							</div>
						</td>
						<td>
							<div class="oLamentStep">
								<div class="oLamentStepHeader">
									<p4 class="lamentStepHeaderText"><strong>Step 2</strong></p4>
								</div>
								<p5 class="lamentStepText">
									<ul>
										<li>Bring the problem to Him</li>
										<li>Express to Him any anger, pain, heartache, or saddness you feel</li>
									</ul>
								</p5>
							</div>
						</td>
						<td>
							<div class="oLamentStep">
								<div class="oLamentStepHeader">
									<p4 class="lamentStepHeaderText"><strong>Step 3</strong></p4>
								</div>
								<p5 class="lamentStepText">
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
							<div class="oLamentStep">
								<div class="oLamentStepHeader">
									<p4 class="lamentStepHeaderText"><strong>Step 4</strong></p4>
								</div>
								<p5 class="lamentStepText">
									<ul>
										<li>Bring Him your petition</li>
										<li>Make your request clear</li>
										<li>Hold nothing back</li>
									</ul>
								</p5>
							</div>
						</td>
						<td>
							<div class="oLamentStep">
								<div class="oLamentStepHeader">
									<p4 class="lamentStepHeaderText"><strong>Step 5</strong></p4>
								</div>
								<p5 class="lamentStepText">
									<ul>
										<li>Tell God why He should intervene</li>
										<li>Acknowledge barriers (people, situations, needs) before God</li>
									</ul>
								</p5>
							</div>
						</td>
						<td>
							<div class="oLamentStep">
								<div class="oLamentStepHeader">
									<p4 class="lamentStepHeaderText"><strong>Step 6</strong></p4>
								</div>
								<p5 class="lamentStepText">
									<ul>
										<li>Praise God in advance</li>
										<li>Offer thanks to God in the moment, even without yet seeing a resolution</li>
									</ul>
								</p5>
							</div>
						</td>
					</tr>
				</table>
				<p class="oLamentp">
					Team Lament
					<form id='0' onSubmit={(e) => handleSubmit(e, lament)}>
						<textarea name="Lament" rows={8} cols={40} 
						placeholder="Type here..." 
						value={lament}
						onChange={(e) => setLament(e.target.value)}
						/>
						<input type="submit" value="Save" />
					</form>
				</p>
				<h1 class="oLamenth1">Reflection Questions</h1>
				<p class="oLamentp">
					How did the process of lament change your perspective on the problem?
					<form id='1' onSubmit={(e) => handleSubmit(e, Reflection1)}>
						<textarea name="Lament" rows={5} cols={40} 
						placeholder="Type here..." 
						value={Reflection1}
						onChange={(e) => setReflection1(e.target.value)}
						/>
						<input type="submit" value="Save" />
					</form>
				</p>
				<p class="oLamentp">
					In what ways did you feel God's presence during this exercise?
					<form id='2' onSubmit={(e) => handleSubmit(e, Reflection2)}>
						<textarea name="Lament" rows={5} cols={40}
						placeholder="Type here..." 
						value={Reflection2}
						onChange={(e) => setReflection2(e.target.value)}
						/>
						<input type="submit" value="Save" />
					</form>
				</p>
				<p class="oLamentp">
				Remember, the goal of this stage is to deeply understand the problem and its impact on people, viewing it through the compassionate lens of Christ.
				</p>
				<br></br>
				<div className='bottomLinks'>
					<Link to="/discover/problem">Problem</Link>
					<Link to="/discern/overview">Discern Overview</Link>
				</div>
			</body>
        </>
    )
}