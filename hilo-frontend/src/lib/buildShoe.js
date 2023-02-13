import { buildDeck } from "./buildDeck.js";

export function buildShoe(shoeSize) {
  const deck = buildDeck();
  let shoe = []

  for (let count = 0; count < shoeSize; count++) {
    shoe = [...shoe, ...deck];
  }

  return shoe;
}