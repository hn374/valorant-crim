import React from 'react';
import './AdminPanel.css';
import { Link } from 'react-router-dom';

function AdminPanel() {
    return (
        <div className="adminPanelContainer">
            <div className="adminPanelHeaderContainer">
                <Link to="/" className="adminPanelBackButton">Back</Link>
                <h1 className="adminPanelHeader">Admin Panel</h1>
            </div>
            <div className="adminPanelButtonsContainer">
                <Link to="/add-post" className="adminPanelButtonLinks">
                    <h2 className="adminPanelButtons">Add</h2>
                </Link>
                <Link to="/delete-post" className="adminPanelButtonLinks">
                    <h2 className="adminPanelButtons">Delete</h2>
                </Link>
            </div>
        </div>
    );
}

export default AdminPanel;