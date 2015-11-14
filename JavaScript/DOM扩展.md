###1. 元素遍历

####1.1 querySelector() 方法
	//取得 body 元素
	var body = document.querySelector("body");
	//取得 ID 为"myDiv"的元素
	var myDiv = document.querySelector("#myDiv");
	//取得类为"selected"的第一个元素
	var selected = document.querySelector(".selected");
	//取得类为"button"的第一个图像元素
	var img = document.body.querySelector("img.button");

####1.2 querySelectorAll() 方法
	//取得某<div>中的所有<em>元素（类似于 getElementsByTagName("em")）
	var ems = document.getElementById("myDiv").querySelectorAll("em");
	//取得类为"selected"的所有元素
	var selecteds = document.querySelectorAll(".selected");
	//取得所有<p>元素中的所有<strong>元素
	var strongs = document.querySelectorAll("p strong");

	//要取得返回的 NodeList 中的每一个元素，可以使用 item()方法，也可以使用方括号语法，比如：
	var i, len, strong;
	    for (i=0, len=strongs.length; i < len; i++){
	    strong = strongs[i]; //或者 strongs.item(i)
	    strong.className = "important";
	}

####1.3 matchesSelector() 方法
	if (document.body.matchesSelector("body.page1")){
	    //true
	}

###2. 元素遍历
	 childElementCount：返回子元素（不包括文本节点和注释）的个数。
	 firstElementChild：指向第一个子元素； firstChild 的元素版。
	 lastElementChild：指向最后一个子元素； lastChild 的元素版。
	 previousElementSibling：指向前一个同辈元素； previousSibling 的元素版。
	 nextElementSibling：指向后一个同辈元素； nextSibling 的元素版。

	//下面来看一个例子。过去，要跨浏览器遍历某元素的所有子元素，需要像下面这样写代码。
	var i,
	len,
	child = element.firstChild;
	while(child != element.lastChild){
	    if (child.nodeType == 1){ //检查是不是元素
	        processChild(child);
	    }
	    child = child.nextSibling;
	}
	//而使用 Element Traversal 新增的元素，代码会更简洁。
	var i,
	len,
	child = element.firstElementChild;
	while(child != element.lastElementChild){
	    processChild(child); //已知其是元素
	    child = child.nextElementSibling;
	}

###3. HTML 5

####3.1 与类相关的扩充

#####3.1.1 getElementByClassName() 方法
	//取得所有类中包含"username"和"current"的元素，类名的先后顺序无所谓
	var allCurrentUsernames = document.getElementsByClassName("username current");
	//取得 ID 为"myDiv"的元素中带有类名"selected"的所有元素
	var selected = document.getElementById("myDiv").getElementsByClassName("selected");

- 因为返回的对象是 NodeList，所以使用这个方法与使用 getElementsByTagName() 以及其他返回 NodeList 的 DOM 方法都具有同样的性能问题。

#####3.1.2 classList 属性
	<div class="bd user disabled">...</div>
	//删除"user"类
	//首先，取得类名字符串并拆分成数组
	var classNames = div.className.split(/\s+/);
	//找到要删的类名
	var pos = -1,
	i,
	len;
	for (i=0, len=classNames.length; i < len; i++){
	    if (classNames[i] == "user"){
	        pos = i;
	        break;
	    }
	}
	//删除类名
	classNames.splice(i,1);
	//把剩下的类名拼成字符串并重新设置
	div.className = classNames.join(" ");

	 add(value)：将给定的字符串值添加到列表中。如果值已经存在，就不添加了。
	 contains(value)：表示列表中是否存在给定的值，如果存在则返回 true，否则返回 false。
	 remove(value)：从列表中删除给定的字符串。
	 toggle(value)：如果列表中已经存在给定的值，删除它；如果列表中没有给定的值，添加它。

	div.classList.remove("user");
	//删除"disabled"类
	div.classList.remove("disabled");
	//添加"current"类
	div.classList.add("current");
	//切换"user"类
	div.classList.toggle("user");
	//确定元素中是否包含既定的类名
	if (div.classList.contains("bd") && !div.classList.contains("disabled")){
	    //执行操作
	)
	//迭代类名
	for (var i=0, len=div.classList.length; i < len; i++){
	    doSomething(div.classList[i]);
	}

####3.2 焦点管理
	var button = document.getElementById("myButton");
	button.focus();
	alert(document.activeElement === button); //true

	var button = document.getElementById("myButton");
	button.focus();
	alert(document.hasFocus()); //true

####3.3 HTMLDocument 的变化

#####3.3.1 readyState 属性
	 loading，正在加载文档；
	 complete，已经加载完文档。

	if (document.readyState == "complete"){
	    //执行操作
	}

#####3.3.2 兼容模式
	if (document.compatMode == "CSS1Compat"){
	    alert("Standards mode");
	} else {
	    alert("Quirks mode");
	}

#####3.3.3 head 模式
	var head = document.head || document.getElementsByTagName("head")[0];

####3.4 字符集属性
	alert(document.charset); //"UTF-16"
	document.charset = "UTF-8";

	if (document.charset != document.defaultCharset){
	    alert("Custom character set being used.");
	}

####3.5 自定义数据属性
	<div id="myDiv" data-appId="12345" data-myname="Nicholas"></div>
	//本例中使用的方法仅用于演示
	var div = document.getElementById("myDiv");
	//取得自定义属性的值
	var appId = div.dataset.appId;
	var myName = div.dataset.myname;
	//设置值
	div.dataset.appId = 23456;
	div.dataset.myname = "Michael";
	//有没有"myname"值呢？
	if (div.dataset.myname){
	    alert("Hello, " + div.dataset.myname);
	}

####3.6 插入标记

#####3.6.1 innerHTML 属性
- 不要指望所有浏览器返回的 innerHTML 值完全相同。

#####3.6.2 outerHTML 属性

#####3.6.3 insertAdjacentHTML() 方法
	 "beforebegin"，在当前元素之前插入一个紧邻的同辈元素；
	 "afterbegin"，在当前元素之下插入一个新的子元素或在第一个子元素之前再插入新的子元素；
	 "beforeend"，在当前元素之下插入一个新的子元素或在最后一个子元素之后再插入新的子元素；
	 "afterend"，在当前元素之后插入一个紧邻的同辈元素。

	//作为前一个同辈元素插入
	element.insertAdjacentHTML("beforebegin", "<p>Hello world!</p>");
	//作为第一个子元素插入
	element.insertAdjacentHTML("afterbegin", "<p>Hello world!</p>");
	//作为最后一个子元素插入
	element.insertAdjacentHTML("beforeend", "<p>Hello world!</p>");
	//作为后一个同辈元素插入
	element.insertAdjacentHTML("afterend", "<p>Hello world!</p>");

#####3.6.4 内存与性能问题
	//这种每次循环都设置一次 innerHTML 的做法效率很低。而且，每次循环还要从 innerHTML 中读取一次信息，
	//就意味着每次循环要访问两次 innerHTML。最好的做法是单独构建字符串，然后再一次性地将结果字符串赋值给 innerHTML，
	//像下面这样：
	for (var i=0, len=values.length; i < len; i++){
	    ul.innerHTML += "<li>" + values[i] + "</li>"; //要避免这种频繁操作！！
	}

	//这个例子的效率要高得多，因为它只对 innerHTML 执行了一次赋值操作。
	var itemsHtml = "";
	for (var i=0, len=values.length; i < len; i++){
	    itemsHtml += "<li>" + values[i] + "</li>";
	}
	ul.innerHTML = itemsHtml;

- 在插入大量新 HTML 标记时，使用 innerHTML 属性与通过多次 DOM 操作先创建节点再指定它们之间的关系相比，
效率要高得多。这是因为在设置 innerHTML 或 outerHTML 时，就会创建一个 HTML解析器。
这个解析器是在浏览器级别的代码（通常是 C++编写的）基础上运行的，因此比执行 JavaScript 快得多。

####3.7 scrollIntoView() 方法
	//让元素可见
	document.forms[0].scrollIntoView();

###4. 专有扩展

####4.1 文档模式
	//要强制浏览器以某种模式渲染页面，可以使用 HTTP 头部信息 X-UA-Compatible，或通过等价的<meta>标签来设置：
	<meta http-equiv="X-UA-Compatible" content="IE=IEVersion">

####4.2 children 属性
	var childCount = element.children.length;
	var firstChild = element.children[0];

####4.3 contains() 方法
	alert(document.documentElement.contains(document.body)); //true

	function contains(refNode, otherNode){
	    if (typeof refNode.contains == "function" && (!client.engine.webkit || client.engine.webkit >= 522)){
	        return refNode.contains(otherNode);
	    } else if (typeof refNode.compareDocumentPosition == "function"){
	        return !!(refNode.compareDocumentPosition(otherNode) & 16);
	    } else {
	        var node = otherNode.parentNode;
	        do {
	            if (node === refNode){
	                return true;
	            } else {
	                node = node.parentNode;
	            }
	        } while (node !== null);
	        return false;
	    }
	}

####4.4 插入文本

#####4.4.1 innerText 属性
	function getInnerText(element){
	    return (typeof element.textContent == "string") ?
	    element.textContent : element.innerText;
	}
	function setInnerText(element, text){
	    if (typeof element.textContent == "string"){
	        element.textContent = text;
	    } else {
	        element.innerText = text;
	    }
	}
	setInnerText(div, "Hello world!");
	alert(getInnerText(div)); //"Hello world!"

#####4.4.2 outerText 属性

####4.5 滚动
	 scrollIntoViewIfNeeded(alignCenter)：只在当前元素在视口中不可见的情况下，才滚
	动浏览器窗口或容器元素，最终让它可见。如果当前元素在视口中可见，这个方法什么也不做。
	如果将可选的 alignCenter 参数设置为 true，则表示尽量将元素显示在视口中部（垂直方向）。
	Safari 和 Chrome 实现了这个方法。
	 scrollByLines(lineCount)：将元素的内容滚动指定的行高， lineCount 值可以是正值，
	也可以是负值。 Safari 和 Chrome 实现了这个方法。
	 scrollByPages(pageCount)：将元素的内容滚动指定的页面高度，具体高度由元素的高度决
	定。 Safari 和 Chrome 实现了这个方法。

	//将页面主体滚动 5 行
	document.body.scrollByLines(5);
	//在当前元素不可见的时候，让它进入浏览器的视口
	document.images[0].scrollIntoViewIfNeeded();
	//将页面主体往回滚动 1 页
	document.body.scrollByPages(-1);

- 希望大家要注意的是， scrollIntoView()和 scrollIntoViewIfNeeded()的作用对象是元素的容器，
而 scrollByLines()和 scrollByPages()影响的则是元素自身。
- 由于 scrollIntoView()是唯一一个所有浏览器都支持的方法，因此还是这个方法最常用。

