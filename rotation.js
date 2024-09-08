
// Given the head of a linked list, rotate the list to the right by k places.



var rotateRight = function(head, k) {
    if( k === 0 || !head) return head

let current = head
let listLength = 1
while(current.next){
    listLength ++
    current = current.next
}
current.next = head
let n = k % listLength 
let tail = head

for(let i = 0; i < listLength - n - 1; i ++){
    tail = tail.next

}
let newHead = tail.next
tail.next = null
return newHead


};