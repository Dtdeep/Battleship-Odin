import Player from "./Player.js";

export default class Computer extends Player {
  constructor(playerType, playerName) {
    super(playerType, playerName);
  }

  getComputerMove() {
    //this should randomly generate a valid coordinate and return it
  }
}
