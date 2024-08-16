var isPalindrome = function(head) {
    if(!head || !head.next) return true
    let current = head
    let fast = current.next.next
    let slow = current
    while(fast){
        slow = slow.next
        fast = fast.next?.next || null
    }
    let secondHalf = reverse(slow.next)
    while(secondHalf){
        if(secondHalf.val !== current.val) return false
        secondHalf = secondHalf.next
        current = current.next

    }
    return true
    
};

const reverse = (list) => {
    let prev = null
    let current = list
    while(current){
        let next = current.next
        current.next = prev
        prev = current
        current = next
    }
    return prev
}