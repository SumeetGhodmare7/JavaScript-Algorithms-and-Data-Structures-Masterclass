class Node{
    constructor(val){
        this.val = val;
        this.next= null;
    }
}
class stack{
    constructor(){
        this.first = null
        this.last  = null
        this.size =0
    }
    push(val){
        var newNode = new Node(val)
        if(this.size===0){
            this.first = newNode
            this.last = newNode
        }
        else{
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp;    
        }
        return ++this.size;
    }
    pop(){
        if(this.size === 0) return null
        var temp = this.first 
        if(this.size ===1){
            this.first = null;
            this.last  = null;
        }
        this.first = this.first.next
        this.size--
        return temp.val
        
    }
}

var list = new stack()


list.push("HELLO")  
list.push("GOODBYE") 
list.push("!") 
list.push("<3")
list.push(":)") 


