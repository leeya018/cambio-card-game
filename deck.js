const Card = require("./card");
const SHAPES = {
  spade: "spade",
  heart: "heart",
  diamond: "diamond",
  clof: "clof",
};
function initCards() {
  let cards = [];
  for (let i = 1; i <= 13; i++) {
    cards.push(new Card(i, SHAPES.spade));
    cards.push(new Card(i, SHAPES.heart));
    cards.push(new Card(i, SHAPES.diamond));
    cards.push(new Card(i, SHAPES.clof));
  }
  cards.push(new Card(-1, null)); //joker
  cards.push(new Card(-1, null)); //joker
  return cards;
}

class Deck {
  constructor() {
    this.deck = initCards();
  }
  shuffle() {
    for (let i = this.deck.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * i);
      let temp = this.deck[i];
      this.deck[i] = this.deck[j];
      this.deck[j] = temp;
    }
  }
  getTopCard() {
    return this.deck.pop();
  }
  getFourCards() {
    return [this.deck.pop(), this.deck.pop(), this.deck.pop(), this.deck.pop()];
  }
  hasCards() {
    return this.deck.length > 0;
  }
  getLength() {
    return this.deck.length;
  }
  print() {
    console.log("Deck");
    this.deck.map((card) => card.print());
  }
}

module.exports = Deck;
// let deck = new Deck();
// deck.shuffle();
// deck.print();
// const len = deck.getLength();
// for (let i = 0; i < len - 1; i++) {
//   deck.getTopCard();
// }
// console.log(deck.hasCards());
