import React from 'react';
import './HeroSelect.css';

function HeroSelect() {
    return(
        <div className="heroSelectContainer">
            <h1>Select Hero</h1>
            <div className="heroCardContainer">
                <div className="heroCard"></div>
                <div className="heroCard"></div>
                <div className="heroCard"></div>
                <div className="heroCard"></div>
                <div className="heroCard"></div>
            </div>
            <div className="heroCardContainer">
                <div className="heroCard"></div>
                <div className="heroCard"></div>
                <div className="heroCard"></div>
                <div className="heroCard"></div>
                <div className="heroCard"></div>
            </div>
        </div>
    );
}

export default HeroSelect;