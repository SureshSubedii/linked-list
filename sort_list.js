var sortList = function(head) {
    if (!head || !head.next) {
        return head;
    }
    
    let mid = findMiddle(head);
    let left = head;
    let right = mid.next;
    mid.next = null;
    
    left = sortList(left);
    right = sortList(right);
    
    return merge(left, right);
};

function findMiddle(head) {
    let slow = head;
    let fast = head;
    let prev = null;
    
    while (fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    
    return prev;
}

function merge(left, right) {
    let dummy = new ListNode(0);
    let current = dummy;
    
    while (left && right) {
        if (left.val < right.val) {
            current.next = left;
            left = left.next;
        } else {
            current.next = right;
            right = right.next;
        }
        current = current.next;
    }
    
    current.next = left || right;
    
    return dummy.next;
};
