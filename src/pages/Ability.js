import React from 'react';
import './Ability.css';

function Ability() {
    return(
        <div className="abilityContainer">
            <div className="abilityHeaderContainer">
                <button className="abilityBackButton">Back</button>
                <h1 className="abilityHeader">Abilities</h1>
            </div>
            <HeroAbilities />
            <TipsSection />
            <TipsSection />
            <TipsSection />
            <TipsSection />
        </div>
    );
}

function HeroAbilities() {
    return(
        <div className="heroAbilitiesContainer">
            <div className="heroAbility"></div>
            <div className="heroAbility"></div>
            <div className="heroAbility"></div>
            <div className="heroAbility"></div>
        </div>
    );
}

function TipsSection() {
    return(
        <div className="tipsContainer">
            <h1>Ability Name</h1>
            <div className="tipsCardContainer">
                <div className="tipCard"></div>
                <div className="tipCard"></div>
                <div className="tipCard"></div>
                <div className="tipCard"></div>
                <div className="tipCard"></div>
                <div className="tipCard"></div>
            </div>
        </div>
    );
}

export default Ability;