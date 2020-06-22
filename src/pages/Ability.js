import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Ability.css';
import * as Scroll from 'react-scroll';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const ScrollLink = Scroll.Link;
const ScrollElement = Scroll.Element;

function Ability() {
    const [selectedHero, setSelectedHero] = useState(localStorage.getItem('selectedHero'));
    const [selectedMap, setSelectedMap] = useState(localStorage.getItem('selectedMap'));
    const [selectedSide, setSelectedSide] = useState(localStorage.getItem('selectedSide'));

    const imgs = [];
    const slides = [];

    for (let i = 0; i < 30; i++) {
        const imageObject = {
            src: `https://unsplash.it/200/200?image=${i}`,
            caption: i,
            width: 400,
            height: "auto"
        }

        // imgs.push(`https://unsplash.it/200/200?image=${i}`);
        imgs.push(imageObject);

        slides.push({
            media: (
            <img src={`https://unsplash.it/600/400?image=${i}`} />
            ),
        });
    }

    return(
        <div className="abilityContainer">
            <div className="abilityHeaderContainer">
                <Link to="/side-select" className="abilityBackButton">Back</Link>
                <h1 className="abilityHeader">Abilities</h1>
            </div>
            <HeroAbilities />
            <ScrollElement id="firstAbility" name="firstAbility">
                <TipsSection images={imgs}/>
            </ScrollElement>
            <ScrollElement id="secondAbility" name="secondAbility">
                <TipsSection images={imgs}/>
            </ScrollElement>
            <ScrollElement id="thirdAbility" name="thirdAbility">
                <TipsSection images={imgs}/>
            </ScrollElement>
            <ScrollElement id="fourthAbility" name="fourthAbility">
                <TipsSection images={imgs}/>
            </ScrollElement>
        </div>
    );
}

function HeroAbilities() {
    return(
        <div className="heroAbilitiesContainer">
            <ScrollLink
            id="firstAbilityCard"
            to="firstAbility" 
            spy={true} 
            smooth={true} 
            duration={500}
            offset={-40}
            className="heroAbility">
            </ScrollLink>
            <ScrollLink
            id="secondAbilityCard"
            to="secondAbility" 
            spy={true} 
            smooth={true} 
            duration={500}
            offset={-40}
            className="heroAbility">
            </ScrollLink>
            <ScrollLink
            id="thirdAbilityCard"
            to="thirdAbility" 
            spy={true} 
            smooth={true} 
            duration={500}
            offset={-40}
            className="heroAbility">
            </ScrollLink>
            <ScrollLink
            id="fourthAbilityCard"
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

function TipsSection(props) {
    const options = {
        buttons: {
          backgroundColor: 'rgba(30,30,36,0.8)',
          iconColor: 'rgba(255, 255, 255, 0.8)',
          iconPadding: '5px',
          showAutoplayButton: false,
          showCloseButton: true,
          showDownloadButton: false,
          showFullscreenButton: false,
          showNextButton: true,
          showPrevButton: true,
          showThumbnailsButton: false,
          size: '40px'
        }
    };

    return(
        <div className="tipsContainer">
            <h1>Ability Name</h1>
            <div className="tipsCardContainer">
                <Carousel 
                className="customCarousel"
                showThumbs={false}
                showIndicators={false}
                infiniteLoop={true}
                showStatus={false}
                >   
                    <img src={`https://unsplash.it/600/400?image=1`}/>
                    <img src={`https://unsplash.it/600/400?image=2`} />
                    <img src={`https://unsplash.it/600/400?image=3`} />
                </Carousel>
                <Carousel 
                className="customCarousel"
                showThumbs={false}
                showIndicators={false}
                infiniteLoop={true}
                showStatus={false}
                >
                    <img src={`https://unsplash.it/600/400?image=1`} />
                    <img src={`https://unsplash.it/600/400?image=2`} />
                    <img src={`https://unsplash.it/600/400?image=3`} />
                </Carousel>
                <Carousel 
                className="customCarousel"
                showThumbs={false}
                showIndicators={false}
                infiniteLoop={true}
                showStatus={false}
                >
                    <img src={`https://unsplash.it/600/400?image=1`} />
                    <img src={`https://unsplash.it/600/400?image=2`} />
                    <img src={`https://unsplash.it/600/400?image=3`} />
                </Carousel>
                <Carousel 
                className="customCarousel"
                showThumbs={false}
                showIndicators={false}
                infiniteLoop={true}
                showStatus={false}
                >
                    <img src={`https://unsplash.it/600/400?image=1`} />
                    <img src={`https://unsplash.it/600/400?image=2`} />
                    <img src={`https://unsplash.it/600/400?image=3`} />
                </Carousel>
                <Carousel 
                className="customCarousel"
                showThumbs={false}
                showIndicators={false}
                infiniteLoop={true}
                showStatus={false}
                >
                    <img src={`https://unsplash.it/600/400?image=1`} />
                    <img src={`https://unsplash.it/600/400?image=2`} />
                    <img src={`https://unsplash.it/600/400?image=3`} />
                </Carousel>
                <Carousel 
                className="customCarousel"
                showThumbs={false}
                showIndicators={false}
                infiniteLoop={true}
                showStatus={false}
                >
                    <img src={`https://unsplash.it/600/400?image=1`} />
                    <img src={`https://unsplash.it/600/400?image=2`} />
                    <img src={`https://unsplash.it/600/400?image=3`} />
                </Carousel>
            </div>
        </div>
    );
}

export default Ability;