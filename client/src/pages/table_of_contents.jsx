import { Link } from 'react-router-dom';
import './stylesheets/table_of_contents.css'

export function Table_of_contents() {
  return (
    <div className="hero_Table_of_contents">
      <ul>
        <li>
          <Link to="/Overview"> Overview </Link>
        </li>
        <li>
          <Link to="/Discover">Discover</Link>
        </li>
        <li>
          <Link to="/Dicern">Discern</Link>
        </li>
        <li>
          <Link to="/Develop">Develop</Link>
        </li>
        <li>
          <Link to="/Demonstrate">Demonstrate</Link>
        </li>
      </ul>
    </div>
  );
}

export default Table_of_contents;
