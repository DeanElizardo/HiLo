import { RunExerciseButton } from "./RunExerciseButton.jsx";
import { ResetButton } from "./ResetButton.jsx";

export function ButtonContainer({
  handleStartExerciseButton,
  handleResetExerciseButton,
  enableStartBtn}) {
  return (
    <div className="ButtonContainer">
      <RunExerciseButton onClick={handleStartExerciseButton} enableStartBtn={enableStartBtn}/>
      <ResetButton onClick={handleResetExerciseButton} />
    </div>
  )
}
