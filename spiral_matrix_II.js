var generateMatrix = function(n) {
    let matrix = Array.from({ length: n }, () => new Array(n));
    let alreadyTraversed = []
    
    
        let row = 0
        let col = 0
        let dirIndex = 0
        let directions = [[0,1], [1,0], [0,-1], [-1,0]]
        for(let i = 1; i <= n*n; i++){
            alreadyTraversed.push([row,col])
            matrix[row][col] = i
    
            let nextRow = row + directions[dirIndex][0]
            let nextCol = col + directions[dirIndex][1]
            let repeated = alreadyTraversed.some((arr) => arr.every((val,index)=> val === [nextRow,nextCol][index]))
            if( nextRow >= n || nextCol >= n || nextCol < 0 || nextRow < 0 || repeated ){
                dirIndex = (dirIndex + 1) % 4
                nextRow = row + directions[dirIndex][0]
                nextCol = col + directions[dirIndex][1]
            }
            row = nextRow
            col = nextCol
        }
        return matrix
    };