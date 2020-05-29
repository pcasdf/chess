import findKings from './findKings';

const checkKnights = (activePlayer, data) => {
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

  let corner1, corner2, corner3, corner4, corner5, corner6, corner7, corner8;

  if (data[row + 1]) {
    corner5 = data[row + 1][col + 2];
    corner8 = data[row + 1][col - 2];
  }
  if (data[row + 2]) {
    corner6 = data[row + 2][col + 1];
    corner7 = data[row + 2][col - 1];
  }
  if (data[row - 2]) {
    corner2 = data[row - 2][col - 1];
    corner3 = data[row - 2][col + 1];
  }
  if (data[row - 1]) {
    corner1 = data[row - 1][col - 2];
    corner4 = data[row - 1][col + 2];
  }

  if (corner1 && corner1.piece) {
    if (corner1.piece.color === opponent && corner1.piece.type === 'knight') {
      return true;
    }
  }

  if (corner2 && corner2.piece) {
    if (corner2.piece.color === opponent && corner2.piece.type === 'knight') {
      return true;
    }
  }

  if (corner3 && corner3.piece) {
    if (corner3.piece.color === opponent && corner3.piece.type === 'knight') {
      return true;
    }
  }

  if (corner4 && corner4.piece) {
    if (corner4.piece.color === opponent && corner4.piece.type === 'knight') {
      return true;
    }
  }

  if (corner5 && corner5.piece) {
    if (corner5.piece.color === opponent && corner5.piece.type === 'knight') {
      return true;
    }
  }

  if (corner6 && corner6.piece) {
    if (corner6.piece.color === opponent && corner6.piece.type === 'knight') {
      return true;
    }
  }

  if (corner7 && corner7.piece) {
    if (corner7.piece.color === opponent && corner7.piece.type === 'knight') {
      return true;
    }
  }

  if (corner8 && corner8.piece) {
    if (corner8.piece.color === opponent && corner8.piece.type === 'knight') {
      return true;
    }
  }

  return false;
};

export default checkKnights;
