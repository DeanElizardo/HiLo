import {ButtonContainer} from "./Buttons/ButtonContainer";
import {SpeedSelector} from "./SpeedSelector";

export function ControlPane({
  handleChangeSpeedSelector,
  handleStartExerciseButton,
  handleResetExerciseButton
}) {
  return (
    <div className="controlPane">
      <ButtonContainer
        handleStartExerciseButton={handleStartExerciseButton}
        handleResetExerciseButton={handleResetExerciseButton} />
      <SpeedSelector onChange={handleChangeSpeedSelector} />
    </div>
  )
}