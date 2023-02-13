import {ButtonContainer} from "./Buttons/ButtonContainer";
import {SpeedSelector} from "./SpeedSelector";
import {ShoeSize} from "./ShoeSize";

export function ControlPane({
  handleChangeSpeedSelector,
  handleStartExerciseButton,
  handleResetExerciseButton,
  handleChangeShoeSize
}) {
  return (
    <div className="controlPane">
      <ButtonContainer
        handleStartExerciseButton={handleStartExerciseButton}
        handleResetExerciseButton={handleResetExerciseButton} />
      <SpeedSelector onChange={handleChangeSpeedSelector} />
      <ShoeSize onChange={handleChangeShoeSize} />
    </div>
  )
}