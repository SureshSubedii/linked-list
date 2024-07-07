 function _Node(val, next, random) {
  this.val = val;
  this.next = next;
  this.random = random;};


var copyRandomList = function(head, visited = new Map()) {
    if (!head) {
      return null;
    }
  
    if (visited.has(head)) {
      return visited.get(head);
    }
  
    const newNode = new _Node(head.val, null, null);
  
    visited.set(head, newNode);
  
    newNode.random = copyRandomList(head.random, visited);
  
    newNode.next = copyRandomList(head.next, visited);
  
    return newNode;
  };
  