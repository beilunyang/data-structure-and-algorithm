function Stack() {
	var items = [];
	// 入栈
	this.push = function (item) {
		items.push(item);
	};
	// 出栈
	this.pop = function () {
		return items.pop();
	};
	// 判空
	this.isEmpty = function () {
		return items.length === 0;
	};
	// 栈元素个数
	this.size = function () {
		return items.length;
	};
	// 清栈
	this.clear = function () {
		items = [];
	};
	// 查看栈顶元素
	this.peek = function () {
		return items[items.length-1];
	};
}

 /**
  * stack用例：十进制整数转换为16进制以内的任意进制数
  * @param  {Number} decNum 被转换的十进制数
  * @param  {Number} base   转换成的进制
  * @return {[Number]}        转换成的进制数
  */
function baseConverter(decNum, base) {
	var rem,
		baseString = '',
		digits = '0123456789ABCDEF',
		remStack = new Stack();

	while (decNum > 0) {
		rem = decNum % base;
		remStack.push(rem);
		decNum = Math.floor(decNum / base);
	}

	while (!remStack.isEmpty()) {
		baseString += digits[remStack.pop()];
	}

	return baseString;
}

console.log(baseConverter(200, 2));
