import styles from './co_creation.module.css';


export function DevelopCoCreation() {
    
   
    return (
        <div className={styles.hero_co_creatioin_container}>
            <div className={styles.hero_co_creatoin_header}>
                <h1> Co-Creation </h1>
                <div className={styles.image_placeholder}>
                    <p>Team pic</p>
                </div>
            </div>

            <div className={styles.hero_solutions}>
                <p> Before starting the co-creation cycle choose one of your solutions from the discern stage  </p>
                <p> click on one of the solutions below </p>
                <div className={styles.potential_solutions}>
                    <h1>Choose A Solution</h1>
                    <div className={styles.three_cs}>
                        <div className={styles.solutions}>
                            <h1> Reimagine </h1>
                            <p> some text </p>
                        </div>
                        <div className={styles.solutions}>
                            <h1> Recieve </h1>
                            <p> some text </p>
                        </div>
                        <div className={styles.solutions}>
                            <h1> Create </h1>
                            <p> some text </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.co_creation_cycle}>
                <h1> Co-Creation Cycle </h1>
                <p> The Co-Creation cycle is a simple structure that can be repeated as iterations. We "keep asking," creating a rhythm of Spirit-led inspiration and planning as we develop. If your project is short, maybe you'll only go through this cycle once. However, if it's longer, the idea is that your team will cycle through these steps multiple times. Our recommendation is for your team to go through the Co-Creation cycle at the start of every sprint, or whenever you're planning the next sprint. Click the "New Cycle" button to create new areas for input for each activity. </p>
                <button className={styles.new_cycle}> New Cycle </button>
                <div className={styles.Request}> 
                    <p> Write a payer inviting the Holy Spirit into your development process</p>
                    <form >
                        <textarea name="skills" rows={10} cols={20}
                        placeholder="Prayer...."
                        >   
                        </textarea>
                        <input type="submit" value="Save" />
                    </form>
                </div>
            </div>
            
            


        </div>



    )
}



