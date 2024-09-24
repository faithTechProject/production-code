import { KevinDownloadPlaybook } from "./KevinDownloadPlaybook";
import "./kevinRedemptive.css";

export function RedemptiveKevin() {
    return ( 
    <>
        <div class="kevin-background">
            <h1 class="kevin-center-text">Redemptive Technology Design</h1>
                <div class="kevin-flexbox-container">
                <div class="kevin-flex-item_1 kevin-image">
                    <img src="4Dcycle.png" alt="4Dcycle"/>
                </div>
                <div class="kevin-flex-item_2">
                    <p><strong>Discover:</strong> A time of lament to God in preparing and thinking over all aspects of a problem</p>
                    <p><strong>Discern:</strong> Prayerfully utilizing God's wisdom in approaching a problem in the world, avoiding the reckless technology mindset.
                        Four guidlines to help with discernment include: Reject, Recieve, Reimagine and Create. </p>
                    <p><strong>Develop:</strong> God is the Creator, and as people created in His image we can co-create with the Holy Spirit to develop software in a way that honors Jesus.</p>
                    <p><strong>Demonstrate:</strong> A final release of a project.</p>
                    <KevinDownloadPlaybook class="kevin-download-playbook-button"></KevinDownloadPlaybook>
                </div>
            </div>
        </div>
    </>
    );
};