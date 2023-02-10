const suits = ['c', 'h', 's', 'd'];
const ranks = ['2','3','4','5','6','7','8','9','t','j','q','k','a'];

export function buildDeck() {
  const deck = [];

  ranks.forEach(rank => {
    suits.forEach(suit => {
      const card = `${rank}${suit}.svg`;
      deck.push(card);
    })
  })
  
  return deck;
}