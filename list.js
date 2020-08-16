class Node{
    constructor(element){
        this.element= element
        this.next =  null
    }
} 

class LinkedList{
    constructor(head,size){
        this.head  = null
        this.size  = 0
    }

    add(element){
    var node = new Node(element)
     if(!this.head){
         this.head  =  node
     }
     else{
         var  current  = this.head
         while(current.next){
          current = current.next
         }
         console.log(current)
         current.next    = node
     }
     this.size++   
   }
   insert(elem,index){
     var node =  new  Node(elem)
     var  i  = 0;
     let current  =  this.head
     var prev =  null
     if(index === 0){
        node.next = current
        this.head = node
     }
     else{
         while(i<index){
             prev  = current
             current  = current.next
             i++
         }
         prev.next  =  node
         prev.next.next  = current
         this.size++
     }
   }
   remove(elem){
       var current  =  this.head
       let prev =  null
       if(current ===  null){
           return true
       }
       else{
        while(current.next.element !== elem){
          prev =  current
          current =  current.next
          console.log(current)
        }
      
       }
       
      
   }

}

var list  =  new LinkedList ()
list.add(1)
list.add(2)
list.insert(3,2)
list.remove(2)
console.log(list)
// list.add(3)

for(var i=0;i<5;i++){
    setTimeout(()=>console.log(i),1000)
}


