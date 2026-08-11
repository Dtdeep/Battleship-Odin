import Gameboard from "./Gameboard.js";

export default class Player {
  #playerType;
  #playerName;
  #gameBoard;

  constructor(playerType, playerName) {
    this.#playerType = playerType;
    this.#playerName = playerName;
    this.#gameBoard = new Gameboard();
  }

  get GameBoard() {
    return this.#gameBoard;
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
