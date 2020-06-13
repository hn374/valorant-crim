import React from 'react';
import './Login.css';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from '../utils/fire';
import * as firebaseui from 'firebaseui';

function Login() {
    const uiConfig = {
        signInFlow: 'redirect',
        signInSuccessUrl: '/hero-select',
        signInOptions: [
            firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        credentialHelper: firebaseui.auth.CredentialHelper.NONE
    };

    return(
        <div className="loginContainer">
            <StyledFirebaseAuth 
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()} />
        </div>
    );
}

// firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     console.log("ERROR:", errorCode, errorMessage);
// });

// firebase.auth().signOut().then(function() {
//     // Sign-out successful.
// }).catch(function(error) {
//     // An error happened.
//     console.log("An error happened:", error);
// });

export default Login;