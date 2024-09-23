import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import { Home } from './pages/home';
import { Create } from './pages/create'
import { Stories } from './pages/stories';
import { Help } from './pages/help';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="create" element={<Create/>}/>
        <Route path="/stories" element={<Stories/>}/>
        <Route path="/help" element={<Help/>}/>
      </Routes>
    </Router>
  )
}

export default App;
