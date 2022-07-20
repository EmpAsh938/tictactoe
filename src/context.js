import { createContext, useContext, useEffect, useState } from "react";
import { checkWin } from "./utils/checkWin";
import { markComputer } from "./utils/markComputer";

const AppContext = createContext();


const AppProvider = ({children}) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [winState, setWinState] = useState({
        "X":0,
        "O":0,
        "XO":0,
    });
    const [count, setCount] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [playerMark, setPlayerMark] = useState('X');
    const [currentMark, setCurrentMark] = useState('X');
    const [currentWinner, setCurrentWinner] = useState('');
    const [gameMode, setGameMode] = useState([
        {
            type:'pvp',
            isActive:false
        },
        {
            type:'pvc',
            isActive:false,
        }
    ]);
    const [grid, setGrid] = useState([
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ])

    const togglePlayerMark = (param) => setPlayerMark(param);

    const startPlaying = () => setIsPlaying(true);

    const exitPlaying = () => {
        setGameMode([
            {
                type:'pvp',
                isActive:false
            },
            {
                type:'pvc',
                isActive:false,
            }
        ]);
        setWinState({
            "X":0,
            "O":0,
            "XO":0,
        });
        setCount(0);
        setGameOver(false);
        setIsPlaying(false);
    }

    const toggleGameMode = (choice) => {
        setGameMode(gameMode.map(item => {
            if(item.type === choice) item.isActive = true;
            return item;
        }))
    }

    const markGrid = (row,col) => {
        if(!grid[row][col]) {
            setGrid(grid.map((gd, r) => gd.map((item, c) => {
                if(r===row&&c===col){
                    item = currentMark;
                }
                return item;
            })))
            toggleCurrentMark();
        }
    }

    const toggleCurrentMark = () => {
        setCurrentMark(currentMark==='O'?'X':'O');
    }

    const resetBoard = () => {
        startPlaying();
        setCount(0);
        setGameOver(false);
        setGrid([
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ])
        setCurrentMark('X');
    }

    const playComputer = () => {
        if(playerMark !== currentMark && !gameOver) {
            // mark the empty box
            let newGrid = markComputer(grid);
            if(newGrid !== -1) {
                markGrid(newGrid[0],newGrid[1]);
                // change the current mark;
                toggleCurrentMark();
            }
        }
    }

    const handleWinState = (winner) => {
        setCurrentWinner(winner);
        setWinState(prev => {
            if(winner === "") {
                return {...prev, "XO":prev.XO+1}
            } else if(winner === "X") {
                return {...prev, "X":prev.X+1}
            } else if(winner === "O") {
                return {...prev, "O":prev.O+1}
            } else return prev;
        })
    }

    const countFilledBox = () => {
        let tot = 0;
        for(let i=0;i<grid.length;i++){
            for(let j=0;j<grid.length;j++){
                if(grid[i][j] !== "") tot++;
            }
        }
        return tot;
    }

    
    
    useEffect(() => {
        setCount(countFilledBox());
        let res = checkWin(grid);
        if(res || count === 8) {
            setGameOver(true);
            handleWinState(res);
            return;
        }

        if(gameMode[1].isActive && !gameOver) {
            playComputer();
        }
        // eslint-disable-next-line
    }, [gameMode,grid])
    

    return (
        <AppContext.Provider value={{
            grid,
            count,
            gameOver,
            winState,
            isPlaying,
            playerMark,
            currentMark,
            currentWinner,
            markGrid,
            resetBoard,
            exitPlaying,
            startPlaying,
            toggleGameMode,
            togglePlayerMark
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => useContext(AppContext);


export default AppProvider;