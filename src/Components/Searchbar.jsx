import React from 'react';

import '../css/Searchbar.css';
const Searchbar = ({ searchWord, updateTable }) => {
    return (
      <div className="search-bar">
        <input
          type="search"
          placeholder="Search..."
          value={searchWord}
          onChange={(e) => updateTable(e.target.value)}
        />
      </div>
    );
}

export default Searchbar;