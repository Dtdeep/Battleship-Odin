export default class Player {
  #playerType;
  #playerName;

  constructor(playerType, playerName) {
    this.#playerType = playerType;
    this.#playerName = playerName;
  }

  get PlayerType() {
    return this.#playerType;
  }

  get PlayerName() {
    return this.#playerName;
  }

  set PlayerType(newPlayerType) {
    this.#playerType = newPlayerType;
  }

  set PlayerName(newPlayerName) {
    this.#playerName = newPlayerName;
  }
}
