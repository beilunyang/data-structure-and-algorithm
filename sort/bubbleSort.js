// 冒泡排序: 重复地将相邻的两个数进行比较。因为越小的元素会经由交换慢慢“浮”到数列的顶端，故名冒泡排序
// i代表轮
function bubbleSort(arr) {
	var len = arr.length;
	for (var i = 0; i < len; i++) {
		for (var j = 0; j < len - 1; j++) {
			if (arr[j] > arr[j+1]) {
				var tmp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = tmp;
			}
		}
	}
	return arr;
} 

// 优化版冒泡排序: 由于经过一轮排序之后，最后一个数已经确定是最大的数，所以可以省去一次比较
// 经过i轮，就已经确定了i个数
function optimizedBubbleSort(arr) {
	var len = arr.length;
	for (var i = 0; i < len; i++) {
		for (var j = 0; j < len - 1 - i; j++) {
			if (arr[j] > arr[j+1]) {
				var tmp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = tmp;
			}
		}
	}
	return arr;
}

