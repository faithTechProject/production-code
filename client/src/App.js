import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { Create } from './pages/create';
import { Stories } from './pages/stories';
import { Help } from './pages/help';
import { Overview } from './pages/overview';
import { DiscoverTeams } from './pages/discover/teams';
import { discoverLament } from './pages/discover/lament';
import { DiscoverProjects } from './pages/discover/projects';
import { DiscoverProblem} from './pages/discover/problem';
import { DiscoverOverview } from './pages/discover/overview';
import { DiscernOverview } from './pages/discern/overview';
import { DiscernBrainstorm } from './pages/discern/brainstorm';
import { DiscernAnalysis } from './pages/discern/analysis';
import { DiscernTimeline } from './pages/discern/timeline';
import Navbar from './pages/common/navbar';
import Table_of_contents from './pages/common/table_of_contents';
import Footer from './pages/common/footer';
import { TestPageDatabase } from './pages/testPageDatabase';
import './app.css'; 

function App() {
  return (
    <div className="hero_app-container">
      <Router>
        <Navbar className="navbar" />
        <div className="content-layout">
          <Table_of_contents className="table-of-contents" />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/create" element={<Create />} />
              <Route path="/stories" element={<Stories />} />
              <Route path="/help" element={<Help />} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/discover/overview" element={<DiscoverOverview />} />
              <Route path="/discover/projects" element={<DiscoverProjects />} />
              <Route path="/discover/teams" element={<DiscoverTeams />} />
              <Route path="/discover/problem" element={<DiscoverProblem />} />
              <Route path="/discover/lament" element={<discoverLament />} />
              <Route path="/discern/overview" element={<DiscernOverview />} />
              <Route path="/discern/brainstorm" element={<DiscernBrainstorm />} />
              <Route path="/discern/analysis" element={<DiscernAnalysis />} />
              <Route path="/discern/timeline" element={<DiscernTimeline />} />
              <Route path="/testPageDatabase" element={<TestPageDatabase />} />
            </Routes>
          </div>
        </div>
        <Footer className="cFooter" />
      </Router>
    </div>
  );
}

export default App;
