var spiralMatrix = function(m, n, head) {
    let list = []
    let result = new Array(m).fill(0).map(() => new Array(n).fill(-1))
    let directions = [ [0,1], [1,0], [0, -1], [-1,0]]
    let dirIndex = 0
    let row = col = 0
    while(head){
        list.push(head.val)
        head = head.next
    }
    for(let i = 0; i < list.length; i ++){
        result[row][col] = list[i]
        let nextRow = row + directions[dirIndex][0]
        let nextCol = col + directions[dirIndex][1]
        if(nextRow < 0 || nextCol < 0 || nextRow >= m || nextCol >= n || result[nextRow][nextCol] !== -1){
            dirIndex = (dirIndex + 1) % 4
            nextRow = row + directions[dirIndex][0]
            nextCol = col + directions[dirIndex][1]

        }
        row = nextRow
        col = nextCol

    }
    return result
    
};