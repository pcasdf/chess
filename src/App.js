import React, { useState } from 'react';

import './App.css';

import INITIAL_BOARD from './board';

const App = () => {
  const [activePlayer, setActivePlayer] = useState('white');
  const [isCheck, setIsCheck] = useState(false);
  const [whiteKing, setWhiteKing] = useState('74');
  const [blackKing, setBlackKing] = useState('04');
  const [activePiece, setActivePiece] = useState(null);
  const [board, setBoard] = useState(INITIAL_BOARD);
  const [prevBoard, setPrevBoard] = useState(null);

  const checkIsCheck = state => {
    // checking if king is in check
    if (activePlayer === 'white') {
      let [row, col] = whiteKing;
      row = +row;
      col = +col;

      const checkAboveRight = () => {
        for (let i = 1; row - i >= 0; i++) {
          if (col + i <= 7) {
            let diagonal = state[row - i][col + i];
            if (diagonal.piece) {
              if (
                diagonal.piece.color === 'white' &&
                diagonal.piece.type !== 'king'
              ) {
                return false;
              }
              if (diagonal.piece.color === 'black') {
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
                diagonal.piece.color === 'white'
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
            let diagonal = state[row + i][col - i];
            if (diagonal.piece) {
              if (
                diagonal.piece.color === 'white' &&
                diagonal.piece.type !== 'king'
              ) {
                return false;
              }
              if (diagonal.piece.color === 'black') {
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
                diagonal.piece.color === 'white'
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
            let diagonal = state[row + i][col + i];
            if (diagonal.piece) {
              if (
                diagonal.piece.color === 'white' &&
                diagonal.piece.type !== 'king'
              ) {
                return false;
              }
              if (diagonal.piece.color === 'black') {
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
                diagonal.piece.color === 'white'
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
            let diagonal = state[row - i][col - i];
            if (diagonal.piece) {
              if (
                diagonal.piece.color === 'white' &&
                diagonal.piece.type !== 'king'
              ) {
                return false;
              }
              if (diagonal.piece.color === 'black') {
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
                diagonal.piece.color === 'white'
              ) {
                return true;
              }
            }
          }
        }
      };

      const checkRight = () => {
        for (let i = 1; col + i <= 7; i++) {
          let right = state[row][col + i];
          if (right.piece) {
            if (right.piece.color === 'white' && right.piece.type !== 'king') {
              return false;
            }
            if (right.piece.color === 'black') {
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
            if (right.piece.type === 'king' && right.piece.color === 'white') {
              return true;
            }
          }
        }
      };

      const checkLeft = () => {
        for (let i = 1; col - i >= 0; i++) {
          let left = state[row][col - i];
          if (left.piece) {
            if (left.piece.color === 'white' && left.piece.type !== 'king') {
              return false;
            }
            if (left.piece.color === 'black') {
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
            if (left.piece.type === 'king' && left.piece.color === 'white') {
              return true;
            }
          }
        }
      };

      const checkAbove = () => {
        for (let i = 1; row - i >= 0; i++) {
          let above = state[row - i][col];
          if (above.piece) {
            if (above.piece.color === 'white' && above.piece.type !== 'king') {
              return false;
            }
            if (above.piece.color === 'black') {
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
            if (above.piece.type === 'king' && above.piece.color === 'white') {
              return true;
            }
          }
        }
      };

      const checkBelow = () => {
        for (let i = 1; row + i <= 7; i++) {
          let below = state[row + i][col];
          if (below.piece) {
            if (below.piece.color === 'white' && below.piece.type !== 'king') {
              return false;
            }
            if (below.piece.color === 'black') {
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
            if (below.piece.type === 'king' && below.piece.color === 'white') {
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
        checkBelow()
      ) {
        return true;
      }

      return false;
    }
  };

  const willStopCheck = (square, copy, copy2) => {
    let state = JSON.parse(JSON.stringify(board));

    const [row, col] = square.square;
    state[row][col].piece = copy;

    if (checkIsCheck(state)) {
      return false;
    }

    return true;
  };

  const willCheck = (square, piece, square2) => {
    let [row, col] = square.square;
    row = +row;
    col = +col;

    // white putting own king into check
    if (piece.type !== 'king' && piece.color === 'white') {
      let [row, col] = square2.square;
      row = +row;
      col = +col;

      const checkAboveRight = () => {
        for (let i = 1; row - i >= 0; i++) {
          if (col + i <= 7) {
            let diagonal = board[row - i][col + i];
            if (diagonal.piece) {
              if (
                diagonal.piece.color === 'white' &&
                diagonal.piece.type !== 'king'
              ) {
                return false;
              }
              if (diagonal.piece.color === 'black') {
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
                diagonal.piece.color === 'white'
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
            let diagonal = board[row + i][col - i];
            if (diagonal.piece) {
              if (
                diagonal.piece.color === 'white' &&
                diagonal.piece.type !== 'king'
              ) {
                return false;
              }
              if (diagonal.piece.color === 'black') {
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
                diagonal.piece.color === 'white'
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
            let diagonal = board[row + i][col + i];
            if (diagonal.piece) {
              if (
                diagonal.piece.color === 'white' &&
                diagonal.piece.type !== 'king'
              ) {
                return false;
              }
              if (diagonal.piece.color === 'black') {
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
                diagonal.piece.color === 'white'
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
            let diagonal = board[row - i][col - i];
            if (diagonal.piece) {
              if (
                diagonal.piece.color === 'white' &&
                diagonal.piece.type !== 'king'
              ) {
                return false;
              }
              if (diagonal.piece.color === 'black') {
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
                diagonal.piece.color === 'white'
              ) {
                return true;
              }
            }
          }
        }
      };

      const checkRight = () => {
        for (let i = 1; col + i <= 7; i++) {
          let right = board[row][col + i];
          if (right.piece) {
            if (right.piece.color === 'white' && right.piece.type !== 'king') {
              return false;
            }
            if (right.piece.color === 'black') {
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
            if (right.piece.type === 'king' && right.piece.color === 'white') {
              return true;
            }
          }
        }
      };

      const checkLeft = () => {
        for (let i = 1; col - i >= 0; i++) {
          let left = board[row][col - i];
          if (left.piece) {
            if (left.piece.color === 'white' && left.piece.type !== 'king') {
              return false;
            }
            if (left.piece.color === 'black') {
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
            if (left.piece.type === 'king' && left.piece.color === 'white') {
              return true;
            }
          }
        }
      };

      const checkAbove = () => {
        for (let i = 1; row - i >= 0; i++) {
          let above = board[row - i][col];
          if (above.piece) {
            if (above.piece.color === 'white' && above.piece.type !== 'king') {
              return false;
            }
            if (above.piece.color === 'black') {
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
            if (above.piece.type === 'king' && above.piece.color === 'white') {
              return true;
            }
          }
        }
      };

      const checkBelow = () => {
        for (let i = 1; row + i <= 7; i++) {
          let below = board[row + i][col];
          if (below.piece) {
            if (below.piece.color === 'white' && below.piece.type !== 'king') {
              return false;
            }
            if (below.piece.color === 'black') {
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
            if (below.piece.type === 'king' && below.piece.color === 'white') {
              return true;
            }
          }
        }
      };

      if (
        (checkAboveRight() && checkBelowLeft()) ||
        (checkAboveLeft() && checkBelowRight()) ||
        (checkRight() && checkLeft()) ||
        (checkAbove() && checkBelow())
      ) {
        return true;
      }

      return false;
    }

    // black putting own king into check
    if (piece.type !== 'king' && piece.color === 'black') {
      let [row, col] = square2.square;
      row = +row;
      col = +col;

      const checkAboveRight = () => {
        for (let i = 1; row - i >= 0; i++) {
          if (col + i <= 7) {
            let diagonal = board[row - i][col + i];
            if (diagonal.piece) {
              if (
                diagonal.piece.color === 'black' &&
                diagonal.piece.type !== 'king'
              ) {
                return false;
              }
              if (diagonal.piece.color === 'white') {
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
                diagonal.piece.color === 'black'
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
            let diagonal = board[row + i][col - i];
            if (diagonal.piece) {
              if (
                diagonal.piece.color === 'black' &&
                diagonal.piece.type !== 'king'
              ) {
                return false;
              }
              if (diagonal.piece.color === 'white') {
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
                diagonal.piece.color === 'black'
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
            let diagonal = board[row + i][col + i];
            if (diagonal.piece) {
              if (
                diagonal.piece.color === 'black' &&
                diagonal.piece.type !== 'king'
              ) {
                return false;
              }
              if (diagonal.piece.color === 'white') {
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
                diagonal.piece.color === 'black'
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
            let diagonal = board[row - i][col - i];
            if (diagonal.piece) {
              if (
                diagonal.piece.color === 'black' &&
                diagonal.piece.type !== 'king'
              ) {
                return false;
              }
              if (diagonal.piece.color === 'white') {
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
                diagonal.piece.color === 'black'
              ) {
                return true;
              }
            }
          }
        }
      };

      const checkRight = () => {
        for (let i = 1; col + i <= 7; i++) {
          let right = board[row][col + i];
          if (right.piece) {
            if (right.piece.color === 'black' && right.piece.type !== 'king') {
              return false;
            }
            if (right.piece.color === 'white') {
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
            if (right.piece.type === 'king' && right.piece.color === 'black') {
              return true;
            }
          }
        }
      };

      const checkLeft = () => {
        for (let i = 1; col - i >= 0; i++) {
          let left = board[row][col - i];
          if (left.piece) {
            if (left.piece.color === 'black' && left.piece.type !== 'king') {
              return false;
            }
            if (left.piece.color === 'white') {
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
            if (left.piece.type === 'king' && left.piece.color === 'black') {
              return true;
            }
          }
        }
      };

      const checkAbove = () => {
        for (let i = 1; row - i >= 0; i++) {
          let above = board[row - i][col];
          if (above.piece) {
            if (above.piece.color === 'black' && above.piece.type !== 'king') {
              return false;
            }
            if (above.piece.color === 'black') {
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
            if (above.piece.type === 'king' && above.piece.color === 'black') {
              return true;
            }
          }
        }
      };

      const checkBelow = () => {
        for (let i = 1; row + i <= 7; i++) {
          let below = board[row + i][col];
          if (below.piece) {
            if (below.piece.color === 'black' && below.piece.type !== 'king') {
              return false;
            }
            if (below.piece.color === 'white') {
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
            if (below.piece.type === 'king' && below.piece.color === 'black') {
              return true;
            }
          }
        }
      };

      if (
        (checkAboveRight() && checkBelowLeft()) ||
        (checkAboveLeft() && checkBelowRight()) ||
        (checkRight() && checkLeft()) ||
        (checkAbove() && checkBelow())
      ) {
        console.log('check');
        return true;
      }

      return false;
    }

    // pawn checks
    if (piece.type === 'pawn' && piece.color === 'white') {
      let leftCorner = board[row - 1][col - 1];
      let rightCorner = board[row - 1][col + 1];
      if (leftCorner) {
        if (leftCorner.piece && leftCorner.piece.color === 'black') {
          if (leftCorner.piece.type === 'king') {
            setIsCheck(true);

            return false;
          }
        }
      }
      if (rightCorner) {
        if (rightCorner.piece && rightCorner.piece.color === 'black') {
          if (rightCorner.piece.type === 'king') {
            setIsCheck(true);

            return false;
          }
        }
      }
    }

    if (piece.type === 'pawn' && piece.color === 'black') {
      let leftCorner = board[row - 1][col - 1];
      let rightCorner = board[row - 1][col + 1];
      if (leftCorner) {
        if (leftCorner.piece && leftCorner.piece.color === 'white') {
          if (leftCorner.piece.type === 'king') {
            setIsCheck(true);

            return false;
          }
        }
      }
      if (rightCorner) {
        if (rightCorner.piece && rightCorner.piece.color === 'white') {
          if (rightCorner.piece.type === 'king') {
            setIsCheck(true);

            return false;
          }
        }
      }
    }

    // white king rules
    if (piece.type === 'king' && piece.color === 'white') {
      // check for enemy pawns
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

      // check for enemy queens, bishops, kings
      // check above + right
      const checkAboveRight = () => {
        for (let i = 1; row - i >= 0; i++) {
          if (col + i <= 7) {
            let diagonal = board[row - i][col + i];
            if (diagonal.piece) {
              if (
                diagonal.piece.color === 'white' &&
                diagonal.piece.type !== 'king'
              ) {
                return false;
              }
              if (diagonal.piece.color === 'black') {
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
            }
          }
        }
      };

      // check above + left
      const checkAboveLeft = () => {
        for (let i = 1; row - i >= 0; i++) {
          if (col - i >= 0) {
            let diagonal = board[row - i][col - i];
            if (diagonal.piece) {
              if (
                diagonal.piece.color === 'white' &&
                diagonal.piece.type !== 'king'
              ) {
                return false;
              }
              if (diagonal.piece.color === 'black') {
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
            }
          }
        }
      };

      // check below + right
      const checkBelowRight = () => {
        for (let i = 1; row + i <= 7; i++) {
          if (col + i <= 7) {
            let diagonal = board[row + i][col + i];
            if (diagonal.piece) {
              if (
                diagonal.piece.color === 'white' &&
                diagonal.piece.type !== 'king'
              ) {
                return false;
              }
              if (diagonal.piece.color === 'black') {
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
            }
          }
        }
      };

      // check below + left
      const checkBelowLeft = () => {
        for (let i = 1; row + i <= 7; i++) {
          if (col - i >= 0) {
            let diagonal = board[row + i][col - i];
            if (diagonal.piece) {
              if (
                diagonal.piece.color === 'white' &&
                diagonal.piece.type !== 'king'
              ) {
                return false;
              }
              if (diagonal.piece.color === 'black') {
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
            }
          }
        }
      };

      const checkRight = () => {
        for (let i = 1; col + i <= 7; i++) {
          let right = board[row][col + i];
          if (right.piece) {
            if (right.piece.color === 'white' && right.piece.type !== 'king') {
              return false;
            }
            if (right.piece.color === 'black') {
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
          }
        }
      };

      const checkLeft = () => {
        for (let i = 1; col - i >= 0; i++) {
          let left = board[row][col - i];
          if (left.piece) {
            if (left.piece.color === 'white' && left.piece.type !== 'king') {
              return false;
            }
            if (left.piece.color === 'black') {
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
          }
        }
      };

      const checkAbove = () => {
        for (let i = 1; row - i >= 0; i++) {
          let above = board[row - i][col];
          if (above.piece) {
            if (above.piece.color === 'white' && above.piece.type !== 'king') {
              return false;
            }
            if (above.piece.color === 'black') {
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
          }
        }
      };

      const checkBelow = () => {
        for (let i = 1; row + i <= 7; i++) {
          let below = board[row + i][col];
          if (below.piece) {
            if (below.piece.color === 'white' && below.piece.type !== 'king') {
              return false;
            }
            if (below.piece.color === 'black') {
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
          }
        }
      };

      if (
        checkAboveRight() ||
        checkAboveLeft() ||
        checkBelowRight() ||
        checkBelowLeft() ||
        checkRight() ||
        checkLeft() ||
        checkAbove() ||
        checkBelow()
      ) {
        return true;
      }
    }

    // black king rules
    if (piece.type === 'king' && piece.color === 'black') {
      // check for enemy pawns
      let leftCorner = board[row + 1][col - 1];
      let rightCorner = board[row + 1][col + 1];
      if (leftCorner) {
        if (leftCorner.piece && leftCorner.piece.color === 'white') {
          if (leftCorner.piece.type === 'pawn') {
            return true;
          }
        }
      }
      if (rightCorner) {
        if (rightCorner.piece && rightCorner.piece.color === 'white') {
          if (rightCorner.piece.type === 'pawn') {
            return true;
          }
        }
      }
      // check for enemy queens, bishops, kings
      // check above + right
      const checkAboveRight = () => {
        for (let i = 1; row - i >= 0; i++) {
          if (col + i <= 7) {
            let diagonal = board[row - i][col + i];
            if (diagonal.piece) {
              if (
                diagonal.piece.color === 'black' &&
                diagonal.piece.type !== 'king'
              ) {
                return false;
              }
              if (diagonal.piece.color === 'white') {
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
            }
          }
        }
      };

      // check above + left
      const checkAboveLeft = () => {
        for (let i = 1; row - i >= 0; i++) {
          if (col - i >= 0) {
            let diagonal = board[row - i][col - i];
            if (diagonal.piece) {
              if (
                diagonal.piece.color === 'black' &&
                diagonal.piece.type !== 'king'
              ) {
                return false;
              }
              if (diagonal.piece.color === 'white') {
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
            }
          }
        }
      };

      // check below + right
      const checkBelowRight = () => {
        for (let i = 1; row + i <= 7; i++) {
          if (col + i <= 7) {
            let diagonal = board[row + i][col + i];
            if (diagonal.piece) {
              if (
                diagonal.piece.color === 'black' &&
                diagonal.piece.type !== 'king'
              ) {
                return false;
              }
              if (diagonal.piece.color === 'white') {
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
            }
          }
        }
      };

      // check below + left
      const checkBelowLeft = () => {
        for (let i = 1; row + i <= 7; i++) {
          if (col - i >= 0) {
            let diagonal = board[row + i][col - i];
            if (diagonal.piece) {
              if (
                diagonal.piece.color === 'black' &&
                diagonal.piece.type !== 'king'
              ) {
                return false;
              }
              if (diagonal.piece.color === 'white') {
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
            }
          }
        }
      };

      const checkRight = () => {
        for (let i = 1; col + i <= 7; i++) {
          let right = board[row][col + i];
          if (right.piece) {
            if (right.piece.color === 'black' && right.piece.type !== 'king') {
              return false;
            }
            if (right.piece.color === 'white') {
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
          }
        }
      };

      const checkLeft = () => {
        for (let i = 1; col - i >= 0; i++) {
          let left = board[row][col - i];
          if (left.piece) {
            if (left.piece.color === 'black' && left.piece.type !== 'king') {
              return false;
            }
            if (left.piece.color === 'white') {
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
          }
        }
      };

      const checkAbove = () => {
        for (let i = 1; row - i >= 0; i++) {
          let above = board[row - i][col];
          if (above.piece) {
            if (above.piece.color === 'black' && above.piece.type !== 'king') {
              return false;
            }
            if (above.piece.color === 'white') {
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
          }
        }
      };

      const checkBelow = () => {
        for (let i = 1; row + i <= 7; i++) {
          let below = board[row + i][col];
          if (below.piece) {
            if (below.piece.color === 'black' && below.piece.type !== 'king') {
              return false;
            }
            if (below.piece.color === 'white') {
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
          }
        }
      };

      if (
        checkAboveRight() ||
        checkAboveLeft() ||
        checkBelowRight() ||
        checkBelowLeft() ||
        checkRight() ||
        checkLeft() ||
        checkAbove() ||
        checkBelow()
      ) {
        return true;
      }
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

    const piece = activePiece.piece;
    if (activePiece.piece.type === 'king') {
      if (colDiff <= 1 && colDiff >= -1 && rowDiff <= 1 && rowDiff >= -1) {
        if (square.piece && square.piece.color === activePlayer) {
          return false;
        }
        if (activePiece.piece.color === 'white') {
          setWhiteKing(square.square);
        } else {
          setBlackKing(square.square);
        }
        return true;
      }
    }

    setActivePiece(null);
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
        }
      }
      if (checkIsCheck(board)) {
        if (willStopCheck(square, copy, copy2)) {
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
              {square.piece ? (
                <img className='piece' src={square.piece.svg} />
              ) : (
                ''
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default App;
