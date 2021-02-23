import React from "react";


const SearchBar = ({value, onChange}) => {

  
  return (

      <div>
        <label htmlFor="header-search">
            <span className="visually-hidden">Search</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Enter search here"
            name="s"
            value={value}
            onChange={onChange}
        />
      </div>
  )
  }



export default SearchBar;