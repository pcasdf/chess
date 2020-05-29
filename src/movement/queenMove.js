const queenMove = (square, activePiece, board, activePlayer) => {
  let [row, col] = activePiece.square;
  let [nextRow, nextCol] = square.square;
  let rowDiff = row - nextRow;
  let colDiff = col - nextCol;

  if (rowDiff > 0 && colDiff < 0 && rowDiff === -colDiff) {
    for (let i = 1; i < rowDiff; i++) {
      if (board[+row - i][+col + i].piece) {
        return false;
      }
    }
    if (square.piece && activePlayer === square.piece.color) {
      return false;
    }
    return true;
  } else if (rowDiff < 0 && colDiff > 0 && rowDiff === -colDiff) {
    for (let i = 1; i < -rowDiff; i++) {
      if (board[+row + i][+col - i].piece) {
        return false;
      }
    }
    if (square.piece && activePlayer === square.piece.color) {
      return false;
    }
    return true;
  } else if (rowDiff > 0 && colDiff > 0 && rowDiff === colDiff) {
    for (let i = 1; i < rowDiff; i++) {
      if (board[+row - i][+col - i].piece) {
        return false;
      }
    }
    if (square.piece && activePlayer === square.piece.color) {
      return false;
    }
    return true;
  } else if (rowDiff < 0 && colDiff < 0 && rowDiff === colDiff) {
    for (let i = 1; i < -rowDiff; i++) {
      if (board[+row + i][+col + i].piece) {
        return false;
      }
    }
    if (square.piece && activePlayer === square.piece.color) {
      return false;
    }
    return true;
  }

  if (!colDiff) {
    if (rowDiff > 0) {
      for (let i = 1; i < rowDiff; i++) {
        if (board[+row - i][+col].piece) {
          return false;
        }
      }
      if (square.piece && activePlayer === square.piece.color) {
        return false;
      }
      return true;
    } else if (rowDiff < 0) {
      for (let i = 1; i < -rowDiff; i++) {
        if (board[+row + i][+col].piece) {
          return false;
        }
      }
      if (square.piece && activePlayer === square.piece.color) {
        return false;
      }
      return true;
    }
  } else if (!rowDiff) {
    if (colDiff > 0) {
      for (let i = 1; i < colDiff; i++) {
        if (board[+row][+col - i].piece) {
          return false;
        }
      }
      if (square.piece && activePlayer === square.piece.color) {
        return false;
      }
      return true;
    } else if (colDiff < 0) {
      for (let i = 1; i < -colDiff; i++) {
        if (board[+row][+col + i].piece) {
          return false;
        }
      }
      if (square.piece && activePlayer === square.piece.color) {
        return false;
      }
      return true;
    }
  }
};

export default queenMove;
