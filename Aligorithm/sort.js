//1. 冒泡排序
var bubbleSort = function(arr) {
    for (var i = 0; i < arr.length; i++) {
        var flag = true;
        for (var j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                flag = false;
                arraySwap(arr, j, j + 1);
            }
        }
        if (flag) {
            break;
        }
    }
    return arr;
};

//2. 选择排序
var selectionSort = function(arr) {
    for (var i = 1; i < arr.length - 1; i++) {
        var min = arr[i],
            minIndex = i;
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] < min) {
                min = arr[j];
                minIndex = j;
            }
        }
        arraySwap(arr, i, minIndex);
    }
    return arr;
};

//3. 插入排序
var insertionSort = function(arr) {
    for (var i = 1; i < arr.length; i++) {
        var temp = arr[i],
            j = i - 1;
        while (temp < arr[j] && j > -1) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = temp;
    }
    return arr;
};

//4. 快速排序
var quickSort = function(arr, start, end) {
    if (start >= end) {
        return arr;
    }
    var index = partition(arr, start, end);
    quickSort(arr, start, index - 1);
    quickSort(arr, index + 1, end);
    return arr;
};

var partition = function(arr, start, end) {
    var temp = arr[start];

    while (start < end) {
        while (start < end && arr[end] >= temp) {
            end--;
        }
        arr[start] = arr[end];

        while (start < end && arr[start] <= temp) {
            start++;
        }
        arr[end] = arr[start];
    }

    arr[start] = temp;
    return start;
};

//5. 希尔排序

//6. 归并排序

//7. 堆排序

//8. 基数排序

var arraySwap = function(arr, index1, index2) {
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
};

var arr = [2, 7, 4, 2, 9, 6, 0, 1];
//console.log(bubbleSort(arr));
//console.log(selectionSort(arr));
//console.log(insertionSort(arr));
console.log(quickSort(arr, 0, arr.length - 1));
