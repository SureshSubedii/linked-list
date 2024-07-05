
var getDecimalValue = function(head) {
    let current = head
    let numbers = []
    while(current){
        numbers.push(current.val)
        current = current.next
    }
    let length = numbers.length 
   let decimal =  numbers.reduce((acc, curr) => {
        length --
        return acc + (curr * (2**length))}
        ,0 )
        return decimal
    
};