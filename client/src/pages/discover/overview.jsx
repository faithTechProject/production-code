import { Link } from "react-router-dom"
import '../stylesheets/common.css';
import '../stylesheets/App.css';
import '../stylesheets/discover.css';
export function DiscoverOverview() {
    return (
        <>
            <div id="oDiscoverTopImage">
                <h3 class="oTitle">DISCOVER</h3>
            </div>
            
            <div className="body">
                <div class="oDiscoverBox">
                    <p class="o1Dp2">
                        <b>Discover</b>
                    </p>
                    <p class="o1Dp2">
                        Reorient to see, through the lens of Christ, those most affected by the problem
                    </p>
                </div>
                <div id="o4Ddiscover"></div>
            </div>
            <div className="body">
            <h2 class="o1Dh2">What is Discover?</h2>
            <p class="o1Dp1">The first goal of the Discover stage is to help you discover your project.
                Running Create in your community can be a powerful way to address technological challenges through a redemptive lens.
                This section will guide you through the process of deciding what problem you want to work on and forming a team to come alongside you.
                The next goal of the Discover stage is to then take that problem and reorient ourselves to see, through the lens of Christ, those most affected by the problem.
                We position ourselves humbly through a practice of lament.
            </p>
            <div class="oQuoteBox">
                <p class="oQuoteText">
                    "In the FaithTech community, a problem is commonly expressed through lament.
                    As innovators, we tend to run to the solution.
                    But we press pause on that tendency for a moment."
                    <br></br>
                    <br></br>
                    -The FaithTech Playbook
                </p>
            </div>
            </div>
            <div className="body">
            <h2 class="o1Dh2">Discover Session</h2>
            <p class="o1Dp2">Watch this video with your team to learn more about the Discover stage.
                <br></br>
            </p>
            <iframe width="568" height="340" src="https://www.youtube.com/embed/HATvpvzLPcU" title="FaithTech Create 2023-Week 1 - Discover-1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </>
    )
}