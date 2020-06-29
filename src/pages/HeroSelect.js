import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HeroSelect.css';
import firebase from '../utils/fire';

function HeroSelect() {
    const [heroes, setHeroes] = useState([]);

    useEffect(() => {
        getFirebaseHeroes();

        // console.log("THIS IS HEROES", heroes);
    }, []);

    async function getFirebaseHeroes() {
        let heroArray = [];

        await firebase.database().ref('/heroes').on('value', (snapshot) => {
            const heroObject = snapshot.val();
            heroArray.push(heroObject);

            setHeroes(heroArray);
            console.log(heroArray);
            console.log("THIS IS HEROES", heroes);
        });
    }

    return(
        <div className="heroSelectContainer">
            <div className="heroHeaderContainer">
                <h1 className="heroSelectHeader">Select Hero</h1>
            </div>
            <div className="heroCardContainer">
                <Link to="/map-select" id="sage" className="heroCard" onClick={() => localStorage.setItem('selectedHero', "sage")}></Link>
                <Link to="/map-select" id="breach" className="heroCard" onClick={() => localStorage.setItem('selectedHero', "breach")}></Link>
                <Link to="/map-select" id="brimstone" className="heroCard" onClick={() => localStorage.setItem('selectedHero', "brimstone")}></Link>
                <Link to="/map-select" id="cypher" className="heroCard" onClick={() => localStorage.setItem('selectedHero', "cypher")}></Link>
                <Link to="/map-select" id="jett" className="heroCard" onClick={() => localStorage.setItem('selectedHero', "jett")}></Link>
                <Link to="/map-select" id="omen" className="heroCard" onClick={() => localStorage.setItem('selectedHero', "omen")}></Link>
                <Link to="/map-select" id="phoenix" className="heroCard" onClick={() => localStorage.setItem('selectedHero', "phoenix")}></Link>
                <Link to="/map-select" id="raze" className="heroCard" onClick={() => localStorage.setItem('selectedHero', "raze")}></Link>
                <Link to="/map-select" id="reyna" className="heroCard" onClick={() => localStorage.setItem('selectedHero', "reyna")}></Link>
                <Link to="/map-select" id="sova"className="heroCard" onClick={() => localStorage.setItem('selectedHero', "sova")}></Link>
                <Link to="/map-select" id="viper" className="heroCard" onClick={() => localStorage.setItem('selectedHero', "viper")}></Link>
            </div>
        </div>
    );
}

export default HeroSelect;