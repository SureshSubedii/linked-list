
var spiralMatrixIII = function(rows, cols, rStart, cStart) {
    let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]; 
    let dirIndex = 0
    let row = rStart
    let col = cStart
    let steps = 1
    let matrix =  []
    matrix.push([row, col])
    while( matrix.length < rows * cols){
        for(let i = 0;  i < steps; i++){
            row += directions[dirIndex][0]
            col += directions[dirIndex][1]
            if(row >= 0 && row < rows && col >= 0 && col < cols ){
                matrix.push([row, col])
            }

        }
        dirIndex = (dirIndex + 1) % 4
        if(!(dirIndex & 1)) steps++
    }

    return matrix

    
};