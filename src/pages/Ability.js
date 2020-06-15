import React from 'react';
import { Link } from 'react-router-dom';
import './Ability.css';
import * as Scroll from 'react-scroll';

const ScrollLink = Scroll.Link;
const ScrollElement = Scroll.Element;

function Ability() {
    return(
        <div className="abilityContainer">
            <div className="abilityHeaderContainer">
                <Link to="/side-select" className="abilityBackButton">Back</Link>
                <h1 className="abilityHeader">Abilities</h1>
            </div>
            <HeroAbilities />
            <ScrollElement id="firstAbility" name="firstAbility">
                <TipsSection />
            </ScrollElement>
            <ScrollElement id="secondAbility" name="secondAbility">
                <TipsSection />
            </ScrollElement>
            <ScrollElement id="thirdAbility" name="thirdAbility">
                <TipsSection />
            </ScrollElement>
            <ScrollElement id="fourthAbility" name="fourthAbility">
                <TipsSection />
            </ScrollElement>
        </div>
    );
}

function HeroAbilities() {
    return(
        <div className="heroAbilitiesContainer">
            <ScrollLink
            to="firstAbility" 
            spy={true} 
            smooth={true} 
            duration={500}
            offset={-40}
            className="heroAbility">
            </ScrollLink>
            <ScrollLink
            to="secondAbility" 
            spy={true} 
            smooth={true} 
            duration={500}
            offset={-40}
            className="heroAbility">
            </ScrollLink>
            <ScrollLink
            to="thirdAbility" 
            spy={true} 
            smooth={true} 
            duration={500}
            offset={-40}
            className="heroAbility">
            </ScrollLink>
            <ScrollLink
            to="fourthAbility" 
            spy={true} 
            smooth={true} 
            duration={500}
            offset={-40}
            className="heroAbility">
            </ScrollLink>
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