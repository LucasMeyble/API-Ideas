const actions = {
  addDigit(digit) {
    if (this.isNewEntry) {
      this.display = digit;
      this.isNewEntry = false;
    } else if (this.display.length < 8) {
      this.display += digit;
    }
  },

  setOperation(op) {
    if (this.firstNumber === null) {
      this.firstNumber = parseFloat(this.display);
    } else if (!this.isNewEntry) {
      this.calculateResult();
    }
    this.operation = op;
    this.isNewEntry = true;
  },

  calculateResult() {
    if (this.firstNumber !== null && this.operation) {
      this.secondNumber = parseFloat(this.display);
      let result;
      switch (this.operation) {
        case "+":
          result = this.firstNumber + this.secondNumber;
          break;
        case "-":
          result = this.firstNumber - this.secondNumber;
          break;
        case "/":
          result = this.secondNumber !== 0 ? this.firstNumber / this.secondNumber : "ERR";
          break;
      }
      this.display = result.toString().substring(0, 8);
      this.firstNumber = result;
      this.isNewEntry = true;
    }
  },

  clear() {
    this.display = "0";
    this.isNewEntry = true;
  },

  clearAll() {
    this.display = "0";
    this.firstNumber = null;
    this.secondNumber = null;
    this.operation = null;
    this.isNewEntry = true;
  },

  toggleSign() {
    if (this.display !== "0") {
      this.display = (parseFloat(this.display) * -1).toString();
    }
  },

  addDecimal() {
    if (!this.display.includes(".") && this.display.length < 8) {
      this.display += ".";
    }
  },
}

export default {...actions}