import React, { useState } from 'react';
import './AddMap.css';
import { Link } from 'react-router-dom';
import firebase from '../utils/fire';

function AddMap() {
    const [mapName, setMapName] = useState("");
    const [image, setImage] = useState("");

    const addMapToFirebase = (event, mapName, image) => {
        var ref = firebase.database().ref("/maps");

        var mapObject = {
            mapName: mapName,
            image: image // needs to be path to image in firebase storage
        };

        ref.push().set(mapObject);

        console.log(mapName);
        console.log(image);
        console.log("Call to firebase");

        event.preventDefault();
    };

    const handleMapNameChange = (event) => {
        setMapName(event.target.value)
    }

    const handleImageChange = (event) => {
        setImage(event.target.value);
    }

    return(
        <div className="addMapContainer">
            <div className="addMapHeaderContainer">
                <Link to="/add-post" className="addMapBackButton">Back</Link>
                <h1 className="addMapHeader">Add Map</h1>
                {/* Add Map Name and Map Image */}
                <form className="addMapForm" onSubmit={(e) => addMapToFirebase(e, mapName, image)}>
                    <label className="mapNameLabel">
                        Map Name:
                    </label>
                    <input className="mapNameInput" type="text" value={mapName} onChange={() => handleMapNameChange}></input>
                    <label className="mapImageLabel">
                        Image:
                    </label>
                    <input className="mapFileInput" type="file" value={image} onChange={() => handleImageChange}></input>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        </div>
    );
}

export default AddMap;