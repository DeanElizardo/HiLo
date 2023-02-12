export function SpeedSelector({onChange}) {
  return (
    <div className="speedSelector">
      <label htmlFor="speed_slider">Dealing Speed</label>
      <input id="speed_slider" type="range" onChange={onChange}/>
    </div>
  )
}