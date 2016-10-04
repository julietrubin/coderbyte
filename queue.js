class Queue {
	constructor(){
		this.first = null;
		this.last = null;
	}
	
	dequeue(){
		if (this.first === null){
			return null
		}
		var n = this.first 

		if (n.next === null){
			this.last = null
			this.first = null
		}
		else {
			this.first = n.next
		}
		return n.data
	}
	
	enqueue(data){
		var n = new Node(data)
		if (this.last){
			this.last.next = n
			this.last = n
		}
		else {
			this.first = n
			this.last = n
		}
	}
}

class Node {
	constructor(data){
		this.data = data
		this.next = null
	}
}

q = new Queue()







