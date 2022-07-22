import { useGlobalContext, WinnerMark } from "../context";
import Modal from "./Modal";

const Board = () => {
    const {
        grid,
        count, 
        winState,
        gameOver, 
        markGrid,
        resetBoard,
        playerMark,
        currentMark,
    } = useGlobalContext();
    return (
        <main>
        {(gameOver || count === 9) ? (<Modal />) : (
            <section className="board">
            <div className="board__head">
                <div className="board__head--title">
                    <h2>X</h2>
                    <h2>O</h2>
                </div>
                <div className="board__head--turn">
                    <h4>{currentMark} Turn</h4>
                </div>
                <div className="board__head--btn">
                    <button onClick={resetBoard}>reset</button>
                </div>
            </div>
            <div className="board__box">
                {grid.map((g:WinnerMark[],r:number) => g.map((item:WinnerMark, c:number) => {
                    return (
                        <div key={c} onClick={()=>markGrid(r,c)}>
                            <h2>{item}</h2>
                        </div>
                    )
                }))}
            </div>
            <div className="board__stats">
                <div>
                    <h4>X ({playerMark === currentMark ? "you":"cpu"})</h4>
                    <h3>{winState.X}</h3>
                </div>
                <div>
                    <h4>ties</h4>
                    <h3>{winState.XO}</h3>
                </div>
                <div>
                    <h4>O ({playerMark !== currentMark ? "you":"cpu"})</h4>
                    <h3>{winState.O}</h3>
                </div>
            </div>
        </section>
        )}
        </main>
    )
}

export default Board;