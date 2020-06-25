import React from 'react';
import './DeleteHero.css';
import { Link } from 'react-router-dom';
import { Dropdown } from 'rsuite';

function DeleteHero() {
    return(
        <div className="deleteHeroContainer">
            <div className="deleteHeroHeaderContainer">
                <Link to="/delete-post" className="deleteHeroBackButton">Back</Link>
                <h1 className="deleteHeroHeader">Delete Hero</h1>
            </div>
            <div className="dropdownContainer">
                <Dropdown className="heroDropdown" title="Select Hero">
                    <Dropdown.Item>New File</Dropdown.Item>
                    <Dropdown.Item>New File with Current Profile</Dropdown.Item>
                    <Dropdown.Item>Download As...</Dropdown.Item>
                    {/* Insert Heroes Here */}
                </Dropdown>
                <button className="addAbilityButton">Delete</button>
            </div>
        </div>
    );
}

export default DeleteHero;