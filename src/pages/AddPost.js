import React from 'react';
import './AddPost.css';
import { Link } from 'react-router-dom';

function AddPost() {
    return(
        <div className="addPostContainer">
            <div className="addPostHeaderContainer">
                <Link to="/admin-panel" className="addPostBackButton">Back</Link>
                <h1 className="addPostHeader">Add</h1>
            </div>
            <div className="addButtonsContainer">
                <Link to="/add-hero" className="addPostButton">Hero</Link>
                <Link to="/add-map" className="addPostButton">Map</Link>
                <Link to="/add-ability" className="addPostButton">Ability Tips</Link>
            </div>
        </div>
    );
}

export default AddPost;