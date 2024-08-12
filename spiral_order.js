
var spiralOrder = function(matrix) {
    let rowLength = matrix.length
    let colLength = matrix[0].length
    let row = 0
    let  col = 0
    let directions = [[0,1], [1,0], [0,-1], [-1,0]]
    let dirIndex = 0
    let result = []
    let traversed = []
    for(let i = 0; i < (rowLength * colLength) ; i++){
        result.push(matrix[row][col])
        traversed.push([row,col])


        let nextRow   = row +  directions[dirIndex][0]
        let nextCol  = col +  directions[dirIndex][1]
        let repeated = traversed.some(arr => arr.every((val, index) => val === [nextRow, nextCol][index]));


         if( nextRow >= rowLength || nextCol >= colLength || nextRow < 0 || nextCol < 0 || repeated ){
            dirIndex = (1 + dirIndex) % 4
            row += directions[dirIndex][0]
            col += directions[dirIndex][1]
          }else{
            row = nextRow
            col = nextCol

            }



    }
    return result

    
};



// Alternative 


var spiralOrder = function (matrix) {
    // Calculate the total number of rows and columns
    let rows = matrix.length;
    let cols = matrix[0].length;

    // Set up pointers to traverse the matrix
    let row = 0;
    let col = -1;

    // Set the initial direction to 1 for moving left to
    // right
    let direction = 1;

    // Create an array to store the elements in spiral
    // order
    const result = [];

    // Traverse the matrix in a spiral order
    while (rows > 0 && cols > 0) {
        // Move horizontally in one of two directions:
        //   1. Left to right (if direction == 1)
        //   2. Right to left (if direction == -1) Increment
        //      the col pointer to move horizontally
        for (let i = 0; i < cols; i++) {
            col += direction;
            result.push(matrix[row][col]);
        }
        rows--;

        // Move vertically in one of two directions:
        //   1. Top to bottom (if direction == 1)
        //   2. Bottom to top (if direction == -1) Increment
        //      the row pointer to move vertically
        for (let i = 0; i < rows; i++) {
            row += direction;
            result.push(matrix[row][col]);
        }
        cols--;

        // Flip the direction for the next traversal
        direction *= -1;
    }

    return result;
};