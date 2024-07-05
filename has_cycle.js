
var hasCycle = function(head) {
    if(!head) return false
    let fast = head.next?.next || null
    let slow = head.next
     while(fast ){
        if(slow == fast){
            return true
             }
        slow = slow.next
        fast = fast.next?.next || null
     
     }
        return false

    
};