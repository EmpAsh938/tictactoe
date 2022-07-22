import { WinnerMark } from '../context';

export const markComputer = (grid:WinnerMark[][]) => {
    let emptyGrid:number[][] = [];
    let row:number = grid.length;
    let col:number = grid[0].length;
    for(let i:number=0;i<row;i++){
        for(let j:number=0;j<col;j++){
            if(grid[i][j] === '') {
                let newBox:number[] = [i,j];
                emptyGrid.push(newBox);
            }
        }
    }
    if(emptyGrid.length === 0) return [];
    return emptyGrid[Math.floor(Math.random() * emptyGrid.length)];
}