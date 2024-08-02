function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}  


var oddEvenList = function(head) {
    let odd = new ListNode()
    let even =  new ListNode()
    let dummyOdd = odd
    let dummyEven = even
    let current = head
    let counter = 1 
    while(current){
        if(counter & 1 === 1){
        odd.next = current
        odd = odd.next
        even.next = null
        }
        else{
        even.next = current
        even = even.next
        }

        current = current.next
        counter ++

    }
    odd.next = dummyEven.next
return dummyOdd.next    
};



// Alternative

// var oddEvenList = function(head) {
//     let evenDummy = new ListNode()
//     let even = evenDummy
//     let dummy = new ListNode(0, head)
//     let current =  dummy.next
//     while(current && current.next){
//         let evenNode = current.next
//         current.next = evenNode.next

//         even.next = evenNode
//          even =  evenNode
//          current =  current.next 
//          dummy = dummy.next

//     }
//     even.next = null
//     if(!current) dummy.next = evenDummy.next
//     else current.next = evenDummy.next


//     return head
  
// };