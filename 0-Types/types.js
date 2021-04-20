// TASK

// console.log(typeof undefined) // ?
// console.log(typeof 0) // ?
// console.log(typeof true) // ?
// console.log(typeof "foo" ) // ?
// console.log(typeof {}) // ?
// console.log(typeof [] ) // ?
// console.log(typeof null) // ?
// console.log(typeof function() {}) // ?
// console.log(typeof (function() {})()) // ?
// console.log(typeof Symbol() ) // ?
// console.log(typeof typeof window) // ?

// TASK

console.log(NaN + 1);
console.log(undefined + 1);
console.log(null + 1);
console.log(null + 'null');
console.log('undefined' + undefined);
console.log([] + 'hello');

console.log(String([[], [[1], 2]]));
console.log(Number([[], [[1], 2]]));
console.log(Number({ valueOf: () => 4 }));
console.log(String([[[[]]]]));
console.log(String({ valueOf: () => 2 }));
console.log(String({ valueOf: () => 'string' }));
console.log(String({ toString: () => 'i am object' }));
console.log(Number({ toString: () => 'old unused number' }));
console.log(String({ toString: () => 1 }));
console.log(String([{ toString: () => 'object number 1' }, { toString: () => 'object number 2' }]));
// ToBoolean(object)

// cc
console.log(Boolean(new Boolean(false)));

console.log(1 > 2);
console.log(1 < 2);
console.log(1 < 2 < 3);
console.log(3 > 2 > 1);

console.log(1 && 2);
console.log(1 || 2);
console.log();

// TASK

console.log({} === {});
console.log({} == {});
console.log([] == {});
console.log([] === []);
console.log('0' == 0);
console.log(true == 1);
console.log(true == 2);
console.log(0 == -0);
console.log(false == 0);
console.log(false == -0);
console.log();


// TASK

// var n = 1;
//
// function f(n) {
//   n = 3;
// }
// f(n);
//
// console.log(n); // ?
//
// var obj = { a: 1 };
//
// function f1(o) {
//   o.a = 5;
// }
// f1(obj);
//
// console.log(obj); // ?
//
// var obj = { a: 1 };
//
// function f2(o) {
//   o = { hello: 1 };
// }
//
// f2(obj);
//
// console.log(obj); // ?

// 5
// Реализуйте полифилл для Object.is

// function objectIs(val1, val2) {
//   // ...напишите код здесь
// }
