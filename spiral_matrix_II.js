const generateMatrix = (n) =>{
    let directions= [[0,1],[1,0], [0,-1], [-1,0]]
    let dirIndex = 0
    let result = new Array(n).fill(-1).map(()=> new Array(n).fill(-1))
    let row = 0
    let col = 0
    for(let i = 1; i <= n * n ; i ++){
        result[row][col] = i
        let nextRow = row + directions[dirIndex][0]
        let nextCol = col + directions[dirIndex][1]
        if( nextCol >= n || nextRow >= n || nextCol < 0 || nextRow < 0 || result[nextRow]?.[nextCol] !== -1){
            dirIndex = (1 + dirIndex) % 4
            nextRow =  row + directions[dirIndex][0]
            nextCol = col + directions[dirIndex][1]
        }
        row = nextRow
        col = nextCol
    }
    return result
}