import React, { useState } from 'react';

import './App.css';

import INITIAL_BOARD from './board';

const App = () => {
  const [activePlayer, setActivePlayer] = useState('white');
  const [whitePieces, setWhitePieces] = useState();
  const [blackPieces, setBlackPieces] = useState();
  const [activePiece, setActivePiece] = useState(null);
  const [board, setBoard] = useState(INITIAL_BOARD);

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
