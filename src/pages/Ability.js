import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Ability.css';
import * as Scroll from 'react-scroll';
import SimpleModalSlideshow from 'react-simple-modal-slideshow';

const ScrollLink = Scroll.Link;
const ScrollElement = Scroll.Element;

function Ability() {
    const imgs = [];
    const slides = [];

    for (let i = 0; i < 30; i++) {
    imgs.push(`https://unsplash.it/200/200?image=${i}`);

    slides.push({
        media: (
        <img src={`https://unsplash.it/600/400?image=${i}`} />
        ),
    });
    }
    const [isOpen, setIsOpen] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    function handlePrev(index) {
        setCurrentSlide(index);
    }

    function handleNext(index) {
        setCurrentSlide(index);
    }

    function handleClose() {
        setIsOpen(false);
    }

    function openSlideShow(index) {
        setIsOpen(true);
        setCurrentSlide(index);
    }

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

            {/* <SimpleModalSlideshow
                slides={slides}
                open={isOpen}
                currentSlide={currentSlide}
                onClose={handleClose}
                onNext={handleNext}
                onPrev={handlePrev}
            /> */}
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