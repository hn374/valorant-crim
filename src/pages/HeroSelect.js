import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HeroSelect.css';
import firebase from '../utils/fire';

function HeroSelect() {
    const [heroes, setHeroes] = useState([]);
    const [selectedHero, setSelectedHero] = useState('');

    useEffect(() => {
        localStorage.setItem('selectedHero', selectedHero);
        console.log("THIS IS SELECTED", selectedHero);
    }, [selectedHero]);

    useEffect(() => {
        // firebase.database().ref('/heroes').on('value', (snapshot) => {
        //     const heroObject = snapshot.val();
        //     heroArray.push(heroObject);
        //     setHeroes(heroArray);
        //     // console.log(heroArray);
        // });

        getFirebaseHeroes();

        console.log("THIS IS HEROES", heroes);
    }, []);

    async function getFirebaseHeroes() {
        let heroArray = [];

        await firebase.database().ref('/heroes').on('value', (snapshot) => {
            const heroObject = snapshot.val();
            heroArray.push(heroObject);

            console.log(heroArray);
        });
    }

    function heroSelected(event) {
        setSelectedHero(event.target.id);
        console.log(event.target.id);
        console.log(selectedHero);
    }

    return(
        <div className="heroSelectContainer">
            <div className="heroHeaderContainer">
                <h1 className="heroSelectHeader">Select Hero</h1>
            </div>
            <div className="heroCardContainer">
                <Link to="/map-select" id="sage" className="heroCard" onClick={heroSelected}></Link>
                <Link to="/map-select" id="breach" className="heroCard" onClick={heroSelected}></Link>
                <Link to="/map-select" id="brimstone" className="heroCard" onClick={heroSelected}></Link>
                <Link to="/map-select" id="cypher" className="heroCard" onClick={heroSelected}></Link>
                <Link to="/map-select" id="jett" className="heroCard" onClick={heroSelected}></Link>
                <Link to="/map-select" id="omen" className="heroCard" onClick={heroSelected}></Link>
                <Link to="/map-select" id="phoenix" className="heroCard" onClick={heroSelected}></Link>
                <Link to="/map-select" id="raze" className="heroCard" onClick={heroSelected}></Link>
                <Link to="/map-select" id="reyna" className="heroCard" onClick={heroSelected}></Link>
                <Link to="/map-select" id="sova"className="heroCard" onClick={heroSelected}></Link>
                <Link to="/map-select" id="viper" className="heroCard" onClick={heroSelected}></Link>
            </div>
        </div>
    );
}

export default HeroSelect;