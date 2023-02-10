export function drawCard(deck) {
  const numCards = deck.length;
  const drawIdx = Math.floor(Math.random() * numCards);
  const drawnCard = deck.splice(drawIdx, 1)[0];
  return [drawnCard, deck];
}