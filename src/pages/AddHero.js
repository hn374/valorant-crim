import React, { useState, useEffect } from 'react';
import './AddHero.css';
import { Link } from 'react-router-dom';
import firebase from '../utils/fire';

function AddHero() {
    const [heroName, setHeroName] = useState("");
    const [image, setImage] = useState();

    const addHeroToFirebase = (event, hero, image) => {
        var ref = firebase.database().ref("/heroes");
        var heroObject = {
            heroName: hero,
            image: image
        };

        ref.push().set(heroObject);

        console.log(hero);
        console.log(image);
        console.log("Call to firebase");

        event.preventDefault();
    };

    const handleHeroNameChange = (event) => {
        console.log("THIS IS THE EVENT TARGET VALUE", event.target.value);
        setHeroName(event.target.value);
        console.log("THIS IS THE HERO NAME", heroName);
    };

    const handleImageChange = (event) => {
        setImage(event.target.value);
    }

    return(
        <div className="addHeroContainer">
            <div className="addHeroHeaderContainer">
                <Link to="/add-post" className="addHeroBackButton">Back</Link>
                <h1 className="addHeroHeader">Add Hero</h1>
                <form className="addHeroForm" onSubmit={(e) => addHeroToFirebase(e, heroName, image)}>
                    <label className="heroNameLabel">
                        Hero Name:
                    </label>
                    <input className="heroNameInput" type="text" onChange={handleHeroNameChange}></input>
                    <label className="heroImageLabel">
                        Image:
                    </label>
                    <input className="heroFileInput" type="file" value={image} onChange={handleImageChange}></input>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        </div>
    );
}

export default AddHero;