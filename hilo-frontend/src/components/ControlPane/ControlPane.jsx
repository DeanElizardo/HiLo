import { SpeedSelector } from "./SpeedSelector";

export function ControlPane({handleChangeSpeedSelector}) {
  return (
    <div className="controlPane">
      <SpeedSelector onChange={handleChangeSpeedSelector}/>
    </div>
  )
}