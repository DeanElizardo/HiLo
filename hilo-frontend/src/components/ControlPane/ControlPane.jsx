import {ButtonContainer} from "./Buttons/ButtonContainer";
import { RandomizeDraw } from "./Buttons/RandomizeDraw";
import {SpeedSelector} from "./SpeedSelector";
import {ShoeSize} from "./ShoeSize";

export function ControlPane({
  handleChangeSpeedSelector,
  handleStartExerciseButton,
  handleResetExerciseButton,
  handleChangeShoeSize,
  handleRandomizedDrawClick,
  randomizedDraw,
  enableStartBtn
}) {
  return (
    <div className="controlPane">
      <ButtonContainer
        handleStartExerciseButton={handleStartExerciseButton}
        handleResetExerciseButton={handleResetExerciseButton} 
        enableStartBtn={enableStartBtn}/>
      <SpeedSelector onChange={handleChangeSpeedSelector} />
      <ShoeSize onChange={handleChangeShoeSize}/>
      <RandomizeDraw 
        RandomizeDraw={randomizedDraw}
        handleRandomizedDrawClick={handleRandomizedDrawClick} />
    </div>
  )
}