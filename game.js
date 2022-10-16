const Card = require("./card");
const Hand = require("./hand");
const Deck = require("./deck");
const ThrownDeck = require("./thrownDeck");
const Player = require("./player");

class Game {
  constructor(playerName) {
    this.deck = new Deck();
    this.deck.shuffle();

    let handPlayer = new Hand(this.deck.getFourCards());
    let handComputer = new Hand(this.deck.getFourCards());
    this.player = new Player(playerName, handPlayer);
    this.computer = new Player("computer", handComputer);
  }
  print() {
    this.deck.print();
    this.player.print();
    this.computer.print();
  }
}

let game = new Game("lee");
game.print();
