// return the node where the cycle started
const detectCycle = (head)=>{
    if(!head || !head.next) return null;
    let fast = head
    let slow = head
    let hasCycle = false
    while(fast && fast.next ){
        slow = slow.next
        fast = fast.next.next
        if(slow == fast){
            hasCycle = true
            break
        }
    }
    console.log(hasCycle)
    if(!hasCycle) return null

    slow = head
    while(slow !== fast){
        slow = slow.next
        fast = fast.next
    }
    return slow

}