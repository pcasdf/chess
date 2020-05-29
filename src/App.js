import React, { useState, useEffect, useCallback } from 'react';

import './App.css';
import INITIAL_BOARD from './board';

import castleKings from './utilities/castleKings';
import checkPawns from './utilities/checkPawns';
import checkKnights from './utilities/checkKnights';
import checkDiagonals from './utilities/checkDiagonals';
import checkLines from './utilities/checkLines';
import checkLegal from './movement/checkLegal';

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

  const checkIsCheck = useCallback(
    data => {
      if (
        checkDiagonals(activePlayer, data) ||
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

  const willCheck = square => {
    const copy = activePiece.piece;

    let prevBoard = JSON.parse(JSON.stringify(board));
    const [row, col] = square.square;
    const [prevRow, prevCol] = activePiece.square;
    prevBoard[prevRow][prevCol].piece = null;
    prevBoard[row][col].piece = copy;

    if (checkIsCheck(prevBoard)) {
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

  const handleMove = (square, copy) => {
    let prevBoard = JSON.parse(JSON.stringify(board));
    const [row, col] = square.square;
    const [prevRow, prevCol] = activePiece.square;
    prevBoard[prevRow][prevCol].piece = null;
    prevBoard[row][col].piece = copy;

    return prevBoard;
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

  const handleClick = square => {
    if (!activePiece) {
      if (square.piece && square.piece.color === activePlayer) {
        setActivePiece(square);
      }
    } else {
      const copy = activePiece.piece;
      const copy2 = activePiece;

      if (checkLegal(square, activePiece, board, activePlayer)) {
        if (!willCheck(square) && !checkIsCheck(board)) {
          const prevBoard = handleMove(square, copy);
          castleKings(activePiece, square, prevBoard);
          handleUpdate(prevBoard);
        } else {
          if (willStopCheck(square, copy, copy2)) {
            const prevBoard = handleMove(square, copy);
            castleKings(activePiece, square, prevBoard);
            handleUpdate(prevBoard);
          }
        }
      }
      setActivePiece(null);
    }
  };

  useEffect(() => {
    if (checkIsCheck(board)) {
      setIsCheck(true);
    } else {
      setIsCheck(false);
    }
  }, [board, checkIsCheck]);

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
