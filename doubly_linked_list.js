class Node{
    constructor(val){
        this.data = val
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null
        this.tail = null 
    }
    isEmpty(){
        if(!this.head) return true
    }

    addItem(val){
        let newNode = new Node(val)
        if(this.isEmpty()){
            this.head = newNode
            this.tail = newNode
            return
        }
        newNode.prev = this.tail
        this.tail.next = newNode
        this.tail= newNode
    }
    prepend(val){
        let newNode = new Node(val)

        if(!this.head){
            this.head= newNode
            this.tail= newNode
            return

        }
        newNode.next = this.head
        this.head.prev = newNode
        this.head = newNode


    }
    showData(){
        if(this.head){
            let curr =  this.head
            while(curr){
                console.log(curr.data)
                curr = curr.next
            }
        }

    }
}

let list = new  DoublyLinkedList()
list.addItem(10)
list.addItem(20)
list.addItem(40)
list.prepend(60)


list.showData()
console.log(list)

