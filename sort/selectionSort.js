function selectionSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len - 1; i++) {
        minIndex = i;
        for (var j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            var tmp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = tmp;
        }
    }
    return arr;
}

console.log(selectionSort([19, 18, 4, 10, 11, 15, 7, 2, -5, -1]).toString());
