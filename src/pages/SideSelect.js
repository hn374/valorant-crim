import React from 'react';
import './SideSelect.css';

function SideSelect() {
    return(
        <div className="sideSelectContainer">
            <h1 className="sideSelectHeader">Select Side</h1>
            <div className="sideHeaderContainer">
                <h2>Blue Defense</h2>
                <h2>Red Attack</h2>
            </div>
            <div className="sideCardContainer">
                <a id="blueSide" className="sideCard"></a>
                <a id="redSide" className="sideCard"></a>
            </div>
        </div>
    );
}

export default SideSelect;