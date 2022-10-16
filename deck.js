const Card = require("./card");
const SHAPES = require("./util");

function initCards() {
  let cards = [];
  for (let i = 1; i <= 13; i++) {
    cards.push(new Card(SHAPES.spade, i));
    cards.push(new Card(SHAPES.heart, i));
    cards.push(new Card(SHAPES.diamond, i));
    cards.push(new Card(SHAPES.clof, i));
  }
  cards.push(new Card(SHAPES.joker1, -1)); //joker
  cards.push(new Card(SHAPES.joker2, -1)); //joker
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
