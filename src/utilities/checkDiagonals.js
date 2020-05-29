export const checkAboveRight = (activePlayer, data, location) => {
  let opponent;
  if (activePlayer === 'white') {
    opponent = 'black';
  } else {
    opponent = 'white';
  }

  let [row, col] = location.square;
  row = +row;
  col = +col;

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

export const checkBelowLeft = (activePlayer, data, location) => {
  let opponent;
  if (activePlayer === 'white') {
    opponent = 'black';
  } else {
    opponent = 'white';
  }

  let [row, col] = location.square;
  row = +row;
  col = +col;

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

export const checkBelowRight = (activePlayer, data, location) => {
  let opponent;
  if (activePlayer === 'white') {
    opponent = 'black';
  } else {
    opponent = 'white';
  }

  let [row, col] = location.square;
  row = +row;
  col = +col;

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

export const checkAboveLeft = (activePlayer, data, location) => {
  let opponent;
  if (activePlayer === 'white') {
    opponent = 'black';
  } else {
    opponent = 'white';
  }

  let [row, col] = location.square;
  row = +row;
  col = +col;

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

const checkDiagonals = (activePlayer, data, location) => {
  if (
    checkAboveRight(activePlayer, data, location) ||
    checkAboveLeft(activePlayer, data, location) ||
    checkBelowRight(activePlayer, data, location) ||
    checkBelowLeft(activePlayer, data, location)
  ) {
    return true;
  }
  return false;
};

export default checkDiagonals;
