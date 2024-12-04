import { Link } from "react-router-dom";
import styles from './conclusion.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

//className = {styles.}
export function Conclusion() {

    const[Reflection1, setReflection1] = useState([])
	const[Reflection2, setReflection2] = useState([])
    const[Reflection3, setReflection3] = useState([])
    const[Reflection4, setReflection4] = useState([])
    const[Reflection5, setReflection5] = useState([])
    const[Reflection6, setReflection6] = useState([])
    const[Reflection7, setReflection7] = useState([])

    useEffect(()=> {
        axios.get(`http://localhost:3000/text-area-reflections/Conclusion`).then(res => {
            const conclusionData = res.data;
            conclusionData.sort((a, b) => a.entry_pos - b.entry_pos)
            setReflection1(conclusionData[0].reply);
            setReflection2(conclusionData[1].reply)
			setReflection3(conclusionData[2].reply)
            setReflection4(conclusionData[3].reply)
            setReflection5(conclusionData[4].reply)
            setReflection6(conclusionData[5].reply)
            setReflection7(conclusionData[6].reply)
            console.log("here")
        })
    }, [])

    const handleSubmit = (e, id) => {
        axios.patch(`http://localhost:3000/text-area-reflections/?page=Conclusion&entry_pos=${id}`, {
            reply: e.target.value
        })
    }

    return (
        <>
            <div className={styles.obody1}>
                <div id={styles.oConclusionTopImage}>
                        <h3 className={styles.oTitle}>CONCLUSION</h3>
                </div>
                <h2 className={styles.oh2}>4D Cycle Complete!</h2>
                <br></br>
            </div>
            <div className={styles.demonstrateBody}>
                <div id={styles.o4D}></div>
                <br></br>
            </div>
            <div className={styles.obody2}>
                <h2 className={styles.oh2}>Concluding Thoughts</h2>
                <p className={styles.op1}>
                    As you complete this workbook, take a moment to reflect on your journey through the 4D Cycle
                    by answering the following questions:
                    <br></br>
                    <br></br>
                    How has this process changed your approach to technology development?
					<form id='0'>
						<textarea name="Conclusion" rows={5} cols={40} 
						placeholder="Type here..." 
						value={Reflection1}
						onChange={(e) => {setReflection1(e.target.value); handleSubmit(e, 0)}}
						/>
					</form>
                    What new insights have you gained about integrating your faith with your work?
					<form id='1'>
						<textarea name="Conclusion" rows={5} cols={40} 
						placeholder="Type here..." 
						value={Reflection2}
						onChange={(e) => {setReflection2(e.target.value); handleSubmit(e, 1)}}
						/>
					</form>
                    <br></br>
                    <br></br>
                </p>
                <div className={styles.oQuoteBox}>
                    <p className={styles.oQuoteText}>
                        Continue to apply these principles in your work, always seeking to build technology that helps humanity
                        become persons who love God and love others more deeply.
                    </p>
                </div>
                <h2 className={styles.oh2}>Future Work</h2>
                <p className={styles.op1}>
                    Remember, you can always come back to the workbook if you find new ways to add to your redemptive impact.
                    Use the space below to consider possible future work:
                    <br></br>
                    <br></br>
                    What would future work on this project look like?
					<form id='2'>
						<textarea name="Conclusion" rows={5} cols={40} 
						placeholder="Type here..." 
						value={Reflection3}
						onChange={(e) => {setReflection3(e.target.value); handleSubmit(e, 2)}}
						/>
					</form>
                </p>
                <p className={styles.op1}>
                    How might you be able to use the workbook to help you with your future work?
                    Remember, the setup of this workbook is a cycle, which means you can go through the 4D Cycle as many times
                    as you'd like. Specifically regarding future work, it might be helpful to repeat certain stages.
                    Consider how each D in the 4D Cycle could be used to help with future work.
                    <br></br>
                    <br></br>
                    How might you use the Discover Phase in your future work?
					<form id='3'>
						<textarea name="Conclusion" rows={5} cols={40} 
						placeholder="Type here..." 
						value={Reflection4}
						onChange={(e) => {setReflection4(e.target.value); handleSubmit(e, 3)}}
						/>
					</form>
                    How might you use the Discern Phase in your future work?
                    <form id='4'>
						<textarea name="Conclusion" rows={5} cols={40} 
						placeholder="Type here..." 
						value={Reflection5}
						onChange={(e) => {setReflection5(e.target.value); handleSubmit(e, 4)}}
						/>
					</form>
                    How might you use the Develop Phase in your future work?
                    <form id='5'>
						<textarea name="Conclusion" rows={5} cols={40} 
						placeholder="Type here..." 
						value={Reflection6}
						onChange={(e) => {setReflection6(e.target.value); handleSubmit(e, 5)}}
						/>
					</form>
                    How might you use the Demonstrate Phase in your future work?
                    <form id='6'>
						<textarea name="Conclusion" rows={5} cols={40} 
						placeholder="Type here..." 
						value={Reflection7}
						onChange={(e) => {setReflection7(e.target.value); handleSubmit(e, 6)}}
						/>
					</form>
                </p>
                <div className={styles.oQuoteBox}>
                    <p className={styles.oQuoteText}>
                        No matter how you want to use it, the FaithTech Workbook is always
                        available for you to use. Don't hesitate to use its resources to assist in the future of this
                        redemptive project, or other future projects.
                    </p>
                </div>
                <h2 className={styles.oh2}>Thank you for Choosing Redemptive Technology over Reckless!</h2>
                <br></br>
            </div>
            <div className='bottomLinks'>
                    <div>
                        <p>Previous</p>
                        <Link to="/demonstrate/story">Story</Link>
                    </div>
                    <br></br>
                </div>
        </>
    )
}