const Card = require("./card");
const Hand = require("./hand");
const SHAPES = require("./util");

class Player {
  constructor(name, hand) {
    this.name = name;
    this.hand = hand;
    this.isDone = false;
    this.hand.sort();
  }

  getCard(card) {
    this.hand.addCard(card);
    this.hand.sort();
  }
  throwCard(card) {
    this.hand.removeCard(card);
  }
  callCambio() {
    this.isDone = true;
  }
  stick(card) {
    // not yet implemented
  }
  hasCall() {
    return this.isDone;
  }
  async play(card) {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.throwCard(this.hand.at(0));
        this.getCard(card);
        resolve("done");
      }, 2000);
    });
  }
  getTotalSum() {
    return this.hand.getTotalSum();
  }
  print() {
    console.log(`player name : ${this.name}`);
    this.hand.print();
  }
}
module.exports = Player;
// let cards = [
//   new Card(SHAPES.spade, 1),
//   new Card(SHAPES.clof, 1),
//   new Card(SHAPES.spade, 2),
// ];
// const cardToThrow = cards[1];
// const hand = new Hand(cards);
// const p = new Player("lee", hand);
// console.log(p.getTotalSum());
// let cards = [
//   new Card(SHAPES.clof, 1),
//   new Card(SHAPES.diamond, 5),
//   new Card(SHAPES.diamond, 12),
// ];
// const cardToThrow = cards[1];
// const hand = new Hand(cards);
// const p = new Player("lee", hand);
// p.print();
// p.throwCard(cardToThrow);
// p.print();
// p.getCard(cardToThrow);
// p.print();
// console.log(p.hasCall());
// p.callCambio();
// p.hasCall();
// console.log(p.hasCall());
