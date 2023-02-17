import {ButtonContainer} from "./Buttons/ButtonContainer";
import {SpeedSelector} from "./SpeedSelector";
import {ShoeSize} from "./ShoeSize";

export function ControlPane({
  handleChangeSpeedSelector,
  handleStartExerciseButton,
  handleResetExerciseButton,
  handleChangeShoeSize,
  enableStartBtn
}) {
  return (
    <div className="controlPane">
      <ButtonContainer
        handleStartExerciseButton={handleStartExerciseButton}
        handleResetExerciseButton={handleResetExerciseButton} 
        enableStartBtn={enableStartBtn}/>
      <SpeedSelector onChange={handleChangeSpeedSelector} />
      <ShoeSize onChange={handleChangeShoeSize} />
    </div>
  )
}