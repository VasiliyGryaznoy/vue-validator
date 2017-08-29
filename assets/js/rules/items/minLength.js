export default class {
  constructor(data) {
    let minLength = parseInt(data.minLength);

    this.minLength = minLength;
    if (isNaN(minLength) || (minLength < 0)) {
      this.minLength = 0;
    }
  }

  validate(text) {
    text = text.trim();

    if (text.length < this.minLength) {
      return this.getError();
    }
  }

  getError() {
    return `Minimum amount of characters should be ${this.minLength}`;
  }

  getRuleText() {
    return `Minimum amount of characters is ${this.minLength}`;
  }
}