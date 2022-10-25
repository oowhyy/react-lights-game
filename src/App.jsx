import React from 'react';
import './App.css';
import Bulb from './components/Bulb';
import { useState } from 'react';
import Board from './components/Board';

function App() {
  const [on, setOn] = useState(false);
  function handleClick() {
    setOn(p => !p);
  }
  return (
    <div className="App">
      <main className="App-main">
        <div className="title"><h1>Title</h1></div>
        <div className="description"><h3>description</h3></div>
        <Board></Board>
      </main>
    </div>
  );
}

export default App;
