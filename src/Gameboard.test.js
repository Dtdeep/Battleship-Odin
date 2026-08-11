import Gameboard from "./Gameboard.js";
import Ship from "./Ship.js";

describe("Test Gameboard class query", () => {
  let gameBoard1;
  let gameBoard2;
  let gameBoard3;
  let gameBoard4;
  let gameBoard5;
  let gameBoard6;

  beforeEach(() => {
    gameBoard1 = new Gameboard();
    gameBoard2 = new Gameboard();
    gameBoard3 = new Gameboard();
    gameBoard4 = new Gameboard();
    gameBoard5 = new Gameboard();
    gameBoard6 = new Gameboard();
  });

  describe("Out of bounds", () => {
    test("1 placeShip() greater than 10 cord arguments should return false", () => {
      expect(gameBoard1.placeShip(11, 11, "Carrier")).toBe(false);
      expect(gameBoard2.placeShip(10, 11, "Carrier")).toBe(false);
      expect(gameBoard3.placeShip(11, 10, "Carrier")).toBe(false);
      expect(gameBoard4.placeShip(91, 15, "Carrier")).toBe(false);
      expect(gameBoard5.placeShip(10, 10, "Carrier")).toBe(false);
    });

    test("2 placeShip() less than 0 cord arguments should return false", () => {
      expect(gameBoard1.placeShip(-1, -1, "Carrier")).toBe(false);
      expect(gameBoard2.placeShip(0, -1, "Carrier")).toBe(false);
      expect(gameBoard3.placeShip(-1, 0, "Carrier")).toBe(false);
      expect(gameBoard4.placeShip(-324, -33, "Carrier")).toBe(false);
    });
  });
  // describe("Overlaps / colisions", () => {});
  test("3 placeShip() Carrier rows should be 0-9 and columns 0-5, returns true", () => {
    expect(gameBoard1.placeShip(10, 10, "Carrier")).toBe(false);
    expect(gameBoard2.placeShip(0, 0, "Carrier")).toBe(true);
    expect(gameBoard3.placeShip(9, 5, "Carrier")).toBe(true);
    expect(gameBoard4.placeShip(8, 5, "Carrier")).toBe(true);
    expect(gameBoard5.placeShip(3, 6, "Carrier")).toBe(false);
  });

  test("4 placeShip() Battleship rows should be 0-9 and columns 0-6, returns true", () => {
    expect(gameBoard1.placeShip(10, 10, "Battleship")).toBe(false);
    expect(gameBoard2.placeShip(0, 0, "Battleship")).toBe(true);
    expect(gameBoard3.placeShip(-1, -1, "Battleship")).toBe(false);
    expect(gameBoard4.placeShip(9, 6, "Battleship")).toBe(true);
    expect(gameBoard5.placeShip(8, 7, "Battleship")).toBe(false);
    expect(gameBoard6.placeShip(3, 6, "Battleship")).toBe(true);
  });
  test("5 placeShip() Destroyer rows should be 0-9 and columns 0-6, returns true", () => {
    expect(gameBoard1.placeShip(10, 10, "Destroyer")).toBe(false);
    expect(gameBoard2.placeShip(0, 0, "Destroyer")).toBe(true);
    expect(gameBoard3.placeShip(-1, -1, "Destroyer")).toBe(false);
    expect(gameBoard4.placeShip(9, 7, "Destroyer")).toBe(true);
    expect(gameBoard5.placeShip(8, 8, "Destroyer")).toBe(false);
    expect(gameBoard6.placeShip(3, 7, "Destroyer")).toBe(true);
  });
  test("6 placeShip() Submarine rows should be 0-9 and columns 0-6, returns true", () => {
    expect(gameBoard1.placeShip(10, 10, "Submarine")).toBe(false);
    expect(gameBoard2.placeShip(0, 0, "Submarine")).toBe(true);
    expect(gameBoard3.placeShip(-1, -1, "Submarine")).toBe(false);
    expect(gameBoard4.placeShip(9, 7, "Submarine")).toBe(true);
    expect(gameBoard5.placeShip(8, 8, "Submarine")).toBe(false);
    expect(gameBoard6.placeShip(3, 7, "Submarine")).toBe(true);
  });

  test("7 placeShip() Patrol Boat rows should be 0-9 and columns 0-6, returns true", () => {
    expect(gameBoard1.placeShip(10, 10, "Patrol Boat")).toBe(false);
    expect(gameBoard2.placeShip(0, 0, "Patrol Boat")).toBe(true);
    expect(gameBoard3.placeShip(-1, -1, "Patrol Boat")).toBe(false);
    expect(gameBoard4.placeShip(9, 8, "Patrol Boat")).toBe(true);
    expect(gameBoard5.placeShip(8, 9, "Patrol Boat")).toBe(false);
    expect(gameBoard6.placeShip(3, 8, "Patrol Boat")).toBe(true);
  });

  test("8 placing the same ship in the same gameBoard should return false", () => {
    expect(gameBoard1.placeShip(0, 0, "Carrier")).toBe(true);
    expect(gameBoard1.placeShip(1, 0, "Carrier")).toBe(false);

    expect(gameBoard1.placeShip(2, 0, "Battleship")).toBe(true);
    expect(gameBoard1.placeShip(3, 0, "Battleship")).toBe(false);

    expect(gameBoard1.placeShip(4, 0, "Destroyer")).toBe(true);
    expect(gameBoard1.placeShip(5, 0, "Destroyer")).toBe(false);

    expect(gameBoard1.placeShip(6, 0, "Submarine")).toBe(true);
    expect(gameBoard1.placeShip(7, 0, "Submarine")).toBe(false);

    expect(gameBoard1.placeShip(8, 0, "Patrol Boat")).toBe(true);
    expect(gameBoard1.placeShip(9, 0, "Patrol Boat")).toBe(false);
  });

  test("9 Placing ships to a coordinate that already have a ship should return false", () => {
    gameBoard1.placeShip(0, 0, "Carrier");
    expect(gameBoard1.placeShip(0, 4, "Patrol Boat")).toBe(false);
    gameBoard1.placeShip(5, 5, "Patrol Boat");
    expect(gameBoard1.placeShip(5, 6, "Destroyer")).toBe(false);
    gameBoard1.placeShip(6, 7, "Destroyer");
    expect(gameBoard1.placeShip(6, 7, "Submarine")).toBe(false);
    gameBoard1.placeShip(3, 7, "Submarine");
    expect(gameBoard1.placeShip(3, 4, "Battleship")).toBe(false);
    expect(gameBoard1.placeShip(3, 3, "Battleship")).toBe(true);
  });

  test("10 Placing ships with incorrect ship name/type should return false", () => {
    expect(gameBoard1.placeShip(5, 3, "battlezhip")).toBe(false);
    expect(gameBoard1.placeShip(3, 3, "boat")).toBe(false);
  });
});

describe("Test Gameboard class commands", () => {
  test("1 placing Carrier should reflect the cellNodes array", () => {
    const gameBoard1 = new Gameboard();
    gameBoard1.placeShip(0, 0, "Carrier");
    expect(gameBoard1.cellNodes[0].occupied).toBeInstanceOf(Ship);
    expect(gameBoard1.cellNodes[1].occupied).toBeInstanceOf(Ship);
    expect(gameBoard1.cellNodes[2].occupied).toBeInstanceOf(Ship);
    expect(gameBoard1.cellNodes[3].occupied).toBeInstanceOf(Ship);
    expect(gameBoard1.cellNodes[4].occupied).toBeInstanceOf(Ship);
    expect(gameBoard1.cellNodes[5].occupied).toBe(null);
  });

  test("2 placing of Carrier that goes out of bounds should not reflect the cellNodes array", () => {
    const gameBoard1 = new Gameboard();
    gameBoard1.placeShip(0, 6, "Carrier");
    expect(gameBoard1.cellNodes[6].occupied).toBe(null);
    expect(gameBoard1.cellNodes[7].occupied).toBe(null);
    expect(gameBoard1.cellNodes[8].occupied).toBe(null);
    expect(gameBoard1.cellNodes[9].occupied).toBe(null);
  });

  test("3 placing Battleship should reflect the cellNodes array", () => {
    const gameBoard1 = new Gameboard();
    gameBoard1.placeShip(0, 0, "Battleship");
    expect(gameBoard1.cellNodes[0].occupied).toBeInstanceOf(Ship);
    expect(gameBoard1.cellNodes[1].occupied).toBeInstanceOf(Ship);
    expect(gameBoard1.cellNodes[2].occupied).toBeInstanceOf(Ship);
    expect(gameBoard1.cellNodes[3].occupied).toBeInstanceOf(Ship);
    expect(gameBoard1.cellNodes[4].occupied).toBe(null);
  });

  test("4 placing Destroyer should reflect the cellNodes array", () => {
    const gameBoard1 = new Gameboard();
    gameBoard1.placeShip(0, 0, "Destroyer");
    expect(gameBoard1.cellNodes[0].occupied).toBeInstanceOf(Ship);
    expect(gameBoard1.cellNodes[1].occupied).toBeInstanceOf(Ship);
    expect(gameBoard1.cellNodes[2].occupied).toBeInstanceOf(Ship);
    expect(gameBoard1.cellNodes[3].occupied).toBe(null);
  });
  test("5 placing Submarine should reflect the cellNodes array", () => {
    const gameBoard1 = new Gameboard();
    gameBoard1.placeShip(0, 0, "Submarine");
    expect(gameBoard1.cellNodes[0].occupied).toBeInstanceOf(Ship);
    expect(gameBoard1.cellNodes[1].occupied).toBeInstanceOf(Ship);
    expect(gameBoard1.cellNodes[2].occupied).toBeInstanceOf(Ship);
    expect(gameBoard1.cellNodes[3].occupied).toBe(null);
  });
  test("6 placing Patrol Boat should reflect the cellNodes array", () => {
    const gameBoard1 = new Gameboard();
    gameBoard1.placeShip(0, 0, "Patrol Boat");
    expect(gameBoard1.cellNodes[0].occupied).toBeInstanceOf(Ship);
    expect(gameBoard1.cellNodes[1].occupied).toBeInstanceOf(Ship);
    expect(gameBoard1.cellNodes[2].occupied).toBe(null);
  });

  test("7 placing ships to an coordinate that already has a ship should not reflect the cellNodes", () => {
    const gameBoard1 = new Gameboard();
    gameBoard1.placeShip(0, 5, "Patrol Boat");
    gameBoard1.placeShip(0, 5, "Destroyer");
    gameBoard1.placeShip(0, 6, "Carrier");
    gameBoard1.placeShip(0, 2, "Battleship");
    gameBoard1.placeShip(0, 4, "Battleship");

    expect(gameBoard1.cellNodes[4].occupied).toBe(null);
    expect(gameBoard1.cellNodes[5].occupied.name).toBe("Patrol Boat");
    expect(gameBoard1.cellNodes[6].occupied.name).toBe("Patrol Boat");
    expect(gameBoard1.cellNodes[7].occupied).toBe(null);
  });

  describe("Test attacking of cells with or without ships", () => {
    test("hitting a ship should increase the counter and sink the ship if all ship cells are hit", () => {
      const gameBoardTest = new Gameboard();
      gameBoardTest.placeShip(0, 0, "Destroyer");
      gameBoardTest.receiveAttack(0, 0);
      expect(gameBoardTest.allShips[2].hitCounter).toBe(1);
      gameBoardTest.receiveAttack(0, 1);
      expect(gameBoardTest.cellNodes[1].hit).toBe(true);
      expect(gameBoardTest.allShips[2].sinkStatus).toBe(false);

      gameBoardTest.receiveAttack(0, 2);
      expect(gameBoardTest.allShips[2].hitCounter).toBe(3);
      expect(gameBoardTest.allShips[2].sinkStatus).toBe(true);
    });

    test("hitting a cell without a ship should just turn the cellNode hit into true", () => {
      const gameBoard = new Gameboard();
      expect(gameBoard.cellNodes[0].hit).toBe(false);
      gameBoard.receiveAttack(0, 0);
      expect(gameBoard.cellNodes[0].hit).toBe(true);

      expect(gameBoard.cellNodes[35].hit).toBe(false);
      gameBoard.receiveAttack(3, 5);
      expect(gameBoard.cellNodes[35].hit).toBe(true);
    });

    test("Hitting a cell twice should not be allowed", () => {
      const gameBoardTest2 = new Gameboard();
      gameBoardTest2.placeShip(0, 0, "Destroyer");
      gameBoardTest2.receiveAttack(0, 0);
      expect(gameBoardTest2.receiveAttack(0, 0)).toBe(false);
      expect(gameBoardTest2.allShips[2].hitCounter).toBe(1);
    });

    test;
  });
});
