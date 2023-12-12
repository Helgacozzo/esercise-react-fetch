import React from 'react';
import './SearchBar.scss';

const SearchBar = ({ value, onChange, onSearch }) => {

    return (

        <div className="search-bar">

            <input
                type="text"
                value={value}
                onChange={onChange}
            />

            <button onClick={onSearch}>Cerca</button>

        </div>

    );

};

export default SearchBar;
