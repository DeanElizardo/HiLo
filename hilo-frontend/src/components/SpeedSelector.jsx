export function SpeedSelector({onChange}) {
  return (
    <>
      <label htmlFor="speed_slider">Dealing Speed</label>
      <input id="speed_slider" type="range" onChange={onChange}/>
    </>
  )
}