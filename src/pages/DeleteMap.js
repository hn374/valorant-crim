import React from 'react';
import './DeleteMap.css';
import { Link } from 'react-router-dom';

function DeleteMap() {
    return(
        <div className="deleteMapContainer">
            <div className="deleteMapHeaderContainer">
                <Link to="/delete-post" className="deleteMapBackButton">Back</Link>
                <h1 className="deleteMapHeader">Delete Map</h1>
            </div>
        </div>
    );
}

export default DeleteMap;