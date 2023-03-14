class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift(){
        if(!this.head) return undefined;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return currentHead;
    }
    unshift(val){
        var newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
    get(index){
        if(index < 0 || index >= this.length) return null;
        var counter = 0;
        var current = this.head;
        while(counter !== index){
            current = current.next;
            counter++;
        }
        return current;
    }
    set(index, val){
        var foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return false;
    }
    insert(index, val)
    {
        if(index<0 || index>this.length){
            return false;
        }
        else if(index===this.length){
            this.push(val)
        }
        else if(index===0){
            this.unshift(val)
        }
        else{
            var newNode = new Node(val);
            var preNode=get(index-1)
            var temp = preNode.next
            preNode.next = newNode;
            newNode.next = temp;
            
        }
        this.length++
        return true; 
    }
    remove(index)
    {
        if(index<0 || index>this.length){
            return undefined;
        }
        else if(index===this.length-1){
            this.pop(val)
        }
        else if(index===0){
            this.shift(val)
        }
        else{
            var preNode = this.get(index-1)
            var removed = preNode.next
            preNode.next = removed.next
        }
        this.length--
        return removed; 
    }
    reverse(){
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        var next;
        var prev = null;
        for(let i = 0; i<this.length; i++){
            next  = node.next
            node.next = prev;
            prev = node
            node = next
        }
        return this
    }
    print(){
        var arr =[]
        var current = this.head 
        while(current){
            arr.push(current.val)
            current = current.next
        }
        console.log(arr)
    }
}

var list = new SinglyLinkedList()

list.push("HELLO")  
list.push("GOODBYE") 
list.push("!") 
list.push("<3")
list.push(":)") 



