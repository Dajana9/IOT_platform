import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [currentTime, setCurrentTime] = useState(2);
  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    })

  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Reacaaa
        </a>
      <p>Current time - {currentTime}</p>

      </header>
    </div>
  );
}

export default App;