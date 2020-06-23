// class Node {
// 	constructor(element) {
// 		(this.element = element), (this.next = null);
// 	}
// }

// class LinkedList {
// 	constructor() {
// 		this.head = null;
// 		this.size = 0;
// 	}
// 	add(element) {
// 		var node = new Node(element);
// 		//if the linked list is empty
// 		if (!this.head) {
// 			this.head = node;
// 		} else {
// 			var current = this.head;
// 			while (current.next) {
// 				current = current.next;
// 			}
// 			current.next = node;
// 		}
// 		this.size++;
//     }
//     //insert element
//     //delete element
//     //print
//     //is Empty
//     //size
//     insertAt(element,index){
//         //if index is greater than size ,index is negative,size of the linked list is 0 its invalid
//         if(index>this.size || index<0 && this.size){
//             return false
//         }
//         var node  = new Node(element)
//         var current  =  this.head
//         var prev =  null
//         var  i  = 0;
//         if(index === 0){
//             node.next =  current
//             this.head = node
//         }
//         else{
//            while(i<index){
//                prev = current
//                current = current.next
//                i++
//            }
//            //insert at the index
//            prev.next = node
//            ///move to the inserted node
//            prev = prev.next
//            //add the rest of the current to the inserted node
//            prev.next  =  current
//            //increment size
//            this.size++
//         }
//     }

//     isEmpty(){
//         return this.size ===0?true:false
//     }
//       sizeofLL(){
//           return this.size
//       }

//     printList(){
//     let current = this.head
//     var index  = 0
//     while(current){
//         console.log("element:",current.element ,"index:",index++)
//         current = current.next
//     }

// }

// }
// let node = new  Node(12)
// console.log(node)
// var list  = new LinkedList()
// list.add(12)
// console.log(list)
// list.add(141)
// list.add(302)
// list.add(164)
// list.removeElement(302)
// console.log(list.head.element)

// // list.removeElement(302)
// // list.add(530)
// // list.add(474)

// // // list.add(2)
// // // list.add(3)
// // // console.log(list)
// // // console.log(list.isEmpty())
// // // list.add(2)
// // // list.insertAt(5,1)
// // // list.add(4)
// //list.printList()
// // // console.log(list.sizeofLL())

class Node {
	constructor(element) {
		(this.element = element), (this.next = null);
	}
}

class LinkedList {
	constructor() {
		(this.head = null), (this.size = 0);
	}

	add(element) {
		var node = new Node(element);
		//if the linked list is empty
		if (!this.head) {
			this.head = node;
		} else {
			var current = this.head;
			while (current.next) {
				current = current.next;
			}
			current.next = node;
		}
		this.size++;
	}
	printList(){
		let current = this.head;
		let index = 0;
		while (current) {
			console.log(current.element, index);
			current = current.next;
			index++;
		}
	}
	isEmpty() {
		let current = this.head;
		return current.size === 0 ? true : false;
	}
	// insertAt(element, index) {
	// 	if (index > this.size || index < 0) {
	// 		return false;
	// 	}
	// 	var current = this.head;
	// 	var node = new Node(element);
	// 	var prev = null;
	// 	if (index === 0) {
	// 		this.head = node;
	// 		node.next = current;
	// 	} else {
	// 		let counter = 0;
	// 		while (counter < index) {
	// 			prev = current;
	// 			console.log(current);
	// 			current = current.next;
	// 			counter++;
	// 		}
	// 		prev.next = node;
	// 		prev = prev.next;
	// 		prev.next = current;
	// 	}
	// 	this.size++;
	// }
	removeElement(element) {
		var current = this.head;
		var prev = null;
		while (current) {
			if (current.element === element) {
				//null
				if (prev === null) {
					this.head = current.next;
				} else {
					prev.next = current.next;
				}
				this.size--;
				return true;
			}
			prev = current;
			current = prev.next;
		}
	}
	insertAt(element, index) {
		var node = new Node(element);
		let current = this.head;
		let prev = null;
		if (index == 0) {
			this.head = node;
			this.head.next = current;
		} else {
			let counter = 0;
			while (counter < index) {
				prev = current;
				current = current.next;
				counter++;
			}
			prev.next = node;
			prev.next.next = current;
		}
		this.size++;
	}
	middleList() {
		let current = this.head;
		let prev = this.head;
		while (current && current.next) {
			prev = prev.next;
			current = current.next.next;
		}
		console.log(prev);
	}
	deleteNode(position) {
		let current = this.head;
		let prev = null;
		if (current) {
			if (position === 0 && current.next) {
				current = current.next;
				this.head = current;
			} else if (position === 0 && current.next === null) {
				this.head = null;
			} else if (position !== 0) {
				let counter = 0;
				while (counter < position) {
					prev = current;
					current = current.next;
					counter++;
				}
				prev.next = current.next;
			}
			this.size--;
		} else {
			return true;
		}
	}
	reverseLinkedlist(){
		let current  = this.head
		let prev  =  null
		let before = null
		let after;
		while(current){
			prev = current
			current = current.next
			after = current
			prev.next = before
			before = prev
		}
		this.head = prev
		
	}
	rotateLinkedList(k){
		if(!this.head){
			return 0
		}
		let current  = this.head
		let length = 0
		let prev = null
		while(current){
		 prev = current
		 current = current.next 
		   length++ 
		}
		let lastnode = prev
		k = k%length
		current = this.head
		prev = null;
		let counter = 0
		let x  = length-1-k
		while(counter<=x){
		  prev = current
		  current = current.next 
		  counter++  
		}
		lastnode.next = this.head
		this.head =  prev.next
		prev.next = null
		return this.head
	}
	NthNodeFromEnd(n){
		let current  = this.head
		let prev  = null
		let length = 0
		while(current){
			current = current.next
			length++
		}
		console.log(length)
		current = this.head
		let counter = 0
		let x  = length-n+1
		while(counter<x){
			prev = current
			current = current.next
			counter++
		}
		console.log(prev)
	}
   
}

let list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);
list.NthNodeFromEnd(2)






//list.add(3)
// list.insertAt(5,1);
//list.middleList()
//console.log(list);
// list.printList()
//console.log(list.isEmpty())
