import { Link } from 'react-router-dom';
import styles from './overview.module.css';
export function DiscernOverview() {
    return (
        <>
            <div id={styles.oDiscernTopImage}>
                <h3 className={styles.oTitle}>DISCERN</h3>
            </div>
            <div className='body'>
            <div className={styles.highlight4D}>
                <div id={styles.o4Ddiscern}></div>
                <div className={styles.oDiscernBox}>
                    <h3>Discern</h3>
                    <p>Involve the wisdom of God through the Holy Spirit, testing and refining our approach continually</p>
                </div>
            </div>
                <h2>What is Discern?</h2>
                <p>
                    We involve the wisdom of God, testing and refining our approach continually. 
                    We recognize that true discernment often comes from beyond our own frames of reference, and we seek to uncover and understand the will of God.
                    It is at the stage of discernment where we run the greatest risk of building reckless technology. 
                    It is the easiest stage to ignore or skip. 
                    We think of some quick solutions and we start building. 
                    It is back to “move fast, break things.” 
                    We buy into the lie that without disrupting an industry, without moving at light speed to do so, we will not win.
                    Our response, above all else, is to engage in prayerful discernment, seeking the will of God for what may come next. 
                    As Paul the apostle instructs us:
                </p>
                <p className={styles.oQuoteText}>
                    Do not conform to the pattern of this world, but be transformed by the renewing of your mind. 
                    Then you will be able to test and approve what God’s will is—his good, pleasing and perfect will.
                    <br></br>
                    <br></br>
                    Romans 12:2
                </p>
                <p>
                    We move from “How Might We” (human-centered) toward “How Might Jesus” (Christ-centered) as we discern if, what, and how we might build.
                    We recognize that true discernment often comes from beyond our own frames of reference, and we seek to uncover and understand the will of God.
                </p>
                <h2>Discern Session</h2>
                <p className={styles.oCenteredText}>Watch this video with your team to learn more about the Discern stage.
                    <br></br>
                </p>
                <iframe width="568" height="340" src="https://www.youtube.com/embed/0GSfhbMIeAE" title="FaithTech Create 2023-Week 2 - Discern" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <br></br>
                <div className='bottomLinks'>
                    <div>
                        <p>Previous</p>
                        <Link to="/discover/lament">Lament</Link>
                    </div>
                    <div>
                        <p>Next</p>
                        <Link to="/discern/brainstorm">Brainstorm</Link>
                    </div>
                </div>
            </div>
        </>
    )
}