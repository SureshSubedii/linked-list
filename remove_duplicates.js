 function ListNode(val= 0, next = null) {
     this.val = val
     this.next =next
 }

var deleteDuplicates = function(head) {
    if(!head || !head.next) return head

    let dummy = new ListNode()
    dummy.next = head
    let current = head
    let prev = dummy
    while(current && current.next){
        if(current.val == current.next.val){
            let duplicateVal = current.val
            while(current && current.val == duplicateVal){
                current = current.next
            }
            prev.next = current
        }else{
            prev = current
            console.log(prev)
            current = current.next
        }
    }
    return dummy.next
    
};