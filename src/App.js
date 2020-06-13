import React, { useEffect, useState } from 'react';
import './App.css';
import 'rsuite/dist/styles/rsuite-default.css';
import AppRouter from './routers/appRouter';
import AuthRouter from './routers/authRouter';
import { BrowserRouter as Router } from 'react-router-dom'
import firebase from './utils/fire';

function App() {
  const [user, setUser] = useState(null);

  let handleAuthStateChanged = (firebaseUser) => {
      if (firebaseUser) {
          setUser(firebaseUser)
      } else {
          setUser(null)
      }
  }

  useEffect(
      () => firebase.auth().onAuthStateChanged(handleAuthStateChanged),
      []
  )

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          { user ? <AppRouter /> : <AuthRouter /> }
        </Router>
      </header>
    </div>
  );
}

export default App;
