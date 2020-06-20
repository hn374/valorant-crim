import React from 'react';
import './DeleteAbility.css';
import { Link } from 'react-router-dom';

function DeleteAbility() {
    return(
        <div className="deleteAbilityContainer">
            <div className="deleteAbilityHeaderContainer">
                <Link to="/delete-post" className="deleteAbilityBackButton">Back</Link>
                <h1 className="deleteAbilityHeader">Delete Ability</h1>
            </div>
        </div>
    );
}

export default DeleteAbility;