
import React, { useState, useEffect } from "react";

function ExportModal({ iconName, onClose }) {
    const [svgCode, setSvgCode] = useState('');
    const [color, setColor] = useState('#00d2ff');
    const [size, setSize] = useState(64);

    useEffect(() => {           /* "%23" is the URL code for the symbol "#" */
        const fetchCode = async () => {
            const cleanColor = color.replace('#', '');
            const url = `https://api.iconify.design/${iconName}.svg?color=%23${cleanColor}&width=${size}&height=${size}`;
            const response = await fetch(url); 
            const code = await response.text();
            setSvgCode(code);
        };
        fetchCode();
    }, [iconName, color, size]);

    const handleCopy = () => {
        navigator.clipboard.writeText(svgCode);
        alert("SVG code Copied!");
    };
    const cleanColor = color.replace('#', '');
    const url = `https://api.iconify.design/${iconName}.svg?color=%23${cleanColor}&width=${size}&height=${size}`;
/* ------------------------------------------------------------------------- */
    return(
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Export {iconName}</h2>
                <div className="preview-large">
                    <img
                        src={url}
                        alt="Live Preview"
                        style={{ width:"auto", height: 'auto' }}
                    />
                </div>
                <div className="customizer-controls">
                    <div className="control-group">
                        <label>Color: </label>
                        <input
                            type="color"
                            value={color}
                            onChange={(e) => setColor(e.target.value)}
                        />
                    </div>
                    <div className="control-group">
                        <label>Size: </label>
                        <input
                            type="range"
                            min="16"
                            max="256"
                            value={size}
                            onChange={(e) => setSize(e.target.value)}
                            title="Size of the icon"
                        />
                    </div>
                </div>

                <pre className="code-block">{svgCode}</pre>
                <div className="modal-actions">
                    <button onClick={handleCopy} className="copy-button">
                        Copy Code</button>
                    <button onClick={onClose} className="close-btn">
                        Close</button>
                </div>
            </div>
        </div>
    );
}
export default ExportModal;