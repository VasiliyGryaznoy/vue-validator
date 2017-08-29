export default class {
  constructor(data) {
    let maxLength = parseInt(data.maxLength);

    this.maxLength = maxLength;
    if (isNaN(maxLength) || (maxLength < 0)) {
      this.maxLength = 0;
    }
  }

  validate(text) {
    text = text.trim();

    if (text.length > this.maxLength) {
      return this.getError();
    }
  }

  getError() {
    return `Maximum amount of characters should be ${this.maxLength}`;
  }

  getRuleText() {
    return `Maximum amount of characters is ${this.maxLength}`;
  }
}