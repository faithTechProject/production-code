import { Link } from 'react-router-dom';
import '../stylesheets/common.css';
import impactStyle from './impact.module.scss';

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
            <p className={impactStyle['rel-text']}>Relationship description (import)</p>
            <div className = {impactStyle['hexagon']}>
                <div className = {impactStyle['hex-tri']}></div>
                <div className = {impactStyle['hex-body']}>
                    <p className = {impactStyle['hex-text']}>text</p>text</div>
                <div className = {impactStyle['hex-tri2']}></div>
            </div>
            <div className = {impactStyle['hexagon']}>
                <div className = {impactStyle['hex-tri']}></div>
                <div className = {impactStyle['hex-body']}>
                    <p className = {impactStyle['hex-text']}>text</p>text</div>
                <div className = {impactStyle['hex-tri2']}></div>
            </div>
            <div className = {impactStyle['hexagon']}>
                <div className = {impactStyle['hex-tri']}></div>
                <div className = {impactStyle['hex-body']}>
                    <p className = {impactStyle['hex-text']}>text</p>text</div>
                <div className = {impactStyle['hex-tri2']}></div>
            </div>
            <div className='bottomLinks'>
                <Link to="/discover/teams">Teams</Link>
                <Link to="/discover/lament">Lament</Link>
            </div>
        </>
    )
}