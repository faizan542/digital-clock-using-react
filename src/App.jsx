import React, {useState} from 'react';
import './App.css';

function App() {
  const currentTime = new Date().toLocaleTimeString();
  const [time, setTime] =useState(currentTime);

  function updateTime(){
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }
setInterval(updateTime,1000) //If I remove this set interval than I use Get Time button to get current time
  return (
    <div className="App">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
