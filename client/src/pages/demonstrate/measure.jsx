import { Link } from "react-router-dom";
import { Chart } from "chart.js/auto";
import { useEffect } from 'react';
import axios from 'axios';
import styles from './measure.module.css';


export function DemonstrateMeasure() {
    function toggle(x) {

        console.log(getComputedStyle(document.getElementsByClassName(styles.iCardCover)[x]).getPropertyValue('height'))
        if (getComputedStyle(document.getElementsByClassName(styles.iCardCover)[x]).getPropertyValue('height') !== '90px') {
            document.getElementsByClassName(styles.iCardCover)[x].style.setProperty('height','var(--button-height)')
        } else {
            document.getElementsByClassName(styles.iCardCover)[x].style.setProperty('height','calc(var(--var-height) - var(--image-height))')
        }
    }
    function updateChart(id) {
        var pageData = document.getElementsByTagName('input');
        var chartData = [];
        for (var i in pageData) {
            if (pageData[i].value != "") {
                chartData.push(parseInt(pageData[i].value));
            } else {
                chartData.push(0);
            }}
        if (id<3) {
            var updatedData = parseInt((chartData[0+(id*3)]+chartData[1+(id*3)]+chartData[2+(id*3)]+0.5)/3);
            Chart.getChart('chart'+id).data.datasets[0].data = [updatedData,100-updatedData];
        }
        var set0 = parseInt((chartData[0]+chartData[1]+chartData[2]+0.5)/3);
        var set1 = parseInt((chartData[3]+chartData[4]+chartData[5]+0.5)/3);
        var set2 = parseInt((chartData[6]+chartData[7]+chartData[8]+0.5)/3);
        Chart.getChart('chart3').data.datasets[0].data = [set0,set1,set2];
        Chart.getChart('chart3').update();
        Chart.getChart('chart'+id).update();
    }

    useEffect(() => {
        // Get selected solution
        axios.get(`http://localhost:3000/text-area-reflections/CoCreation`).then(res => {
            var dbData = res.data;
            dbData.sort((a,b) => a.entry_pos - b.entry_pos);
            document.getElementById("solution").innerHTML = 'Solution: ' + dbData[0].reply;
        })
        // Get relationships
        axios.get(`http://localhost:3000/text-area-reflections/Impact`).then(res => { // Grab and load textarea(s) from db
            var dbData = res.data;
            dbData.sort((a, b) => a.entry_pos - b.entry_pos); // orders data by entry_pos
            document.getElementById('relationship1').innerHTML = dbData[0].reply;
            document.getElementById('relationship4').innerHTML = dbData[0].reply;
            document.getElementById('relationship7').innerHTML = dbData[0].reply;

            document.getElementById('relationship2').innerHTML = dbData[4].reply;
            document.getElementById('relationship5').innerHTML = dbData[4].reply;
            document.getElementById('relationship8').innerHTML = dbData[4].reply;

            document.getElementById('relationship3').innerHTML = dbData[8].reply;
            document.getElementById('relationship6').innerHTML = dbData[8].reply;
            document.getElementById('relationship9').innerHTML = dbData[8].reply;
        })

        axios.get(`http://localhost:3000/text-area-reflections/Measure`).then(res => { // Grab and load textarea(s) from db
            var dbData = res.data;
            dbData.sort((a, b) => a.entry_pos - b.entry_pos); // orders data by entry_pos
            for (let response of dbData) {
                document.getElementById('textarea'+response.entry_pos).value = response.reply;
                updateChart(0);
                updateChart(1);
                updateChart(2);
                updateChart(3);
            }
        })

        // Charts
        const pieLabels = ["Achieved","Room to Grow"];
        const pieColors = ["#ffb020","#ea542c"];
        const pieData = {
            type: 'pie',
            data: {
                labels: pieLabels,
                datasets: [
                    {
                        label: pieLabels,
                        data: [0,0],
                        backgroundColor: pieColors,
                    },
                ],
            }
        };
        if (Chart.getChart('chart0') == undefined) {
            const ctx0 = document.getElementById('chart0').getContext('2d');
            const ctx1 = document.getElementById('chart1').getContext('2d');
            const ctx2 = document.getElementById('chart2').getContext('2d');
            const pie0 = new Chart(ctx0, pieData);
            const pie1 = new Chart(ctx1, pieData);
            const pie2 = new Chart(ctx2, pieData);

            const ctx3 = document.getElementById('chart3').getContext('2d');
            const bar0 = new Chart(ctx3, {
                type: 'bar',
                data: {
                    labels: ["Depth of Relationship Formed","Community Transformation","Spiritual Growth"],
                    datasets: [
                        {
                            data: [10,20,30],
                            backgroundColor: ["red","orange","blue"],
                        },
                    ],
                },
                options: {
                    plugins: {
                        legend: {display: false},
                    },
                    scales: {
                        y: {
                            suggestedMax: 100
                        }
                    }
                }
            })
        }
    }, [])

    function saveData(textarea) {
        var id = textarea.target.id.substr(8);
        updateChart(parseInt(id/3));
        axios.patch(`http://localhost:3000/text-area-reflections/?page=Measure&entry_pos=${id}`, {
            reply: textarea.target.value
        });
    }

    return (
        <>
            <div id={styles.oTopImage}>
                <h3 className={styles.oTitle}>MEASURE</h3>
            </div>
            <div className='body'>
                <h1>Measuring Redemptive Impact</h1>
                <p>Use this guide to create a simple framework for measuring the redemptive impact of your solution.
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
                <h2 className={styles.solution} id="solution" >Solution: </h2>
                <div className={styles.lineDown}></div>
                <div className={styles.lineAcross}></div>
                <div className={styles.alignChart}>
                    <div className={styles.column}>
                        <div className={styles.arrowDown}></div>
                        <h3>Depth of Relationships Formed</h3>
                        <div className={styles.arrowDown}></div>
                        <div className={styles.relationship}>
                            <p id="relationship1" className={styles.relationshipTitle}>Relationship</p>
                            <div className={styles.percentage}>
                                <input type="text" id="textarea0" onChange={(e)=>saveData(e)}></input>
                                <p>%</p>
                            </div>
                        </div>
                        <div className={styles.arrowDown}></div>
                        <div className={styles.relationship}>
                            <p id="relationship2" className={styles.relationshipTitle}>Relationship</p>
                            <div className={styles.percentage}>
                                <input type="text" id="textarea1" onChange={(e)=>saveData(e)}></input>
                                <p>%</p>
                            </div>
                        </div>
                        <div className={styles.arrowDown}></div>
                        <div className={styles.relationship}>
                            <p id="relationship3" className={styles.relationshipTitle}>Relationship</p>
                            <div className={styles.percentage}>
                                <input type="text" id="textarea2" onChange={(e)=>saveData(e)}></input>
                                <p>%</p>
                            </div>
                        </div>
                        <div className={styles.arrowDown}></div>
                        <canvas id="chart0"></canvas>
                    </div>
                    <div className={styles.column}>
                        <div className={styles.arrowDown}></div>
                        <h3>Community Transformation</h3>
                        <div className={styles.arrowDown}></div>
                        <div className={styles.relationship}>
                            <p id="relationship4" className={styles.relationshipTitle}>Relationship</p>
                            <div className={styles.percentage}>
                                <input type="text" id="textarea3" onChange={(e)=>saveData(e)}></input>
                                <p>%</p>
                            </div>
                        </div>
                        <div className={styles.arrowDown}></div>
                        <div className={styles.relationship}>
                            <p id="relationship5" className={styles.relationshipTitle}>Relationship</p>
                            <div className={styles.percentage}>
                                <input type="text" id="textarea4" onChange={(e)=>saveData(e)}></input>
                                <p>%</p>
                            </div>
                        </div>
                        <div className={styles.arrowDown}></div>
                        <div className={styles.relationship}>
                            <p id="relationship6" className={styles.relationshipTitle}>Relationship</p>
                            <div className={styles.percentage}>
                                <input type="text" id="textarea5" onChange={(e)=>saveData(e)}></input>
                                <p>%</p>
                            </div>
                        </div>
                        <div className={styles.arrowDown}></div>
                        <canvas id="chart1"></canvas>
                    </div>
                    <div className={styles.column}>
                        <div className={styles.arrowDown}></div>
                        <h3>Spiritual Growth</h3>
                        <div className={styles.arrowDown}></div>
                        <div className={styles.relationship}>
                            <p id="relationship7" className={styles.relationshipTitle}>Relationship</p>
                            <div className={styles.percentage}>
                                <input type="text" id="textarea6" onChange={(e)=>saveData(e)}></input>
                                <p>%</p>
                            </div>
                        </div>
                        <div className={styles.arrowDown}></div>
                        <div className={styles.relationship}>
                            <p id="relationship8" className={styles.relationshipTitle}>Relationship</p>
                            <div className={styles.percentage}>
                                <input type="text" id="textarea7" onChange={(e)=>saveData(e)}></input>
                                <p>%</p>
                            </div>
                        </div>
                        <div className={styles.arrowDown}></div>
                        <div className={styles.relationship}>
                            <p id="relationship9" className={styles.relationshipTitle}>Relationship</p>
                            <div className={styles.percentage}>
                                <input type="text" id="textarea8" onChange={(e)=>saveData(e)}></input>
                                <p>%</p>
                            </div>
                        </div>
                        <div className={styles.arrowDown}></div>
                        <canvas id="chart2"></canvas>
                    </div>
                </div>
                <canvas id="chart3"></canvas>
            </div>
            <div className='bottomLinks'>
                    <div>
                        <p>Previous</p>
                        <Link to="/demonstrate/impact">Impact</Link>
                    </div>
                    <div>
                        <p>Next</p>
                        <Link to="/demonstrate/story">Story</Link>
                    </div>
                </div>
        </>
    )
}