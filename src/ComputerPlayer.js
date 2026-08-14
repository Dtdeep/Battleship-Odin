import Player from "./Player.js";

export default class Computer extends Player {
  #savedAttacks = [];
  constructor(playerType, playerName) {
    super(playerType, playerName);
  }

  #randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  getComputerMove() {
    let cords = [];

    while (true) {
      cords = [
        this.#randomIntFromInterval(0, 9),
        this.#randomIntFromInterval(0, 9),
      ];

      const alreadyUsed = this.#savedAttacks.some(
        ([row, column]) => row === cords[0] && column === cords[1],
      );

      if (!alreadyUsed) break;
    }

    this.#savedAttacks.push(cords);
    return cords;
  }

  computerPlaceAllShip() {
    const placeCarrierRow = this.#randomIntFromInterval(0, 9);

    const placeCarrierColumn = this.#randomIntFromInterval(0, 5);

    this.GameBoard.placeShip(placeCarrierRow, placeCarrierColumn, "Carrier");

    let placed = false;
    while (placed == false) {
      const placeBattleShipColumn = this.#randomIntFromInterval(0, 6);
      const placeBattleShipRow = this.#randomIntFromInterval(0, 9);
      if (
        this.GameBoard.placeShip(
          placeBattleShipRow,
          placeBattleShipColumn,
          "Battleship",
        )
      ) {
        placed = true;
      }
    }

    placed = false;
    while (placed == false) {
      const placeDestroyerRow = this.#randomIntFromInterval(0, 9);
      const placeDestroyerColumn = this.#randomIntFromInterval(0, 7);

      if (
        this.GameBoard.placeShip(
          placeDestroyerRow,
          placeDestroyerColumn,
          "Destroyer",
        )
      ) {
        placed = true;
      }
    }

    placed = false;
    while (placed == false) {
      const placeSubmarineRow = this.#randomIntFromInterval(0, 9);
      const placeSubmarineColumn = this.#randomIntFromInterval(0, 7);

      if (
        this.GameBoard.placeShip(
          placeSubmarineRow,
          placeSubmarineColumn,
          "Submarine",
        )
      ) {
        placed = true;
      }
    }

    placed = false;
    while (placed == false) {
      const placeBoatRow = this.#randomIntFromInterval(0, 9);
      const placeBoatColumn = this.#randomIntFromInterval(0, 8);

      if (
        this.GameBoard.placeShip(placeBoatRow, placeBoatColumn, "Patrol Boat")
      ) {
        placed = true;
      }
    }
    //finish this function so that it generates a valid coordinate and places the ship in that coordinate
    //if placing the ship is unsuccessful due to the ship or part of the ship being already there, choose another random coordinate
    //do that for all the ships by finding the valid coordinates depending on the ship's length
  }
}
