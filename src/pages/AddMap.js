import React from 'react';
import './AddMap.css';
import { Link } from 'react-router-dom';

function AddMap() {
    return(
        <div className="addMapContainer">
            <div className="addMapHeaderContainer">
                <Link to="/add-post" className="addMapBackButton">Back</Link>
                <h1 className="addMapHeader">Add Map</h1>
            </div>
        </div>
    );
}

export default AddMap;