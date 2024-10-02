import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { Create } from './pages/create';
import { Stories } from './pages/stories';
import { Help } from './pages/help';
import { Team } from './pages/team';
import { Problem } from './pages/problem';
import { Reflect } from './pages/reflect';
import { Project} from './pages/project';
import { Overview } from './pages/overview';
import { Problem} from './pages/problem';
import Navbar from './pages/navbar';
import Table_of_contents from './pages/table_of_contents';
import Footer from './pages/footer';
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
              <Route path="/problem" element={<Problem />} />
              <Route path="/project" element={<Project />} />
              <Route path="/reflect" element={<Reflect />} />
              <Route path="/team" element={<Team />} />
            </Routes>
          </div>
        </div>
        <Footer className="cFooter" />
      </Router>
    </div>
  );
}

export default App;
