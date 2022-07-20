import { useGlobalContext } from '../context';

const Home = () => {
    const { 
        playerMark, 
        startPlaying, 
        toggleGameMode,
        togglePlayerMark 
    } = useGlobalContext();
    const handleNewGame = (ch) => {
        startPlaying();
        toggleGameMode(ch);
    }
    return (
        <main>
        <section className="home">
            <div className="home__head">
                <h3>X</h3>
                <h3>O</h3>
            </div>
            <div className="home__mark">
                <h3>pick player's mark</h3>
                <div>
                    <h3 className={playerMark === 'X' ? "home__mark--area active" : "home__mark--area"} onClick={()=>togglePlayerMark("X")}>X</h3>
                    <h3 className={playerMark === 'O' ? "home__mark--area active" : "home__mark--area"} onClick={()=>togglePlayerMark("O")}>O</h3>
                </div>
                <h3>remember: x goes first</h3>
            </div>
            <div className="home__btn">
                <button onClick={() => handleNewGame('pvc')}>New Game(vs cpu)</button>
                <button onClick={() => handleNewGame('pvp')}>new game(vs player)</button>
            </div>
        </section>
        </main>
        
    )
}

export default Home;