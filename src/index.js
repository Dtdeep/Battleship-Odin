import "./styles.css";
import "./comeauReset.css";
import Player from "./Player.js";
import Computer from "./ComputerPlayer.js";
import * as DoManipulation from "./DOManipulation.js";

// const boardContainer = document.querySelector("#boards-container");
const computerBoard = document.querySelector("#board-1");
const playerBoard = document.querySelector("#board-2");

// eslint-disable-next-line no-unused-vars
const playGame = (() => {
  const player = new Player();
  const computerPlayer = new Computer();
  DoManipulation.generateBoard(computerPlayer, computerBoard);
  DoManipulation.generateBoard(player, playerBoard);
})();

//generate each Player's boards
// a player can click the other player's board nodeCells and call that cell hit
// the computerplayer class should have one additional method that randomly generates a valid coordinate
// based on the computerPlayer's generataed attack cords hit the opposing player's gameBoard
