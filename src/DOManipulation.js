export const generateBoard = (player, boardContainter) => {
  player.GameBoard.CellNodes.forEach((cellNode, index) => {
    const div = document.createElement("div");
    if (cellNode.hit == true) {
      div.classList.add("cell-hit");
    }
    div.classList.add("cell-node");
    boardContainter.append(div);
    div.dataset.index = index;
    div.dataset.row = cellNode.row;
    div.dataset.column = cellNode.column;
  });

  //generate a boardUI with event listener
  //for now this board should have preplaced ships
  // the user clicks a cell and hits the cellNodes
};
