
import React, { useState, useEffect } from "react";

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    useEffect(() => {
        const timer = setTimeout(() => {
            if(query.trim()) {
                onSearch(query);
            }
        }, 600);

        return () => clearTimeout(timer);
    }, [query, onSearch]);
/* ------------------------------------------------------------------------- */
    return(
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search for icons (Eg: star, react, pizza, coffee)..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
        </div>
    );
};
export default SearchBar