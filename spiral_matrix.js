var spiralMatrix = function(m, n, head) {
    let matrix = new Array(m);
    for (let i = 0; i < m; i++) {
        matrix[i] = new Array(n).fill(-1);
    }
   
    let arrayFromLinkedList = [];
    let current = head;
    while (current !== null) {
        arrayFromLinkedList.push(current.val);
        current = current.next;
    }
    
    let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]; 
    let dirIndex = 0;
    let row = 0, col = 0;
    
    for (let index = 0; index < m * n; index++) {
        if (index < arrayFromLinkedList.length) {
            matrix[row][col] = arrayFromLinkedList[index];
        } 
     
        
       
        let nextRow = row + directions[dirIndex][0];
        let nextCol = col + directions[dirIndex][1];
        
        if ( nextRow >= m  || nextCol >= n || matrix[nextRow][nextCol] !== -1) {
            dirIndex = (dirIndex + 1) % 4;
            nextRow = row + directions[dirIndex][0];
            nextCol = col + directions[dirIndex][1];
        }
        
        row = nextRow;
        col = nextCol;
    }
    
    return matrix;
};
