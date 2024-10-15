// Dropdown.js
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Dropdown({ title, items }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const handleButtonClick = () => {
    setShowDropdown((prev) => !prev);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setShowDropdown(false);
      }
    };

    if (showDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showDropdown]);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button onClick={handleButtonClick} className="dropbtn">
        {title}
      </button>
      {showDropdown && (
        <div className="dropdown-content">
          {items.map((item, index) => (
            <Link key={index} to={item.path}>
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
