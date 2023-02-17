import './App.css';
import {useState, useEffect, useRef} from 'react';
import {Card} from './components/Card.jsx';
import {ControlPane} from './components/ControlPane/ControlPane.jsx';
import {Quiz} from './components/Quiz/Quiz.jsx'
import {buildShoe} from  './lib/buildShoe.js';
import {drawCard} from './lib/drawCard.js';
import {scoreCard} from './lib/scoreCard.js';

function App() {
  const MAX_CARDS_TO_DRAW  = 15;
  const MAX_DEAL_TIME_MS = 2000;
  const [shoeSize, setShoeSize] = useState(1);
  const [deck, setDeck] = useState(buildShoe(shoeSize));
  const [card, setCard] = useState('back.svg');
  const [speed, setSpeed] = useState(1000);
  const [runningCount, setRunningCount] = useState(0);
  const [trueCount, setTrueCount] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [enableStartBtn, setEnableStartBtn] = useState(true);
  const [randomizedDraw, setRandomizedDraw] = useState(false);
  const cardsToDraw = useRef(MAX_CARDS_TO_DRAW);

  useEffect(() => {
    setDeck(buildShoe(shoeSize));
  }, [shoeSize]);
  
  useEffect(() => {
    setRunningCount(runningCount + scoreCard(card));
  }, [card]);

  useEffect(() => {
    setTrueCount(runningCount / shoeSize);
  }, [runningCount]);

  useEffect(() => {
    if (randomizedDraw) {
      cardsToDraw.current = Math.ceil(Math.random() * deck.length);
    } else {
      cardsToDraw.current = MAX_CARDS_TO_DRAW;
    }
  }, [randomizedDraw]);
  
  const draw = () => {
    if (enableStartBtn) {
      setEnableStartBtn(false);
    }
    let numDrawn = 0;
    const autoDeal = setInterval(() => {
      const [newCard, newDeck] = drawCard(deck);
      setCard(newCard);
      setDeck(newDeck);
      numDrawn++;
      if (numDrawn === cardsToDraw.current) {
        clearInterval(autoDeal);
        setShowQuiz(true);
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
    setRunningCount(0);
    setTrueCount(0);
    setDeck(buildShoe(shoeSize));
    setCard('back.svg');
    setEnableStartBtn(true);
    setShowQuiz(false);
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

  const hideQuiz = () => {
    setShowQuiz(false);
    draw();
  }

  const toggleRandomizedDraw = () => {
    setRandomizedDraw(!randomizedDraw);
  };

  return (
    <div className="App">
      <ControlPane 
        handleStartExerciseButton={draw}
        handleResetExerciseButton={reset}
        handleChangeSpeedSelector={selectSpeed}
        handleChangeShoeSize={changeShoeSize}
        handleRandomizedDrawClick={toggleRandomizedDraw}
        randomizedDraw={randomizedDraw}
        enableStartBtn={enableStartBtn} />
      <div className="felt">
        {deck.length
          ? <Card card={card} />
          : <h2>All done!</h2>
        }
        {showQuiz
          ? <Quiz
              trueCount={trueCount}
              runningCount={runningCount}
              hideQuiz={hideQuiz}
              quizViz = {showQuiz}/>
          : null
        }
      </div>
    </div>
  );
}

export default App;
