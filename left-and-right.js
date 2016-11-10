function foo() {
    console.log(this.a);
}
var a = 2;
var o = { a: 3, foo: foo };
var p = { a: 4 };
o.foo(); // 结果是？


(p.foo = o.foo)(); // 结果是？

p.foo = o.foo;
p.foo(); // 结果是？

(0 || p.foo)(); //结果是？



// 3
// 2
// 4
// 2
