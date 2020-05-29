const knightMove = (square, activePiece, activePlayer) => {
  let [row, col] = activePiece.square;
  let [nextRow, nextCol] = square.square;
  let rowDiff = row - nextRow;
  let colDiff = col - nextCol;

  if (rowDiff) {
    if (
      ((rowDiff === 2 || rowDiff === -2) &&
        (colDiff === 1 || colDiff === -1)) ||
      ((rowDiff === 1 || rowDiff === -1) && (colDiff === 2 || colDiff === -2))
    ) {
      if (square.piece && square.piece.color === activePlayer) {
        return false;
      }
      return true;
    }
  }
};

export default knightMove;
