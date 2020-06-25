import React from 'react';
import './DeleteTips.css';
import { Link } from 'react-router-dom';
import { Dropdown } from 'rsuite';

function DeleteTips() {
    return(
        <div className="addTipsContainer">
            <div className="addTipsHeaderContainer">
                <Link to="/delete-post" className="addTipsBackButton">Back</Link>
                <h1 className="addTipsHeader">Delete Ability Tips</h1>
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
                    {/* Insert Abilities Here */}
                </Dropdown>
                <Dropdown className="sideDropdown" title="Select Tip">
                    <Dropdown.Item>Attack</Dropdown.Item>
                    <Dropdown.Item>Defense</Dropdown.Item>
                    {/* Insert Abilities Here */}
                </Dropdown>
                <button className="addtipsButton">Delete</button>
            </div>
        </div>
    );
}

export default DeleteTips;