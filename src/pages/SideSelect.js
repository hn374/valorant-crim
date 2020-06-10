import React from 'react';
import './SideSelect.css';

function SideSelect() {
    return(
        <div className="sideSelectContainer">
            <h1 className="sideSelectHeader">Select Side</h1>
            <div className="sideCardContainer">
                <a id="blueSide" className="sideCard">
                    <h2 id="attackHeader" className="sideHeader">Attack</h2>
                </a>
                <a id="redSide" className="sideCard">
                    <h2 id="defenseHeader" className="sideHeader">Defense</h2>
                </a>
            </div>
        </div>
    );
}

export default SideSelect;