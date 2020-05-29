import pawnMove from './pawnMove';
import bishopMove from './bishopMove';
import knightMove from './knightMove';
import queenMove from './queenMove';
import rookMove from './rookMove';
import kingMove from './kingMove';

const checkLegal = (square, activePiece, board, activePlayer) => {
  switch (activePiece.piece.type) {
    case 'pawn':
      return pawnMove(square, activePiece, activePlayer);
    case 'bishop':
      return bishopMove(square, activePiece, board, activePlayer);
    case 'knight':
      return knightMove(square, activePiece, activePlayer);
    case 'rook':
      return rookMove(square, activePiece, board, activePlayer);
    case 'queen':
      return queenMove(square, activePiece, board, activePlayer);
    case 'king':
      return kingMove(square, activePiece, board, activePlayer);
    default:
      return false;
  }
};

export default checkLegal;
