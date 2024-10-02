import { Link } from 'react-router-dom';
import '../stylesheets/navbar.css';

export function Navbar() {
  return (
    <nav className="hero_navbar">
      <div className="logo">
        <Link to="/">Logo</Link>
      </div>
      <ul>
        <li>
          <Link to="/Create">Create</Link>
        </li>
        <li>
          <Link to="/Stories">Stories</Link>
        </li>
        <li>
          <Link to="/Help">Help</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
