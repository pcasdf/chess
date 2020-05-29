import findKings from './findKings';

const checkDiagonals = (activePlayer, data) => {
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

  const checkAboveRight = () => {
    for (let i = 1; row - i >= 0; i++) {
      if (col + i <= 7) {
        let diagonal = data[row - i][col + i];
        if (diagonal.piece) {
          if (
            diagonal.piece.color === activePlayer &&
            diagonal.piece.type !== 'king'
          ) {
            return false;
          }
          if (diagonal.piece.color === opponent) {
            if (
              diagonal.piece.type === 'pawn' ||
              diagonal.piece.type === 'rook' ||
              diagonal.piece.type === 'knight'
            ) {
              return false;
            }
            if (
              diagonal.piece.type === 'queen' ||
              diagonal.piece.type === 'bishop'
            ) {
              return true;
            }
          }
          if (
            diagonal.piece.type === 'king' &&
            diagonal.piece.color === activePlayer
          ) {
            return true;
          }
        }
      }
    }
  };

  const checkBelowLeft = () => {
    for (let i = 1; row + i <= 7; i++) {
      if (col - i >= 0) {
        let diagonal = data[row + i][col - i];
        if (diagonal.piece) {
          if (
            diagonal.piece.color === activePlayer &&
            diagonal.piece.type !== 'king'
          ) {
            return false;
          }
          if (diagonal.piece.color === opponent) {
            if (
              diagonal.piece.type === 'pawn' ||
              diagonal.piece.type === 'rook' ||
              diagonal.piece.type === 'knight'
            ) {
              return false;
            }
            if (
              diagonal.piece.type === 'queen' ||
              diagonal.piece.type === 'bishop'
            ) {
              return true;
            }
          }
          if (
            diagonal.piece.type === 'king' &&
            diagonal.piece.color === activePlayer
          ) {
            return true;
          }
        }
      }
    }
  };

  const checkBelowRight = () => {
    for (let i = 1; row + i <= 7; i++) {
      if (col + i <= 7) {
        let diagonal = data[row + i][col + i];
        if (diagonal.piece) {
          if (
            diagonal.piece.color === activePlayer &&
            diagonal.piece.type !== 'king'
          ) {
            return false;
          }
          if (diagonal.piece.color === opponent) {
            if (
              diagonal.piece.type === 'pawn' ||
              diagonal.piece.type === 'rook' ||
              diagonal.piece.type === 'knight'
            ) {
              return false;
            }
            if (
              diagonal.piece.type === 'queen' ||
              diagonal.piece.type === 'bishop'
            ) {
              return true;
            }
          }
          if (
            diagonal.piece.type === 'king' &&
            diagonal.piece.color === activePlayer
          ) {
            return true;
          }
        }
      }
    }
  };

  const checkAboveLeft = () => {
    for (let i = 1; row - i >= 0; i++) {
      if (col - i >= 0) {
        let diagonal = data[row - i][col - i];
        if (diagonal.piece) {
          if (
            diagonal.piece.color === activePlayer &&
            diagonal.piece.type !== 'king'
          ) {
            return false;
          }
          if (diagonal.piece.color === opponent) {
            if (
              diagonal.piece.type === 'pawn' ||
              diagonal.piece.type === 'rook' ||
              diagonal.piece.type === 'knight'
            ) {
              return false;
            }
            if (
              diagonal.piece.type === 'queen' ||
              diagonal.piece.type === 'bishop'
            ) {
              return true;
            }
          }
          if (
            diagonal.piece.type === 'king' &&
            diagonal.piece.color === activePlayer
          ) {
            return true;
          }
        }
      }
    }
  };

  if (
    checkAboveRight() ||
    checkAboveLeft() ||
    checkBelowRight() ||
    checkBelowLeft()
  ) {
    return true;
  }
  return false;
};

export default checkDiagonals;
