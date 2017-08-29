export default class {
  constructor(data) {
    let position = parseInt(data.position);

    this.position = position;
    if (isNaN(position) || (position < 1)) {
      this.minLength = 1;
    }
  }

  validate(text) {
    text = text.trim();

    if (text.length < this.position) {
      return this.getError();
    }

    if (!text[this.position - 1].match(/[a-z]/i)) {
      return this.getError();
    }
  }

  getError() {
    return `The ${this.position} character should be the letter`;
  }

  getRuleText() {
    return `The ${this.position} character is always the letter`;
  }
}