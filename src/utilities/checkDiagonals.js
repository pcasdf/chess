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
          let target = diagonal.piece;
          if (target.color === activePlayer && target.type !== 'king') {
            return false;
          }
          if (target.color === opponent) {
            if (
              target.type === 'pawn' ||
              target.type === 'rook' ||
              target.type === 'knight'
            ) {
              return false;
            }
            if (target.type === 'queen' || target.type === 'bishop') {
              return true;
            }
          }
          if (target.type === 'king' && target.color === activePlayer) {
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
          let target = diagonal.piece;
          if (target.color === activePlayer && target.type !== 'king') {
            return false;
          }
          if (target.color === opponent) {
            if (
              target.type === 'pawn' ||
              target.type === 'rook' ||
              target.type === 'knight'
            ) {
              return false;
            }
            if (target.type === 'queen' || target.type === 'bishop') {
              return true;
            }
          }
          if (target.type === 'king' && target.color === activePlayer) {
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
          let target = diagonal.piece;
          if (target.color === activePlayer && target.type !== 'king') {
            return false;
          }
          if (target.color === opponent) {
            if (
              target.type === 'pawn' ||
              target.type === 'rook' ||
              target.type === 'knight'
            ) {
              return false;
            }
            if (target.type === 'queen' || target.type === 'bishop') {
              return true;
            }
          }
          if (target.type === 'king' && target.color === activePlayer) {
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
          let target = diagonal.piece;
          if (target.color === activePlayer && target.type !== 'king') {
            return false;
          }
          if (target.color === opponent) {
            if (
              target.type === 'pawn' ||
              target.type === 'rook' ||
              target.type === 'knight'
            ) {
              return false;
            }
            if (target.type === 'queen' || target.type === 'bishop') {
              return true;
            }
          }
          if (target.type === 'king' && target.color === activePlayer) {
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
