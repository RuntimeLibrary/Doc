# 

###1. jQuery 的无 new 创建

> 示例

	var jQuery = function() {
	    return jQuery.fn.init();
	};

	jQuery.fn = jQuery.prototype = {
	    init: function() {
	        this.age = 18;
	        return this;
	    },
	    name: function() {},
	    age: 20
	};

	//原型传递
	jQuery.fn.init.prototype = jQuery.fn;

> 因为是引用传递，所以不用担心循环引用的性能问题。

# 

###2. 链式调用

> 示例

	jQuery.prototype = {
	    funcA: function() {
	        //do something
	        return this;
	    },
	    funcB: function() {
	        //do something
	        return this;
	    },
	    //...
	};

# 

###3. 插件接口

> 示例

	jQuery.extend = jQuery.fn.extend = function() {
	    var src, copyIsArray, copy, name, options, clone,
	        target = arguments[0] || {},
	        i = 1,
	        length = arguments.length,
	        deep = false;

	    if (typeof target === "boolean") {
	        deep = target;
	        target = arguments[1] || {};
	        i = 2;
	    }

	    if (typeof target !== "object" && !jQuery.isFunction(target)) {
	        target = {};
	    }

	    if (length === 1) {
	        target = this;
	        --i;
	    }

	    for (; i < length; i++) {
	        if ((options = arguments[i]) != null) {
	            for (name in options) {
	                src = target[name];
	                copy = options[name];

	                if (target === copy) {
	                    continue;
	                }

	                if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {
	                    if (copyIsArray) {
	                        copyIsArray = false;
	                        clone = src && jQuery.isArray(src) ? src : [];
	                    } else {
	                        clone = src && jQuery.isPlainObject(src) ? src : [];
	                    }
	                    target[name] = jQuery.extend(deep, clone, copy);
	                } else if (copy !== undefined) {
	                    target[name] = copy;
	                }
	            }
	        }
	    }

	    return target;
	};

> jQuery.extend 和 jQuery.fn.extend 其实是指向同一个方法的不同引用。
> jQuery.extend 对jQuery本身的属性和方法进行了扩展。
> jQuery.fn.extend 对jQuery原型的属性和方法进行了扩展。