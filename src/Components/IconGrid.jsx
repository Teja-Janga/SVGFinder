
import React from "react";
import IconCard from "./IconCard";

const IconGrid = ({ icons, onSelect, favourites, onToggleFavourite, hasSearched }) => {
     if (!hasSearched && icons.length === 0) {
        return (
        <p className="no-results">
            Type something to discover icons...
        </p>
        );
    }
    
    if(hasSearched && icons.length === 0) {
        return(
            <div className="no-results">
                <img
                src="/Error.jpg"
                alt=""
                className="no-results-image"
                />
                <h3>No icon found..!</h3>
                <p>Try a different keyword like "Star", "Home", "Weather".</p>
            </div>
        );
    }
/* ------------------------------------------------------------------------- */
    return(
        <div className="icon-grid">
            {icons.map((iconName) => (
                <IconCard
                    key={iconName}
                    iconName={iconName}
                    onSelect={onSelect}
                    isFavourite={favourites.includes(iconName)}
                    onToggleFavourite={onToggleFavourite}
                />
            ))}
        </div>
    );
};
export default IconGrid