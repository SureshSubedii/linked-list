
// Swap adjacent nodes 


function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }


var swapPairs = function(head) {
    if(!head || !head.next) return head
    let dummy = new ListNode()
    dummy.next = head
    let prev = dummy
    while(prev.next && prev.next.next){
        let current = prev.next
        let next = prev.next.next

        current.next = next.next
        next.next = current
        prev.next = next 
         prev = current

    }
    return dummy.next

    
};
