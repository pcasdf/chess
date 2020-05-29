const bishopMove = (target, activePiece, board, activePlayer) => {
  let [row, col] = activePiece.square;
  let [nextRow, nextCol] = target.square;
  let rowDiff = row - nextRow;
  let colDiff = col - nextCol;

  if (rowDiff) {
    if (rowDiff > 0 && colDiff < 0 && rowDiff === -colDiff) {
      for (let i = 1; i < rowDiff; i++) {
        if (board[+row - i][+col + i].piece) {
          return false;
        }
      }
      if (target.piece && activePlayer === target.piece.color) {
        return false;
      }
      return true;
    } else if (rowDiff < 0 && colDiff > 0 && rowDiff === -colDiff) {
      for (let i = 1; i < -rowDiff; i++) {
        if (board[+row + i][+col - i].piece) {
          return false;
        }
      }
      if (target.piece && activePlayer === target.piece.color) {
        return false;
      }
      return true;
    } else if (rowDiff > 0 && colDiff > 0 && rowDiff === colDiff) {
      for (let i = 1; i < rowDiff; i++) {
        if (board[+row - i][+col - i].piece) {
          return false;
        }
      }
      if (target.piece && activePlayer === target.piece.color) {
        return false;
      }
      return true;
    } else if (rowDiff < 0 && colDiff < 0 && rowDiff === colDiff) {
      for (let i = 1; i < -rowDiff; i++) {
        if (board[+row + i][+col + i].piece) {
          return false;
        }
      }
      if (target.piece && activePlayer === target.piece.color) {
        return false;
      }
      return true;
    }
  }
};

export default bishopMove;
