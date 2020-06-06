import React, { useState, useEffect, useCallback } from 'react';

import './App.css';
import INITIAL_BOARD from './board';

import castleKings from './utilities/castleKings';
import checkPawns from './utilities/checkPawns';
import checkKnights from './utilities/checkKnights';
import checkDiagonals from './utilities/checkDiagonals';
import checkLines from './utilities/checkLines';
import checkLegal from './movement/checkLegal';
import findKings from './utilities/findKings';

const App = () => {
  const [activePlayer, setActivePlayer] = useState('white');
  const [isCheck, setIsCheck] = useState(false);
  const [checkmate, setCheckmate] = useState(false);
  const [activePiece, setActivePiece] = useState(null);
  const [whiteTime, setWhiteTime] = useState(300);
  const [blackTime, setBlackTime] = useState(300);
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
        checkLines(activePlayer, data, location) ||
        checkKnights(activePlayer, data, location) ||
        checkPawns(activePlayer, data, location)
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

  const setLocations = useCallback(
    data => {
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

      return { row, col, opponent };
    },
    [activePlayer]
  );

  const findThreats = (activePlayer, data, location) => {
    let opponent;
    let [row, col] = location.square;
    row = +row;
    col = +col;

    if (activePlayer === 'white') {
      opponent = 'black';
    } else {
      opponent = 'white';
    }

    let threats = [];
    for (let i = 1; row - i >= 0; i++) {
      if (col + i <= 7) {
        let diagonal = data[row - i][col + i];
        if (diagonal && diagonal.piece && diagonal.piece.color === opponent) {
          threats.push(diagonal);
        }
      }
    }

    return threats;
  };

  const blockAboveRight = useCallback(
    data => {
      let { row, col, opponent } = setLocations(data);

      let threat;
      for (let i = 1; row - i >= 0; i++) {
        if (col + i <= 7) {
          let diagonal = data[row - i][col + i];
          if (diagonal.piece) {
            threat = diagonal;
          }
        }
      }
      let endRow;
      if (threat) {
        [endRow] = threat.square;
        endRow = +endRow;
      }

      for (let i = 1; i < row - endRow; i++) {
        let location = data[row - i][col + i];
        if (activePlayer === 'white') {
          let pawn = data[row - i + 1][col + i];
          if (
            pawn.piece &&
            pawn.piece.type === 'pawn' &&
            pawn.piece.color === 'white'
          ) {
            return false;
          }
        } else {
          let pawn = data[row - i - 1][col + i];
          if (
            pawn.piece &&
            pawn.piece.type === 'pawn' &&
            pawn.piece.color === 'black'
          ) {
            return false;
          }
        }
        if (
          checkDiagonals(opponent, data, location) ||
          checkKnights(opponent, data, location) ||
          checkLines(opponent, data, location)
        ) {
          return false;
        }
      }
      return true;
    },
    [activePlayer, setLocations]
  );

  const findBlockers = useCallback(
    data => {
      if (blockAboveRight(data)) {
        return true;
      }
      return false;
    },
    [blockAboveRight]
  );

  const checkMate = useCallback(
    (activePlayer, data) => {
      const { whiteKing, blackKing } = findKings(data);
      let row, col;
      if (activePlayer === 'white') {
        [row, col] = whiteKing.square;
      } else {
        [row, col] = blackKing.square;
      }
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

      let location, opponent;
      if (activePlayer === 'white') {
        location = whiteKing;
        opponent = 'black';
      } else {
        location = blackKing;
        opponent = 'white';
      }

      let threats = findThreats(activePlayer, data, location);
      if (possibleMoves.find(item => item === true)) {
        return false;
      } else if (threats.length > 1) {
        return true;
      } else if (threats.length > 0) {
        if (
          checkDiagonals(opponent, data, threats[0]) ||
          checkKnights(opponent, data, threats[0]) ||
          checkLines(opponent, data, threats[0])
        ) {
          return false;
        }
        if (
          checkDiagonals(activePlayer, data, location) ||
          checkKnights(activePlayer, data, location) ||
          checkLines(activePlayer, data, location)
        ) {
          return findBlockers(data, location);
        }
      }
      return false;
    },
    [board, willStopCheck, findBlockers]
  );

  useEffect(() => {
    if (checkMate(activePlayer, board)) {
      setCheckmate(true);
    } else {
      if (checkIsCheck(board)) {
        setIsCheck(true);
      } else {
        setIsCheck(false);
      }
    }
  }, [board, checkIsCheck, activePlayer, checkMate]);

  useEffect(() => {
    if (activePlayer === 'white') {
      const timer = setTimeout(() => {
        setWhiteTime(prev => prev - 1);
      }, 1000);
      console.log(whiteTime);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setBlackTime(prev => prev - 1);
      }, 1000);
      console.log(blackTime);
      return () => clearTimeout(timer);
    }
  }, [whiteTime, blackTime, activePlayer]);

  const convertTime = player => {
    const minutes = Math.floor(player / 60);
    const secs = player % 60;
    const seconds = secs === 0 ? '00' : secs < 10 ? `0${secs}` : secs;
    return `${minutes}:${seconds}`;
  };

  return (
    <div className='board'>
      <h1>
        {activePlayer}
        {isCheck && ', check'}
        {checkmate && ', Checkmate! ' + activePlayer + ' wins'}
      </h1>
      <div className='timer'>
        <span>{convertTime(whiteTime)}</span>
        <span>{convertTime(blackTime)}</span>
      </div>
      <div className='game'>
        {board.map(row => (
          <div key={row[0].square} className='row'>
            {row.map(square => (
              <div
                key={square.square}
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
      <div className='buttons'>
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default App;
