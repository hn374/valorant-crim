import React from 'react';
import './DeleteAbility.css';
import { Link } from 'react-router-dom';
import { Dropdown } from 'rsuite';

function DeleteAbility() {
    return(
        <div className="deleteAbilityContainer">
            <div className="deleteAbilityHeaderContainer">
                <Link to="/delete-post" className="deleteAbilityBackButton">Back</Link>
                <h1 className="deleteAbilityHeader">Delete Ability</h1>
            </div>
            <div className="dropdownContainer">
                <Dropdown className="heroDropdown" title="Select Hero">
                    <Dropdown.Item>New File</Dropdown.Item>
                    <Dropdown.Item>New File with Current Profile</Dropdown.Item>
                    <Dropdown.Item>Download As...</Dropdown.Item>
                    {/* Insert Heroes Here */}
                </Dropdown>
                <Dropdown className="mapDropdown" title="Select Map">
                    <Dropdown.Item>New File</Dropdown.Item>
                    <Dropdown.Item>New File with Current Profile</Dropdown.Item>
                    <Dropdown.Item>Download As...</Dropdown.Item>
                    {/* Insert Maps Here */}
                </Dropdown>
                <Dropdown className="sideDropdown" title="Select Side">
                    <Dropdown.Item>Attack</Dropdown.Item>
                    <Dropdown.Item>Defense</Dropdown.Item>
                </Dropdown>
                <Dropdown className="sideDropdown" title="Select Ability">
                    <Dropdown.Item>Attack</Dropdown.Item>
                    <Dropdown.Item>Defense</Dropdown.Item>
                </Dropdown>
                <button className="addAbilityButton">Delete</button>
            </div>
        </div>
    );
}

export default DeleteAbility;