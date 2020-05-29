const checkLines = (activePlayer, data, location) => {
  let opponent;
  if (activePlayer === 'white') {
    opponent = 'black';
  } else {
    opponent = 'white';
  }

  let [row, col] = location.square;
  row = +row;
  col = +col;

  const checkRight = () => {
    for (let i = 1; col + i <= 7; i++) {
      let right = data[row][col + i];
      if (right.piece) {
        const target = right.piece;
        if (target.color === activePlayer && target.type !== 'king') {
          return false;
        }
        if (target.color === opponent) {
          if (
            target.type === 'pawn' ||
            target.type === 'bishop' ||
            target.type === 'knight'
          ) {
            return false;
          }
          if (target.type === 'queen' || target.type === 'rook') {
            return true;
          }
        }
        if (target.type === 'king' && target.color === activePlayer) {
          return true;
        }
      }
    }
  };

  const checkLeft = () => {
    for (let i = 1; col - i >= 0; i++) {
      let left = data[row][col - i];
      if (left.piece) {
        const target = left.piece;
        if (target.color === activePlayer && target.type !== 'king') {
          return false;
        }
        if (target.color === opponent) {
          if (
            target.type === 'pawn' ||
            target.type === 'bishop' ||
            target.type === 'knight'
          ) {
            return false;
          }
          if (target.type === 'queen' || target.type === 'rook') {
            return true;
          }
        }
        if (target.type === 'king' && target.color === activePlayer) {
          return true;
        }
      }
    }
  };

  const checkAbove = () => {
    for (let i = 1; row - i >= 0; i++) {
      let above = data[row - i][col];
      if (above.piece) {
        let target = above.piece;
        if (target.color === activePlayer && target.type !== 'king') {
          return false;
        }
        if (target.color === opponent) {
          if (
            target.type === 'pawn' ||
            target.type === 'bishop' ||
            target.type === 'knight'
          ) {
            return false;
          }
          if (target.type === 'queen' || target.type === 'rook') {
            return true;
          }
        }
        if (target.type === 'king' && target.color === activePlayer) {
          return true;
        }
      }
    }
  };

  const checkBelow = () => {
    for (let i = 1; row + i <= 7; i++) {
      let below = data[row + i][col];
      if (below.piece) {
        let target = below.piece;
        if (target.color === activePlayer && target.type !== 'king') {
          return false;
        }
        if (target.color === opponent) {
          if (
            target.type === 'pawn' ||
            target.type === 'bishop' ||
            target.type === 'knight'
          ) {
            return false;
          }
          if (target.type === 'queen' || target.type === 'rook') {
            return true;
          }
        }
        if (target.type === 'king' && target.color === activePlayer) {
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
