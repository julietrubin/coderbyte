class Node:
	def __init__(self, val):
		self.val = val
		self.next = None
		
class Queue:
	first = None
	last = None
		
	def enqueue(self, val):
		n = Node(val)
		if self.last:
			self.last.next = n
			self.last = n
		else:
			self.first = n
			self.last = n 
			
	def dequeue(self):
		if self.first == None:
			return None
			
		n = self.first
		if n.next == None:
			self.last = None
			self.first = None
		else:
			self.first = n.next
		return n.val
		
		
queue = Queue()		
		