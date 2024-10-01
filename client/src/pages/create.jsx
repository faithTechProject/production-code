import './App.css';
import './4DcycleStyle.css';
import { Link } from "react-router-dom";
import { RedemptiveKevin } from "../RedemptiveKevin";
import './stylesheets/common.css';
export function Create() {
    return (
        <>
            <h1>Create</h1>
            <div id="oTopImage">
                <h3 class="oTitle">FAITH<sc>TECH</sc> WORKBOOK</h3>
            </div>
            <h1 class="oh1">Introduction</h1>
            <p class="op">Welcome to the FaithTech Workbook! This guide is designed to help you building technology using the redemptive framework outlined in the FaithTech Playbook. Whether you're looking to glorify God by solving real-world problems as part of a FaithTech community, another community of Christ-followers, or just a couple of friends - this guide is for you!</p>
            <div className="s4dcycle">{/*This is the 4D cycle bar*/}
                <h2>The 4D Cycle</h2>
                <table><tr>
                    <div className= "gallery">
                        <p1>Disover</p1>
                            <p>Reorient to see, through the lens of Christ, those most affected by the problem</p>
                            <div className= "button1">Learn More</div>
                    </div>
                    <div className= "gallery">
                        <p1>Discern</p1>
                            <p>Involve the wisdom of God through the Holy Spirit, testing and refining our approach continually,</p>
                            <div className= "button1">Learn More</div>
                    </div>
                     <div className= "gallery">
                        <p1>Develop</p1>
                            <p>Recognize that God establishes our steps to develop the solution, and co-develop with the Holy Spirit.</p>
                            <div className= "button1">Learn More</div>
                    </div>
                    <div className= "gallery">
                        <p1>Demonstrate</p1>
                            <p>Redefine impact as friendship compounded by time and measure and demonstrate our impact redemptively.</p>
                            <div className= "button1">Learn More</div>
                    </div>
                </tr></table>
                <p1>To effectively lead projects using the 4D cycle...</p1>
            </div>
            <h2 class="oh2">How to Use This Workbook</h2>
            <p2 class="op2">Each section of this workbook corresponds to a stage in the 4D Cycle. Work through each section in order, completing the exercises and reflecting on the questions provided. Feel free to revisit sections as needed and adapt the exercises to your specific context.</p2>
            <div id="oArrowImage"></div>
            <p2 class="op2">As you progress through the workbook, remember that practicing redemptive technology is an ongoing journey. Continue to apply these principles in your work, always seeking to build technology that helps humanity become persons who love God and love others more deeply. Let's begin our journey towards redemptive technology!</p2>
        </>
    )
}