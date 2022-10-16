const SHAPES = {
  spade: "spade",
  heart: "heart",
  diamond: "diamond",
  clof: "clof",
};
//  joker card will be with value of  -1
class Card {
  constructor(shape, number) {
    this.shape = shape;
    this.number = number;
    this.id = shape + "" + number;
  }
  getId() {
    return this.id;
  }

  getShape() {
    return this.shape;
  }
  getNumber() {
    return this.number;
  }
  isMagic() {
    if (
      (this.number >= 7 && this.number <= 12) ||
      (this.number === 13 &&
        (this.shape === SHAPES.clof || this.shape === SHAPES.spade))
    ) {
      return true;
    }
    return false;
  }

  getValue() {
    if (
      this.number === 13 &&
      (this.shape === SHAPES.diamond || this.shape === SHAPES.heart)
    ) {
      return 0;
    }
    return this.number;
  }

  print() {
    console.log(this);
  }
}
// let c = new Card(SHAPES.clof, 1);
// let c1 = new Card(SHAPES.diamond, 12);
// let c2 = new Card(SHAPES.diamond, 14);
// console.log(c, c1);
// console.log(c2.isMagic());

module.exports = Card;
