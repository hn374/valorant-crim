import React from 'react';
import './DeletePost.css';
import { Link } from 'react-router-dom';

function DeletePost() {
    return(
        <div className="deletePostContainer">
            <div className="deletePostHeaderContainer">
                <Link to="/admin-panel" className="deletePostBackButton">Back</Link>
                <h1 className="deletePostHeader">Delete Post</h1>
            </div>
        </div>
    );
}

export default DeletePost;