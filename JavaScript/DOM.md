###1. 节点层级

####1.1 Node 类型
	 Node.ELEMENT_NODE(1)；
	 Node.ATTRIBUTE_NODE(2)；
	 Node.TEXT_NODE(3)；
	 Node.CDATA_SECTION_NODE(4)；
	 Node.ENTITY_REFERENCE_NODE(5)；
	 Node.ENTITY_NODE(6)；
	 Node.PROCESSING_INSTRUCTION_NODE(7)；
	 Node.COMMENT_NODE(8)；
	 Node.DOCUMENT_NODE(9)；
	 Node.DOCUMENT_TYPE_NODE(10)；
	 Node.DOCUMENT_FRAGMENT_NODE(11)；
	 Node.NOTATION_NODE(12)。

	if (someNode.nodeType == 1){ //适用于所有浏览器
	    alert("Node is an element.");
	}

#####1.1.1 nodeName 和 nodeValue 属性
	if (someNode.nodeType == 1){
	    value = someNode.nodeName; //nodeName 的值是元素的标签名
	}

#####1.1.2 节点关系
	var firstChild = someNode.childNodes[0];
	var secondChild = someNode.childNodes.item(1);
	var count = someNode.childNodes.length;

	//在 IE8 及之前版本中无效
	var arrayOfNodes = Array.prototype.slice.call(someNode.childNodes,0);

	function convertToArray(nodes){
	    var array = null;
	    try {
	            array = Array.prototype.slice.call(nodes, 0); //针对非 IE 浏览器
	    } catch (ex) {
	        array = new Array();
	        for (var i=0, len=nodes.length; i < len; i++){
	            array.push(nodes[i]);
	        }
	    }
	    return array;
	}

	if (someNode.nextSibling === null){
	    alert("Last node in the parent’s childNodes list.");
	} else if (someNode.previousSibling === null){
	    alert("First node in the parent’s childNodes list.");
	}

#####1.1.3 操作节点
	var returnedNode = someNode.appendChild(newNode);
	alert(returnedNode == newNode); //true
	alert(someNode.lastChild == newNode); //true

	//someNode 有多个子节点
	var returnedNode = someNode.appendChild(someNode.firstChild);
	alert(returnedNode == someNode.firstChild); //false
	alert(returnedNode == someNode.lastChild); //true

	//插入后成为最后一个子节点
	returnedNode = someNode.insertBefore(newNode, null);
	alert(newNode == someNode.lastChild); //true
	//插入后成为第一个子节点
	var returnedNode = someNode.insertBefore(newNode, someNode.firstChild);
	alert(returnedNode == newNode); //true
	alert(newNode == someNode.firstChild); //true
	//插入到最后一个子节点前面
	returnedNode = someNode.insertBefore(newNode, someNode.lastChild);
	alert(newNode == someNode.childNodes[someNode.childNodes.length-2]); //true

	//替换第一个子节点
	var returnedNode = someNode.replaceChild(newNode, someNode.firstChild);
	//替换最后一个子节点
	returnedNode = someNode.replaceChild(newNode, someNode.lastChild);

	//移除第一个子节点
	var formerFirstChild = someNode.removeChild(someNode.firstChild);
	//移除最后一个子节点
	var formerLastChild = someNode.removeChild(someNode.lastChild);

#####1.1.4 其他方法
	<ul>
	    <li>item 1</li>
	    <li>item 2</li>
	    <li>item 3</li>
	</ul>
	var deepList = myList.cloneNode(true);
	alert(deepList.childNodes.length); //3（ IE < 9）或 7（其他浏览器）
	var shallowList = myList.cloneNode(false);
	alert(shallowList.childNodes.length); //0

####1.2 Document 类型
 nodeType 的值为 9；
 nodeName 的值为"#document"；
 nodeValue 的值为 null；
 parentNode 的值为 null；
 ownerDocument 的值为 null；
 其子节点可能是一个 DocumentType （最多一个） 、 Element （最多一个） 、 ProcessingInstruction或 Comment。

#####1.2.1 文档的子节点
	var html = document.documentElement; //取得对<html>的引用
	alert(html === document.childNodes[0]); //true
	alert(html === document.firstChild); //true

	var body = document.body; //取得对<body>的引用

	var doctype = document.doctype; //取得对<!DOCTYPE>的引用

#####1.2.2 文档信息
	//取得文档标题
	var originalTitle = document.title;
	//设置文档标题
	document.title = "New page title";

	//取得完整的 URL
	var url = document.URL;
	//取得域名
	var domain = document.domain;
	//取得来源页面的 URL
	var referrer = document.referrer;

	//假设页面来自 p2p.wrox.com 域
	document.domain = "wrox.com"; // 成功
	document.domain = "nczonline.net"; // 出错！

	//假设页面来自于 p2p.wrox.com 域
	document.domain = "wrox.com"; //松散的（成功）
	document.domain = "p2p.wrox.com"; //紧绷的（出错！）

#####1.2.3 查找元素
	var images = document.getElementsByTagName("img");
	alert(images.length); //输出图像的数量
	alert(images[0].src); //输出第一个图像元素的 src 特性
	alert(images.item(0).src); //输出第一个图像元素的 src 特性

	var myImage = images.namedItem("myImage");
	var myImage = images["myImage"];

	var allElements = document.getElementsByTagName("*");

	var radios = document.getElementsByName("color");

- 但是，对于这里的单选按钮来说， namedItem()方法则只会取得第一项（因为每一项的 name 特性都相同） 。

#####1.2.4 特殊集合
	 document.anchors，包含文档中所有带 name 特性的<a>元素；
	 document.applets，包含文档中所有的<applet>元素，因为不再推荐使用<applet>元素，
	     所以这个集合已经不建议使用了；
	 document.forms，包含文档中所有的<form>元素，与 document.getElementsByTagName("form")
	     得到的结果相同；
	 document.images，包含文档中所有的<img>元素，与 document.getElementsByTagName
	     ("img")得到的结果相同；
	 document.links，包含文档中所有带 href 特性的<a>元素。

#####1.2.5 DOM 一致性检测

#####1.2.6 文档写入
	//1. write()
	//2. writeln()
	//3. open()
	//4. close()

	<html>
	    <head>
	        <title>document.write() Example</title>
	    </head>
	    <body>
	        <p>The current date and time is:
	        <script type="text/javascript">
	            document.write("<strong>" + (new Date()).toString() + "</strong>");
	        </script>
	        </p>
	    </body>
	</html>

	<html>
	    <head>
	        <title>document.write() Example 3</title>
	    </head>
	    <body>
	        <script type="text/javascript">
	        document.write("<script type=\"text/javascript\" src=\"file.js\">" + "<\/script>");
	        </script>
	    </body>
	</html>

- 方法 open()和 close()分别用于打开和关闭网页的输出流。
如果是在页面加载期间使用 write()或 writeln()方法，则不需要用到这两个方法。

####1.3 Element 类型
	 nodeType 的值为 1；
	 nodeName 的值为元素的标签名；
	 nodeValue 的值为 null；
	 parentNode 可能是 Document 或 Element；
	 其子节点可能是 Element、 Text、 Comment、 ProcessingInstruction、 CDATASection 或 EntityReference。

	var div = document.getElementById("myDiv");
	alert(div.tagName); //"DIV"
	alert(div.tagName == div.nodeName); //true

	if (element.tagName == "div"){ //不能这样比较，很容易出错！
	    //在此执行某些操作
	}
	if (element.tagName.toLowerCase() == "div"){ //这样最好（适用于任何文档）
	    //在此执行某些操作
	}

#####1.3.1 HTML 元素
	 id，元素在文档中的唯一标识符。
	 title，有关元素的附加说明信息，一般通过工具提示条显示出来。
	 lang，元素内容的语言代码，很少使用。
	 dir，语言的方向，值为"ltr"（left-to-right，从左至右）或"rtl"（right-to-left，从右至左） ，也很少使用。
	 className，与元素的 class 特性对应，即为元素指定的 CSS 类。没有将这个属性命名为 class，是因为 class 是 ECMAScript 的保留字。

	<div id="myDiv" class="bd" title="Body text" lang="en" dir="ltr"></div>

	var div = document.getElementById("myDiv");
	alert(div.id); //"myDiv""
	alert(div.className); //"bd"
	alert(div.title); //"Body text"
	alert(div.lang); //"en"
	alert(div.dir); //"ltr"

	div.id = "someOtherId";
	div.className = "ft";
	div.title = "Some other text";
	div.lang = "fr";
	div.dir ="rtl";

#####1.3.2 取得特性
	var div = document.getElementById("myDiv");
	alert(div.getAttribute("id")); //"myDiv"
	alert(div.getAttribute("class")); //"bd"
	alert(div.getAttribute("title")); //"Body text"
	alert(div.getAttribute("lang")); //"en"
	alert(div.getAttribute("dir")); //"ltr"

	<div id="myDiv" my_special_attribute="hello!"></div>
	var value = div.getAttribute("my_special_attribute");

	alert(div.id); //"myDiv"
	alert(div.my_special_attribute); //undefined（ IE 除外）
	alert(div.align); //"left"

- 在 IE7 及以前版本中，通过 getAttribute()方法访问 style 特性或 onclick 这样的事件处理特性时，返回的值与属性的值相同。
换句话说， getAttribute("style")返回一个对象，而 getAttribute("onclick")返回一个函数。
虽然 IE8 已经修复了这个bug，但不同IE版本间的不一致性，也是导致开发人员不使用getAttribute()访问HTML特性的一个原因。

#####1.3.3 设置特性
	div.setAttribute("id", "someOtherId");
	div.setAttribute("class", "ft");
	div.setAttribute("title", "Some other text");
	div.setAttribute("lang","fr");
	div.setAttribute("dir", "rtl");

	div.id = "someOtherId";
	div.align = "left";

	//不过，像下面这样为 DOM 元素添加一个自定义的属性，该属性不会自动成为元素的特性。
	div.mycolor = "red";
	alert(div.getAttribute("mycolor")); //null（ IE 除外） 

	div.removeAttribute("class");

#####1.3.4 attributes 属性
	 getNamedItem(name)：返回 nodeName 属性等于 name 的节点；
	 removeNamedItem(name)：从列表中移除 nodeName 属性等于 name 的节点；
	 setNamedItem(node)：向列表中添加节点，以节点的 nodeName 属性为索引；
	 item(pos)：返回位于数字 pos 位置处的节点。

	var id = element.attributes.getNamedItem("id").nodeValue;
	var id = element.attributes["id"].nodeValue;

	element.attributes["id"].nodeValue = "someOtherId";

	var oldAttr = element.attributes.removeNamedItem("id");

	element.attributes.setNamedItem(newAttr);

	function outputAttributes(element){
	    var pairs = new Array(),
	    attrName,
	    attrValue,
	    i,
	    len;
	    for (i=0, len=element.attributes.length; i < len; i++){
	        attrName = element.attributes[i].nodeName;
	        attrValue = element.attributes[i].nodeValue;
	        if (element.attributes[i].specified) {
	            pairs.push(attrName + "=\"" + attrValue + "\"");
	        }
	    }
	    return pairs.join(" ");
	}

#####1.3.5 创建元素
	var div = document.createElement("div");
	div.id = "myNewDiv";
	div.className = "box";
	document.body.appendChild(div);

	var div = document.createElement("<div id=\"myNewDiv\" class=\"box\"></div >");

	if (client.browser.ie && client.browser.ie <=7){
	    //创建一个带 name 特性的 iframe 元素
	    var iframe = document.createElement("<iframe name=\"myframe\"></iframe>");
	    //创建 input 元素
	    var input = document.createElement("<input type=\"checkbox\">");
	    //创建 button 元素
	    var button = document.createElement("<button type=\"reset\"></button>");
	    //创建单选按钮
	    var radio1 = document.createElement("<input type=\"radio\" name=\"choice\" "＋
	    "value=\"1\">");
	    var radio2 = document.createElement("<input type=\"radio\" name=\"choice\" "＋ 
	    "value=\"2\">");
	}

#####1.3.6 元素的子节点
	for (var i=0, len=element.childNodes.length; i < len; i++){
	    if (element.childNodes[i].nodeType == 1){
	        //执行某些操作
	    }
	}

	<ul id="myList">
	    <li>Item 1</li>
	    <li>Item 2</li>
	    <li>Item 3</li>
	</ul>

	var ul = document.getElementById("myList");
	var items = ul.getElementsByTagName("li");

- 要注意的是，这里<ul>的后代中只包含直接子元素。不过，如果它包含更多层次的后代元素，
那么各个层次中包含的<li>元素也都会返回。

####1.4 Text 类型
	 nodeType 的值为 3；
	 nodeName 的值为"#text"；
	 nodeValue 的值为节点所包含的文本；
	 parentNode 是一个 Element；
	 不支持（没有）子节点。

	 appendData(text)：将 text 添加到节点的末尾。
	 deleteData(offset, count)：从 offset 指定的位置开始删除 count 个字符。
	 insertData(offset, text)：在 offset 指定的位置插入 text。
	 replaceData(offset, count, text)：用 text 替换从 offset 指定的位置开始到 offset+ count 为止处的文本。
	 splitText(offset)：从 offset 指定的位置将当前文本节点分成两个文本节点。
	 substringData(offset, count)：提取从 offset 指定的位置开始到 offset+count 为止处的字符串。

	<!-- 没有内容，也就没有文本节点 -->
	<div></div>
	<!-- 有空格，因而有一个文本节点 -->
	<div> </div>
	<!-- 有内容，因而有一个文本节点 -->
	<div>Hello World!</div>

	var textNode = div.firstChild; //或者 div.childNodes[0]
	//在取得了文本节点的引用后，就可以像下面这样来修改它了。
	div.firstChild.nodeValue = "Some other message";

	//输出结果是"Some &lt;strong&gt;other&lt;/strong&gt; message"
	div.firstChild.nodeValue = "Some <strong>other</strong> message";

#####1.4.1 创建文本节点
	var textNode = document.createTextNode("<strong>Hello</strong> world!");

	var element = document.createElement("div");
	element.className = "message";
	var textNode = document.createTextNode("Hello world!");
	element.appendChild(textNode);
	document.body.appendChild(element);

	var element = document.createElement("div");
	element.className = "message";
	var textNode = document.createTextNode("Hello world!");
	element.appendChild(textNode);
	var anotherTextNode = document.createTextNode("Yippee!");
	element.appendChild(anotherTextNode);
	document.body.appendChild(element);

- 如果两个文本节点是相邻的同胞节点，那么这两个节点中的文本就会连起来显示，中间不会有空格。

#####1.4.2 规范化文本节点
	//normalize()
	var element = document.createElement("div");
	element.className = "message";
	var textNode = document.createTextNode("Hello world!");
	element.appendChild(textNode);
	var anotherTextNode = document.createTextNode("Yippee!");
	element.appendChild(anotherTextNode);
	document.body.appendChild(element);
	alert(element.childNodes.length); //2
	element.normalize();
	alert(element.childNodes.length); //1
	alert(element.firstChild.nodeValue); // "Hello world!Yippee!"

#####1.4.3 分割文本节点
	var element = document.createElement("div");
	element.className = "message";
	var textNode = document.createTextNode("Hello world!");
	element.appendChild(textNode);
	document.body.appendChild(element);
	var newNode = element.firstChild.splitText(5);
	alert(element.firstChild.nodeValue); //"Hello"
	alert(newNode.nodeValue); //" world!"
	alert(element.childNodes.length); //2

- 分割文本节点是从文本节点中提取数据的一种常用 DOM 解析技术。

####1.5 Commnet 类型
	 nodeType 的值为 8；
	 nodeName 的值为"#comment"；
	 nodeValue 的值是注释的内容；
	 parentNode 可能是 Document 或 Element；
	 不支持（没有）子节点。

	<div id="myDiv"><!--A comment --></div>
	var div = document.getElementById("myDiv");
	var comment = div.firstChild;
	alert(comment.data); //"A comment"

	var comment = document.createComment("A comment ");

- Comment 类型与 Text 类型继承自相同的基类，因此它拥有除 splitText()之外的所有字符串操作方法。
与 Text 类型相似，也可以通过 nodeValue 或 data 属性来取得注释的内容。

####1.6 CDATASection 类型
	 nodeType 的值为 4；
	 nodeName 的值为"#cdata-section"；
	 nodeValue 的值是 CDATA 区域中的内容；
	 parentNode 可能是 Document 或 Element；
	 不支持（没有）子节点。

	//CDATA 区域只会出现在 XML 文档中，因此多数浏览器都会把 CDATA 区域错误地解析为 Comment或 Element。
	<div id="myDiv"><![CDATA[This is some content.]]></div>

- CDATASection 类型只针对基于 XML 的文档，表示的是 CDATA 区域。与 Comment 类似，
CDATASection 类型继承自 Text 类型，因此拥有除 splitText()之外的所有字符串操作方法。

####1.7 DocumentType 类型
	 nodeType 的值为 10；
	 nodeName 的值为 doctype 的名称；
	 nodeValue 的值为 null；
	 parentNode 是 Document；
	 不支持（没有）子节点。

	<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
	"http://www.w3.org/TR/html4/strict.dtd">
	DocumentType 的 name 属性中保存的就是"HTML"：
	alert(document.doctype.name); //"HTML"

####1.8 DocumentFragment 类型
	 nodeType 的值为 11；
	 nodeName 的值为"#document-fragment"；
	 nodeValue 的值为 null；
	 parentNode 的值为 null；
	 子节点可以是 Element、 ProcessingInstruction、 Comment、 Text、 CDATASection 或 EntityReference。

	var fragment = document.createDocumentFragment();

	<ul id="myList"></ul>
	//假设我们想为这个<ul>元素添加 3 个列表项。如果逐个地添加列表项，将会导致浏览器反复渲染（呈现）新信息。
	//为避免这个问题，可以像下面这样使用一个文档片段来保存创建的列表项，然后再一次性将它们添加到文档中。
	var fragment = document.createDocumentFragment();
	var ul = document.getElementById("myList");
	var li = null;
	for (var i=0; i < 3; i++){
	    li = document.createElement("li");
	    li.appendChild(document.createTextNode("Item " + (i+1)));
	    fragment.appendChild(li);
	}
	ul.appendChild(fragment);

####1.9 Attr 类型
	 nodeType 的值为 2；
	 nodeName 的值是特性的名称；
	 nodeValue 的值是特性的值；
	 parentNode 的值为 null；
	 在 HTML 中不支持（没有）子节点；
	 在 XML 中子节点可以是 Text 或 EntityReference。

	//Attr 对象有 3 个属性： name、 value 和 specified。其中， name 是特性名称（与 nodeName 的值相同）， 
	//value 是特性的值（与 nodeValue 的值相同），而 specified 是一个布尔值，用以区别特性是在代码中指定的，还是默认的。
	var attr = document.createAttribute("align");
	attr.value = "left";
	element.setAttributeNode(attr);
	alert(element.attributes["align"].value); //"left"
	alert(element.getAttributeNode("align").value); //"left"
	alert(element.getAttribute("align")); //"left"

- 我们并不建议直接访问特性节点。实际上，使用 getAttribute()、setAttribute() 和 removeAttribute()方法远比操作特性节点更为方便。

###2. DOM 操作技术

####2.1 动态脚本
	<script type="text/javascript" src="client.js"></script>

	function loadScript(url){
	    var script = document.createElement("script");
	    script.type = "text/javascript";
	    script.src = url;
	    document.body.appendChild(script);
	}
	loadScript("client.js");

	<script type="text/javascript">
	function sayHi(){
	alert("hi");
	}
	</script>

	function loadScriptString(code){
	    var script = document.createElement("script");
	    script.type = "text/javascript";
	    try {
	        script.appendChild(document.createTextNode(code));
	    } catch (ex){
	        script.text = code;
	    }
	    document.body.appendChild(script);
	}
	下面是调用这个函数的示例：
	loadScriptString("function sayHi(){alert('hi');}");

####2.2 动态样式
	<link rel="stylesheet" type="text/css" href="styles.css">

	var link = document.createElement("link");
	link.rel = "stylesheet";
	link.type = "text/css";
	link.href = "style.css";
	var head = document.getElementsByTagName("head")[0];
	head.appendChild(link);

	<style type="text/css">
	body {
	background-color: red;
	}
	</style>

	function loadStyleString(css){
	    var style = document.createElement("style");
	    style.type = "text/css";
	    try{
	        style.appendChild(document.createTextNode(css));
	    } catch (ex){
	        style.styleSheet.cssText = css;
	    }
	    var head = document.getElementsByTagName("head")[0];
	    head.appendChild(style);
	}
	loadStyleString("body{background-color:red}");

####2.3 操作表格
	<table border="1" width="100%">
	    <tbody>
	        <tr>
	            <td>Cell 1,1</td>
	            <td>Cell 2,1</td>
	        </tr>
	        <tr>
	            <td>Cell 1,2</td>
	            <td>Cell 2,2</td>
	        </tr>
	    </tbody>
	</table>

	//创建 table
	var table = document.createElement("table");
	table.border = 1;
	table.width = "100%";
	//创建 tbody
	var tbody = document.createElement("tbody");
	table.appendChild(tbody);
	//创建第一行
	tbody.insertRow(0);
	tbody.rows[0].insertCell(0);
	tbody.rows[0].cells[0].appendChild(document.createTextNode("Cell 1,1"));
	tbody.rows[0].insertCell(1);
	tbody.rows[0].cells[1].appendChild(document.createTextNode("Cell 2,1"));
	//创建第二行
	tbody.insertRow(1);
	tbody.rows[1].insertCell(0);
	tbody.rows[1].cells[0].appendChild(document.createTextNode("Cell 1,2"));
	tbody.rows[1].insertCell(1);
	tbody.rows[1].cells[1].appendChild(document.createTextNode("Cell 2,2"));
	//将表格添加到文档主体中
	document.body.appendChild(table);

####2.4 使用 NodeList
	var divs = document.getElementsByTagName("div"),
	i,
	div;
	for (i=0; i < divs.length; i++){
	    div = document.createElement("div");
	    document.body.appendChild(div);
	}

	var divs = document.getElementsByTagName("div"),
	i,
	len,
	div;
	for (i=0, len=divs.length; i < len; i++){
	    div = document.createElement("div");
	    document.body.appendChild(div);
	}