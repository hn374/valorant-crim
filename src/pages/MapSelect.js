import React from 'react';
import './MapSelect.css';

function MapSelect() {
    return(
        <div className="mapSelectContainer">
            <div className="mapHeaderContainer">
                <button className="mapBackButton">Back</button>
                <h1 className="mapSelectHeader">Select Map</h1>
            </div>
            <div className="mapCardContainer">
                <a id="ascent" className="mapCard">
                    <h2 className="mapName">Ascent</h2>
                </a>
                <a id="bind" className="mapCard">
                    <h2 className="mapName">Bind</h2>
                </a>
                <a id="haven" className="mapCard">
                    <h2 className="mapName">Haven</h2>
                </a>
                <a id="split" className="mapCard">
                    <h2 className="mapName">Split</h2>
                </a>
            </div>
        </div>
    );
}

export default MapSelect;