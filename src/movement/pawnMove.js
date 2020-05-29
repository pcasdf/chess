const pawnMove = (square, activePiece, activePlayer) => {
  let [row, col] = activePiece.square;
  let [nextRow, nextCol] = square.square;
  let rowDiff = row - nextRow;
  let colDiff = col - nextCol;

  if (activePlayer === 'white') {
    if (rowDiff === 1 || (rowDiff === 2 && row === '6')) {
      if (colDiff === 1 || colDiff === -1) {
        if (square.piece && square.piece.color === 'black') {
          return true;
        }
        return false;
      } else {
        if (!square.piece && colDiff === 0) {
          return true;
        }
        return false;
      }
    }
    return false;
  } else {
    if (rowDiff === -1 || (rowDiff === -2 && row === '1')) {
      if (colDiff === 1 || colDiff === -1) {
        if (square.piece && square.piece.color === 'white') {
          return true;
        }
      } else {
        if (!square.piece && colDiff === 0) {
          return true;
        }
        return false;
      }
    }
  }
};

export default pawnMove;
