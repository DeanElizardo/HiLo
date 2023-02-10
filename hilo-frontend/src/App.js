import './App.css';
import {useState, useEffect} from 'react';
import {Card} from './components/Card.jsx';
import {buildDeck} from  './lib/buildDeck.js';
import {drawCard} from './lib/drawCard.js';

function App() {
  const [deck, setDeck] = useState(buildDeck());
  const [card, setCard] = useState('back.svg');

  const handleClick = (e) => console.log("There was a card clicked");

  return (
    <div className="App">
      <header className="App-header">
        <Card card={card} onclick={handleClick}/>
      </header>
    </div>
  );
}

export default App;
