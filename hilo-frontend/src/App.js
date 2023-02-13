import './App.css';
import {useState, useEffect} from 'react';
import {Card} from './components/Card.jsx';
import {ControlPane} from './components/ControlPane/ControlPane.jsx';
import {buildShoe} from  './lib/buildShoe.js';
import {drawCard} from './lib/drawCard.js';
import {scoreCard} from './lib/scoreCard.js';

function App() {
  const MAX_CARDS_TO_DRAW = 300;
  const MAX_DEAL_TIME_MS = 2000;
  const [shoeSize, setShoeSize] = useState(1);
  const [deck, setDeck] = useState(buildShoe(shoeSize));
  const [card, setCard] = useState('back.svg');
  const [speed, setSpeed] = useState(1000);
  let runningCount = 0;
  let trueCount = 0;

  const calculateRunningCount = (crd) => {
    runningCount += scoreCard(crd);
  }

  const calculateTrueCount = () => {
    trueCount = runningCount / shoeSize;
  }

  useEffect(() => {

  }, [runningCount]);

  const draw = () => {
    let drawn = 0;
    const autoDeal = setInterval(() => {
      const [newCard, newDeck] = drawCard(deck);
      calculateRunningCount(newCard);
      calculateTrueCount();
      setCard(newCard);
      setDeck(newDeck);
      drawn++;
      console.log(drawn, runningCount, trueCount); //!debugging
      if (drawn === MAX_CARDS_TO_DRAW) {
        clearInterval(autoDeal);
      }
      if (!deck.length) {
        setTimeout(() => {
          clearInterval(autoDeal);
          setDeck(buildShoe(shoeSize));
          setCard('back.svg');
        }, 1000);
      }
    }
    , speed);
  }

  const reset = () => {
    trueCount = 0;
    runningCount = 0;
    setDeck(buildShoe(shoeSize));
    setCard('back.svg');
  }

  const selectSpeed = (changeEvent) => {
    let rangeValue = changeEvent.target.valueAsNumber;
    let percent = rangeValue ? rangeValue / 100 : 0.01;
    let complement = 1 - percent;
    setSpeed(MAX_DEAL_TIME_MS * complement);
  }

  const changeShoeSize = (changeEvent) => {
    setShoeSize(Number(changeEvent.target.value));
  }

  useEffect(() => {
    setDeck(buildShoe(shoeSize));
  }, [shoeSize]);

  return (
    <div className="App">
      <ControlPane 
        handleStartExerciseButton={draw}
        handleResetExerciseButton={reset}
        handleChangeSpeedSelector={selectSpeed}
        handleChangeShoeSize={changeShoeSize}
        />
      {deck.length
        ? <Card card={card} />
        : <h2>All done!</h2>
      }
    </div>
  );
}

export default App;
