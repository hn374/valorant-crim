import React, { useState } from 'react';
import './AddHero.css';
import { Link } from 'react-router-dom';

function AddHero() {
    const [heroName, setHeroName] = useState("");
    const [image, setImage] = useState();

    const addHeroToFirebase = (event) => {
        event.preventDefault();
    };

    const handleHeroNameChange = (event) => {
        setHeroName(event.target.value);
    };

    const handleImageChange = (event) => {
        setImage(event.target.value);
    }

    return(
        <div className="addHeroContainer">
            <div className="addHeroHeaderContainer">
                <Link to="/add-post" className="addHeroBackButton">Back</Link>
                <h1 className="addHeroHeader">Add Hero</h1>
                <form className="addHeroForm" onSubmit={addHeroToFirebase}>
                    <label className="heroNameLabel">
                        Hero Name:
                    </label>
                    <input className="heroNameInput" type="text" value={heroName} onChange={() => handleHeroNameChange}></input>
                    <label className="heroImageLabel">
                        Image:
                    </label>
                    <input className="heroFileInput" type="file" value={image} onChange={() => handleImageChange}></input>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        </div>
    );
}

export default AddHero;