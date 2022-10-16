const Card = require("./card");
const SHAPES = require("./util");

class Hand {
  constructor(hand) {
    this.hand = hand;
  }
  sort() {
    this.hand = this.hand.sort((c1, c2) => c1.getValue() - c2.getValue());
  }
  at(ind) {
    if (ind < 0 || ind >= this.hand.length) {
      return null;
    }
    return this.hand[ind];
  }
  getLength() {
    return this.hand.length;
  }
  removeCard(card) {
    this.hand = this.hand.filter((c) => c.getId() !== card.getId());
  }
  getLastItem() {
    return this.hand[this.hand.length - 1];
  }
  addCard(card) {
    this.hand.push(card);
  }
  getTotalSum() {
    return this.hand.reduce((acc, card) => acc + card.getValue(), 0);
  }
  print() {
    console.log("Hand");
    this.hand.map((card) => card.print());
  }
}
// let cards = [
//   new Card(SHAPES.diamond, 5),
//   new Card(SHAPES.clof, 1),
//   new Card(SHAPES.diamond, 12),
// ];
// const hand = new Hand(cards);
// hand.print();
// hand.sort();
// hand.print();

module.exports = Hand;
