import React from 'react';
import './AddAbility.css';
import { Link } from 'react-router-dom';

function AddAbility() {
    return(
        <div className="addAbilityContainer">
            <div className="addAbilityHeaderContainer">
                <Link to="/add-post" className="addAbilityBackButton">Back</Link>
                <h1 className="addAbilityHeader">Add Ability</h1>
            </div>
        </div>
    );
}

export default AddAbility;