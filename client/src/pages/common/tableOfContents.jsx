import './tableOfContents.css'
import Dropdown from './dropdown';
import {discoverItems, discernItems, developItems, demonstrateItems, overviewItems } from './menuItems';

export function Table_of_contents() { 
  return (
    <div className="hero_Table_of_contents">
        <ul className="contents">
        <li>
            <Dropdown title="Overview" items={overviewItems} />
          </li>
          <li>
            <Dropdown title="Discover" items={discoverItems} />
          </li>
          <li>
            <Dropdown title="Discern" items={discernItems} />
          </li>
          <li>
            <Dropdown title="Develop" items={developItems} />
          </li>
          <li>
            <Dropdown title="Demonstrate" items={demonstrateItems} />
          </li>
        </ul>
    </div>
  );
}
export default Table_of_contents;
