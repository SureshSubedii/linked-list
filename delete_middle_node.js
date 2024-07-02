
// Delete the middle node 
// Middle node = Math.floor(n/2)
var deleteMiddle = function(head) {
    if(!head.next) return null

    let fast = head.next?.next || null
    let slow = head.next
    let prev = head

    while(fast && fast.next){
        fast = fast.next.next
        slow = slow.next
        prev = prev.next
    }
    if(slow.next){
        slow.val = slow.next.val 
        slow.next = slow.next.next 
    }else{
    prev.next  = null
    }
   
    return head
    
};