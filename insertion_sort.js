var insertionSortList = function (head) {
    let current = head
    let list = []
    while (current) {
        list.push(current.val)
        current = current.next

    }
    for (let i = 1; i < list.length; i++) {
        let key = list[i]
        let j = i - 1
        while (j >= 0 && list[j] > key) {
            list[j + 1] = list[j]
            j--
        }
        list[j + 1] = key
    }
    current = new ListNode(list[0])
    let result = current
    for (let i = 1; i < list.length; i++) {
        current.next = new ListNode(list[i])
        current = current.next
    }
    return result

};
// Optimized
var insertionSortList = function (head) {
    let current = head
    let sorted = null
    while(current){
        let next = current.next
        sorted = insert(sorted, current)
        current = next
    }
    return sorted


};
const insert = (sorted, node) =>{
    if(!sorted || sorted.val > node.val){
        node.next = sorted
        return node
    }
    let current = sorted

    while(current.next && current.next.val < node.val){
        current = current.next
    }

    node.next = current.next
    current.next = node
    return sorted
}