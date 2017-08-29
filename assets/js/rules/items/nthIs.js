export default class {
  constructor(data) {
    let position = parseInt(data.position),
      symbol = data.symbol;

    this.position = position;
    if (isNaN(position) || (position < 1)) {
      this.minLength = 1;
    }

    this.symbol = symbol;
    if (symbol.length > 1) {
      this.symbol = symbol[0];
    }
  }

  validate(text) {
    text = text.trim();

    if (text[this.position - 1] != this.symbol) {
      return this.getError();
    }
  }

  getError() {
    return `The ${this.position} character should be the letter '${this.symbol}'`;
  }

  getRuleText() {
    return `The ${this.position} character is always the letter '${this.symbol}'`;
  }
}