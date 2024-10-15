
import { Link } from "react-router-dom"
import '../stylesheets/common.css';
export function Footer() {
    return (
        <>
    <footer>
        <div class="tableGroup">
            <ul>
                <li class="cListHeader">Docs</li>
                <li><Link to="/create">Overview</Link></li>
            </ul>
            <ul>
                <li class="cListHeader">Community</li>
                <li><a href="https://www.linkedin.com/company/faithtechhub/">LinkedIn
                    <svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" class="iconExternalLink_nPIU"><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg>
                </a></li>
                <li><a href="https://faithtechhub.slack.com/">Slack
                    <svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" class="iconExternalLink_nPIU"><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg>
                </a></li>
                <li><a href="https://twitter.com/faithtechhub">X
                    <svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" class="iconExternalLink_nPIU"><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg>
                </a></li>
            </ul>
            <ul>
                <li class="cListHeader">More</li>
                <li><Link to="/stories">Blog</Link></li>
                <li><a href="https://github.com/FaithTechCreate/workbook">GitHub
                    <svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" class="iconExternalLink_nPIU"><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg></a></li>
            </ul>
        </div>
        <p>Copyright © 2024 FaithTech, Inc. Built with React.</p>
    </footer>
        </>
    )
}
export default Footer;