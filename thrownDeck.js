const Card = require("./card");
const SHAPES = {
  spade: "spade",
  heart: "heart",
  diamond: "diamond",
  clof: "clof",
};

class ThrownDeck {
  constructor() {
    this.deck = [];
  }

  pushCard(card) {
    this.deck.push(card);
  }
  getTopCard() {
    return this.deck.pop();
  }
  hasCards() {
    return this.deck.length > 0;
  }
  getLength() {
    return this.deck.length;
  }
  print() {
    console.log("Thrown Deck");
    this.deck.map((card) => card.print());
  }
}

const card = new Card(11, SHAPES.clof);
const card1 = new Card(12, SHAPES.heart);
let deck = new ThrownDeck();
deck.print();
console.log(deck.getLength());
deck.pushCard(card);
deck.pushCard(card1);
console.log(deck.getLength());
console.log(deck.getTopCard());
console.log(deck.getLength());
