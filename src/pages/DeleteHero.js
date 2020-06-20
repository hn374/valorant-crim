import React from 'react';
import './DeleteHero.css';
import { Link } from 'react-router-dom';

function DeleteHero() {
    return(
        <div className="deleteHeroContainer">
            <div className="deleteHeroHeaderContainer">
                <Link to="/delete-post" className="deleteHeroBackButton">Back</Link>
                <h1 className="deleteHeroHeader">Delete Hero</h1>
            </div>
        </div>
    );
}

export default DeleteHero;