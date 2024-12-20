// Dropdown.js
import React, { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Dropdown({ title, items }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  // Determine if any of the dropdown items are active
  const isDropdownActive = items.some((item) => location.pathname === item.path);

  function handleButtonClick(e) {
    if (e.target.className != 'dropbtn active') {
      setShowDropdown((prev) => !prev);
    } else if (e.target.parentElement.children.length == 1) {
      setShowDropdown((prev) => !prev);
    }
  };

  return (
    <div className={`dropdown ${isDropdownActive ? 'active' : ''}`} ref={dropdownRef}>
      <button onClick={(e) => handleButtonClick(e)} className={`dropbtn ${isDropdownActive ? 'active' : ''}`}>
        {title}
      </button>
      {showDropdown && (
        <div className="dropdown-content">
          {items.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`dropdown-item ${location.pathname === item.path ? 'active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;