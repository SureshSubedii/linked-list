/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
    let counter = 1
    let left = head
    let right = head
    let curr = head
    while(curr !== null){
        if(counter < k){
            left = left.next
        }
        if( counter > k ){
            right = right.next
        }
        curr = curr.next
        counter ++
    }
    let temp = left.val
    left.val = right.val
    right.val = temp
    return head

    
};