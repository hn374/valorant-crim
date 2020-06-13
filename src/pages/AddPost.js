import React from 'react';
import './AddPost.css';
import { Link } from 'react-router-dom';

function AddPost() {
    return(
        <div className="addPostContainer">
            <div className="addPostHeaderContainer">
                <Link to="/admin-panel" className="addPostBackButton">Back</Link>
                <h1 className="addPostHeader">Add Post</h1>
            </div>
        </div>
    );
}

export default AddPost;