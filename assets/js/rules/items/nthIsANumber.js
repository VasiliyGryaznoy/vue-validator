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

    if (+text[this.position - 1] != text[this.position - 1]) {
      return this.getError();
    }
  }

  getError() {
    return `The ${this.position} character should be the number`;
  }

  getRuleText() {
    return `The ${this.position} character is always the number`;
  }
}