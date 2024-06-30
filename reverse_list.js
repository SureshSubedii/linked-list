
var reverseList = function(head) {
    let current = head
    let prev = null
    while(current){
        let next = current.next
        current.next = prev
        prev = current
        current = next
    }
    return prev
    
};


// Alternative but less efficient

// var reverseList = function(head) {
//     if(!head || !head.next) return head
//     let prev = null
//     let current = reverseList(head.next)
//     console.log(current, head, "||")
//     head.next.next  = head
   
//     head.next = prev
//     console.log( "|",current, head)
   
//     return current
       
//    };