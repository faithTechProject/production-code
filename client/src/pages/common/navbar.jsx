import { Link } from 'react-router-dom';
import '../stylesheets/navbar.css';
import logo from '../images/logo.svg';

export function Navbar() {
  return (
    <nav className="hero_navbar">
      <div className="logo">
        <Link to="/" className='nav_logo'>
          <img className='faith_tech_logo' src={logo} alt="Logo" />
          <div className='nav_logo_name_fp'>FAITH</div>
          <div className='nav_logo_name_lp'>TECH</div>
        </Link>
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
