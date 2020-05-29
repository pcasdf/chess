const kingMove = (square, activePiece, board, activePlayer) => {
  let [row, col] = activePiece.square;
  let [nextRow, nextCol] = square.square;
  let rowDiff = row - nextRow;
  let colDiff = col - nextCol;

  if (rowDiff === 0 && colDiff === 3) {
    if (activePlayer === 'white' && +row === 7 && +col === 4) {
      if (board[7][0].piece && board[7][0].piece.type === 'rook') {
        if (!board[7][1].piece && !board[7][2].piece && !board[7][3].piece) {
          return true;
        }
      }
    }
    if (activePlayer === 'black' && +row === 0 && +col === 4) {
      if (board[0][0].piece && board[0][0].piece.type === 'rook') {
        if (!board[0][1].piece && !board[0][2].piece && !board[0][3].piece) {
          return true;
        }
      }
    }
  }
  if (rowDiff === 0 && colDiff === -2) {
    if (activePlayer === 'white' && +row === 7 && +col === 4) {
      if (board[7][7].piece && board[7][7].piece.type === 'rook') {
        if (!board[7][6].piece && !board[7][5].piece) {
          return true;
        }
      }
    }
    if (activePlayer === 'black' && +row === 0 && +col === 4) {
      if (board[0][7].piece && board[0][7].piece.type === 'rook') {
        if (!board[0][6].piece && !board[0][5].piece) {
          return true;
        }
      }
    }
  }
  if (colDiff <= 1 && colDiff >= -1 && rowDiff <= 1 && rowDiff >= -1) {
    if (square.piece && square.piece.color === activePlayer) {
      return false;
    }
    return true;
  }
};

export default kingMove;
