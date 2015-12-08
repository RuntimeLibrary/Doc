###1. 一句话概括

> 代码

	foo.call(this, arg1, arg2, arg3) 
	== foo.apply(this, arguments) 
	== this.foo(arg1, arg2, arg3)

###2. call 的使用

> 代码

	function A() {
	    this.msg = "msg A";
	    this.getMsg = function() {
	        return this.msg;
	    }
	}

	function B() {
	    this.msg = "msg B";
	    this.setMsg = function(val) {
	        this.msg = val;
	    }
	}

	var a = new A(),
	    b = new B();

	//对象A本身没有setMsg方法，而是B把自己的setMsg方法指派给A使用
	//相当于a.setMsg("call from b")
	b.setMsg.call(a, "call from b");

	console.log(a.getMsg());

###3. 和 apply 的比较

> 代码

	function print(a, b, c, d) {
	    console.log(a + b + c + d);
	}

	function example(a, b, c, d) {
	    //参数显式打散传递
	    print.call(this, a, b, c, d);

	    //参数作为一个整体的数组来传递
	    //方式一
	    print.apply(this, arguments);
	    //方式二
	    print.apply(this, [a, b, c, d]);
	}

	//输出”哈喽沃德“
	example("哈", "喽", "沃", "德");

###4. 总结

> 相同：作用相同，都是在特定的作用域中调用函数；
> 不同：用法不同导致应用场景不同，call的第二个参数必须一个一个列举出来，一般在参数明确的情况下使用，apply的第二个参数是一个参数数组或者argements，一般在参数个数不确定的情况下使用。