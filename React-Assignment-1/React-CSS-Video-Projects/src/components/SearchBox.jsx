import React from 'react';
import './SearchBox.css';

export default function SearchBox() {
  return (
    <div className="search-box-wrapper">
      <div className="box">
        <div className="search-box">
          <input type="text" placeholder="Type here..." />
          <label htmlFor="" className="icon">
            <i className="fas fa-search"></i>
          </label>
        </div>
      </div>
    </div>
  );
}
