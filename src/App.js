import React, { useState } from 'react';

import './App.css';

import INITIAL_BOARD from './board';

const App = () => {
  const [activePlayer, setActivePlayer] = useState('white');
  const [isCheck, setIsCheck] = useState(false);
  const [activePiece, setActivePiece] = useState(null);
  const [board, setBoard] = useState(INITIAL_BOARD);

  const checkIsCheck = data => {
    // checking if king is in check
    let row, col, opponent;

    let a = data[0].find(item => item.piece && item.piece.type === 'king');
    let b = data[1].find(item => item.piece && item.piece.type === 'king');
    let c = data[2].find(item => item.piece && item.piece.type === 'king');
    let d = data[3].find(item => item.piece && item.piece.type === 'king');
    let e = data[4].find(item => item.piece && item.piece.type === 'king');
    let f = data[5].find(item => item.piece && item.piece.type === 'king');
    let g = data[6].find(item => item.piece && item.piece.type === 'king');
    let h = data[7].find(item => item.piece && item.piece.type === 'king');
    let kings = [a, b, c, d, e, f, g, h];
    kings = kings.filter(item => item !== undefined);
    const whiteKing = kings.find(item => item.piece.color === 'white');
    const blackKing = kings.find(item => item.piece.color === 'black');

    if (activePlayer === 'white') {
      [row, col] = whiteKing.square;
      opponent = 'black';
    } else {
      [row, col] = blackKing.square;
      opponent = 'white';
    }

    row = +row;
    col = +col;

    const checkKnights = () => {
      let corner1,
        corner2,
        corner3,
        corner4,
        corner5,
        corner6,
        corner7,
        corner8;

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
        if (
          corner1.piece.color === opponent &&
          corner1.piece.type === 'knight'
        ) {
          return true;
        }
      }

      if (corner2 && corner2.piece) {
        if (
          corner2.piece.color === opponent &&
          corner2.piece.type === 'knight'
        ) {
          return true;
        }
      }

      if (corner3 && corner3.piece) {
        if (
          corner3.piece.color === opponent &&
          corner3.piece.type === 'knight'
        ) {
          return true;
        }
      }

      if (corner4 && corner4.piece) {
        if (
          corner4.piece.color === opponent &&
          corner4.piece.type === 'knight'
        ) {
          return true;
        }
      }

      if (corner5 && corner5.piece) {
        if (
          corner5.piece.color === opponent &&
          corner5.piece.type === 'knight'
        ) {
          return true;
        }
      }

      if (corner6 && corner6.piece) {
        if (
          corner6.piece.color === opponent &&
          corner6.piece.type === 'knight'
        ) {
          return true;
        }
      }

      if (corner7 && corner7.piece) {
        if (
          corner7.piece.color === opponent &&
          corner7.piece.type === 'knight'
        ) {
          return true;
        }
      }

      if (corner8 && corner8.piece) {
        if (
          corner8.piece.color === opponent &&
          corner8.piece.type === 'knight'
        ) {
          return true;
        }
      }

      return false;
    };

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

    const checkRight = () => {
      for (let i = 1; col + i <= 7; i++) {
        let right = data[row][col + i];
        if (right.piece) {
          if (
            right.piece.color === activePlayer &&
            right.piece.type !== 'king'
          ) {
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
          if (
            right.piece.type === 'king' &&
            right.piece.color === activePlayer
          ) {
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
          if (
            above.piece.color === activePlayer &&
            above.piece.type !== 'king'
          ) {
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
          if (
            above.piece.type === 'king' &&
            above.piece.color === activePlayer
          ) {
            return true;
          }
        }
      }
    };

    const checkBelow = () => {
      for (let i = 1; row + i <= 7; i++) {
        let below = data[row + i][col];
        if (below.piece) {
          if (
            below.piece.color === activePlayer &&
            below.piece.type !== 'king'
          ) {
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
          if (
            below.piece.type === 'king' &&
            below.piece.color === activePlayer
          ) {
            return true;
          }
        }
      }
    };

    if (
      checkAboveRight() ||
      checkBelowLeft() ||
      checkAboveLeft() ||
      checkBelowRight() ||
      checkRight() ||
      checkLeft() ||
      checkAbove() ||
      checkBelow() ||
      checkKnights()
    ) {
      return true;
    }
  };

  const willStopCheck = (square, copy, copy2) => {
    let data = JSON.parse(JSON.stringify(board));

    const [row, col] = square.square;
    const [prevRow, prevCol] = copy2.square;
    data[prevRow][prevCol].piece = null;
    data[row][col].piece = copy;

    if (checkIsCheck(data)) {
      return false;
    }

    return true;
  };

  const willCheck = (square, piece, square2) => {
    let [row, col] = square.square;
    row = +row;
    col = +col;

    let [row2, col2] = square2.square;
    row2 = +row2;
    col2 = +col2;

    const checkAboveRight = (player, opponent) => {
      for (let i = 1; row2 - i >= 0; i++) {
        if (col2 + i <= 7) {
          let diagonal = board[row2 - i][col2 + i];
          if (diagonal.piece) {
            if (
              diagonal.piece.color === player &&
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
                (diagonal.piece.type === 'queen' ||
                  diagonal.piece.type === 'bishop') &&
                diagonal.square !== square.square
              ) {
                return true;
              }
            }
            if (
              diagonal.piece.type === 'king' &&
              diagonal.piece.color === 'player'
            ) {
              return true;
            }
          }
        }
      }
    };

    const checkBelowLeft = (player, opponent) => {
      for (let i = 1; row2 + i <= 7; i++) {
        if (col2 - i >= 0) {
          let diagonal = board[row2 + i][col2 - i];
          if (diagonal.piece) {
            if (
              diagonal.piece.color === player &&
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
                (diagonal.piece.type === 'queen' ||
                  diagonal.piece.type === 'bishop') &&
                diagonal.square !== square.square
              ) {
                return true;
              }
            }
            if (
              diagonal.piece.type === 'king' &&
              diagonal.piece.color === player
            ) {
              return true;
            }
          }
        }
      }
    };

    const checkBelowRight = (player, opponent) => {
      for (let i = 1; row2 + i <= 7; i++) {
        if (col2 + i <= 7) {
          let diagonal = board[row2 + i][col2 + i];
          if (diagonal.piece) {
            if (
              diagonal.piece.color === player &&
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
                (diagonal.piece.type === 'queen' ||
                  diagonal.piece.type === 'bishop') &&
                diagonal.square !== square.square
              ) {
                return true;
              }
            }
            if (
              diagonal.piece.type === 'king' &&
              diagonal.piece.color === player
            ) {
              return true;
            }
          }
        }
      }
    };

    const checkAboveLeft = (player, opponent) => {
      for (let i = 1; row2 - i >= 0; i++) {
        if (col2 - i >= 0) {
          let diagonal = board[row2 - i][col2 - i];
          if (diagonal.piece) {
            if (
              diagonal.piece.color === player &&
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
                (diagonal.piece.type === 'queen' ||
                  diagonal.piece.type === 'bishop') &&
                diagonal.square !== square.square
              ) {
                return true;
              }
            }
            if (
              diagonal.piece.type === 'king' &&
              diagonal.piece.color === player
            ) {
              return true;
            }
          }
        }
      }
    };

    const checkRight = (player, opponent) => {
      for (let i = 1; col + i <= 7; i++) {
        let right = board[row2][col2 + i];
        if (right && right.piece) {
          if (right.piece.color === player && right.piece.type !== 'king') {
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
            if (
              (right.piece.type === 'queen' || right.piece.type === 'rook') &&
              right.square !== square.square
            ) {
              return true;
            }
          }
          if (right.piece.type === 'king' && right.piece.color === player) {
            return true;
          }
        }
      }
    };

    const checkLeft = (player, opponent) => {
      for (let i = 1; col - i >= 0; i++) {
        let left = board[row2][col2 - i];
        if (left.piece) {
          if (left.piece.color === player && left.piece.type !== 'king') {
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
            if (
              (left.piece.type === 'queen' || left.piece.type === 'rook') &&
              left.square !== square.square
            ) {
              return true;
            }
          }
          if (left.piece.type === 'king' && left.piece.color === player) {
            return true;
          }
        }
      }
    };

    const checkAbove = (player, opponent) => {
      for (let i = 1; row2 - i >= 0; i++) {
        let above = board[row2 - i][col2];
        if (above.piece) {
          if (above.piece.color === player && above.piece.type !== 'king') {
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
            if (
              (above.piece.type === 'queen' || above.piece.type === 'rook') &&
              above.square !== square.square
            ) {
              return true;
            }
          }
          if (above.piece.type === 'king' && above.piece.color === player) {
            return true;
          }
        }
      }
    };

    const checkBelow = (player, opponent) => {
      for (let i = 1; row2 + i <= 7; i++) {
        let below = board[row2 + i][col2];
        if (below.piece) {
          if (below.piece.color === player && below.piece.type !== 'king') {
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
            if (
              (below.piece.type === 'queen' || below.piece.type === 'rook') &&
              below.square !== square.square
            ) {
              return true;
            }
          }
          if (below.piece.type === 'king' && below.piece.color === player) {
            return true;
          }
        }
      }
    };

    // white putting own king into check
    if (piece.type !== 'king' && piece.color === 'white') {
      if (
        (checkAboveRight('white', 'black') &&
          checkBelowLeft('white', 'black')) ||
        (checkAboveLeft('white', 'black') &&
          checkBelowRight('white', 'black')) ||
        (checkRight('white', 'black') && checkLeft('white', 'black')) ||
        (checkAbove('white', 'black') && checkBelow('white', 'black'))
      ) {
        return true;
      }

      return false;
    }

    // black putting own king into check
    if (piece.type !== 'king' && piece.color === 'black') {
      if (
        (checkAboveRight('black', 'white') &&
          checkBelowLeft('black', 'white')) ||
        (checkAboveLeft('black', 'white') &&
          checkBelowRight('black', 'white')) ||
        (checkRight('black', 'white') && checkLeft('black', 'white')) ||
        (checkAbove('black', 'white') && checkBelow('black', 'white'))
      ) {
        return true;
      }

      return false;
    }

    // pawn checks

    const checkPawns = opponent => {
      let leftCorner = board[row - 1][col - 1];
      let rightCorner = board[row - 1][col + 1];
      if (leftCorner) {
        if (leftCorner.piece && leftCorner.piece.color === opponent) {
          if (leftCorner.piece.type === 'king') {
            setIsCheck(true);

            return false;
          }
        }
      }
      if (rightCorner) {
        if (rightCorner.piece && rightCorner.piece.color === opponent) {
          if (rightCorner.piece.type === 'king') {
            setIsCheck(true);

            return false;
          }
        }
      }
    };

    if (piece.type === 'pawn' && piece.color === 'white') {
      checkPawns('black');
    }

    if (piece.type === 'pawn' && piece.color === 'black') {
      checkPawns('white');
    }

    if (piece.type === 'king' && piece.color === 'white') {
      let leftCorner = board[row - 1][col - 1];
      let rightCorner = board[row - 1][col + 1];
      if (leftCorner) {
        if (leftCorner.piece && leftCorner.piece.color === 'black') {
          if (leftCorner.piece.type === 'pawn') {
            return true;
          }
        }
      }
      if (rightCorner) {
        if (rightCorner.piece && rightCorner.piece.color === 'black') {
          if (rightCorner.piece.type === 'pawn') {
            return true;
          }
        }
      }

      if (
        checkAboveRight('white', 'black') ||
        checkAboveLeft('white', 'black') ||
        checkBelowRight('white', 'black') ||
        checkBelowLeft('white', 'black') ||
        checkRight('white', 'black') ||
        checkLeft('white', 'black') ||
        checkAbove('white', 'black') ||
        checkBelow('white', 'black')
      ) {
        return true;
      }
      return false;
    }

    if (piece.type === 'king' && piece.color === 'white') {
      let leftCorner = board[row + 1][col - 1];
      let rightCorner = board[row + 1][col + 1];
      if (leftCorner) {
        if (leftCorner.piece && leftCorner.piece.color === 'black') {
          if (leftCorner.piece.type === 'pawn') {
            return true;
          }
        }
      }
      if (rightCorner) {
        if (rightCorner.piece && rightCorner.piece.color === 'black') {
          if (rightCorner.piece.type === 'pawn') {
            return true;
          }
        }
      }
      if (
        checkAboveRight('black', 'white') ||
        checkAboveLeft('black', 'white') ||
        checkBelowRight('black', 'white') ||
        checkBelowLeft('black', 'white') ||
        checkRight('black', 'white') ||
        checkLeft('black', 'white') ||
        checkAbove('black', 'white') ||
        checkBelow('black', 'white')
      ) {
        return true;
      }
      return false;
    }

    return false;
  };

  const checkLegal = square => {
    let [row, col] = activePiece.square;
    let [nextRow, nextCol] = square.square;
    let rowDiff = row - nextRow;
    let colDiff = col - nextCol;

    //pawn movement
    if (activePiece.piece.type === 'pawn') {
      if (activePiece.piece.color === 'white') {
        if (rowDiff === 1 || (rowDiff === 2 && row === '6')) {
          if (colDiff === 1 || colDiff === -1) {
            if (square.piece && square.piece.color === 'black') {
              return true;
            }
            return false;
          } else {
            if (!square.piece && colDiff === 0) {
              return true;
            }
            return false;
          }
        }
        return false;
      } else {
        if (rowDiff === -1 || (rowDiff === -2 && row === '1')) {
          if (colDiff === 1 || colDiff === -1) {
            if (square.piece && square.piece.color === 'white') {
              return true;
            }
          } else {
            if (!square.piece && colDiff === 0) {
              return true;
            }
            return false;
          }
        }
      }
    }

    //bishop movement
    if (activePiece.piece.type === 'bishop') {
      if (rowDiff) {
        if (rowDiff > 0 && colDiff < 0 && rowDiff === -colDiff) {
          for (let i = 1; i < rowDiff; i++) {
            if (board[+row - i][+col + i].piece) {
              return false;
            }
          }
          if (square.piece && activePlayer === square.piece.color) {
            return false;
          }
          return true;
        } else if (rowDiff < 0 && colDiff > 0 && rowDiff === -colDiff) {
          for (let i = 1; i < -rowDiff; i++) {
            if (board[+row + i][+col - i].piece) {
              return false;
            }
          }
          if (square.piece && activePlayer === square.piece.color) {
            return false;
          }
          return true;
        } else if (rowDiff > 0 && colDiff > 0 && rowDiff === colDiff) {
          for (let i = 1; i < rowDiff; i++) {
            if (board[+row - i][+col - i].piece) {
              return false;
            }
          }
          if (square.piece && activePlayer === square.piece.color) {
            return false;
          }
          return true;
        } else if (rowDiff < 0 && colDiff < 0 && rowDiff === colDiff) {
          for (let i = 1; i < -rowDiff; i++) {
            if (board[+row + i][+col + i].piece) {
              return false;
            }
          }
          if (square.piece && activePlayer === square.piece.color) {
            return false;
          }
          return true;
        }
      }
    }

    // knight movement
    if (activePiece.piece.type === 'knight') {
      if (rowDiff) {
        if (
          ((rowDiff === 2 || rowDiff === -2) &&
            (colDiff === 1 || colDiff === -1)) ||
          ((rowDiff === 1 || rowDiff === -1) &&
            (colDiff === 2 || colDiff === -2))
        ) {
          if (square.piece && square.piece.color === activePlayer) {
            return false;
          }
          return true;
        }
      }
    }

    // queen movement
    if (activePiece.piece.type === 'queen') {
      if (rowDiff > 0 && colDiff < 0 && rowDiff === -colDiff) {
        for (let i = 1; i < rowDiff; i++) {
          if (board[+row - i][+col + i].piece) {
            return false;
          }
        }
        if (square.piece && activePlayer === square.piece.color) {
          return false;
        }
        return true;
      } else if (rowDiff < 0 && colDiff > 0 && rowDiff === -colDiff) {
        for (let i = 1; i < -rowDiff; i++) {
          if (board[+row + i][+col - i].piece) {
            return false;
          }
        }
        if (square.piece && activePlayer === square.piece.color) {
          return false;
        }
        return true;
      } else if (rowDiff > 0 && colDiff > 0 && rowDiff === colDiff) {
        for (let i = 1; i < rowDiff; i++) {
          if (board[+row - i][+col - i].piece) {
            return false;
          }
        }
        if (square.piece && activePlayer === square.piece.color) {
          return false;
        }
        return true;
      } else if (rowDiff < 0 && colDiff < 0 && rowDiff === colDiff) {
        for (let i = 1; i < -rowDiff; i++) {
          if (board[+row + i][+col + i].piece) {
            return false;
          }
        }
        if (square.piece && activePlayer === square.piece.color) {
          return false;
        }
        return true;
      }

      if (!colDiff) {
        if (rowDiff > 0) {
          for (let i = 1; i < rowDiff; i++) {
            if (board[+row - i][+col].piece) {
              return false;
            }
          }
          if (square.piece && activePlayer === square.piece.color) {
            return false;
          }
          return true;
        } else if (rowDiff < 0) {
          for (let i = 1; i < -rowDiff; i++) {
            if (board[+row + i][+col].piece) {
              return false;
            }
          }
          if (square.piece && activePlayer === square.piece.color) {
            return false;
          }
          return true;
        }
      } else if (!rowDiff) {
        if (colDiff > 0) {
          for (let i = 1; i < colDiff; i++) {
            if (board[+row][+col - i].piece) {
              return false;
            }
          }
          if (square.piece && activePlayer === square.piece.color) {
            return false;
          }
          return true;
        } else if (colDiff < 0) {
          for (let i = 1; i < -colDiff; i++) {
            if (board[+row][+col + i].piece) {
              return false;
            }
          }
          if (square.piece && activePlayer === square.piece.color) {
            return false;
          }
          return true;
        }
      }
    }

    // rook movement
    if (activePiece.piece.type === 'rook') {
      if (!colDiff) {
        if (rowDiff > 0) {
          for (let i = 1; i < rowDiff; i++) {
            if (board[+row - i][+col].piece) {
              return false;
            }
          }
          if (square.piece && activePlayer === square.piece.color) {
            return false;
          }
          return true;
        } else if (rowDiff < 0) {
          for (let i = 1; i < -rowDiff; i++) {
            if (board[+row + i][+col].piece) {
              return false;
            }
          }
          if (square.piece && activePlayer === square.piece.color) {
            return false;
          }
          return true;
        }
      } else if (!rowDiff) {
        if (colDiff > 0) {
          for (let i = 1; i < colDiff; i++) {
            if (board[+row][+col - i].piece) {
              return false;
            }
          }
          if (square.piece && activePlayer === square.piece.color) {
            return false;
          }
          return true;
        } else if (colDiff < 0) {
          for (let i = 1; i < -colDiff; i++) {
            if (board[+row][+col + i].piece) {
              return false;
            }
          }
          if (square.piece && activePlayer === square.piece.color) {
            return false;
          }
          return true;
        }
      }
    }

    // king movement
    if (activePiece.piece.type === 'king') {
      if (colDiff <= 1 && colDiff >= -1 && rowDiff <= 1 && rowDiff >= -1) {
        if (square.piece && square.piece.color === activePlayer) {
          return false;
        }
        return true;
      }
    }

    return false;
  };

  const handleClick = square => {
    if (!activePiece) {
      if (square.piece && square.piece.color === activePlayer) {
        setActivePiece(square);
      }
    } else {
      const copy = activePiece.piece;
      const copy2 = activePiece;

      if (checkLegal(square)) {
        if (!willCheck(square, copy, copy2) && !checkIsCheck(board)) {
          setBoard(prevBoard => {
            const [row, col] = square.square;
            const [prevRow, prevCol] = activePiece.square;
            prevBoard[row][col].piece = copy;
            prevBoard[prevRow][prevCol].piece = null;
            return prevBoard;
          });

          if (activePlayer === 'white') {
            setActivePlayer('black');
          } else {
            setActivePlayer('white');
          }
        } else {
          if (willStopCheck(square, copy, copy2)) {
            setBoard(prevBoard => {
              const [row, col] = square.square;
              const [prevRow, prevCol] = activePiece.square;
              prevBoard[prevRow][prevCol].piece = null;
              prevBoard[row][col].piece = copy;
              return prevBoard;
            });

            if (activePlayer === 'white') {
              setActivePlayer('black');
            } else {
              setActivePlayer('white');
            }
          }
        }
      }

      setActivePiece(null);
    }
  };

  return (
    <div className='board'>
      <h1>{activePlayer}</h1>
      {board.map(row => (
        <div className='row'>
          {row.map(square => (
            <div className='square' onClick={() => handleClick(square)}>
              {square.piece && <img className='piece' src={square.piece.svg} />}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default App;
