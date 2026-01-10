
import React from "react";
import { Heart } from "lucide-react";

const IconCard = ({ iconName, onSelect, isFavourite, onToggleFavourite }) => {
    const previewUrl = `https://api.iconify.design/${iconName}.svg`;

/* ------------------------------------------------------------------------- */
    return(
        <div className="icon-card">
            <button
                className="favourite-btn"
                onClick={() => onToggleFavourite(iconName)}
            >
                <Heart 
                    size={20}
                    fill={isFavourite ? "#ff4d4d" : "none"}
                    color={isFavourite ? "#ff4d4d" : "#666"}
                />
            </button>

            <div className="icon-preview">
                <img src={previewUrl} alt={iconName} width="40" />
            </div>
            <p className="icon-name">{iconName}</p>
            <button onClick={() => onSelect(iconName)} className="view-btn">View</button>
        </div>
    );
};
export default IconCard

