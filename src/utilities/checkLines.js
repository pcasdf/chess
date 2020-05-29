import findKings from './findKings';

const checkLines = (activePlayer, data) => {
  const { whiteKing, blackKing } = findKings(data);
  let row, col, opponent;

  if (activePlayer === 'white') {
    [row, col] = whiteKing.square;
    opponent = 'black';
  } else {
    [row, col] = blackKing.square;
    opponent = 'white';
  }

  row = +row;
  col = +col;

  const checkRight = () => {
    for (let i = 1; col + i <= 7; i++) {
      let right = data[row][col + i];
      if (right.piece) {
        if (right.piece.color === activePlayer && right.piece.type !== 'king') {
          return false;
        }
        if (right.piece.color === opponent) {
          if (
            right.piece.type === 'pawn' ||
            right.piece.type === 'bishop' ||
            right.piece.type === 'knight'
          ) {
            return false;
          }
          if (right.piece.type === 'queen' || right.piece.type === 'rook') {
            return true;
          }
        }
        if (right.piece.type === 'king' && right.piece.color === activePlayer) {
          return true;
        }
      }
    }
  };

  const checkLeft = () => {
    for (let i = 1; col - i >= 0; i++) {
      let left = data[row][col - i];
      if (left.piece) {
        if (left.piece.color === activePlayer && left.piece.type !== 'king') {
          return false;
        }
        if (left.piece.color === opponent) {
          if (
            left.piece.type === 'pawn' ||
            left.piece.type === 'bishop' ||
            left.piece.type === 'knight'
          ) {
            return false;
          }
          if (left.piece.type === 'queen' || left.piece.type === 'rook') {
            return true;
          }
        }
        if (left.piece.type === 'king' && left.piece.color === activePlayer) {
          return true;
        }
      }
    }
  };

  const checkAbove = () => {
    for (let i = 1; row - i >= 0; i++) {
      let above = data[row - i][col];
      if (above.piece) {
        if (above.piece.color === activePlayer && above.piece.type !== 'king') {
          return false;
        }
        if (above.piece.color === opponent) {
          if (
            above.piece.type === 'pawn' ||
            above.piece.type === 'bishop' ||
            above.piece.type === 'knight'
          ) {
            return false;
          }
          if (above.piece.type === 'queen' || above.piece.type === 'rook') {
            return true;
          }
        }
        if (above.piece.type === 'king' && above.piece.color === activePlayer) {
          return true;
        }
      }
    }
  };

  const checkBelow = () => {
    for (let i = 1; row + i <= 7; i++) {
      let below = data[row + i][col];
      if (below.piece) {
        if (below.piece.color === activePlayer && below.piece.type !== 'king') {
          return false;
        }
        if (below.piece.color === opponent) {
          if (
            below.piece.type === 'pawn' ||
            below.piece.type === 'bishop' ||
            below.piece.type === 'knight'
          ) {
            return false;
          }
          if (below.piece.type === 'queen' || below.piece.type === 'rook') {
            return true;
          }
        }
        if (below.piece.type === 'king' && below.piece.color === activePlayer) {
          return true;
        }
      }
    }
  };

  if (checkAbove() || checkBelow() || checkRight() || checkLeft()) {
    return true;
  }
  return false;
};

export default checkLines;
