// Twin Sum of a Linked List

const reverseList = (list)=>{
    let prev = null
    while(list){
        let next = list.next
        list.next = prev
        prev = list
        list = next

    }
    return prev
}

const pairSum = (head) => {
    let fast = head
    let slow = head
    let max = 0
    while(fast){
        fast = fast.next?.next
        slow = slow.next
    }
    let secondHalf = reverseList(slow)
    console.log(secondHalf)
    while(secondHalf){
        let sum = head.val + secondHalf.val
        if(sum> max) max = sum
        secondHalf = secondHalf.next
        head = head.next

    }
    return max
};