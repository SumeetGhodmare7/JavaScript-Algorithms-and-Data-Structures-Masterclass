class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val){
        var newNode = new Node(val)
        if(this.size === 0){
            this.first = newNode
            this.last = newNode
        }
        /*if(this.size === 1){
            this.first.next = newNode
            this.last = newNode
        }*/
        else{
            //var temp = this.last
            this.last.next = newNode
            this.last = newNode
        }
        this.size++
        return this.size
    }
    dequeue(){
        var temp =  this.first
        if(this.size === 0){
            return null
        }
        if(this.size ===1)
        {
            this.first = null
            this.last = null
        }
        else{
            this.first = this.first.next 
        }
        this.size--
        return temp.value
    }
}


var list = new Queue()


list.enqueue("HELLO")  
list.enqueue("GOODBYE") 
list.enqueue("!") 
list.enqueue("<3")
list.enqueue(":)") 
