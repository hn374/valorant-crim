import React from 'react';
import './MapSelect.css';

function MapSelect() {
    return(
        <div className="mapSelectContainer">
            <div className="">
                <h1 className="mapSelectHeader">Select Map</h1>
            </div>
            <div className="mapCardContainer">
                <a id="ascent" className="mapCard"></a>
                <a id="bind" className="mapCard"></a>
                <a id="haven" className="mapCard"></a>
                <a id="split" className="mapCard"></a>
            </div>
        </div>
    );
}

export default MapSelect;