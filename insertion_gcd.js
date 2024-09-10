// Given the head of a linked list head, in which each node contains an integer value.
// Between every pair of adjacent nodes, insert a new node with a value equal to the greatest common divisor of them.
// Return the linked list after insertion.
// The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.

 
var insertGreatestCommonDivisors = function(head) {
    const findGcd = (first, second) => {
        let min = Math.min(first, second) / 2
        if( first % second === 0) return second
        if(second % first  === 0 ) return first
        let gcd = 1
        for(let i = 2; i <= min ; i ++){
            if(!(first % i) && !(second  % i)) gcd = i

        }
        return gcd
    }
    let current = head
    while(current.next){
        let next = current.next
        let gcd = findGcd(current.val, next.val)
        let newNode = new ListNode(gcd, next)
        current.next = newNode
        current = next
        
    }
    return head
    
};