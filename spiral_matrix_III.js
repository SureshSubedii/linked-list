var spiralMatrixIII = function(rows, cols, rStart, cStart) {
    let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]; 
    let output = [];
    let steps = 1;
    let directionIndex = 0;
    let row = rStart;
    let col = cStart;
    
        output.push([row, col]);
    
    while (output.length < rows * cols) {
        for (let i = 0; i < steps; i++) {
            row += directions[directionIndex][0];
            col += directions[directionIndex][1];
            
            if (row >= 0 && row < rows && col >= 0 && col < cols) {
                output.push([row, col]);
            }
        }
        
        directionIndex = (directionIndex + 1) % 4;
        
        if (directionIndex % 2 === 0) {
            steps++;
        }
    }
    
    return output;
};

spiralMatrixIII(5,6,1,4)