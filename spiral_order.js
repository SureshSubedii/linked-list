/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let output = []
    let alreadyTraversed = []
    let dirIndex = 0
    let row = 0
    let col = 0
    let rowLength = matrix.length
    let colLength = matrix[0].length
    let directions = [ [0,1], [1,0],[0,-1],[-1,0]]

    for(let i = 0; i  < rowLength * colLength ; i++){
        output.push(matrix[row][col])
        alreadyTraversed.push([row, col])
        let nextRow = row + directions[dirIndex][0]
        let nextCol = col + directions[dirIndex][1]
        let repeated = alreadyTraversed.some(arr => arr.every((val, index) => val === [nextRow, nextCol][index]));


        if( nextRow >= rowLength  || nextCol >= colLength || nextRow < 0 || nextCol < 0 || repeated){
            dirIndex = (dirIndex + 1) % 4
              nextRow = row + directions[dirIndex][0]
              nextCol = col + directions[dirIndex][1]
        }

        row = nextRow
        col = nextCol
    }
    return output
    
};