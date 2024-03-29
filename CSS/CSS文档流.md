> CSS的定位机制有3种：普通流、浮动（float：left/right/none）和定位（position:static/relative/absolute/）。

###1. 文档流

> 普通流就是正常的文档流，在HTML里面的写法就是从上到下，从左到右的排版布局。例如，

	<div id=”01”></div><div id=”02”></div><div></div>

> 很显然这是最普通的文档流，从左到右，一个挨一个按照顺序01先，02其次，03最后排列。

###2. 浮动

> 一旦给其中的某个div进行float属性或者absolute定位（不包括static/relative，这两个依然保持正常的文档流），则它完全脱离文档流，不占空间。

> 为了能更好辨认，分别给01绿色，02灰色，03黄色。然后再给01左浮动。结果，01脱离了文档流，完全不占空间，所以02顺势顶替了01原来的位置，结果02被01盖住了。

###3. 定位

> 同理，absolute定位跟float一样，脱离了文档流，不再占原来文档流的空间了。

> 反复想一想，高度自适应的原理其实就是这个：

	<div id=”a”>
	<div id=”b”>这是b</div>
	<div id=”c”>这是c</div>
	</div>

> 这个结构是a包住b和c，颜色不变，a的高度为自动，b的高度为100，C的高度为500。b和c都为左浮动。

> 很明显a没有被撑开了。原因是它们浮动了就不再占空间了。既然没有空间可占，那就等于容器里没有东西，所以不撑开。解决办法是在黄色div的后面加个div，然后清除浮动。让他有空间可占，自然就撑开了。

###4. 总结

> 1. CSS的定位机制有3种：普通流、浮动和定位。
> 2. 文档流：从上到下，从左到右，一个挨一个的简单或者叫正常布局。
> 3. 定位（position）：
	static：保持文档流；
	relative：相对本身的原始位置发生位移且保持文档流，占空间；
	absolute：脱离文档流，不占空间且相对于其包含块来定位。
> 4. 浮动（flaot）：脱离文档流，不占空间。
> 5. 以前总是觉得position：static这个属性很多余，现在看来他的作用就是让元素保持文档流的。