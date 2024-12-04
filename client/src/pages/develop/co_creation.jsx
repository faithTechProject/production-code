import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from "axios";
import styles from './co_creation.module.css';


export function CoCreation() {
    const[requestForm0, setRequestForm0] = useState([])
    const[requestForm1, setRequestForm1] = useState([])
    const[requestForm2, setRequestForm2] = useState([])
    const[requestForm3, setRequestForm3] = useState([])
    const[requestForm4, setRequestForm4] = useState([])

    const baseURL = "http://localhost:3000/co_creation/"

    
    const save = (e, input_data) => {
        e.preventDefault();
        axios.patch(`${baseURL}?id=${e.target.id}`, {
            data: input_data
        })
    }

    useEffect (() => {
        axios.get(`${baseURL}`).then(response => {

            const data = response.data.map((item) => item)
            data.sort((a,b) => a.id - b.id)


            const co_creation_response = data;
            setRequestForm0(co_creation_response[0].data);
            setRequestForm1(co_creation_response[1].data);
            setRequestForm2(co_creation_response[2].data);
            setRequestForm3(co_creation_response[3].data);
            setRequestForm4(co_creation_response[4].data);
        })
    } ,[])

    return (
        <div className={styles.hero_co_creatioin_container}>
            <div className={styles.hero_co_creatoin_header}>
                <h1> Co-Creation </h1>
            </div>

            <div className={styles.hero_solutions}>
                <p> Before starting the co-creation cycle choose one of your solutions from the discern stage  </p>
                <p> click on one of the solutions below </p>
                <div className={styles.potential_solutions}>
                    <h1>Choose A Solution</h1>
                    <div className={styles.three_cs}>
                        <div className={styles.solutions}>
                            <h1> Reimagine </h1>
                            <p> some text </p>
                        </div>
                        <div className={styles.solutions}>
                            <h1> Recieve </h1>
                            <p> some text </p>
                        </div>
                        <div className={styles.solutions}>
                            <h1> Create </h1>
                            <p> some text </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.co_creation_cycle}>
                <h1> Co-Creation Cycle </h1>
                <p> The Co-Creation cycle is a simple structure that can be repeated as iterations. We "keep asking," creating a rhythm of Spirit-led inspiration and planning as we develop. If your project is short, maybe you'll only go through this cycle once. However, if it's longer, the idea is that your team will cycle through these steps multiple times. Our recommendation is for your team to go through the Co-Creation cycle at the start of every sprint, or whenever you're planning the next sprint. Click the "New Cycle" button to create new areas for input for each activity. </p>
                <button className={styles.new_cycle}> New Cycle </button>
                <div className={styles.Request}> 
                    <p> Write a payer inviting the Holy Spirit into your development process</p>
                    <form className='request_form' id='0' onSubmit={(e) => save(e,requestForm0)}>
                        <textarea name="skills" rows={10} cols={20}
                        placeholder="Request...."
                        value={requestForm0}
                        onChange={(e) => setRequestForm0(e.target.value)}
                        />
                        <input type="submit" value="Save" />
                    </form>
                </div>

                <div className= {styles.Receive}>
                    <h2> Receive </h2>
                    <p> Spend 10 minutes in silence, listening for guidance </p>
                    <div className= {styles.timer}>
                        <p className= {styles.time_testing}> time </p>
                    </div>
                    <div className= {styles.timer_controls}>
                        <button className= {styles.start} > Start </button>
                        <button className= {styles.pause} > Pause </button>
                        <button className= {styles.delete} > Delete </button>
                    </div>
                    <p> Note any thoughts, images or scriptures that come to mind in these 10 minutes here. Try to keep your notes brief, so the focus of this time can be to listen and recieve </p>
                    <form className='request_form' id='1' onSubmit={(e) => save(e,requestForm1)}>
                        <textarea name="skills" rows={10} cols={20}
                        placeholder="Request...."
                        value={requestForm1}
                        onChange={(e) => setRequestForm1(e.target.value)}
                        />
                        <input type="submit" value="Save" />
                    </form>
                </div>

                <div className= {styles.review}>
                    <h2> Review </h2>
                    <p> Use this space to expand on the insights you recieved. Write down what God was telling you. Talk about the connections between the thoughts, images, and/or scriptures that come to mind. Write about how you can use these insights to guide you through the development stage </p>
                    <form className='request_form' id='2' onSubmit={(e) => save(e,requestForm2)}>
                        <textarea name="skills" rows={10} cols={20}
                        placeholder="Review...."
                        value={requestForm2}
                        onChange={(e) => setRequestForm1(e.target.value)}
                        />
                        <input type="submit" value="Save" />
                    </form>
                </div>

                <div className='render'>
                    <h2> Render </h2>
                    <p> Outline the next steps for implementing these insights. Focus on what can be accomplished in the upcoming or current sprint. Each 'step' is a task, similar to what you entered in your RACI Matrix, except more specific. For example, let's say 3 of the tasks on your matrix were design features, develop features, and test features. Here, it'd be the same, except for a specific feature for each task. It could even just be part of a feature if you think it'll take more than one sprint to accomplish. In the table below, enter the step, a description of it, and which person or people are responsible for it.</p>
                    <div className='render_table '>
                        <button> add step </button>
                    </div>
                </div>
            </div>

            <div className='reflection_questions'>
                <p> How did this process differ from your usual development approach? </p>
                <form className='request_form' id='3' onSubmit={(e) => save(e,requestForm3)}>
                        <textarea name="skills" rows={10} cols={20}
                        placeholder="Request...."
                        value={requestForm3}
                        onChange={(e) => setRequestForm1(e.target.value)}
                        />
                        <input type="submit" value="Save" />
                    </form>
                <p> What challenges did you face trying to co-create with the holy spirit  hrcv</p>
                <form className='request_form' id='4' onSubmit={(e) => save(e,requestForm4)}>
                        <textarea name="skills" rows={10} cols={20}
                        placeholder="Request...."
                        value={requestForm4}
                        onChange={(e) => setRequestForm1(e.target.value)}
                        />
                        <input type="submit" value="Save" />
                    </form>
            </div>
            <div className='bottomLinks'>
                    <div>
                        <p>Previous</p>
                        <Link to="/develop/overview">Develop Overview</Link>
                    </div>
                    <div>
                        <p>Next</p>
                        <Link to="/develop/tickets">Tickets</Link>
                    </div>
                </div>
        </div>
    )
}



