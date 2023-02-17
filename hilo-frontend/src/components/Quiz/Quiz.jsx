import {useState} from 'react';

export function Quiz({trueCount, runningCount, hideQuiz, quizViz}) {
  const [showQuery, setShowQuery] = useState(true);
  const query = (
    <>
      <h1>What are the counts?</h1>
      <button onClick={() => setShowQuery(false)}>Answer</button>
    </>
  );
  const answer = (
    <>
      <h1>True Count: {trueCount}</h1>
      <h1>Running Count: {runningCount}</h1>
      <button onClick={hideQuiz}>Resume</button>
    </>
  );
  return (
    <div className="Quiz">
      {showQuery ? query : answer}
    </div>
  );
}