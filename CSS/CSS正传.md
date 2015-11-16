###1. CSS 的简写

####1.1 颜色的缩写
- \#FF00FF；
- RGB(125,0,255)；
- RGB(25%,0%,100%)；
- red；
- windowtext；

####1.2 单位值得省略

####1.3 内外补丁的简写
	//property：value1 value2
	top 和 bottom 为 value1，right 和 left 为 value2；
	//property：value1 value2 value 3
	top 为 value1，right 和 left 为 value2，bottom 为 value3；

####1.4 边框的简写
	div{
	    border-width: 1px;			/* 四个方向大小都为 1px */
	    border-style: solid dashed double;	/* 上为实线，左右为虚线，下位双线 */
	    border-color: #FF0000 #0000;		/* 上下为红，左右为黑 */
	}

- 顺时针：上右下左；

####1.5 背景的简写
	//background 默认值
	background-color：transparent；
	background-images：none；
	background-repeat：repeat；
	background-attachment：scroll；
	background-position：0% 0%；

####1.6 字体的简写
	//font 默认值
	font-style：normal；
	font-variant：normal；
	font-weight：normal；
	font-size：medium；
	line-height：normal；
	font-family：“Time News Roman”；

####1.4 表的简写
	//list-style 默认值
	list-style-type：disc；		/* 预设标记为圆心 */
	list-style-position：outside；	
	list-style-image：none；	/* 覆盖预设标记用图片代替 */

###2. CSS 选择符

####2.1 通配符选择符
	*{
		margin : 0 ;
		padding : 0 ;
	}/* 将页面中所有元素的内外补丁设置为0 */

	p { color : #0000FF ; }	/* 将 p 标签中的颜色设置为蓝色 */
	p * { color : #FF0000 ; }	/* 将 p 标签中的所有后代的颜色设置为红色 */

####2.2 类选择符

####2.3 包含选择符

####2.4 子选择符
- “>”；

####2.5 相邻选择符 
	<p>p</p>
	<strong>1</strong>
	<strong>2</strong>
	<strong>3</strong>
	<strong>4</strong>
	<strong>5</strong>

	//试试下面几个选择符
	p + strong；
	p + strong + strong；
	strong + strong；
	strong + strong + strong；

- “+”；

####2.6 属性选择符
	//定义所有带 class 属性的标签
	* [class]

	//定义 type 属性为”text“的 input 标签
	input [type="text"]

	//定义 title 属性中含有”css“字符串 且 含有空格 的 p 标签
	p[title~="css"]
	<p title="css xhtml">css xhtml</p>//匹配
	<p title="css+xhtml">css+xhtml</p>//因为没有空格，所以不匹配

	//定义 title 属性中含有”css“字符串，且以”css“开头，且以”-“分割的 p 标签
	p[title|="css"]
	<p title="css-xhtml">css xhtml</p>//匹配
	<p title="css+xhtml">css xhtml</p>//不匹配
	<p title="xhtml-css">css xhtml</p>//不匹配

####2.7 ID 选择符

####2.8 选择符的组合关系
	//定义 ID 为”myContent“的p标签
	p#myContent

	//选择符群组，并列关系
	p , .myContent , #title

	//选择符组合，父子关系
	p span

###3. 伪类与伪对象

####3.1 伪类
	a : link { color : red ; }
	a : visited { color : blue ; }
	a : hover { color : green ; }
	a : active { color : black ; }

	input : hover {
	    background-color : #FF0000 ;
	}

####3.2 伪对象
	<style type="text/css">
	p : before { content : "4月1日，" ；}
	p : after { content : "，大家小心不要被骗了啊！" ；}
	</style>

	<p>愚人节快到了</p>

###4. 善处选择符之间的关系

####4.1 选择符的覆盖
- 在实际运用中，最常见的就是在样式中将所有标签的内外补丁定义为0，
然后根据实际需求而再次定义内外补丁的间距。

####4.2 选择符 z 的继承

####4.3 选择符的权重值优先级别
- !important 优先级最高；
- style 属性：优先级积分为1000；
- ID 选择符：优先级积分为100；
- 类选择符、属性选择符：优先级积分为10；
- 标签选择符、伪类及伪对象：优先级积分为1；
- 其他选择符，如通配符选择符等：优先级积分为0；

###5. CSS 拯救 HTML

####5.1 把CSS引入HTML中
- 行间模式：属性 style 中；
- 内嵌样式表：<style></style>之前；
- 外联样式表：<link/>引用；
- 导入样式表：@import；
	<style type="text/css">
	@import url("css/mycss.css")
	</style>

####5.2 样式表的规划与维护