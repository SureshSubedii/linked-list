/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    if (!head.next || (left == 1 && right == 1)) return head
    let dummy = new ListNode()
    dummy.next = head
    let current = dummy.next
    let counter = 1
    let prevPoint
    let leftPoint;
    let rightPoint;

    while(current){
        if(  counter == left - 1 || left == 1)  prevPoint = left == 1? dummy : current
        if(left == counter) leftPoint = current
        if(right == counter) rightPoint = current
        current = current.next
        counter ++

    }
    let prev = rightPoint.next
    let temp =  rightPoint.next
    while(leftPoint){
        if(leftPoint == temp ){
            break
            
        } 
        let next = leftPoint.next
        leftPoint.next = prev
        prev = leftPoint
        leftPoint = next

    }
    prevPoint.next = prev
    return dummy.next
    
};
// One pass method 

// var reverseBetween = function(head, left, right) {
//     if (!head) return null;

//     let dummy = new ListNode();
//     dummy.next = head;
//     let prev = dummy;
//     let current = head;

//     for (let i = 1; i < left; i++) {
//         prev = current;
//         current = current.next;
//     }

//     for (let i = 0; i < right - left; i++) {
//         let temp = prev.next;  
//         prev.next = current.next;
//         current.next = current.next.next;
//         prev.next.next = temp;


//     }

//     return dummy.next;
// };

