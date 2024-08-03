
class MyHashSet {
    constructor() {
        this.set = [];
        this.size = 1000000;


    }
    hash(key) {
        return key % this.size;
    }

    add(key) {
        let index = this.hash(key);
        if (!this.set[index]) {
            this.set[index] = new Node(key);

        } else {
            let currentNode = this.set[index];
            while (currentNode) {
                if (currentNode.val === key) return;

                if (!currentNode.next) break;

                currentNode = currentNode.next;
            }
            currentNode.next = new Node(key);
        }


    }
  
    remove(key) {
        let index = this.hash(key);
        let current = this.set[index];
        let prev = null;
        while (current) {
            if (current.val === key) {
                if (!prev) {
                    this.set[index] = current.next;

                } else {
                    prev.next = current.next;
                }
                return;
            }
            prev = current;
            current = current.next;


        }

    }
    
    contains(key) {
        let index = this.hash(key);
        let current = this.set[index];

        while (current) {
            if (current.val === key) return true;
            current = current.next;
        }

        return false;

    }
}
class Node {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = null;
    }
}




