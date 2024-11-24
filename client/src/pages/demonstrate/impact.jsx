import { Link } from 'react-router-dom';
import impactStyle from './impact.module.css';

export function DemonstrateImpact() {
    return (
        <>
            <div id="oTopImage">
                <h3 className="oTitle"><sc>Impact</sc></h3>
            </div>
            <br></br>
            <h1>Redemptive Impact Planning</h1>
            <p>In this exercise, you will identify 3-5 key relationships that will be impacted by your solution. 
            For each relationship, outline the current state of
            the relationship, the desired state after implementing your solution, and specific actions you can take
            to deepen this relationship over time. Enter the name of the relationship in the rectangle below, and
            then each of outlined categories in their respective hexagons.</p>
            <h1 className={impactStyle['sol-text']}>Solution(import)</h1>
            <form id='1'>
                    <textarea className = {impactStyle["userTextInputRelationship"]}
                    placeholder='Name or type of relationship:'></textarea>
                </form>
            <p className={impactStyle['rel-text']}>
                <form id='1'>
                    <textarea className = {impactStyle["userTextInputRelationship"]}
                    placeholder='Name or type of relationship:'></textarea>
                </form>
            </p>
            <div className = {impactStyle['hexes-container']}>
                <div className = {impactStyle['hexagon']}>
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
            </div>
            <div className = {impactStyle['hexes-container']}>
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
                <Link to="/discover/teams">Teams</Link>
                <Link to="/discover/lament">Lament</Link>
            </div>
        </>
    )
}