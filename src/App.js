import React, { useState, useEffect, useCallback } from 'react';

import './App.css';
import INITIAL_BOARD from './board';

import castleKings from './utilities/castleKings';
import checkPawns from './utilities/checkPawns';
import checkKnights from './utilities/checkKnights';
import checkDiagonals, {
  checkAboveRight,
  checkAboveLeft,
  checkBelowRight,
  checkBelowLeft
} from './utilities/checkDiagonals';
import checkLines from './utilities/checkLines';
import checkLegal from './movement/checkLegal';
import findKings from './utilities/findKings';

const App = () => {
  const [activePlayer, setActivePlayer] = useState('white');
  const [isCheck, setIsCheck] = useState(false);
  const [activePiece, setActivePiece] = useState(null);
  const [board, setBoard] = useState(INITIAL_BOARD);
  const [index, setIndex] = useState(0);
  const [history, setHistory] = useState([
    {
      boardState: JSON.parse(JSON.stringify(INITIAL_BOARD)),
      isCheckState: false,
      activePlayerState: activePlayer
    }
  ]);

  const simulateBoard = (target, activePiece, board) => {
    let data = JSON.parse(JSON.stringify(board));
    const [row, col] = target.square;
    const [prevRow, prevCol] = activePiece.square;
    data[prevRow][prevCol].piece = null;
    data[row][col].piece = activePiece.piece;

    return data;
  };

  const checkIsCheck = useCallback(
    data => {
      const { whiteKing, blackKing } = findKings(data);
      let location;

      if (activePlayer === 'white') {
        location = whiteKing;
      } else {
        location = blackKing;
      }

      if (
        checkDiagonals(activePlayer, data, location) ||
        checkLines(activePlayer, data) ||
        checkKnights(activePlayer, data) ||
        checkPawns(activePlayer, data)
      ) {
        return true;
      }

      return false;
    },
    [activePlayer]
  );

  const willStopCheck = useCallback(
    (target, activePiece, board) => {
      const data = simulateBoard(target, activePiece, board);

      if (checkIsCheck(data)) {
        return false;
      }

      return true;
    },
    [checkIsCheck]
  );

  const willCheck = (target, activePiece, board) => {
    const data = simulateBoard(target, activePiece, board);

    if (checkIsCheck(data)) {
      return true;
    }
    return false;
  };

  const togglePlayer = () => {
    let activePlayerState;
    if (activePlayer === 'white') {
      activePlayerState = 'black';
      setActivePlayer('black');
    } else {
      activePlayerState = 'white';
      setActivePlayer('white');
    }
    return activePlayerState;
  };

  const handleUpdate = prevBoard => {
    let activePlayerState = togglePlayer();
    setBoard(prevBoard);
    setHistory([
      ...history.slice(0, index + 1),
      {
        boardState: prevBoard,
        isCheckState: isCheck,
        activePlayerState
      }
    ]);
    setIndex(index => index + 1);
  };

  const handlePrevious = () => {
    if (index > 0) {
      const { boardState, isCheckState, activePlayerState } = history[
        index - 1
      ];
      setIndex(index => index - 1);
      setBoard(JSON.parse(JSON.stringify(boardState)));
      setIsCheck(isCheckState);
      setActivePlayer(activePlayerState);
    }
  };

  const handleNext = () => {
    if (index < history.length - 1) {
      const { boardState, isCheckState, activePlayerState } = history[
        index + 1
      ];
      setIndex(index => index + 1);
      setBoard(JSON.parse(JSON.stringify(boardState)));
      setIsCheck(isCheckState);
      setActivePlayer(activePlayerState);
    }
  };

  const confirmUpdate = (target, activePiece, board) => {
    const prevBoard = simulateBoard(target, activePiece, board);
    castleKings(activePiece, target, prevBoard);
    handleUpdate(prevBoard);
  };

  const handleClick = target => {
    if (!activePiece) {
      if (target.piece && target.piece.color === activePlayer) {
        setActivePiece(target);
      }
    } else {
      if (checkLegal(target, activePiece, board, activePlayer)) {
        if (!willCheck(target, activePiece, board) && !checkIsCheck(board)) {
          confirmUpdate(target, activePiece, board);
        } else {
          if (willStopCheck(target, activePiece, board)) {
            confirmUpdate(target, activePiece, board);
          }
        }
      }
      setActivePiece(null);
    }
  };

  const checkMate = useCallback(
    (activePlayer, data) => {
      const { whiteKing, blackKing } = findKings(data);
      let [row, col] = whiteKing.square;
      row = +row;
      col = +col;

      let possibleMoves = [];

      if (data[row - 1]) {
        possibleMoves.push(
          data[row - 1][col - 1],
          data[row - 1][col],
          data[row - 1][col + 1]
        );
      }

      if (data[row + 1]) {
        possibleMoves.push(
          data[row + 1][col + 1],
          data[row + 1][col],
          data[row + 1][col - 1]
        );
      }

      possibleMoves.push(data[row][col + 1], data[row][col - 1]);

      possibleMoves = possibleMoves.filter(square => square && !square.piece);
      possibleMoves = possibleMoves.map(square =>
        willStopCheck(square, whiteKing, board)
      );

      // can the king move anywhere

      let location;
      if (activePlayer === 'white') {
        location = whiteKing;
      } else {
        location = blackKing;
      }

      if (possibleMoves.find(item => item)) {
        return true;
      } else {
        if (checkDiagonals(activePlayer, data, location)) {
          let threat;
          if (checkAboveRight(activePlayer, data, location)) {
            // find a way to block the threat
            // can the path be blocked
            for (let i = 1; row - i >= 0; i++) {
              if (col + i <= 7) {
                let diagonal = data[row - i][col + i];
                if (diagonal.piece) {
                  threat = diagonal;
                }
              }
            }

            let [endRow, endCol] = threat.square;
            endRow = +endRow;
            endCol = +endCol;
            for (let i = 1; i < row - endRow; i++) {
              // are there pieces that can move here

              // check for pawns
              if (activePlayer === 'white') {
                let pawn = data[row - i + 1][col + i];
                if (
                  pawn.piece &&
                  pawn.piece.type === 'pawn' &&
                  pawn.piece.color === 'white'
                ) {
                  console.log('found a pawn');
                }
              }

              // check for bishops
              // refactor check for diagonals first

              // check for knights
              // check for rooks
              // check for queen
            }
          }
          if (checkAboveLeft(activePlayer, data, location)) {
            console.log('checkAboveLeft');
          }
          if (checkBelowRight(activePlayer, data, location)) {
            console.log('checkBelowRight');
          }
          if (checkBelowLeft(activePlayer, data, location)) {
            console.log('checkBelowLeft');
          }
        }
      }

      return false;
    },
    [board, willStopCheck]
  );

  useEffect(() => {
    if (checkIsCheck(board)) {
      setIsCheck(true);
    } else {
      setIsCheck(false);
    }
    checkMate(activePlayer, board);
  }, [board, checkIsCheck, activePlayer, checkMate]);

  return (
    <div className='board'>
      <h1>
        {activePlayer}
        {isCheck && ', check'}
      </h1>
      <div className='buttons'>
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
      <div className='game'>
        {board.map(row => (
          <div className='row'>
            {row.map(square => (
              <div
                style={{ background: `${square.bg}` }}
                className='square'
                onClick={() => handleClick(square)}
              >
                {square.piece && (
                  <img alt='piece' className='piece' src={square.piece.svg} />
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
