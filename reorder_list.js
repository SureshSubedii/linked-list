var reorderList = function(head) {
    let dummy  = new ListNode()
    dummy.next = head
    prev = dummy
    let slow = head
    let fast = head

    while(fast && fast.next){
        slow = slow.next
        fast = fast.next.next
        prev = prev.next
    }
    prev.next = null
    let left = dummy.next
    let right = reverse(slow)
    while(left){
        let next = left.next 
        let rNext = right.next
        left.next = right
        if(!next)  right.next = rNext
        else right.next = next
   
        left = next
        right = rNext
     
    }


};

function reverse(list){
    let prev = null
    let curr = list
    while(curr){
        let next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    return prev

}