import React from 'react';
import './App.css';
import HeroSelect from './pages/HeroSelect';
import MapSelect from './pages/MapSelect';
import SideSelect from './pages/SideSelect';
import Login from './pages/Login';
import Ability from './pages/Ability';
import 'rsuite/dist/styles/rsuite-default.css';
import AppRouter from './routers/appRouter';
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <AppRouter />
        </Router>
        {/* <HeroSelect /> */}
        {/* <Ability /> */}
        {/* <Login /> */}
        {/* <MapSelect /> */}
        {/* <SideSelect /> */}
      </header>
    </div>
  );
}

export default App;
