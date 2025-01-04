export default function GameBoard({onSelectSquare, board}) {



    // const [gameBoard, setGameBoard] = useState(initialBoard)

    // function handleSelect(rowIndex, colIndex) {
    //     setGameBoard((prevGameBoard) => {
    //         const upGameBoard = [...prevGameBoard.map(innerGame => [...innerGame])];
    //         upGameBoard[rowIndex] [colIndex] = activeSelect;
    //         return upGameBoard;
    //     })

    //     onSelectSquare();
    // }

    return (
        <ol id="game-board">
            {board.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={() => onSelectSquare(rowIndex, colIndex)} 
                                disabled={playerSymbol !== null}> 
                                    {playerSymbol} 
                                </button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}