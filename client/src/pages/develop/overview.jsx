import { Link } from "react-router-dom";
import styles from './overview.module.css';
export function DevelopOverview() {
    return (
        <>
            <div className={styles.obody1}>
                <div id={styles.oDevelopTopImage}>
                        <h3 className={styles.oTitle}>DEVELOP</h3>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>
            <div className={styles.developBody}>
                <div id={styles.o4Ddevelop}></div>
                <div className={styles.oDevelopBox}>
                    <p className={styles.o3Dp2}>
                        <b>Develop</b>
                    </p>
                    <p className={styles.o3Dp2}>
                        Recognize that God establishes our steps to develop the solution, and co-develop with the Holy Spirit
                    </p>
                </div>
                <br></br>
            </div>
            <div className={styles.obody2}>
                <h2 className={styles.o3Dh2}>What is Develop?</h2>
                <p className={styles.o3Dp1}>In coming to a build decision, we have set our course. 
                    But we recognize that God establishes our steps to develop the solution.
                    The outworking of these steps therefore comes through the active involvement of the Holy Spirit to reveal what is in God’s imagination, 
                    so that we can co-create with him in making new things visible.
                    Therefore we do not simply develop but rather co-develop with the Holy Spirit.
                </p>
                <h2 className={styles.o3Dh2}>The Reality We Inhabit</h2>
                <p className={styles.o3Dp1}>The air we breathe in technology development is efficiency and speed, 
                    especially if one can accomplish great feats of innovation in isolation. 
                    We idolize people’s ability to transcend their body’s demands for sleep and health in order to create a product out of sheer willpower and magical brilliance. 
                    We so easily forget the true reality that all information, knowledge, and understanding is God’s.
                </p>
                <div className={styles.oQuoteBox}>
                    <p className={styles.oQuoteText}>
                        For the Lord gives wisdom; from his mouth comes knowledge and understanding
                        <br></br>
                        <br></br>
                        Proverbs 2:6
                    </p>
                </div>
                <h2 className={styles.o3Dh2}>Redemptive Opportunities</h2>
                <p className={styles.o3Dp1}>Our response to the reality we inhabit is what we call the Co-Creation Cycle.
                    What we need already exists in God, and through the Holy Spirit, 
                    he will reveal this to us, so that what is not yet visible can be brought into view. 
                    Every step of the way, we look to the Holy Spirit to reveal His plan and inspire our work.
                    The Bible says:</p>
                <div className={styles.oQuoteBox}>
                    <p className={styles.oQuoteText}>
                        By faith we understand that the universe was formed at God's command, so that what is seen was not made out of what was visible.
                        <br></br>
                        <br></br>
                        Hebrews 11:3
                    </p>
                </div>
                <h2 className={styles.o3Dh2}>Develop Session</h2>
                <p className={styles.o3Dp2}>Watch this video with your team to learn more about the Develop stage.
                    <br></br>
                </p>
                <iframe width="568" height="340" src="https://www.youtube.com/embed/xTo2p8wMH6s" title="FaithTech Create 2023-Week 3 - Develop-3" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <br></br>
            </div>
            <div className='bottomLinks'>
                    <div>
                        <p>Previous</p>
                        <Link to="/discern/timeline">Timeline</Link>
                    </div>
                    <div>
                        <p>Next</p>
                        <Link to="/develop/co_creation">Co-Creation</Link>
                    </div>
                </div>
        </>
    )
}