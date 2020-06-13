import React from 'react';
import './Login.css';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from '../utils/fire';
import * as firebaseui from 'firebaseui';

function Login() {
    const uiConfig = {
        signInFlow: 'redirect',
        signInSuccessUrl: '/add-post',
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

export default Login;