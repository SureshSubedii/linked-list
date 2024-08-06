
class ListNode{
    constructor(val = 0, next = null){
        this.val = val;
        this.next = next;
    }
}

const sortList = (list)=> {
    if(!list || !list.next) return list
    let slow = list
    let fast = list
    let prev = new ListNode(0, list)
    while(fast && fast.next){
        slow = slow.next
        fast = fast.next?.next || null
        prev = prev.next
    }
    prev.next = null

    let left = sortList(list)
    let right = sortList(slow)
    return merge(left, right)

}

const merge = (left, right)=> {
    let sorted = new ListNode(0)
    let current = sorted
    while(left && right){
        if(left.val < right.val){
            sorted.next = left
            left = left.next 

        }else{
            sorted.next = right
            right = right.next 

        }
        sorted = sorted.next

    }
    if(left) sorted.next = left
    if(right) sorted.next =  right
    return current.next

}

console.log(sortList({val:4, next: {val:1, next: {val: 3, next: {val: 2, next: null}}}}))