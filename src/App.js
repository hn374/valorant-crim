import React from 'react';
import './App.css';
import HeroSelect from './pages/HeroSelect';
import MapSelect from './pages/MapSelect';
import SideSelect from './pages/SideSelect';
import 'rsuite/dist/styles/rsuite-default.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <HeroSelect /> */}
        {/* <MapSelect /> */}
        <SideSelect />
      </header>
    </div>
  );
}

export default App;
