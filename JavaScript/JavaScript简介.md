###1. javascript 组成
- ECMAScript
- DOM
- BOM

###2. 标签的属性
- async（异步脚本）
- charset
- defer（延迟脚本）
- language
- src
- type

###3. 标签的位置
	<!DOCTYPE html>
	<html>
		<head>
			<title>Example HTML Page</title>
		</head>
		<body>
			<!-- 这里放内容 -->
			<script type="text/javascript" src="example1.js"></script>
			<script type="text/javascript" src="example2.js"></script>
		</body>
	</html>

###4. XHTML中的用法
	//XHTML语法严格，'<'等字符不被转义会报错，
	//可以放在'CDATA'域来解决
	<script type="text/javascript"><![CDATA[
		function compare(a, b) {
			if (a < b) {
				alert("A is less than B");
			} else if (a > b) {
				alert("A is greater than B");
			} else {
				alert("A is equal to B");
			}
		}
	]]></script>

