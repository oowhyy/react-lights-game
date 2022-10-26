import React from 'react';
import './App.css';

import { useState } from 'react';

import Game from './components/Game';

function App() {
   const [showSolution, setShowSolution] = useState(false);


   return (
      <div className="App">
         <main className="App-main">
            <div className="title">
               <h1 className="name">The game of lights</h1>
               <h3 className="description">Turn all the bulbs on!</h3>
            </div>
            <Game></Game>


         </main>
         <footer className="footer">Made with reactjs</footer>
      </div>
   );
}

export default App;
