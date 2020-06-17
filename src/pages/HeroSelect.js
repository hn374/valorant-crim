import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSelect.css';

function HeroSelect() {
    return(
        <div className="heroSelectContainer">
            <div className="heroHeaderContainer">
                <h1 className="heroSelectHeader">Select Hero</h1>
            </div>
            <div className="heroCardContainer">
                <Link to="/map-select" id="sage" className="heroCard"></Link>
                <Link to="/map-select" id="breach" className="heroCard"></Link>
                <Link to="/map-select" id="brimstone" className="heroCard"></Link>
                <Link to="/map-select" id="cypher" className="heroCard"></Link>
                <Link to="/map-select" id="jett" className="heroCard"></Link>
                <Link to="/map-select" id="omen" className="heroCard"></Link>
                <Link to="/map-select" id="phoenix" className="heroCard"></Link>
                <Link to="/map-select" id="raze" className="heroCard"></Link>
                <Link to="/map-select" id="reyna" className="heroCard"></Link>
                <Link to="/map-select" id="sova"className="heroCard"></Link>
                <Link to="/map-select" id="viper" className="heroCard"></Link>
            </div>
        </div>
    );
}

export default HeroSelect;