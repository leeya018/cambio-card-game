const Card = require("./card");
const Hand = require("./hand");
const SHAPES = require("./util");
class Computer {
  constructor(name, hand) {
    this.name = name;
    this.hand = hand;
    this.isDone = false;
    this.hand.sort();
  }

  findHighCard() {
    return this.hand.getLastItem();
  }
  findDouble() {
    console.log("findDouble");
    for (let i = this.hand.getLength() - 1; i > 0; i--) {
      if (this.hand.at(i).getValue() === this.hand.at(i - 1).getValue()) {
        return [this.hand.at(i), this.hand.at(i - 1)];
      }
    }
    return null;
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
  stick() {
    // stick the card on top of the ThrownDeck when you have the same card on in hand
    //  need to make that with random time and pay attention
    // that other playes did not stick if first
    // not yet implemented
  }
  hasCall() {
    return this.isDone;
  }
  getTotalSum() {
    return this.hand.getTotalSum();
  }
  async play(card) {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.move(card);
        resolve("done");
      }, 2000);
    });
  }

  move(card) {
    if (this.getTotalSum() <= 5) {
      this.callCambio();
    } else {
      const highCard = this.findHighCard();
      const doubleCards = this.findDouble();

      if (doubleCards && doubleCards[0].getValue() * 2 > highCard.getValue()) {
        for (const card of doubleCards) {
          this.throwCard(card);
        }
      } else {
        this.throwCard(highCard);
      }
      this.getCard(card);
    }
  }
  print() {
    console.log(`player name : ${this.name}`);
    this.hand.print();
  }
}
module.exports = Computer;

// const cardtoAdd = new Card(SHAPES.clof, 11);
// const joker = new Card(SHAPES.joker2, -1);
// let cards = [new Card(SHAPES.spade, 9), new Card(SHAPES.clof, 1)];
// (async () => {
//   const cardToThrow = cards[1];
//   const hand = new Hand(cards);
//   const p = new Computer("lee", hand);
//   await p.play(new Card(SHAPES.spade, 2));
//   console.log(p.hasCall());
// })();
// console.log(p.getTotalSum());
// p.print();
// p.play(new Card(SHAPES.diamond, 5));
// p.print();
// p.print();
// p.getCard(cardtoAdd);
// p.getCard(joker);
// p.print();
// p.throwCard(joker); // throws 2 joker instead of 1

// console.log(p.getTotalSum());
