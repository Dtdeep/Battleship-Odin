export default class Ship {
  #length;
  #hitCounter = 0;
  #isSunk = false;
  #name;

  constructor(length, name) {
    this.#length = length;
    this.#name = name;
  }

  get name() {
    return this.#name;
  }
  get length() {
    return this.#length;
  }

  get hitCounter() {
    return this.#hitCounter;
  }

  get sinkStatus() {
    return this.#isSunk;
  }

  hit() {
    this.#hitCounter++;
    this.#isSunkChecker();
  }

  #isSunkChecker() {
    if (this.#hitCounter >= this.#length) {
      this.#isSunk = true;
    }
  }
}
