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
var shellSort = function(arr) {
    var len = arr.length;
    for (var gap = Math.floor(len / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (var i = gap; i < len; i++) {
            var temp = arr[i],
                j = i - gap;
            while (temp < arr[j] && j > -1) {
                arr[j + gap] = arr[j];
                j -= gap;
            }
            arr[j + gap] = temp;
        }
    }
    return arr;
};

//6. 归并排序
function mergeSort(source, dest, s, t) {
    var m, dest2 = new Array();
    if (s == t) {
        dest[s] = source[s];
    } else {
        m = Math.floor((s + t) / 2);
        mergeSort(source, dest2, s, m);
        mergeSort(source, dest2, m + 1, t);
        merge(dest2, dest, s, m, t);
    }
}

function merge(source, dest, s, m, n) {
    for (var i = m + 1, k = s; i <= n && s <= m; k++) {
        if (source[s] < source[i]) {
            dest[k] = source[s++];
        } else {
            dest[k] = source[i++];
        }
    }

    if (s <= m) {
        for (var l = 0; l <= m - s; l++) {
            dest[k + l] = source[s + l];
        }
    }
    if (i<= n) {
        for (var l = 0; l <= n - i; l++) {
            dest[k + l] = source[i + l];
        }

    }
}

//7. 堆排序
var heapSort = function(arr) {
    var temp, len = arr.length;
    for (var i = Math.floor(len / 2); i >= 0; i--) {
        heapAdjust(arr, i, len - 1);
    }
    for (var i = len - 1; i >= 0; i--) {
        arraySwap(arr, 0, i);
        heapAdjust(arr, 0, i - 1);
    }
    return arr;
};

var heapAdjust = function(arr, start, max) {
    var temp = arr[start];
    for (var i = 2 * start; i < max; i *= 2) {
        if (i < max && arr[i] < arr[i + 1]) {
            ++i;
        }
        if (temp >= arr[i]) {
            break;
        }
        arr[start] = arr[i];
        start = i;
    }
    arr[start] = temp;
};

//数组交换
var arraySwap = function(arr, index1, index2) {
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
};

var arr = [2, 7, 4, 2, 9, 6, 0, 1];
//console.log(bubbleSort(arr));
//console.log(selectionSort(arr));
//console.log(insertionSort(arr));
//console.log(quickSort(arr, 0, arr.length - 1));
//console.log(shellSort(arr));
//console.log(heapSort(arr));
var rsArr = [];
mergeSort(arr, rsArr, 0, arr.length - 1);
console.log(rsArr);
