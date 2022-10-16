const Card = require("./card");
const Hand = require("./hand");
const SHAPES = {
  spade: "spade",
  heart: "heart",
  diamond: "diamond",
  clof: "clof",
};
class Computer {
  constructor(name, hand) {
    this.name = name;
    this.hand = hand;
    this.isDone = false;
  }

  findHighCard() {
    return this.hand.getLastItem();
  }
  findDouble() {
    console.log("findDouble");
    this.hand.sort();
    for (let i = this.hand.getLength() - 1; i > 0; i--) {
      if (this.hand.at(i).getNumber() === this.hand.at(i - 1).getNumber()) {
        return this.hand.at(i);
      }
    }
    return null;
  }
  sortByValue() {}

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
  print() {
    console.log(`player name : ${this.name}`);
    this.hand.print();
  }
}
// module.exports = Computer;

const cardtoAdd = new Card(SHAPES.clof, 11);
const joker = new Card(null, -1);
let cards = [
  new Card(SHAPES.diamond, 12),
  new Card(null, -1),
  new Card(SHAPES.clof, 1),
  new Card(SHAPES.spade, 1),
  new Card(SHAPES.diamond, 5),
  new Card(SHAPES.diamond, 12),
];
const cardToThrow = cards[1];
const hand = new Hand(cards);
const p = new Computer("lee", hand);
p.print();
p.getCard(cardtoAdd);
p.getCard(joker);
p.print();
p.throwCard(joker); // throws 2 joker instead of 1
p.print();
console.log(p.findHighCard());
console.log(p.findDouble());
