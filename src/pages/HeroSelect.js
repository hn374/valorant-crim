import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HeroSelect.css';
import firebase from '../utils/fire';

function HeroSelect() {
    const [heroes, setHeroes] = useState([]);

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