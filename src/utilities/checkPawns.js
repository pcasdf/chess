const checkPawns = (activePlayer, data, location) => {
  let [row, col] = location.square;
  row = +row;
  col = +col;

  if (activePlayer === 'white') {
    let corner1 = data[row - 1][col - 1];
    let corner2 = data[row - 1][col + 1];
    if (corner1 || corner2) {
      if (corner1 && corner1.piece) {
        if (corner1.piece.type === 'pawn' && corner1.piece.color === 'black') {
          return true;
        }
      }
      if (corner2 && corner2.piece) {
        if (corner2.piece.type === 'pawn' && corner2.piece.color === 'black') {
          return true;
        }
      }
    }
  } else {
    let corner1 = data[row + 1][col - 1];
    let corner2 = data[row + 1][col + 1];
    if (corner1 || corner2) {
      if (corner1.piece) {
        if (corner1.piece.type === 'pawn' && corner1.piece.color === 'white') {
          return true;
        }
      }
      if (corner2.piece) {
        if (corner2.piece.type === 'pawn' && corner2.piece.color === 'white') {
          return true;
        }
      }
    }
  }
};

export default checkPawns;
