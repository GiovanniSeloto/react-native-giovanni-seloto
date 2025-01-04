import Player from "./Components/Player"
import GameBoard from "./Components/GameBoard"
import { useState } from "react"
import Log from "./Components/Log"
import { WINNING_COMBINATIONS } from "./Components/Winning-Combination"
import GameOver from "./game-over"

const PLAYERS = {
  X: 'Player 1',
  O: 'Player 2',
}

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveWinner(gameBoard, players) {
  let winner

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column]
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column]
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column]

    if (firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = players[firstSquareSymbol];
    }
  }
  return winner;
}

function deriveGameBoard(gameTurns) {
  let gameBoard = [...INITIAL_GAME_BOARD.map(array => [...array])]

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player
  }
  return gameBoard
}

function App() {

  const [players, setPlayers] = useState(PLAYERS)

  function ActivePlayerTurns(gameTurns) {
    let currentPlayer = 'X'

    if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
      currentPlayer = 'O'
    }
    return currentPlayer
  }

  const [gameTurns, setGameturns] = useState([])
  // const [activePlayer, setActivePlayer] = useState('X')
  const activePlayer = ActivePlayerTurns(gameTurns)

  const gameBoard = deriveGameBoard(gameTurns)
  const winner = deriveWinner(gameBoard, players)
  const hasDraw = gameTurns.length === 9 && !winner;

  function handleRestart() {
    setGameturns([]);
  }

  function handlePlayerName(symbol, newName) {
    setPlayers(prevPlayer => {
      return {
        ...prevPlayer,
        [symbol]: newName
      }
    })
  }

  function handleSelectSquare(rowIndex, colIndex) {
    // setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X')
    setGameturns((prevTurns) => {
      const currentPlayer = ActivePlayerTurns(prevTurns);

      const upDateTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns
      ]

      return upDateTurns;
    })
  }

  return (
    <main >
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName={PLAYERS.X}
            symbol="X"
            isActive={activePlayer === 'X'}
            onChangeName={handlePlayerName}
          />
          <Player initialName={PLAYERS.O} 
            symbol="O"
            isActive={activePlayer === 'O'}
            onChangeName={handlePlayerName}
          />
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart} />}
        <GameBoard onSelectSquare={handleSelectSquare}
          board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App