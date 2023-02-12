import './App.css';
import {useState} from 'react';
import {Card} from './components/Card.jsx';
import {ControlPane} from './components/ControlPane/ControlPane.jsx';
import {buildDeck} from  './lib/buildDeck.js';
import {drawCard} from './lib/drawCard.js';

function App() {
  const MAX_CARDS_TO_DRAW = 8;
  const MAX_DEAL_TIME_MS = 2000;
  const [deck, setDeck] = useState(buildDeck());
  const [card, setCard] = useState('back.svg');
  const [speed, setSpeed] = useState(1000);

  const draw = () => {
    let drawn = 0;
    let numberToDraw = Math.ceil(Math.random() * MAX_CARDS_TO_DRAW);
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
        }, 1000);
      }
    }
    , speed);
  }

  const reset = () => {
    setDeck(buildDeck());
    setCard('back.svg');
  }

  const selectSpeed = (changeEvent) => {
    changeEvent.preventDefault();

    let rangeValue = changeEvent.target.valueAsNumber;
    let percent = rangeValue ? rangeValue / 100 : 0.01;
    let complement = 1 - percent;
    setSpeed(MAX_DEAL_TIME_MS * complement);
  }

  return (
    <div className="App">
      <ControlPane 
        handleStartExerciseButton={draw}
        handleResetExerciseButton={reset}
        handleChangeSpeedSelector={selectSpeed}
        />
      {deck.length
        ? <Card card={card} />
        : <h2>All done!</h2>
      }
    </div>
  );
}

export default App;
