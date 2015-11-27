###1. 工厂模式
	function createPerson(name, age, job) {
	    var o = new Object();

	    o.name = name;
	    o.age = age;
	    o.job = job;
	    o.sayName = function() {
	        alert(this.name);
	    };

	    return o;
	}

	var person = createPerson("Nicholas", 29, "Software Engineer");

> 不足：虽然解决了创建多个相似对象的问题，但是没有解决对象识别的问题（即怎样知道一个对象的类型）。

###2. 构造函数模式
> 可以将他作为一个特定的类型来使用，例如，person instanceof Person。

	function Person(name, age, job) {
	    this.name = name;
	    this.age = age;
	    this.job = job;
	    this.sayName = function() {
	        alert(this.name);
	    };
	}

	var person = new Person("HT", 18, "FE");

> 将构造函数当函数使用的几种案例。

	// 当作构造函数使用
	var person = new Person("Nicholas", 29, "Software Engineer");
	person.sayName(); //"Nicholas"

	// 作为普通函数调用
	Person("Greg", 27, "Doctor"); // 添加到 window
	window.sayName(); //"Greg"

	// 在另一个对象的作用域中调用
	var o = new Object();
	Person.call(o, "Kristen", 25, "Nurse");
	o.sayName(); //"Kristen"

> 不足：每个方法都要在每个实例上重新创建一遍，不同的实例不能共享相同的方法，	例如，alert(person1.sayName == person2.sayName); //false。

###3. 原型模式
	function Person() {}

	Person.prototype.name = "Nicholas";
	Person.prototype.age = 29;
	Person.prototype.job = "Software Engineer";
	Person.prototype.sayName = function() {
	    alert(this.name);
	};

	var person1 = new Person();
	person1.sayName(); //"Nicholas"

	var person2 = new Person();
	person2.sayName(); //"Nicholas"

	alert(person1.sayName == person2.sayName); //true

> 实例一般都是要有属于自己的全部属性的。而这个问题正是我们很少看到有人单独使用原型模式的原因所在。

###4. 组合使用构造函数模式
> 构造函数模式用于定义实例属性，而原型模式用于定义方法和共享的属性。结果，每个实例都会有自己的一份实例属性的副本，但同时又共享着对方法的引用，最大限度地节省了内存。另外，这种混成模式还支持向构造函数传递参数；可谓是集两种模式之长。

	function Person(name, age, job) {
	    this.name = name;
	    this.age = age;
	    this.job = job;
	    this.friends = ["Shelby", "Court"];
	};

	Person.prototype = {
	    constructor: Person,
	    sayName: function() {
	        alert(this.name);
	    }
	}

	var person1 = new Person("Nicholas", 29, "Software Engineer");
	var person2 = new Person("Greg", 27, "Doctor");

	person1.friends.push("Van");
	alert(person1.friends); //"Shelby,Count,Van"
	alert(person2.friends); //"Shelby,Count"
	alert(person1.friends === person2.friends); //false
	alert(person1.sayName === person2.sayName); //true

> 这种构造函数与原型混成的模式，是目前在 ECMAScript中使用最广泛、认同度最高的一种创建自定义类型的方法。可以说，这是用来定义引用类型的一种默认模式。

###5. 动态原型模式
> 有其他 OO 语言经验的开发人员在看到独立的构造函数和原型时，很可能会感到非常困惑。动态原型模式正是致力于解决这个问题的一个方案，它把所有信息都封装在了构造函数中，而通过在构造函数中初始化原型（仅在必要的情况下），又保持了同时使用构造函数和原型的优点。换句话说，可以通过检查某个应该存在的方法是否有效，来决定是否需要初始化原型。

	function Person(name, age, job) {
	    this.name = name;
	    this.age = age;
	    this.job = job;

	    if (typeof this.sayName != "function") {
	        Person.prototype.sayName = function() {
	            alert(this.name);
	        };
	    }
	}

	var friend = new Person("Nicholas", 29, "Software Engineer");
	friend.sayName();

###6. 寄生构造函数模式
	function Person(name, age, job) {
	    var o = new Object();

	    o.name = name;
	    o.age = age;
	    o.job = job;
	    o.sayName = function() {
	        alert(this.name);
	    };

	    return o
	}

	var friend = new Person("Nicholas", 29, "Software Engineer");
	friend.sayName(); //"Nicholas"

> 这个模式可以在特殊的情况下用来为对象创建构造函数。假设我们想创建一个具有额外方法的特殊数组。由于不能直接修改Array构造函数，因此可以使用这个模式。

	function SpecialArray() {
	    var values = new Array();

	    values.push.apply(values, arguments);

	    values.toPipedString = function() {
	        return this.join("|");
	    };

	    return values;
	}

	var colors = new SpecialArray("red", "blue", "green");
	alert(colors.toPipedString()); //"red|blue|green"

> 关于寄生构造函数模式，有一点需要说明：首先，返回的对象与构造函数或者与构造函数的原型属性之间没有关系；也就是说，构造函数返回的对象与在构造函数外部创建的对象没有什么不同。为此，不能依赖 instanceof 操作符来确定对象类型。由于存在上述问题，我们建议在可以使用其他模式的情况下，不要使用这种模式。

###7. 稳妥构造函数模式
> 所谓稳妥对象，指的是没有公共属性，而且其方法也不引用 this的对象。稳妥对象最适合在一些安全的环境中（这些环境中会禁止使用 this 和new），或者在防止数据被其他应用程序（如 Mashup程序）改动时使用。

	function Person(name, age, job) {
	    var o = new Object();

	    o.sayName = function() {
	        alert(name);
	    };

	    return o;
	}

> 注意，在以这种模式创建的对象中， 除了使用 sayName()方法之外，没有其他办法访问 name 的值。可以像下面使用稳妥的 Person 构造函数。

	var friend = Person("Nicholas", 29, "Software Engineer");
	friend.sayName(); //"Nicholas"

> 这样，变量 friend 中保存的是一个稳妥对象，而除了调用 sayName()方法外，没有别的方式可以访问其数据成员。即使有其他代码会给这个对象添加方法或数据成员，但也不可能有别的办法访问传入到构造函数中的原始数据。稳妥构造函数模式提供的这种安全性，使得它非常适合在某些安全执行环境——例如， ADsafe（www.adsafe.org）和 Caja（http://code.google.com/p/google-caja/）提供的环境——下使用。