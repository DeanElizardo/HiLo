import { buildDeck } from "./buildDeck.js";
import { drawCard} from "./drawCard.js";

let deck = buildDeck();
let drawCount = 1;

while (deck.length) {
  let [card, newDeck] = drawCard(deck);
  deck = newDeck;
  console.log(`${drawCount}: ${card}`)
  drawCount++;
}