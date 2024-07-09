
var rotateRight = function(head, k) {
    if( k === 0 || !head) return head
    let n = 1
    let tail = head
    while(tail.next){
        tail = tail.next
        n ++
    }
    tail.next= head
    k = k % n;
    let newTail = head
    for(let i = 0; i < n - k - 1; i++  ){
        newTail =  newTail.next
    }
let newHead = newTail.next
newTail.next = null
return newHead

    
};