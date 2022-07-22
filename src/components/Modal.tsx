import { useGlobalContext } from "../context";

const Modal = () => {
  const { currentWinner, resetBoard, exitPlaying } = useGlobalContext();
  const handleClick = () => {
    resetBoard();
    exitPlaying();
  }
  return (
    <aside className="modal">
        <div className="modal__container">
            <h3>
              {currentWinner ? currentWinner+" wins" : "Draw"}
            </h3>
            <button onClick={resetBoard}>Replay</button>
            <button onClick={handleClick}>Exit</button>
        </div>
    </aside>
  )
}

export default Modal