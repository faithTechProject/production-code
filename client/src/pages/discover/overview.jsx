import { Link } from "react-router-dom"
import styles from './overview.module.css';
export function DiscoverOverview() {
    return (
        <>
                <div id={styles.oDiscoverTopImage}>
                        <h3 class={styles.oTitle}>DISCOVER</h3>
                </div> 
                <div className={styles.body}>
                <div className={styles.highlight4D}>
                    <div class={styles.oDiscoverBox}>
                        <h3>Discover</h3>
                        <p>Reorient to see, through the lens of Christ, those most affected by the problem</p>
                    </div>
            <div id={styles.o4Ddiscover}></div>
            </div>
                <h2>What is Discover?</h2>
                <p style={{margin: '0% 5%'}}>The first goal of the Discover stage is to help you discover your project.
                    Running Create in your community can be a powerful way to address technological challenges through a redemptive lens.
                    This section will guide you through the process of deciding what problem you want to work on and forming a team to come alongside you.
                    The next goal of the Discover stage is to then take that problem and reorient ourselves to see, through the lens of Christ, those most affected by the problem.
                    We position ourselves humbly through a practice of lament.
                </p>
                <div class={styles.oQuoteBox}>
                    <p class={styles.oQuoteText}>
                        "In the FaithTech community, a problem is commonly expressed through lament.
                        As innovators, we tend to run to the solution.
                        But we press pause on that tendency for a moment."
                        <br></br>
                        <br></br>
                        -The FaithTech Playbook
                    </p>
                </div>
                <h2 class={styles.o1Dh2}>Discover Session</h2>
                <p class={styles.o1Dp2}>Watch this video with your team to learn more about the Discover stage.
                    <br></br>
                </p>
                <iframe width="568" height="340" src="https://www.youtube.com/embed/HATvpvzLPcU" title="FaithTech Create 2023-Week 1 - Discover-1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <br></br>
                <div className='bottomLinks'>
                    <div>
                        <p>Previous</p>
                        <Link to="/">Workbook</Link>
                    </div>
                    <div>
                        <p>Next</p>
                        <Link to="/discover/projects">Projects</Link>
                    </div>
                </div>
            </div>
        </>
    )
}