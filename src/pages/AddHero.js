import React from 'react';
import './AddHero.css';
import { Link } from 'react-router-dom';

function AddHero() {
    return(
        <div className="addHeroContainer">
            <div className="addHeroHeaderContainer">
                <Link to="/add-post" className="addHeroBackButton">Back</Link>
                <h1 className="addHeroHeader">Add Hero</h1>
            </div>
        </div>
    );
}

export default AddHero;