import { WinnerMark } from "../context";
export function checkWin(grid:WinnerMark[][]):WinnerMark
 | ''{
    let n = grid.length;
    let rows:WinnerMark
     | '' = '';
    let cols:WinnerMark
     | '' = '';
    let diagonal1:WinnerMark
     | '' = grid[0][0];
    let diagonal2:WinnerMark
     | '' = grid[0][2];
    for(let i:number=0;i<n;i++){
        rows = grid[i][0];
        cols = grid[0][i];
        for(let j=0;j<n;j++){
            // rows
            if(grid[i][0] !== grid[i][j] || grid[i][j] === '') rows = '';
            // cols
            if(grid[0][i] !== grid[j][i] || grid[j][i] === '') cols = '';
            // diagonal1
            if(diagonal1 !== grid[i][i] || grid[i][i] === '') diagonal1 = '';
            // // diagonal2
            if(diagonal2 !== grid[i][n-i-1] || grid[i][n-i-1] === '') diagonal2 = '';
        }
        if(rows) return rows;
        if(cols) return cols;
    }
    if(diagonal1) return diagonal1;
    if(diagonal2) return diagonal2;
    return '';
}

/*
    check for each rows
    check for each cols
    check for both diagonals

*/