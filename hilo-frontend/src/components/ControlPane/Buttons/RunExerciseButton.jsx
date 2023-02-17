export function RunExerciseButton({onClick, enableStartBtn}) {
  return <button onClick={onClick} disabled={!enableStartBtn}>Start</button>
}