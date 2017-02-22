function insertionSort(arr) {
    var len = arr.length;
    for (var i = 1; i < len; i++) {
        var current = arr[i];
        var preIndex = i - 1;
        while (preIndex >= 0 && arr[preIndex] > current) {
            arr[preIndex+1] = arr[preIndex];
            preIndex--;
        }
        arr[preIndex+1] = current;
    }
    return arr;
}

console.log(insertionSort([19, 18, 4, 10, 11, 15, 7, 2, -5, -1]).toString());