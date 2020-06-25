import React from 'react';
import './DeletePost.css';
import { Link } from 'react-router-dom';

function DeletePost() {
    return(
        <div className="deletePostContainer">
            <div className="deletePostHeaderContainer">
                <Link to="/admin-panel" className="deletePostBackButton">Back</Link>
                <h1 className="deletePostHeader">Delete</h1>
            </div>
            <div className="deleteButtonsContainer">
                <Link to="/delete-hero" className="deletePostButton">Hero</Link>
                <Link to="/delete-map" className="deletePostButton">Map</Link>
                <Link to="/delete-ability" className="deletePostButton">Ability</Link>
                <Link to="/delete-tips" className="deletePostButton">Ability Tips</Link>
            </div>
        </div>
    );
}

export default DeletePost;