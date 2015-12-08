###1. 区别

> splice：用于插入、删除或替换数组的元素。

> slice：提取字符串的某个部分，并以心得字符串返回被提取的部分。

> 共同点：参数为负数的时候，从数组元素的尾部开始算，-1为倒数第一个元素，-2则为倒数第二个元素。

> 不同点：splice 影响原数组，slice 不影响原数组。

###2. splice 用法

> 代码

	//splice(start, deleteCount, item1, item2, ...)
	//影响原数组

	var arr = [1, 2, 3, 4, 5];

	//删除
	arr.splice(4); //[ 1, 2, 3, 4 ]
	arr.splice(2, 2); //[ 1, 2 ]

	//插入
	arr.splice(1, 0, 1.5); //[ 1, 1.5, 2 ]

	//替换
	arr.splice(1, 1, 2, 3); //[ 1, 2, 3, 2 ]

###3. slice 用法

> 代码

	//slice(start, end)
	//不影响原数组

	var arr = [1, 2, 3, 4, 5];

	var arr1 = arr.slice(2, 4); //[ 3, 4 ]
	var arr2 = arr.slice(1); //[ 2, 3, 4, 5 ]
