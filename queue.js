// 默认队列
function Queue() {
	var items = [];
	// 入队
	this.enqueue = function (item) {
		items.push(item);
	};
	// 出队
	this.dequeue = function () {
		return items.shift();
	};
	// 判空
	this.isEmpty = function () {
		return items.length === 0;
	};
	// 队列长度
	this.size = function () {
		return items.length;
	};
	// 清空队列
	this.clear = function () {
		items = [];
	};
	// 查看队头
	this.front = function () {
		return items[0];
	}
}

// 优先队列——优先级高的排在队列前面
function PriorityQueue() {
	var items = [];
	function QueueItem(item, priority) {
		this.item = item;
		this.priority = priority;
	}
	this.dequeue = function () {
		return items.shift();
	};
	this.isEmpty = function () {
		return items.length === 0;
	};
	this.size = function () {
		return items.length;
	};
	this.clear = function () {
		items = [];
	};
	this.front = function () {
		return items[0];
	};
	this.enqueue = function (item, priority) {
		var ele = new QueueItem(item, priority);
		if (items.isEmpty()) {
			items.push(ele);
		} else {
			var added = false;
			for (var i=0; i<items.length; i++) {
				// 最大优先
				if (ele.priority > items[i].priority) {
					items.splice(i, 0, ele);
					added = true;
					break;
				}

			//	最小优先
			//	if (ele.priority < items[i].priority) {
			//		items.splice(i, 0, ele);
			//		add = true;
			//		break;
			//	}
			// }

			if (!added) {
				items.push(ele);
			}
		}
	};
}

/**
 *  循环队列
 *	循环队列主要是解决'假溢出',充分利用有限空间
 *	javascript的数组的长度可以动态变化，所以我觉得循环队列在javascript中没太大作用,同时菜鸡暂时也不知道怎么实现
 * 《学习javascript数据结构与算法》通过模拟击鼓传花来讲述循环队列，我觉得有点难以理解
 *	所以循环队列就日后再来实现吧
 *	2016-11-7 冬
 */

