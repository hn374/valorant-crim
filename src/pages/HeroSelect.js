import React from 'react';
import './HeroSelect.css';

function HeroSelect() {
    return(
        <div className="heroSelectContainer">
            <div className="heroHeaderContainer">
                <h1 className="heroSelectHeader">Select Hero</h1>
            </div>
            <div className="heroCardContainer">
                <a href="#" className="heroCard"></a>
                <a href="#" className="heroCard"></a>
                <a href="#" className="heroCard"></a>
                <a href="#" className="heroCard"></a>
                <a href="#" className="heroCard"></a>
                {/* <div className="heroCard"></div>
                <div className="heroCard"></div>
                <div className="heroCard"></div>
                <div className="heroCard"></div>
                <div className="heroCard"></div> */}
            </div>
            <div className="heroCardContainer">
                <a href="#" className="heroCard"></a>
                <a href="#" className="heroCard"></a>
                <a href="#" className="heroCard"></a>
                <a href="#" className="heroCard"></a>
                <a href="#" className="heroCard"></a>
                {/* <div className="heroCard"></div>
                <div className="heroCard"></div>
                <div className="heroCard"></div>
                <div className="heroCard"></div>
                <div className="heroCard"></div> */}
            </div>
        </div>
    );
}

export default HeroSelect;