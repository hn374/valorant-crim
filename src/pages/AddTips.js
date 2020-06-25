import React from 'react';
import './AddTips.css';
import { Link } from 'react-router-dom';
import { Dropdown } from 'rsuite';

function AddTips() {
    return(
        <div className="addTipsContainer">
            <div className="addTipsHeaderContainer">
                <Link to="/add-post" className="addTipsBackButton">Back</Link>
                <h1 className="addTipsHeader">Add Ability Tips</h1>
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
                <div className="tipsInputContainer">
                    <label className="tipsLabel">Select Tip Image</label>
                    {/* <input className="tipsInput" type="text"></input> */}
                    <input className="tipFileInput" type="file"></input>
                </div>
                <button className="addtipsButton">Add</button>
            </div>
        </div>
    );
}

export default AddTips;