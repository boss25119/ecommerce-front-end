import React from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


const uiConfig = {
    signInFlow: 'redirect',
    signInSuccessUrl: '/products',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
  };
export default function SignIn() {

  return (
      <div>
        <div className = "text-center">
            <h2>Login Form</h2>
            <p>or login with social accounts</p>
        </div>
        <StyledFirebaseAuth 
            uiConfig={uiConfig} 
            firebaseAuth={firebase.auth()} 
        />
      </div>
  )
}
