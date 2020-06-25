import React from 'react';
import './DeleteMap.css';
import { Link } from 'react-router-dom';
import { Dropdown } from 'rsuite';

function DeleteMap() {
    return(
        <div className="deleteMapContainer">
            <div className="deleteMapHeaderContainer">
                <Link to="/delete-post" className="deleteMapBackButton">Back</Link>
                <h1 className="deleteMapHeader">Delete Map</h1>
            </div>
            <div className="dropdownContainer">
                <Dropdown className="mapDropdown" title="Select Map">
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

export default DeleteMap;