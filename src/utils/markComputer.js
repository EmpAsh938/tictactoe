

export const markComputer = (grid) => {
    let emptyGrid = [];
    let row = grid.length;
    let col = grid[0].length;
    for(let i=0;i<row;i++){
        for(let j=0;j<col;j++){
            if(grid[i][j] === '') {
                let newBox = [i,j];
                emptyGrid.push(newBox);
            }
        }
    }
    if(emptyGrid.length === 0) return -1;
    return emptyGrid[Math.floor(Math.random() * emptyGrid.length)];
}