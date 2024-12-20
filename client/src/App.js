import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Workbook } from './pages/workbook';
import { DiscoverTeams } from './pages/discover/teams';
import { DiscoverLament } from './pages/discover/lament';
import { DiscoverProjects } from './pages/discover/projects';
import { DiscoverProblem} from './pages/discover/problem';
import { DiscoverOverview } from './pages/discover/overview';
import { DiscernOverview } from './pages/discern/overview';
import { DiscernAnalysis } from './pages/discern/analysis';
import { DiscernTimeline } from './pages/discern/timeline';
import { DiscernBrainstorm } from './pages/discern/brainstorm';
import { DevelopOverview } from './pages/develop/overview';
import { DevelopTickets } from './pages/develop/tickets';
import { DemonstrateOverview } from './pages/demonstrate/overview';
import { DevelopCoCreation } from './pages/develop/co_creation'; 
import { DemonstrateMeasure} from './pages/demonstrate/measure';
import { DemonstrateImpact } from './pages/demonstrate/impact';
import Navbar from './pages/common/navbar';
import { Story } from './pages/demonstrate/story'
import { Conclusion } from './pages/demonstrate/conclusion';
import TableOfContents from './pages/common/tableOfContents';
import Footer from './pages/common/footer';
import { ScrollTop } from './scrollTop';

import './app.css'; 

function App() {
  return (
    <div className="hero_app_container">
      <Router>
        <ScrollTop />
        <Navbar className="navbar" />
        <div className="content-layout">
          <TableOfContents className="tableOfContents"/>
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Workbook />} />
              <Route path="/discover/overview" element={< DiscoverOverview />} />
              <Route path="/discover/projects" element={< DiscoverProjects />} />
              <Route path="/discover/teams" element={< DiscoverTeams />} />
              <Route path="/discover/problem" element={< DiscoverProblem />} />
              <Route path="/discover/lament" element={< DiscoverLament />} />
              <Route path="/discern/overview" element={< DiscernOverview />} />
              <Route path="/discern/brainstorm" element={< DiscernBrainstorm />} />
              <Route path="/develop/overview" element={< DevelopOverview />} />
              <Route path="/discern/analysis" element={< DiscernAnalysis />} />
              <Route path="/discern/timeline" element={< DiscernTimeline />} />
              <Route path="/discern/brainstorm" element={< DiscernBrainstorm />} />
              <Route path="/demonstrate/overview" element={< DemonstrateOverview />} />
              <Route path="/develop/tickets" element={< DevelopTickets />} />
              <Route path="/demonstrate/conclusion" element={< Conclusion />} />
              <Route path="/develop/co_creation" element={< DevelopCoCreation />} />
              <Route path="/develop/tickets" element={< DevelopTickets />} />
              <Route path="/demonstrate/story" element={< Story />} />
              <Route path="/demonstrate/impact" element= {< DemonstrateImpact/>} />
              <Route path="/demonstrate/measure" element={< DemonstrateMeasure/>} />
            </Routes>
          </div>
        </div>
        <Footer className="cFooter" />
      </Router>
    </div>
  );
}

export default App;
