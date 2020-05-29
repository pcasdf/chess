const castleKings = (activePiece, square, prevBoard) => {
  if (
    activePiece.piece.type === 'king' &&
    activePiece.piece.color === 'white'
  ) {
    if (square.square === '71') {
      const rook = prevBoard[7][0].piece;
      prevBoard[7][0].piece = null;
      prevBoard[7][2].piece = rook;
    } else if (square.square === '76') {
      const rook = prevBoard[7][7].piece;
      prevBoard[7][7].piece = null;
      prevBoard[7][5].piece = rook;
    }
  } else if (
    activePiece.piece.type === 'king' &&
    activePiece.piece.color === 'black'
  ) {
    if (square.square === '01') {
      const rook = prevBoard[0][0].piece;
      prevBoard[0][0].piece = null;
      prevBoard[0][2].piece = rook;
    } else if (square.square === '06') {
      const rook = prevBoard[0][7].piece;
      prevBoard[0][7].piece = null;
      prevBoard[0][5].piece = rook;
    }
  }
};

export default castleKings;
