export default {
  methods: {
    minLength(data) {
      let text = this.text.trim();

      if (text.length < data.minLength) {
        return 'Minimum amount of characters is ' + data.minLength;
      }
    },
    maxLength(data) {
      let text = this.text.trim();

      if (text.length > data.maxLength) {
        return 'Maximum amount of characters is ' + data.maxLength;
      }
    },
    nthIsANumber(data) {
      let text = this.text.trim();

      if (+text[data.position - 1] != text[data.position - 1]) {
        return `The ${data.position} character is always a number`;
      }
    },
    nthIsALetter(data) {
      let text = this.text.trim();

      if (!text[data.position - 1].match(/[a-z]/i)) {
        return `The ${data.position} character is always a letter`;
      }
    },
    nthIs(data) {
      let text = this.text.trim();

      if (text[data.position - 1] != data.symbol) {
        return `The ${data.position} character is always the letter ${data.symbol}`;
      }
    }
  }
}