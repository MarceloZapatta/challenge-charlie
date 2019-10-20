import React from 'react';
import BingImageOfTheDay from '../containers/BingImageOfTheDay';
import Temperatura from '../components/Temperatura';
import '../../css/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BingImageOfTheDay />
        <main className="main-clima">
          <Temperatura />
        </main>
      </header>
    </div>
  );
}

export default App;
