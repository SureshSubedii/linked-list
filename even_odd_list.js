/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    let odd = new ListNode()
    let even =  new ListNode()
    let dummyOdd = odd
    let dummyEven = even
    let current = head
    let counter = 1 
    while(current){
        if(counter & 1 === 1){
        odd.next = current
        odd = odd.next
        even.next = null
        }
        else{
        even.next = current
        even = even.next
        }

        current = current.next
        counter ++

    }
    odd.next = dummyEven.next
return dummyOdd.next    
};