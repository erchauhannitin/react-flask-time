import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [currentTime, setCurrentTime] = useState(0)

  useEffect(()=> {
    fetch('/time')
    .then(res => res.json())
    .then(data => {
      setCurrentTime(data.time)
    })
  }, [])

  return (
    <div className="App">
      Current Time is {currentTime}
    </div>
  );
}

export default App;
