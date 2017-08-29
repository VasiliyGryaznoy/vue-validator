export default class {
  constructor(data) {
    let position = parseInt(data.position);

    this.position = position;
    if (isNaN(position) || (position < 1)) {
      this.position = 1;
    }
  }

  validate(text) {
    text = text.trim();

    if (text[this.position - 1] != 'A') {
      return this.getError();
    }
  }

  getError() {
    return `The ${this.position} should be the letter 'A'`;
  }

  getRuleText() {
    return `The ${this.position} is always the letter 'A'`;
  }
}