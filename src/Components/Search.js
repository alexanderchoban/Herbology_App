import React from "react";
import {useState} from 'react';
import herbology from '../herbology';


const [search, setSearch] = useState('')

const SearchBar = () => (
      <div>
        <label htmlFor="header-search">
            <span className="visually-hidden">Search</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Enter search here"
            name="s"
            value={search}
            onChange={event => {
                setSearch(event.target.value)}}
        />
        <button type="submit">Search</button>
      </div>

const filteredNames = search.length === 0 ? herbology
: herbology.filter(herbology =>                         
 herbology.name.toLowerCase().includes(search.toLowerCase()))
)



export default SearchBar;