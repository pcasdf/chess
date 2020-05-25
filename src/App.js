import React, { useState } from 'react';

import './App.css';

import INITIAL_BOARD from './board';

const App = () => {
  const [activePlayer, setActivePlayer] = useState('white');
  const [isCheck, setIsCheck] = useState(false);
  const [whitePieces, setWhitePieces] = useState();
  const [blackPieces, setBlackPieces] = useState();
  const [whiteKing, setWhiteKing] = useState('74');
  const [blackKing, setBlackKing] = useState('04');
  const [activePiece, setActivePiece] = useState(null);
  const [board, setBoard] = useState(INITIAL_BOARD);

  const checkCheck = nextSquare => {
    let [row, col] = nextSquare;

    // prevent moving into check
    // check corner squares
    let leftCorner, rightCorner, bottomLeftCorner, bottomRightCorner;
    if (board[+row - 1][+col - 1]) {
      leftCorner = board[+row - 1][+col - 1];
    }
    if (board[+row - 1][+col + 1]) {
      rightCorner = board[+row - 1][+col + 1];
    }
    if (board[+row + 1][+col - 1]) {
      bottomLeftCorner = board[+row + 1][+col - 1];
    }
    if (board[+row + 1][+col + 1]) {
      bottomRightCorner = board[+row + 1][+col + 1];
    }
    if (leftCorner && leftCorner.piece) {
      if (
        (leftCorner.piece.type === 'pawn' ||
          leftCorner.piece.type === 'bishop' ||
          leftCorner.piece.type === 'queen' ||
          leftCorner.piece.type === 'king') &&
        leftCorner.piece.color === 'black'
      ) {
        return true;
      }
    }
    if (rightCorner && rightCorner.piece) {
      if (
        (rightCorner.piece.type === 'pawn' ||
          rightCorner.piece.type === 'bishop' ||
          rightCorner.piece.type === 'queen' ||
          rightCorner.piece.type === 'king') &&
        rightCorner.piece.color === 'black'
      ) {
        return true;
      }
    }
    if (bottomLeftCorner && bottomLeftCorner.piece) {
      if (
        (bottomLeftCorner.piece.type === 'bishop' ||
          bottomLeftCorner.piece.type === 'queen' ||
          bottomLeftCorner.piece.type === 'king') &&
        bottomLeftCorner.piece.color === 'black'
      ) {
        return true;
      }
    }
    if (bottomRightCorner && bottomRightCorner.piece) {
      if (
        (bottomRightCorner.piece.type === 'bishop' ||
          bottomRightCorner.piece.type === 'queen' ||
          bottomRightCorner.piece.type === 'king') &&
        bottomRightCorner.piece.color === 'black'
      ) {
        return true;
      }
    }

    // check in front
    const checkAbove = () => {
      for (let i = 1; i <= row; i++) {
        let front = board[+row - i][+col];
        if (front.piece) {
          if (front.piece.color === 'white') {
            if (front.piece.type !== 'king') {
              return false;
            }
          } else if (
            front.piece.type === 'pawn' ||
            front.piece.type === 'knight' ||
            front.piece.type === 'bishop'
          ) {
            return false;
          } else if (
            front.piece.type === 'queen' ||
            front.piece.type === 'rook' ||
            front.piece.type === 'king'
          ) {
            return true;
          }
        }
      }
      return false;
    };
    const checkBelow = () => {
      for (let i = 1; i <= 7 - row; i++) {
        let behind = board[+row + i][+col];
        if (behind.piece) {
          if (behind.piece.color === 'white') {
            if (behind.piece.type !== 'king') {
              return false;
            }
          } else if (
            behind.piece.type === 'pawn' ||
            behind.piece.type === 'knight' ||
            behind.piece.type === 'bishop'
          ) {
            return false;
          } else if (
            behind.piece.type === 'queen' ||
            behind.piece.type === 'rook' ||
            behind.piece.type === 'king'
          ) {
            return true;
          }
        }
      }
      return false;
    };

    const checkLeft = () => {
      for (let i = 1; i <= col; i++) {
        let left = board[+row][+col - i];
        if (left.piece) {
          if (left.piece.color === 'white') {
            if (left.piece.type !== 'king') {
              return false;
            }
          } else if (
            left.piece.type === 'pawn' ||
            left.piece.type === 'knight' ||
            left.piece.type === 'bishop'
          ) {
            return false;
          } else if (
            left.piece.type === 'queen' ||
            left.piece.type === 'rook' ||
            left.piece.type === 'king'
          ) {
            return true;
          }
        }
      }
      return false;
    };

    const checkRight = () => {
      for (let i = 1; i <= 7 - col; i++) {
        let right = board[+row][+col + i];
        if (right.piece) {
          if (right.piece.color === 'white') {
            if (right.piece.type !== 'king') {
              return false;
            }
          } else if (
            right.piece.type === 'pawn' ||
            right.piece.type === 'knight' ||
            right.piece.type === 'bishop'
          ) {
            return false;
          } else if (
            right.piece.type === 'queen' ||
            right.piece.type === 'rook' ||
            right.piece.type === 'king'
          ) {
            return true;
          }
        }
      }
      return false;
    };

    const checkAboveRight = () => {
      for (let i = 1; i < row; i++) {
        let square = board[+row - i][+col + i];
        if (square) {
          if (square.piece) {
            if (
              square.piece.color === 'white' &&
              square.piece.type !== 'king'
            ) {
              return false;
            }
            if (square.piece.color === 'black') {
              if (
                square.piece.type === 'queen' ||
                square.piece.type === 'bishop'
              ) {
                return true;
              }
            }
          }
        }
      }
    };

    const checkAboveLeft = () => {
      for (let i = 1; i < row; i++) {
        let square = board[+row - i][+col - i];
        if (square) {
          if (square.piece) {
            if (
              square.piece.color === 'white' &&
              square.piece.type !== 'king'
            ) {
              return false;
            }
            if (square.piece.color === 'black') {
              if (
                square.piece.type === 'queen' ||
                square.piece.type === 'bishop'
              ) {
                return true;
              }
            }
          }
        }
      }
    };

    const checkBelowLeft = () => {
      for (let i = 1; i < 8 - row; i++) {
        let square = board[+row + i][+col - i];
        if (square) {
          if (square.piece) {
            if (
              square.piece.color === 'white' &&
              square.piece.type !== 'king'
            ) {
              return false;
            }
            if (square.piece.color === 'black') {
              if (
                square.piece.type === 'queen' ||
                square.piece.type === 'bishop'
              ) {
                return true;
              }
            }
          }
        }
      }
    };

    const checkBelowRight = () => {
      for (let i = 1; i < 8 - row; i++) {
        let square = board[+row + i][+col + i];
        if (square) {
          if (square.piece) {
            if (
              square.piece.color === 'white' &&
              square.piece.type !== 'king'
            ) {
              return false;
            }
            if (square.piece.color === 'black') {
              if (
                square.piece.type === 'queen' ||
                square.piece.type === 'bishop'
              ) {
                return true;
              }
            }
          }
        }
      }
    };

    if (
      checkAbove() ||
      checkBelow() ||
      checkLeft() ||
      checkRight() ||
      checkAboveRight() ||
      checkAboveLeft() ||
      checkBelowLeft() ||
      checkBelowRight()
    ) {
      return true;
    }

    // check if checked

    return false;
  };

  const checkLegal = square => {
    let [row, col] = activePiece.square;
    let [nextRow, nextCol] = square.square;
    let rowDiff = row - nextRow;
    let colDiff = col - nextCol;

    if (!isCheck) {
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
          if (!checkCheck(square.square)) {
            if (activePiece.piece.color === 'white') {
              setWhiteKing(square.square);
            } else {
              setBlackKing(square.square);
            }
            return true;
          }
        }
      }

      setActivePiece(null);
      return false;
    }
  };

  const handleClick = square => {
    if (!activePiece) {
      if (square.piece && square.piece.color === activePlayer) {
        setActivePiece(square);
      }
    } else {
      const copy = activePiece.piece;

      if (checkLegal(square)) {
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
