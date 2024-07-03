const reverseList =(list)=>{
    let prev = null
    let current= list
        while(current){
            let next = current.next
             current.next = prev
             prev = current
             current = next
        }
        return prev

    }
    const isPalindrome = (head)=> {
        if (head.next == null) return true
        let fast = head
        let slow = head
    
        while(fast){
            fast = fast.next?.next
            slow = slow.next
            
        }
        let secondHalf = reverseList(slow) 
        while(secondHalf){
            if(secondHalf.val !=head.val) return false
            secondHalf = secondHalf.next
            head = head.next
        }
        return true
    
    
    }
