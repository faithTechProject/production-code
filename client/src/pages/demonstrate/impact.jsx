import { Link } from 'react-router-dom';
import impactStyle from './impact.module.css';


export function DemonstrateImpact() {
    return (
        <>
            <div id ={impactStyle.oTopImage}>
                <h3 className={impactStyle.oTitle}><sc>IMPACT</sc></h3>
            </div>
            <br></br>
            <h1>Redemptive Impact Planning</h1>
            <p className = {impactStyle.textbody}>In this exercise, you will identify 3-5 key relationships that will be impacted by your solution. 
            For each relationship, outline the current state of
            the relationship, the desired state after implementing your solution, and specific actions you can take
            to deepen this relationship over time. Enter the name of the relationship in the rectangle below, and
            then each of outlined categories in their respective hexagons.</p>
            <br></br>
            <h1 className={impactStyle['sol-text']}>Solution(import)</h1>
            <div className = {impactStyle['rel-box']}>
                <form id='1'>
                    <textarea className = {impactStyle["userTextInputRelationship"]}
                    placeholder='Name or type of relationship:'></textarea>
                </form>
            </div>
            <div className = {impactStyle['hexes-container']}>
                <br></br>
                <div className = {impactStyle['hexagonfirst']}>
                    <br></br>
                    <div className = {impactStyle['hex-tri']}></div>
                    <div className = {impactStyle['hex-body']}>
                        <h3 className = {impactStyle['hex-text']}>Current State
                            <form id='1'>
                                <textarea className = {impactStyle["userTextInput"]}
                                placeholder='type here...'></textarea>
                            </form>
                        </h3>
                    </div>
                    <div className = {impactStyle['hex-tri2']}></div>
                </div>
                <div className = {impactStyle['hexagonEven']}>
                    <div className = {impactStyle['hex-tri']}></div>
                    <div className = {impactStyle['hex-body']}>
                        <h3 className = {impactStyle['hex-text']}>Desired State
                            <form id='2'>
                                <textarea className = {impactStyle["userTextInput"]}
                                placeholder='type here...'></textarea>
                            </form>
                        </h3>
                    </div>
                    <div className = {impactStyle['hex-tri2']}></div>
                </div>
            
                <div className = {impactStyle['hexagon']}>
                    <div className = {impactStyle['hex-tri']}></div>
                    <div className = {impactStyle['hex-body']}>
                        <h3 className = {impactStyle['hex-text']}>Actions
                            <form id='3'>
                                <textarea className = {impactStyle["userTextInput"]}
                                placeholder='type here...'></textarea>
                            </form>
                        </h3>
                    </div>
                    <div className = {impactStyle['hex-tri2']}></div>
                </div>
            </div>
            <div className='bottomLinks'>
                <Link to="/demonstrate/story">Story</Link>
                <Link to="/demonstrate/conclusion">Conclusion</Link>
            </div>
        </>
    )
}