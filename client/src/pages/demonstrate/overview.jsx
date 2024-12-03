//import styles from './demonstrateOverview'
import { Link } from "react-router-dom";
import styles from './overview.module.css';

//className = {styles.}
export function DemonstrateOverview() {
    return (
        <>
            <div className={styles.obody1}>
                <div id={styles.oDemonstrateTopImage}>
                        <h3 className={styles.oTitle}>DEMONSTRATE</h3>
                </div>
                <div className={styles.oDemonstrateBox}>
                    <p className={styles.o4Dp2}>
                        <b>Demonstrate</b>
                    </p>
                    <p className={styles.o4Dp2}>
                        Redefine impact as friendship compounded by time and measure and demonstrate our impact redemptively
                    </p>
                </div>
            </div>
            <div className={styles.demonstrateBody}>
                <div id={styles.o4Ddemonstrate}></div>
                <br></br>
            </div>
            <div className={styles.obody2}>
                <h2 className={styles.o4Dh2}>What is Demonstrate?</h2>
                <p className={styles.o4Dp1}>In this final stage of the 4D Cycle, we redine impact from the greatest amount of force in the shortest amount of time to friendship compounded by time. 
                    Using this new equation, we measure and demonstrate our impact redemptively.
                    Depth with Jesus, depth with each other - that is ultimately what we at FaithTech are seeking as we practice redemptive technology design in community.
                </p>
                <div className={styles.oQuoteBox}>
                    <p className={styles.oQuoteText}>
                        We believe there is a way of building technology that redemptively changes the world while transforming those who build it.
                        We believe this because we believe in a Savior who sacrificed himself willingly to love and serve us and who calls us to this way of life.
                        <br></br>
                        <br></br>
                        -The FaithTech Playbook
                    </p>
                </div>
                <h2 className={styles.o4Dh2}>The Reality We Inhabit</h2>
                <p className={styles.o4Dp1}>A myth of tech startup success is that the most impactful product and company achieves the greatest amount of force in the shortest amount of time.
                    The faster we can get an exit, or sell a product, or attract users, the greater our impact will be- or so the thinking goes.
                    As Andy Crouch has observed, the modern definition of impact looks like this:
                </p>
                <p className={styles.oFormula}>
                    <b>i = <sup>f</sup>/<sub>t</sub></b>
                </p>
                <p className={styles.o4Dp1}>Where i=impact, f=force, and t=time. <br></br>
                    In tech, this formula often communicates a requirement to build at the lowest cost, as quickly as possible, to gain the highest possible financial return.
                    But often the impact results in exploitation, breakdown of family structures, and burnout in those who build.
                    Modern impact is also displayed by the wide-yet-shallow networks of social media, built for short-term impact.
                    Communities, families, and even children are sacrificed on the altar of short-term, forceful impact.
                    This sort of impact increases the distance between us, when God's plan was always for us to draw nearer to one another.
                </p>
                <h2 className={styles.o4Dh2}>Redemptive Opportunities</h2>
                <p className={styles.o4Dp1}>Our impact is not demonstrated by the amount of force over time, but rather by the compounding of relationships over time- both as a team and with the community we are building to serve.
                    The greatest redemptive opportunity is not just an impactful product- rather it is the development of relationships with God, with the team, and with the beneficiaries of the solution.
                    <br></br>
                    Crouch's definition of influence looks like this:
                </p>
                <p className={styles.oFormula}>
                    <b>i = f<sup> t</sup></b>
                </p>
                <p className={styles.o4Dp1}>Where i=influence, f=friendship, and t=time. <br></br>
                    We suggest that this could also be considered "redemptive impact" (ri):
                </p>
                <p className={styles.oFormula}>
                    <b>ri = f<sup> t</sup></b>
                </p>
                <p className={styles.o4Dp1}>Redemptive impact begins with a counter-cultural force called friendship.
                    The willingness to go deep in community over time, building relationships that require sacrifice.
                    This impact is demonstrated most powerfully in the lifestyle of Jesus Christ.
                    Jesus devoted most of his energy and time to a small group of twelve men, with an even smaller circle of three friends- Peter, James, and John.
                    Deep friendship compounded over time produces deep people who develop redemptive impact.
                    <br></br>
                    <br></br>
                    We gauge redemptive impact by how it redefines the community, including both those we are serving and those who are building.
                    And it is demonstrates through the lasting nature of that relationship, as opposed to quick-win solutions that may work for a time but leave those we are serving indebted and alone in the future.
                    <br></br>
                    <br></br>
                    In the end, we create and demonstrate our work through a redemptive lens, giving praise and credit to the work of the Holy Spirit.
                </p>
                <h2 className={styles.o4Dh2}>Demonstrate Session</h2>
                <p className={styles.o4Dp2}>Watch this video with your team to learn more about the Demonstrate stage.
                    <br></br>
                </p>
                <iframe width="568" height="340" src="https://www.youtube.com/embed/qftWe7rriso" title="FaithTech Create 2023-Week 4 - Demonstrate-4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <br></br>
            </div>
        </>
    )
}
