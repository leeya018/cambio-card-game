const Card = require("./card");
const Hand = require("./hand");
const Deck = require("./deck");
const ThrownDeck = require("./thrownDeck");
const Player = require("./player");
const Computer = require("./computer");
const SHAPES = require("./util");

class Game {
  constructor() {
    this.deck = new Deck();
    this.deck.shuffle();
    this.turn = 0;

    let handPlayer = new Hand(this.deck.getFourCards());
    let handComputer = new Hand(this.deck.getFourCards());
    let player = new Player("lee", handPlayer);
    let computer = new Computer("computer", handComputer);
    this.players = [player, computer];
  }
  async run() {
    console.log("game run");
    while (!this.gameOver()) {
      await this.players[this.turn].play(this.deck.getTopCard());
      console.log("deck amount  - " + this.deck.getLength());
      console.log(
        "total hand sum   - " + this.players[this.turn].getTotalSum()
      );
      this.players[this.turn].print();
      this.turn = (this.turn + 1) % 2;
    }
    console.log("game is done");
    if (this.checkIfCall()) {
      await this.players[this.turn].play(this.deck.getTopCard());
    }
  }

  checkIfCall() {
    return this.players[(this.turn + 1) % 2].hasCall();
  }

  gameOver() {
    const formerTurn = (this.turn + 1) % 2;
    return this.deck.getLength() === 0 || this.players[formerTurn].hasCall();
  }
  print() {
    this.deck.print();
    this.players[0].print();
    this.players[1].print();
  }
}

let game = new Game();
game.print();
console.log(game.gameOver());
game.run();
