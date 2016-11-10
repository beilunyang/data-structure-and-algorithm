function Set() {
	var items = [];
	this.has = function (item) {
		if (items.indexOf(item) > -1) {
			return true;
		} 
		return false;
	};
	this.add = function (item) {
		if (!this.has(item)) {
			items.push(item);
			return true;
		}
		return false;
	};
	this.delete = function (item) {
		if (this.has(item)) {
			var idx = items.indexOf(item);
			items.splice(idx, 1);
			return true;
		}
		return false;
	};
	this.clear = function () {
		items = [];
	};
	this.size = function () {
		return items.length;
	};
	this.valueOf = function () {
		return items;
	};
	this.union = function (otherSet) {
		if (!otherSet instanceof Set) {
			throw new Error('please input a instance of Set');
		}
		var unionSet = new Set();
		this.valueOf().forEach(function (item) {
			unionSet.add(item);
		});
		otherSet.valueOf().forEach(function (item) {
			unionSet.add(item);
		});
		return unionSet;
	};
	this.intersection = function (otherSet) {
		var interSet = new Set();
		this.valueOf().forEach(function (item) {
			if (otherSet.has(item)) {
				interSet.add(item);
			}
		});
		return interSet;
	};
	this.difference = function (otherSet) {
		var diffSet = new Set();
		this.valueOf().forEach(function (item) {
			if (!otherSet.has(item)) {
				diffSet.add(item);
			}
		});
		return diffSet;
	};
	this.subset = function (otherSet) {
		if (this.size() > otherSet.size()) {
			return false;
		}
		this.valueOf().forEach(function (item) {
			if (!otherSet.has(item)) {
				return false;
			}
		});
		return true;
	};

}



