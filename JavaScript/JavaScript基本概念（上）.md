###1. 语法
- 区分大小写；
- 驼峰命名；
- 字母，下划线或美元符号打头，后面可以接字符，下划线，美元符号或数字；
- 严格模式，"use strict"编译指令；

###2. 关键字和保留字

###3. 变量
- 松散类型；

###4. 数据类型

####4.1 typeof 操作符
- 返回值：undefined，boolean，string，number，object，function；
- typeof(null) 的返回值是object；

####4.2 Undefined 类型

####4.3 Null 类型
- undefined == null；

####4.4 Boolean 类型
- 值为true或false，区分大小写；

####4.5 Number 类型

#####4.5.1 八进制，十进制，十六进制

#####4.5.2 浮点数值

#####4.5.3 数值范围
- Number.MIN_VALUE和Number.MAX_VALUE；
- Number.NEGATIVE_INFINITY和Number.POSITIVE_INFINITY；
- isFinite()，判断一个数值是否有穷；

#####4.5.4 NaN
- NaN==NaN值为false；
- isNaN()函数；
	1. alert(isNaN(NaN));	//true
	2. alert(isNaN(10));	//false（10 是一个数值）
	3. alert(isNaN("10"));	//false（可以被转换成数值 10）
	4. alert(isNaN("blue"));	//true （不能转换成数值）
	5. alert(isNaN(true));	//false（可以被转换成数值 1）

#####4.5.5 数值转换
- Number()；
	1. var num1 = Number("Hello world!"); //NaN
	2. var num2 = Number(""); //0
	3. var num3 = Number("000011"); //11
	4. var num4 = Number(true); //1
- parseInt()，使用的时候尽量指定基数；
	1. var num1 = parseInt("1234blue"); // 1234
	2. var num2 = parseInt(""); // NaN
	3. var num3 = parseInt("0xA"); // 10（十六进制数）
	4. var num4 = parseInt(22.5); // 22
	5. var num5 = parseInt("070"); // 56（八进制数）
	6. var num6 = parseInt("70"); // 70（十进制数）
	7. var num7 = parseInt("0xf"); // 15（十六进制数）
	8. var num = parseInt("0xAF", 16); //175
	9. var num1 = parseInt("AF", 16); //175
	10. var num2 = parseInt("AF"); //NaN
	11. var num1 = parseInt("10", 2); //2 （按二进制解析）
	12. var num2 = parseInt("10", 8); //8 （按八进制解析）
	13. var num3 = parseInt("10", 10); //10 （按十进制解析）
	14. var num4 = parseInt("10", 16); //16 （按十六进制解析）
- parseFloat()；
	1. var num1 = parseFloat("1234blue"); //1234 （整数）
	2. var num2 = parseFloat("0xA"); //0
	3. var num3 = parseFloat("22.5"); //22.5
	4. var num4 = parseFloat("22.34.5"); //22.34
	5. var num5 = parseFloat("0908.5"); //908.5
	6. var num6 = parseFloat("3.125e7"); //31250000

####4.6 String 类型
- 可以用双引号或者单引号括起来字符串，如，"string"或'string'；

#####4.6.1 字符字面量

#####4.6.2 字符串的特点

#####4.6.3 转换为字符串
- 数值的toString()；
	1. var num = 10;
	2. alert(num.toString()); // "10"
	3. alert(num.toString(2)); // "1010"
	4. alert(num.toString(8)); // "12"
	5. alert(num.toString(10)); // "10"
	6. alert(num.toString(16)); // "a"

- 转型函数String()；
	1. var value1 = 10;
	2. var value2 = true;
	3. var value3 = null;
	4. var value4;
	5. alert(String(value1)); // "10"
	6. alert(String(value2)); // "true"
	7. alert(String(value3)); // "null"
	8. alert(String(value4)); // "undefined"

####4.7 Object 类型
- constructor；
- hasOwnProperty(propertyName)；
- isPrototypeOf(object)；
- propertyIsEnumerable(propertyName)；
- toLocaleString()；
- toString()；
- valueOf()；