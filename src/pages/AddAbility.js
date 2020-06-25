import React, { useState } from 'react';
import './AddAbility.css';
import { Link } from 'react-router-dom';
import { Dropdown } from 'rsuite';
import firebase from '../utils/fire';

function AddAbility() {
    const [heroes, setHeroes] = useState([]);

    useEffect(() => {
        // firebase.database().ref('/heroes').on('value', (snapshot) => {
        //     const heroObject = snapshot.val();
        //     heroArray.push(heroObject);
        //     setHeroes(heroArray);
        //     // console.log(heroArray);
        // });

        getFirebaseHeroes();

        console.log("THIS IS HEROES", heroes);
    }, []);

    async function getFirebaseHeroes() {
        let heroArray = [];

        await firebase.database().ref('/heroes').on('value', (snapshot) => {
            const heroObject = snapshot.val();
            heroArray.push(heroObject);

            console.log(heroArray);
        });
    }

    return(
        <div className="addAbilityContainer">
            <div className="addAbilityHeaderContainer">
                <Link to="/add-post" className="addAbilityBackButton">Back</Link>
                <h1 className="addAbilityHeader">Add Ability</h1>
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
            </div>
        </div>
    );
}

export default AddAbility;