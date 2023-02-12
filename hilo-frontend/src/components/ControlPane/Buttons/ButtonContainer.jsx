import { RunExerciseButton } from "./RunExerciseButton.jsx";
import { ResetButton } from "./ResetButton.jsx";

export function ButtonContainer({handleStartExerciseButton, handleResetExerciseButton}) {
  return (
    <div className="ButtonContainer">
      <RunExerciseButton onClick={handleStartExerciseButton}/>
      <ResetButton onClick={handleResetExerciseButton} />
    </div>
  )
}
