import React from 'react';
import { Link } from 'react-router-dom';
import './SideSelect.css';

function SideSelect() {
    return(
        <div className="sideSelectContainer">
            <div className="sideHeaderContainer">
                <Link to="/map-select" className="sideBackButton">Back</Link>
                <h1 className="sideSelectHeader">Select Side</h1>
            </div>
            <div className="sideCardContainer">
                <Link to="/ability" id="blueSide" className="sideCard">
                    <h2 id="attackHeader" className="sideHeader">Attack</h2>
                </Link>
                <Link to="/ability" id="redSide" className="sideCard">
                    <h2 id="defenseHeader" className="sideHeader">Defense</h2>
                </Link>
            </div>
        </div>
    );
}

export default SideSelect;