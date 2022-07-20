import Home from './components/Home';
import Board from './components/Board';

import { useGlobalContext } from './context';

import "./styles/style.css";

const App = () => {
    const { isPlaying } = useGlobalContext();
    return (
        <>
            {isPlaying ? <Board/> : <Home/>}
        </>
    )
}

export default App;