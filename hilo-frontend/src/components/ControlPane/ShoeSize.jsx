export function ShoeSize({onChange}) {
  return (
    <>
      <label htmlFor="shoe_size_selector">Shoe Size: </label>
      <select id="shoe_size_selector" onChange={onChange}>
        {Array(8)
          .fill(true)
          .map((_, idx) => <option key={idx + 1}>{idx + 1}</option>)}
      </select>
    </>
  );
}