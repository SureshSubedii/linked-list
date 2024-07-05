
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

//In O(1) space complexity

// var getDecimalValue = function(head) {
//     let result = 0;
//     let current = head;
    
//     while (current !== null) {
//         result = (result << 1) | current.val;
//         current = current.next;
//     }
    
//     return result;
// };