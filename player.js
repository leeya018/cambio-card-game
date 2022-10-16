const Card = require("./card");
const Hand = require("./hand");
const SHAPES = {
  spade: "spade",
  heart: "heart",
  diamond: "diamond",
  clof: "clof",
};
class Player {
  constructor(name, hand) {
    this.name = name;
    this.hand = hand;
    this.isDone = false;
  }

  getCard(card) {
    this.hand.addCard(card);
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

let cards = [
  new Card(SHAPES.clof, 1),
  new Card(SHAPES.diamond, 5),
  new Card(SHAPES.diamond, 12),
];
const cardToThrow = cards[1];
const hand = new Hand(cards);
const p = new Player("lee", hand);
p.print();
p.throwCard(cardToThrow);
p.print();
p.getCard(cardToThrow);
p.print();
console.log(p.hasCall());
p.callCambio();
p.hasCall();
console.log(p.hasCall());
