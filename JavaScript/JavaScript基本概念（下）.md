###1. 操作符

####1.1 一元操作符

#####1.1.1 递增和递减操作符
	var s1 = "2";
	var s2 = "z";
	var b = false;
	var f = 1.1;
	var o = {
	    valueOf: function() {
	        return -1;
	    }
	};
	s1++; // 值变成数值 3
	s2++; // 值变成 NaN
	b++; // 值变成数值 1
	f--; // 值变成 0.10000000000000009（由于浮点舍入错误所致）
	o--; // 值变成数值-2

#####1.1.2 一元加和减操作符
	var s1 = "01";
	var s2 = "1.1";
	var s3 = "z";
	var b = false;
	var f = 1.1;
	var o = {
	    valueOf: function() {
	        return -1;
	    }
	};
	s1 = -s1; // 值变成了数值-1
	s2 = -s2; // 值变成了数值-1.1
	s3 = -s3; // 值变成了 NaN
	b = -b; // 值变成了数值 0
	f = -f; // 变成了-1.1
	o = -o; // 值变成了数值 1

####1.2 位操作符

#####1.2.1 按位非（NOT）
	var num1 = 25; // 二进制 00000000000000000000000000011001
	var num2 = ~num1; // 二进制 11111111111111111111111111100110
	alert(num2); // -26

#####1.2.2 按位与（AND）

#####1.2.3 按位或（OR）

#####1.2.4 按位异或（XOR）

#####1.2.5 左移
- 注意，左移不会影响操作数的符号位。换句话说，如果将 -2 向左移动 5 位，结果将是 -64，而非 64。

#####1.2.6 有符号的右移
- 同样，在移位过程中，原数值中也会出现空位。只不过这次的空位出现在原数值的左侧、符号位的
右侧（见图 3-3）。而此时 ECMAScript 会用“符号位的值”来填充所有空位，以便得到一个完整的值。

#####1.2.7 无符号的右移
- 符号：>>>；

####1.3 布尔操作符

#####1.3.1 逻辑非
	//使用规则
	alert(!false); // true
	alert(!"blue"); // false
	alert(!0); // true
	alert(!NaN); // true
	alert(!""); // true
	alert(!12345); // false
	
	//模拟Boolean()转型函数
	alert(!!"blue"); //true
	alert(!!0); //false
	alert(!!NaN); //false
	alert(!!""); //false
	alert(!!12345); //true

#####1.3.2 逻辑与

#####1.3.3 逻辑或
	我们可以利用逻辑或的这一行为来避免为变量赋 null 或 undefined 值。例如：
	var myObject = preferredObject || backupObject;
	如果 preferredObject 的值不是 null，那么它的值将被赋给 myObject；
	如果是 null，则将 backupObject 的值赋给 myObject。
	ECMAScript 程序的赋值语句经常会使用这种模式，本书也将采用这种模式。

####1.4 乘性操作符

#####1.4.1 乘法

#####1.4.2 除法

#####1.4.3 求模

####1.5 加性操作符

#####1.5.1 加法

#####1.5.2 减法
	var result1 = 5 - true; // 4，因为 true 被转换成了 1
	var result2 = NaN - 1; // NaN
	var result3 = 5 - 3; // 2
	var result4 = 5 - ""; // 5，因为"" 被转换成了 0
	var result5 = 5 - "2"; // 3，因为"2"被转换成了 2
	var result6 = 5 - null; // 5，因为 null 被转换成了 0

####1.6 关系操作符

####1.7 相等操作符

#####1.7.1 相等和不相等

#####1.7.2 全等和不全等
- === 和 !==；

#####1.7.3 由于相等和不相等操作符存在类型转换问题，而为了保持代码中数据类型的完整性，我们推荐使用全等和不全等操作符。

####1.8 条件操作符
- ? 三元运算符；

####1.9 赋值操作符
	//复合赋值
	乘/赋值（*=）；
	除/赋值（/=）；
	模/赋值（%=）；
	加/赋值（+=）；
	减/赋值（=）；
	左移/赋值（<<=）；
	有符号右移/赋值（>>=）；
	无符号右移/赋值（>>>=）；

####1.10 逗号操作符
	var num1=1, num2=2, num3=3;
	var num = (5, 1, 4, 8, 0); // num 的值为 0

###2. 语句

####2.1 if 语句
- 业界普遍推崇的最佳实践是始终使用代码块，即使要执行的只有一行代码。因为这样可以消除人们的误解，否则可能让人分不清在不同条件下要执行哪些语句。

####2.2 do-while 语句

####2.3 while 语句

####2.4 for 语句
	//由于 ECMAScript 中不存在块级作用域，因此在循环内部定义的变量也可以在外部访问到。例如：
	var count = 10;
	for (var i = 0; i < count; i++){
	    alert(i);
	}
	alert(i); //10

####2.5 for-in 语句
	示例：
	for (var propName in window) {
	    document.write(propName);
	}

####2.6 label 语句
	示例：
	start: for (var i=0; i < count; i++) {
	    alert(i);
	}

####2.7 break 和 continue 语句

####2.8 with 语句
	var qs = location.search.substring(1);
	var hostName = location.hostname;
	var url = location.href;

	//使用 with 语句之后
	with(location){
	    var qs = search.substring(1);
	    var hostName = hostname;
	    var url = href;
	}
- 由于大量使用 with 语句会导致性能下降，同时也会给调试代码造成困难，因此在开发大型应用程序时，不建议使用 with 语句。

####2.9 switch 语句
	//合并 case 两种情形
	switch (i) {
	    case 25:
	        /* 合并两种情形 */
	    case 35:
	        alert("25 or 35");
	        break;
	    case 45:
	        alert("45");
	        break;
	    default:
	        alert("Other");
	}

	//虽然 ECMAScript 中的 switch 语句借鉴自其他语言，但这个语句也有自己的特色。
	//首先，可以在switch 语句中使用任何数据类型（在很多其他语言中只能使用数值），
	//无论是字符串，还是对象都没有问题。
	//其次，每个 case 的值不一定是常量，可以是变量，甚至是表达式。请看下面这个例子：
	switch ("hello world") {
	    case "hello" + " world":
	        alert("Greeting was found.");
	        break;
	    case "goodbye":
	        alert("Closing was found.");
	        break;
	    default:
	        alert("Unexpected message was found.");
	}

	//使用表达式作为 case 值还可以实现下列操作：
	var num = 25;
	switch (true) {
	    case num < 0:
	       alert("Less than 0.");
	       break;
	    case num >= 0 && num <= 10:
	        alert("Between 0 and 10.");
	        break;
	    case num > 10 && num <= 20:
	        alert("Between 10 and 20.");
	        break;
	    default:
	        alert("More than 20.");
	}	
- switch 语句在比较值时使用的是全等操作符，因此不会发生类型转换（例如，字符串"10"不等于数值 10）。

###3. 函数
- 推荐的做法是要么让函数始终都返回一个值，要么永远都不要返回值。
否则，如果函数有时候返回值，有时候有不返回值，会给调试代码带来不便。

####3.1 理解参数
- arguments 的理解；
- ECMAScript 中的所有参数传递的都是值，不可能通过引用传递参数。

####3.2 没有重载
- 如果在 ECMAScript 中定义了两个名字相同的函数，则该名字只属于后定义的函数。
- 如前所述，通过检查传入函数中参数的类型和数量并作出不同的反应，结合 arguments 的使用，可以模仿方法的重载。

###4. 小结
- ECMAScript 中的基本数据类型包括Null，Undefined，Number，String，Boolean五种；
- ECMAScript 没有为整数和浮点型定义不同的数据类型，Number类型可以用于表示所有数值；
- ECMAScript 中也有一种复杂的数据类型Object，该类型是这门语言中所有对象的基础类型；
- 严格模式为这门语言容易出错的地方是加了限制；
- 为指定返回值的函数返回的是一个特殊的undefined值；
- 可以向ECMAScript函数传递任意数量的参数，并且可以通过arguments对象来访问这些参数；
- 由于不存在函数签名的特性，ECMAScript函数不能重载；