import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { Create } from './pages/create';
import { Stories } from './pages/stories';
import { Help } from './pages/help';
import { DiscoverTeams } from './pages/discover/teams';
import { discoverLament } from './pages/discover/lament';
import { DiscoverProjects } from './pages/discover/projects';
import { Overview } from './pages/overview';
import { DiscoverOverview } from './pages/discover/overview';
import Navbar from './pages/common/navbar';
import Table_of_contents from './pages/common/table_of_contents';
import Footer from './pages/common/footer';
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
              <Route path="/discover/lament" element={<discoverLament />} />
            </Routes>
          </div>
        </div>
        <Footer className="cFooter" />
      </Router>
    </div>
  );
}

export default App;
