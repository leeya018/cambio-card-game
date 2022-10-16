const Card = require("./card");
const SHAPES = {
  spade: "spade",
  heart: "heart",
  diamond: "diamond",
  clof: "clof",
};
class Hand {
  constructor(hand) {
    this.hand = hand;
  }
  removeCard(card) {
    this.hand = this.hand.filter((c) => c.getId() !== card.getId());
  }
  addCard(card) {
    this.hand.push(card);
  }
  getTotalSum() {
    this.hand.reduce((acc, card) => acc + card.getValue(), 0);
  }
  print() {
    console.log("Hand");
    this.hand.map((card) => card.print());
  }
}
let cards = [
  new Card(SHAPES.clof, 1),
  new Card(SHAPES.diamond, 5),
  new Card(SHAPES.diamond, 12),
];

module.exports = Hand;
// const hand = new Hand(cards);
// hand.print();
