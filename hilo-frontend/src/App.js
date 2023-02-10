import './App.css';
import {useState, useEffect} from 'react';
import {Card} from './components/Card.jsx';
import {buildDeck} from  './lib/buildDeck.js';
import {drawCard} from './lib/drawCard.js';


function App() {
  const MAX_CARDS_TO_DRAW = 8;
  const [deck, setDeck] = useState(buildDeck());
  const [card, setCard] = useState('back.svg');

  const draw = () => {
    let drawn = 0;
    let numberToDraw = Math.ceil(Math.random() * MAX_CARDS_TO_DRAW);
    alert(numberToDraw);
    const autoDeal = setInterval(() => {
      const [newCard, newDeck] = drawCard(deck);
      drawn++;
      setDeck(newDeck);
      setCard(newCard);
      if (drawn === numberToDraw) {
        clearInterval(autoDeal);
      }
      if (!deck.length) {
        setTimeout(() => {
          clearInterval(autoDeal);
          setDeck(buildDeck());
          setCard('back.svg');
        }, 300);
      }
    }
      ,300);
  }

  return (
    <div className="App">
      <header className="App-header">
        {deck.length
          ? <Card card={card} onClick={draw}/>
          : <h2>All done!</h2>
        }
      </header>
    </div>
  );
}

export default App;
