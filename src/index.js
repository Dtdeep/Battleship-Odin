import "./styles.css";
import "./comeauReset.css";
import Player from "./Player.js";
import Computer from "./ComputerPlayer.js";
import * as DoManipulation from "./DOManipulation.js";

// const boardContainer = document.querySelector("#boards-container");
const computerBoard = document.querySelector("#board-1");
const playerBoard = document.querySelector("#board-2");
const shipsList = document.querySelector(".ships");
let playerTurn = true;
let gameEnd = false;
let winner = "";
let allShipsPlaced = false;

// eslint-disable-next-line no-unused-vars
const playGame = (() => {
  const player = new Player("Human", "Player 1");
  const computerPlayer = new Computer("Computer", "Computer 1");
  computerPlayer.computerPlaceAllShip();
  shipsList.addEventListener("dragstart", (ev) => {
    const targetShipType = ev.target.dataset.shipType;
    const targetShipId = ev.target.id;

    ev.dataTransfer.setData("ship", targetShipType);
    ev.dataTransfer.setData("shipId", targetShipId);

    console.log(targetShipType);
  });

  playerBoard.addEventListener("dragover", (ev) => {
    ev.preventDefault(); // required to allow dropping
  });

  playerBoard.addEventListener("drop", (ev) => {
    ev.preventDefault();
    const targetRow = parseInt(ev.target.dataset.row);
    const targetColumn = parseInt(ev.target.dataset.column);
    const dataShipType = ev.dataTransfer.getData("ship");
    const dataShipId = ev.dataTransfer.getData("shipId");
    const isValidPlacement = player.GameBoard.placeShip(
      targetRow,
      targetColumn,
      dataShipType,
    );
    const dataRemoved = document.querySelector(`#${dataShipId}`);
    if (isValidPlacement) {
      shipsList.removeChild(dataRemoved);
    }
    DoManipulation.deleteAllChild(playerBoard);
    DoManipulation.generateBoard(player, playerBoard);
    if (player.GameBoard.PlacedShips.length >= 5) {
      alert("All ships played, you can start attacking the computer board now");
      allShipsPlaced = true;
    }
  });

  DoManipulation.generateBoard(computerPlayer, computerBoard);
  DoManipulation.generateBoard(player, playerBoard);

  computerBoard.addEventListener("click", (e) => {
    if (playerTurn == false) return;
    if (allShipsPlaced == false) return;
    if (gameEnd) {
      alert(`game end. ${winner} WON`);
      return;
    }
    const playerTargetRow = e.target.dataset.row;
    const playerTargetColumn = e.target.dataset.column;
    if (playerTargetRow == undefined) {
      alert("Not a valid attack");
      return;
    }
    console.log("::", playerTargetColumn, playerTargetRow);
    const isValidAttack = computerPlayer.GameBoard.receiveAttack(
      playerTargetRow,
      playerTargetColumn,
    );
    if (!isValidAttack) {
      alert("Already attacked this");
      return;
    }
    DoManipulation.deleteAllChild(computerBoard);
    DoManipulation.generateBoard(computerPlayer, computerBoard);

    playerTurn = false;
    const [computerTargetRow, computerTargetColumn] =
      computerPlayer.getComputerMove();
    player.GameBoard.receiveAttack(computerTargetRow, computerTargetColumn);
    DoManipulation.deleteAllChild(playerBoard);
    DoManipulation.generateBoard(player, playerBoard);
    playerTurn = true;
    if (computerPlayer.GameBoard.isAllShipSunk()) {
      alert("all ship sunk! PLAYER WINS");
      winner = "Player";
      gameEnd = true;
    }
    if (player.GameBoard.isAllShipSunk()) {
      alert("all ship sunk! COMPUTER WINS");
      winner = "Computer";

      gameEnd = true;
    }
  });
})();

//generate each Player's boards
// a player can click the other player's board nodeCells and call that cell hit
// the computerplayer class should have one additional method that randomly generates a valid coordinate
// based on the computerPlayer's generataed attack cords hit the opposing player's gameBoard
