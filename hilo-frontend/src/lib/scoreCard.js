const decrementCards = ['2','3','4','5','6'];
const incrementCards = ['t','j','q','k','a'];

export function scoreCard(card) {
  let rank = card.split('')[0];

  
  if (incrementCards.includes(rank)) {
    return 1;
  } else if (decrementCards.includes(rank)) {
    return -1;
  } else {
    return 0;
  }
}