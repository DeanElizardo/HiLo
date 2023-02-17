export function RandomizeDraw({handleRandomizedDrawClick, randomizedDraw}) {
  return (
    <div onChange={handleRandomizedDrawClick}>
      <input
        type="checkbox"
        id="randomize_draw_btn"
        checked={randomizedDraw} ></input>
      <label htmlFor="randomize_draw_btn">Deal a random number of cards</label>
    </div>
  )
}