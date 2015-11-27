> 这里面主要涉及的是加载顺序、js是单线程。

> 由于浏览器解析是自上而下加载解析，如果一个很大的js文件放在head里面，由于js是单线程，那么浏览器会一直解析，而无法加载解析后面的dom tree，以至于页面出现空白，如果放在body最下面，这样dom tree会先加载解析，呈现出页面再加载解析js里面的内容，这样用户体验会更好。

> 如果js放在head里面，引用了某个dom，但是这时你还没加载dom tree，会报错，可以采用 window.onload = function(){}这样来解决，或者给js设置defer 或者 async来让js异步加载，这样就不会报错了。

###1. defer 延迟执行
> HTML 4.01 为 `<script>` 标签定义了 defer 属性。这个属性的用途是表明脚本在执行时不会影响页面的构造。也就是说，脚本会被延迟到整个页面都解析完毕后再运行。因此，在 `<script>` 元素中设置defer 属性，相当于告诉浏览器立即下载，但延迟执行。

	<script type="text/javascript" defer="defer" src="example.js"></script>

> 在这个例子中，虽然我们把 `<script>` 元素放在了文档的 `<head>` 元素中，但其中包含的脚本将延迟到浏览器遇到 `</html>` 标签后再执行。

> HTML5规范要求脚本按照它们出现的先后顺序执行，因此第一个延迟脚本会先于第二个延迟脚本执行，而这两个脚本会先于 DOMContentLoaded 事件执行。在现实当中，延迟脚本并不一定会按照顺序执行，也不一定会在 DOMContentLoaded 事件触发前执行，因此最好只包含一个延迟脚本。

> IE4、 Firefox 3.5、 Safari 5 和 Chrome 是最早支持 defer 属性的浏览器。其他浏览器会忽略这个属性，像平常一样处理脚本。为此，把延迟脚本放在页面底部仍然是最佳选择。

###2. async 异步脚本
> HTML5 为 `<script>` 元素定义了 async 属性。这个属性与 defer 属性类似，都用于改变处理脚本的行为。同样与 defer 类似， async 只适用于外部脚本文件，并告诉浏览器立即下载文件。但与 defer 不同的是，标记为 async 的脚本并不保证按照指定它们的先后顺序执行。

	<script type="text/javascript" async src="example1.js"></script>
	<script type="text/javascript" async src="example2.js"></script>

> 在以上代码中，第二个脚本文件可能会在第一个脚本文件之前执行。因此，确保两者之间互不依赖非常重要。指定 async 属性的目的是不让页面等待两个脚本下载和执行，从而异步加载页面其他内容。为此，建议异步脚本不要在加载期间修改 DOM。

> 异步脚本一定会在页面的 load 事件前执行，但可能会在 DOMContentLoaded 事件触发之前或之后执行。