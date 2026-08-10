import Ship from "./Ship.js";

export default class Gameboard {
  #placedShips = [];
  #cordsWithShips = [];

  // All 100 board cells for the 10x10 Battleship grid, each as {row+, column++, occupied}
  #cellNodes = Array.from({ length: 10 }, (_, row) =>
    Array.from({ length: 10 }, (_, col) => ({
      row,
      column: col,
      occupied: null,
      hit: false,
    })),
  ).flat();

  get cellNodes() {
    return this.#cellNodes;
  }

  #findSquareNodeIndex(targetRow, targetColumn) {
    const columnOutBound = targetColumn >= 10 || targetColumn < 0;
    const rowOutBound = targetRow >= 10 || targetRow < 0;
    if (columnOutBound || rowOutBound) {
      return -1;
    }
    const totalColumnsPerRow = 10;
    const numberOfCellsBeforeTargetRow = targetRow * totalColumnsPerRow;
    const indexOfMatchingSquareNode =
      numberOfCellsBeforeTargetRow + targetColumn;

    return indexOfMatchingSquareNode;
  }

  #manipulateCells(row, column, ship) {
    const coordinateArray = [];
    for (let i = 0; i < ship.length; i++) {
      const indexOfTargetCell = this.#findSquareNodeIndex(row, column + i);
      if (indexOfTargetCell == -1) return false;
      coordinateArray.push(indexOfTargetCell);
    }

    if (coordinateArray.some((item) => this.#cordsWithShips.includes(item))) {
      return false;
    }

    coordinateArray.forEach((indexOfCell) => {
      this.#cellNodes[indexOfCell].occupied = ship;
      this.#cordsWithShips.push(indexOfCell);
    });
    this.#placedShips.push(ship.name);

    return true;
  }

  placeShip(row, column, shipType) {
    if (this.#placedShips.includes(shipType)) {
      return false;
    }

    const columnOutBound = column >= 10 || column < 0;
    const rowOutBound = row >= 10 || row < 0;

    if (columnOutBound || rowOutBound) {
      return false;
    }

    switch (shipType) {
      case "Carrier": {
        const Carrier = new Ship(5, "Carrier");
        return this.#manipulateCells(row, column, Carrier);
      }
      case "Battleship": {
        const Battleship = new Ship(4, "Battleship");
        return this.#manipulateCells(row, column, Battleship);
      }
      case "Destroyer": {
        const Destroyer = new Ship(3, "Destroyer");
        return this.#manipulateCells(row, column, Destroyer);
      }
      case "Submarine": {
        const Submarine = new Ship(3, "Submarine");
        return this.#manipulateCells(row, column, Submarine);
      }
      case "Patrol Boat": {
        const pBoat = new Ship(2, "Patrol Boat");
        return this.#manipulateCells(row, column, pBoat);
      }
      default:
        return false;
    }
  }

  receiveAttack(row, column) {
    const indexOfAttacked = this.#findSquareNodeIndex(row, column);
    const cellHit = this.#cellNodes[indexOfAttacked];
    if (cellHit.hit == true) {
      return false;
    }
    cellHit.hit();
    cellHit.hit = true;
    return true;
  }
}
const gameBoard1 = new Gameboard();
gameBoard1.placeShip(9, 5, "Carrier");

//delete method which deletes a ship in the gameBoard, just search through the cordsWithShips array see if its the propery ship then replace it with null

//receiveAttack should not be able to attack a cell that was already attacked
//if a cell has a ship part in it then call its hit function

// the cellNode has another field which is hit. its false by default and true when the player choose to hit it.
//then once rendering just check if hit is true and there is a ship then display the approriate
// if hit is true and there were no ship then display a missed
