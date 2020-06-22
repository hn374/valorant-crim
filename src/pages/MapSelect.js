import React from 'react';
import { Link } from 'react-router-dom';
import './MapSelect.css';

function MapSelect() {
    return(
        <div className="mapSelectContainer">
            <div className="mapHeaderContainer">
                <Link to="/hero-select" className="mapBackButton">Back</Link>
                <h1 className="mapSelectHeader">Select Map</h1>
            </div>
            <div className="mapCardContainer">
                <Link to="/side-select" id="ascent" className="mapCard" onClick={() => localStorage.setItem('selectedMap', "ascent")}>
                    <h2 className="mapName">Ascent</h2>
                </Link>
                <Link to="/side-select" id="bind" className="mapCard" onClick={() => localStorage.setItem('selectedMap', "bind")}>
                    <h2 className="mapName">Bind</h2>
                </Link>
                <Link to="/side-select" id="haven" className="mapCard" onClick={() => localStorage.setItem('selectedMap', "haven")}>
                    <h2 className="mapName">Haven</h2>
                </Link>
                <Link to="/side-select" id="split" className="mapCard" onClick={() => localStorage.setItem('selectedMap', "split")}>
                    <h2 className="mapName">Split</h2>
                </Link>
            </div>
        </div>
    );
}

export default MapSelect;