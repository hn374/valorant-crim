import React from 'react';
import './HeroSelect.css';

function HeroSelect() {
    return(
        <div className="heroSelectContainer">
            <div className="heroHeaderContainer">
                <h1 className="heroSelectHeader">Select Hero</h1>
            </div>
            <div className="heroCardContainer">
                <a href="#" id="sage" className="heroCard"></a>
                <a href="#" id="breach" className="heroCard"></a>
                <a href="#" id="brimstone" className="heroCard"></a>
                <a href="#" id="cypher" className="heroCard"></a>
                <a href="#" id="jett" className="heroCard"></a>
            </div>
            <div className="heroCardContainer">
                <a href="#" id="omen" className="heroCard"></a>
                <a href="#" id="phoenix" className="heroCard"></a>
                <a href="#" id="raze" className="heroCard"></a>
                <a href="#" id="reyna" className="heroCard"></a>
                <a href="#" id="sova"className="heroCard"></a>
            </div>
            {/* <div className="heroCardContainer">
                <a href="#" id="viper" className="heroCard"></a>
            </div> */}
        </div>
    );
}

export default HeroSelect;