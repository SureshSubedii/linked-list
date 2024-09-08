// Given the head of a singly linked list and an integer k, split the linked list into k consecutive linked list parts.
// The length of each part should be as equal as possible: no two parts should have a size differing by more than one. This may lead to some parts being null.
// The parts should be in the order of occurrence in the input list, and parts occurring earlier should always have a size greater than or equal to parts occurring later.
// Return an array of the k parts.


var splitListToParts = function(head, k) {
    let result = []
    let current = head
    let list = head
    let listLength = 0

    while(current){
        listLength ++
        current = current.next
    }

    if(listLength < k){
        while(list){
            let next = list.next
            list.next = null
            result.push(list) 
            list = next
        }
        for(let i = 0; i < k - listLength; i ++){
            result.push(null)
        }

    }else{
        let remainder = listLength % k
        let quot = Math.floor(listLength / k)
        let count = 0
          while(list){
            count ++
            let next = list.next

            if (count === quot && remainder){
            next = list.next.next
            list.next.next = null
            result.push(head) 
            head = next
            count = 0
            remainder --
            }
            else if(count === quot){
            next = list.next
            list.next = null
            result.push(head) 
            head = next
            count = 0



            }
            list = next
        }
 
    }
    return result

    
};