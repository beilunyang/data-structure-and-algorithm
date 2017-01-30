//默认链表
function LinkedList() {
	var head = null,
		length = 0;

	function Node(ele) {
		this.ele = ele;
		this.next = null;
	}

	this.append = function (ele) {
		var node = new Node(ele),
			current = head;
		
		if (current === null) {
			head = node;
		} else {
			// 将光标移至末尾
			while (current.next) {
				current = current.next;
			}
			current.next = node;
		}
		length++;
	};

	this.insertAt = function (ele, pos) {
		var node = new Node(ele),
			current = head,
			prev,
			index = 0;

		if (pos > -1 && pos < length+1) {
			if (pos === 0) {
				node.next = current; 
				head = node;
			} else {
				// 将光标移至指定位置
				while (index < pos) {
					prev = current;
					current = current.next;
					index++;
				}
				prev.next = node;
				node.next = current;
			}
			length++;
			return true;
		} else {
			return false;
		}
	};
	this.removeAt = function (pos) {
		if (pos > -1 && pos < length) {
			var current = head,
				prev,
				index = 0;
			if (pos === 0) {
				head = current.next;
			} else {
				while (index < pos) {
					prev = current;
					current = current.next;
					index++;
				}
				prev.next = current.next;
			}
			length--;
			return current.ele;
		} else {
			return null;
		}
	};
	this.indexOf = function (ele) {
		var current = head,
			index = 0;
		while (current) {
			if (ele === current.ele) {
				return index; 
			} else {
				current = current.next;
				index++;
			}
		}
		return -1;
	};
	this.remove = function (ele) {
		var index = this.indexOf(ele);
		return this.removeAt(index);
	};
	this.size = function () {
		return length;
	};
	this.isEmpty = function () {
		return length === 0;
	};
	this.getHead = function () {
		return head;
	};
}

// map.js 依赖
module.exports = LinkedList;

// 双向链表
function DoublyLinkedList() {
	var head = null,
		tail = null,
		length = 0;
	function Node(ele) {
		this.ele = ele;
		this.next = null;
		this.previous = null;
	}
	this.insertAt = function (ele, pos) {
		if (pos > -1 && pos < length + 1) {
			var node = new Node(ele),
				current = head,
				prev,
				index = 0;
			if (this.isEmpty()) {
				head = node;
				tail = node;
			} else if (pos === 0) {
				head = node;
				node.next = current;
				current.previous = node;
			} else if (pos === length) {
				current = tail;
				current.next = node;
				node.previous = current;
				tail = node;
			} else {
				while (index < pos) {
					prev = current;
					current = current.next;
					index++;
				}
				prev.next = node;
				node.previous = prev;
				node.next = current;
				current.previous = node;
			}
			length++;
			return true;
		}
		return false;
	}
	this.removeAt = function (pos) {
		if (pos > -1 && pos < length) {
			var current = head;
				prev,
				index = 0;
			if (pos === 0) {
				head = current.next;
				if (length === 1) {
					tail = null;
				} else {
					head.previous = null;
				}
			} else if (pos === length - 1 ) {
				current = tail;
				tail = current.previous;
				tail.next = null;
			} else {
				while (index < pos) {
					prev = current;
					current = current.next;
					index++;
				}
				prev.next = current.next;
				current.next.previous = prev;
			}
			length--;
			return current.ele;
		}
		return null;
	}
	this.indexOf = function (ele) {
		var prev,
			current = head;
			index = 0;
		while (current) {
			if (current.ele === ele) {
				return index;
			}
			current = current.next;
			index++;
		}
		return -1;
	}
	this.remove = function (ele) {
		var pos = this.indexOf(ele);
		return this.removeAt(pos);
	} 
	this.size = function () {
		return length;
	}
	this.isEmpty = function () {
		return length === 0;
	}
}