###1. window 对象

####1.1 全局作用域
	var age = 29;
	window.color = "red";
	//在 IE < 9 时抛出错误，在其他所有浏览器中都返回 false
	delete window.age;
	//在 IE < 9 时抛出错误，在其他所有浏览器中都返回 true
	delete window.color; //returns true
	alert(window.age); //29
	alert(window.color); //undefined

	//这里会抛出错误，因为 oldValue 未定义
	var newValue = oldValue;
	//这里不会抛出错误，因为这是一次属性查询
	//newValue 的值是 undefined
	var newValue = window.oldValue;

- 全局变量不能通过 delete 操作符删除，而直接在 window 对象上的定义的属性可以。

####1.2 窗口关系及框架

####1.3 窗口位置
	var leftPos = (typeof window.screenLeft == "number") ?
	window.screenLeft : window.screenX;
	var topPos = (typeof window.screenTop == "number") ?
	window.screenTop : window.screenY;

	//将窗口移动到屏幕左上角
	window.moveTo(0,0);
	//将窗向下移动 100 像素
	window.moveBy(0,100);
	//将窗口移动到(200,300)
	window.moveTo(200,300);
	//将窗口向左移动 50 像素
	window.moveBy(-50,0);

####1.4 窗口大小
	var pageWidth = window.innerWidth,
	      pageHeight = window.innerHeight;
	if (typeof pageWidth != "number"){
	    if (document.compatMode == "CSS1Compat"){
	        pageWidth = document.documentElement.clientWidth;
	        pageHeight = document.documentElement.clientHeight;
	    } else {
	        pageWidth = document.body.clientWidth;
	        pageHeight = document.body.clientHeight;
	    }
	}

	//调整到 100× 100
	window.resizeTo(100, 100);
	//调整到 200× 150
	window.resizeBy(100, 50);
	//调整到 300× 300
	window.resizeTo(300, 300);

####1.5 导航和打开窗口
	//等同于< a href="http://www.wrox.com" target="topFrame"></a>
	window.open("http://www.wrox.com/", "topFrame");

#####1.5.1 弹出窗口
	window.open("http://www.wrox.com/","wroxWindow",
	"height=400,width=400,top=10,left=10,resizable=yes");

	var wroxWin = window.open("http://www.wrox.com/","wroxWindow",
	"height=400,width=400,top=10,left=10,resizable=yes");
	//调整大小
	wroxWin.resizeTo(500,500);
	//移动位置
	wroxWin.moveTo(100,100);

	//调用 close()方法还可以关闭新打开的窗口。
	wroxWin.close();

#####1.5.2 安全限制

#####1.5.3 弹出窗口屏蔽程序
	var blocked = false;
	try {
	    var wroxWin = window.open("http://www.wrox.com", "_blank");
	    if (wroxWin == null){
	        blocked = true;
	    }
	} catch (ex){
	    blocked = true;
	}
	if (blocked){
	    alert("The popup was blocked!");
	}

####1.6 间歇调用和超时调用
	//不建议传递字符串！
	setTimeout("alert('Hello world!') ", 1000);
	//推荐的调用方式
	setTimeout(function() {
	    alert("Hello world!");
	}, 1000);

	//设置超时调用
	var timeoutId = setTimeout(function() {
	    alert("Hello world!");
	}, 1000);
	//注意：把它取消
	clearTimeout(timeoutId);

	//不建议传递字符串！
	setInterval ("alert('Hello world!') ", 10000);
	//推荐的调用方式
	setInterval (function() {
	    alert("Hello world!");
	}, 10000);

	var num = 0;
	var max = 10;
	var intervalId = null;
	function incrementNumber() {
	    num++;
	    //如果执行次数达到了 max 设定的值，则取消后续尚未执行的调用
	    if (num == max) {
	        clearInterval(intervalId);
	        alert("Done");
	    }
	}
	intervalId = setInterval(incrementNumber, 500);

	var num = 0;
	var max = 10;
	function incrementNumber() {
	    num++;
	    //如果执行次数未达到 max 设定的值，则设置另一次超时调用
	    if (num < max) {
	        setTimeout(incrementNumber, 500);
	    } else {
	        alert("Done");
	    }
	}
	setTimeout(incrementNumber, 500);

####1.7 系统对话框
- alert()；
- confirm()；
- prompt()；
- window.print();
- window.find();

###2. location 对象

####2.1 查询字符串参数
	function getQueryStringArgs(){
	    //取得查询字符串并去掉开头的问号
	    var qs = (location.search.length > 0 ? location.search.substring(1) : ""),
	    //保存数据的对象
	    args = {},
	    //取得每一项
	    items = qs.length ? qs.split("&") : [],
	    item = null,
	    name = null,
	    value = null,
	    //在 for 循环中使用
	    i = 0,
	    len = items.length;
	    //逐个将每一项添加到 args 对象中
	    for (i=0; i < len; i++){
	        item = items[i].split("=");
	        name = decodeURIComponent(item[0]);
	        value = decodeURIComponent(item[1]);
	        if (name.length) {
	            args[name] = value;
	        }
	    }
	    return args;
	}

	//假设查询字符串是?q=javascript&num=10
	var args = getQueryStringArgs();
	alert(args["q"]); //"javascript"
	alert(args["num"]); //"10"

####2.2 位置操作
	location.assign("http://www.wrox.com");
	window.location = "http://www.wrox.com";
	location.href = "http://www.wrox.com";

	//假设初始 URL 为 http://www.wrox.com/WileyCDA/
	//将 URL 修改为"http://www.wrox.com/WileyCDA/#section1"
	location.hash = "#section1";
	//将 URL 修改为"http://www.wrox.com/WileyCDA/?q=javascript"
	location.search = "?q=javascript";
	//将 URL 修改为"http://www.yahoo.com/WileyCDA/"
	location.hostname = "www.yahoo.com";
	//将 URL 修改为"http://www.yahoo.com/mydir/"
	location.pathname = "mydir";
	//将 URL 修改为"http://www.yahoo.com:8080/WileyCDA/"
	location.port = 8080;

	//当通过上述任何一种方式修改 URL 之后，浏览器的历史记录中就会生成一条新记录，
	//因此用户通过单击“后退”按钮都会导航到前一个页面。
	//要禁用这种行为，可以使用 replace()方法。
	location.replace("http://www.wrox.com/");

	//位于 reload()调用之后的代码可能会也可能不会执行，这要取决于网络延迟或系统资源等因素。
	//为此，最好将 reload()放在代码的最后一行。
	location.reload(); //重新加载（有可能从缓存中加载）
	location.reload(true); //重新加载（从服务器重新加载）

###3. navigator 对象

####3.1 检测插件
	//检测插件（在 IE 中无效）
	function hasPlugin(name){
	    name = name.toLowerCase();
	    for (var i=0; i < navigator.plugins.length; i++){
	        if (navigator. plugins [i].name.toLowerCase().indexOf(name) > -1){
	            return true;
	        }
	    }
	    return false;
	}
	//检测 Flash
	alert(hasPlugin("Flash"));
	//检测 QuickTime
	alert(hasPlugin("QuickTime"));	

	//检测 IE 中的插件
	function hasIEPlugin(name){
	    try {
	        new ActiveXObject(name);
	        return true;
	    } catch (ex){
	        return false;
	    }
	}
	//检测 Flash
	alert(hasIEPlugin("ShockwaveFlash.ShockwaveFlash"));
	//检测 QuickTime
	alert(hasIEPlugin("QuickTime.QuickTime"));

	//检测所有浏览器中的 Flash
	function hasFlash(){
	    var result = hasPlugin("Flash");
	    if (!result){
	        result = hasIEPlugin("ShockwaveFlash.ShockwaveFlash");
	    }
	    return result;
	}
	//检测所有浏览器中的 QuickTime
	function hasQuickTime(){
	    var result = hasPlugin("QuickTime");
	    if (!result){
	        result = hasIEPlugin("QuickTime.QuickTime");
	    }
	    return result;
	}
	//检测 Flash
	alert(hasFlash());
	//检测 QuickTime
	alert(hasQuickTime());

- plugins 集合有一个名叫 refresh()的方法，用于刷新 plugins 以反映最新安装的插件。
这个方法接收一个参数：表示是否应该重新加载页面的一个布尔值。
如果将这个值设置为 true，则会重新加载包含插件的所有页面；
否则，只更新 plugins集合，不重新加载页面。

####3.2 注册处理程序
	//要将一个站点注册为处理 RSS 源的处理程序，可以使用如下代码。
	navigator.registerContentHandler("application/rss+xml",
	"http://www.somereader.com?feed=%s", "Some Reader");

	//要想将一个应用程序注册为默认的邮件客户端，可以使用如下代码。
	navigator.registerProtocolHandler("mailto",
	"http://www.somemailclient.com?cmd=%s", "Some Mail Client");

###4. screen 对象
	//调整浏览器窗口大小，使其占据屏幕的可用空间
	window.resizeTo(screen.availWidth, screen.availHeight);

###5. history 对象
	//后退一页
	history.go(-1);
	//前进一页
	history.go(1);
	//前进两页
	history.go(2);

	//跳转到最近的 wrox.com 页面
	history.go("wrox.com");
	//跳转到最近的 nczonline.net 页面
	history.go("nczonline.net");

	//另外，还可以使用两个简写方法 back()和 forward()来代替 go()。
	//顾名思义，这两个方法可以模仿浏览器的“后退”和“前进”按钮。
	//后退一页
	history.back();
	//前进一页
	history.forward();

	//通过像下面这样测试该属性的值，可以确定用户是否一开始就打开了你的页面。
	if (history.length == 0){
	    //这应该是用户打开窗口后的第一个页面
	}