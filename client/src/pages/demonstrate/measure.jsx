import styles from './measure.module.css'

function toggle(x) {
    console.log(getComputedStyle(document.getElementsByClassName(styles.iCardCover)[x]).getPropertyValue('height'))
    if (getComputedStyle(document.getElementsByClassName(styles.iCardCover)[x]).getPropertyValue('height') !== '90px') {
        document.getElementsByClassName(styles.iCardCover)[x].style.setProperty('height','var(--button-height)')
    } else {
        document.getElementsByClassName(styles.iCardCover)[x].style.setProperty('height','calc(var(--var-height) - var(--image-height))')
    }
}

export function DemonstrateMeasure() {
    return (
        <>
            <div id={styles.oTopImage}>
                <h3 className={styles.oTitle}>MEASURE</h3>
            </div>
            <div className='body'>
                <h1>Measuring Redemptive Impact</h1>
                <p>Use this guide to create a simple framework for measruing the redemptive impact of your solution.
                    The goal of this is to quantify your redemptive impact, so you can better visualize the success 
                    of your solution as well as see how much room for growth there is.</p>
                <p>
                    Since every project is different, you'll need to create your own method of "grading" your 
                    team/solution in order to use the provided framework. For every key relationship, you'll 
                    need to enter a grade percentage for depth of relationship and spiritual growth, as well 
                    as an overall grade for community transformation.
                </p>
                <p>Remember the equation:</p>
                <p>redemptive impact = friendship compounded by time</p>
                <h1>ri = f<sup>t</sup></h1>
                <p>Click on the boxes below for some ideas on how to grade your solution:</p>
                <div className={styles.iDeck}>
                    <div className={styles.iCard}>
                        <div className={styles.iCardImg}></div>
                            <ul className={styles.iCardContent}>
                                <li>What is the current state of this relationship?</li>
                                <li>What is the desired state of the relationship and how close are you to it?</li>
                                <li>What actions are you taking to improve the relationship over time?</li>
                                <li>Consider communication - the amount as well as openess and vulnerability</li>
                                <li>Lament - how have you done at maintaining empathy in this relationship?</li>
                                <li>Have you developed trust?</li>
                                <li>Engagement/Presence - how meaningful and genuine are interactions?</li>
                                <li>Have you created shared values and/or goals with them?</li>
                            </ul>
                        <button id="cover" className={styles.iCardCover} onClick={() => toggle(0)}>Depth of Relationships</button>
                    </div>
                    <div className={styles.iCard}>
                        <div className={styles.iCardImg}></div>
                            <ul className={styles.iCardContent}>
                                <li>Long-term Dedication - have you committed to sustaining this relationship?</li>
                                <li>How many do you think will be impacted by your solution, long term?</li>
                                <li>Consider creating a survey to gauge overall community impact, satisfaction, and perceptions of change.</li>
                                <li>Consider any quantitative data you're able to collect (ex: participation rates, usage, rates, etc.)</li>
                                <li>Conduct interviews and focus groups with community members</li>
                                <li>Consider asking unbiased individuals what they think the long-term impact will be?</li>
                            </ul>
                        <button id="cover" className={styles.iCardCover} onClick={() => toggle(1)}>Community Transformation</button>
                    </div>
                    <div className={styles.iCard}>
                        <div className={styles.iCardImg}></div>
                            <ul className={styles.iCardContent}>
                                <li>Consider conducting surveys, focus groups, and interviews to discuss spiritual growth</li>
                                <li>Consider engagement in practices like prayer, worship, and scripture reading</li>
                                <li>Is their lifestyle shifting to reflect christian values and beliefs?</li>
                                <li>With this project being an act of service, how has that impacted your team?</li>
                                <li>Is your solution spreading the gospel in any way?</li>
                            </ul>
                        <button id="cover" className={styles.iCardCover} onClick={() => toggle(2)}>Spiritual Growth</button>
                    </div>
                </div>
                <p>Please take a moment to perform your calculations, then input them into the following table</p>
                <h2 className={styles.solution}>Solution: </h2>
                <div className={styles.alignChart}>
                    <div className={styles.column}>
                        <h3>Depth of Relationships Formed</h3>
                        <div className={styles.relationship}>
                            <p id="relationship1" className={styles.relationshipTitle}>Relationship</p>
                            <div className={styles.percentage}>
                                <input type="text"></input>
                                <p>%</p>
                            </div>
                        </div>
                        <div className={styles.arrowDown}></div>
                        <div className={styles.relationship}>
                            <p id="relationship2" className={styles.relationshipTitle}>Relationship</p>
                            <div className={styles.percentage}>
                                <input type="text"></input>
                                <p>%</p>
                            </div>
                        </div>

                        <div className={styles.relationship}>
                            <p id="relationship3" className={styles.relationshipTitle}>Relationship</p>
                            <div className={styles.percentage}>
                                <input type="text"></input>
                                <p>%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}