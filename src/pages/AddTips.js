import React from 'react';
import './AddTips.css';
import { Link } from 'react-router-dom';

function AddTips() {
    return(
        <div className="addTipsContainer">
            <div className="addTipsHeaderContainer">
                <Link to="/add-post" className="addTipsBackButton">Back</Link>
                <h1 className="addTipsHeader">Add Ability Tips</h1>
            </div>
        </div>
    );
}

export default AddTips;