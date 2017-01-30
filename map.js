// 普通实现, 需要遍历，速度较慢.
function Map() {
	var items = {};
	this.set = function (key, value) {
		items[key] = value;
	};
	this.remove = function (key) {
		if (this.has(key)) {
			delete items[key];
			return true;
		}
		return false;
	};
	this.has = function (key) {
		return items.hasOwnProperty(key);
	};
	this.get = function (key) {
		if (this.has(key)) {
			return items[key];
		}
	};
	this.clear = function () {
		items = {};
	};
	this.size = function () {
		return this.keys().length;
	};
	this.keys = function () {
		return Object.keys(items);
	};
	this.values = function () {
		return this.keys().map(function (v) {
			return items[v];
		});
	};
	this.getItems = function () {
		return items;
	};
}

// 散列实现, 无需遍历，速度快，但需要更多内存, 会存在hash冲突
// 散列实现，需要散列函数，散列函数的作用是给定一个键值，然后返回值在表中的地址
// 使用lose lose hash, 将key的每个字符的ascii码相加
// 未处理hash冲突
function HashTable() {
	var table = [];
	var loseLoseHash = function (key) {
		var hash = 0;
		for (var i = 0; i < key.length; i++) {
			hash += key.charCodeAt(i);
		}
		return hash % 40;
	};
	this.put = function (key, value) {
		var pos = loseLoseHash(key);
		table[pos] = value;
	};
	this.get = function (key) {
		var pos = loseLoseHash(key);
		return table[pos];
	};
	this.remove = function (key) {
		var pos = loseLoseHash(key);
		table[pos] = undefined;
	};
}

// 处理hash冲突之分离链接
// 分离链接又称拉链法, 用链表来存储元素
var LinkedList = require('./linkedList');
function HashTable2() {
	var table = [];
	var loseLoseHash = function (key) {
		var hash = 0;
		for (var i = 0; i < key.length; i++) {
			hash += key.charCodeAt(i);
		}
		return hash % 40;
	};
	var ValuePair = function (key, value) {
		this.key = key;
		this.value = value;
	};
	this.put = function (key, value) {
		var pos = loseLoseHash(key);
		if (!table[pos]) {
			table[pos] = new LinkedList();
		}
		table[pos].append(new ValuePair(key, value));
	};
	this.get = function (key) {
		var pos = loseLoseHash(key);
		var linkedList = table[pos];
		if (linkedList) {
			var current = linkedList.getHead();
			while (current) {
				if (current.ele.key === key) {
					return current.ele.value;
				}
				current = current.next;
			}
		}
	};
	this.remove = function (key) {
		var pos = loseLoseHash(key);
		var linkedList = table[pos];
		if (linkedList) {
			var current = linkedList.getHead();
			while (current) {
				if (current.ele.key === key) {
					linkedList.remove(current.ele);
					if (linkedList.isEmpty()) {
						linkedList = undefined;
					}
					return true;
				}
				current = current.next;
			}
		}
		return false;
	}
}
