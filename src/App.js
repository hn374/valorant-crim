import React from 'react';
import './App.css';
import HeroSelect from './pages/HeroSelect';
import 'rsuite/dist/styles/rsuite-default.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeroSelect />
      </header>
    </div>
  );
}

export default App;
