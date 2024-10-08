 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }

var partition = function(head, x) {
    let smaller = new ListNode()
    let dummySmall = smaller
    let greater = new ListNode()
    let dummyGreat = greater
    let current = head

    while(current){
        if(current.val < x){
            smaller.next = current
            smaller = smaller.next
        }
        if(current.val >= x){
            greater.next = current
            greater =  greater.next
        }
        current = current.next
        }
        greater.next = null
        smaller.next = dummyGreat.next
        return dummySmall.next


    
};
