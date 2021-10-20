// TASK

console.log(typeof undefined) // -> "undefined"
console.log(typeof 0) // -> "number"
console.log(typeof true) // -> "boolean"
console.log(typeof "foo" ) // -> "string"
console.log(typeof {}) // -> "object"
console.log(typeof [] ) // -> "object"
console.log(typeof null) // -> "object"
console.log(typeof function() {}) // -> "function"
console.log(typeof (function() {})()) // -> "undefined"
console.log(typeof Symbol() ) // -> "symbol"
console.log(typeof typeof window) // -> "string"

// {} - true, [] - false
function isObject(arg) {
  return Object.prototype.toString.apply(arg) === '[object Object]'
}
// // TASK

// Различия между стрелочной и обычной функцией
// 1. Хойстинг
// 2. this
// 3. Синтаксис
// 4. Конструктор
// 5. arguments
// 6. Дупликация параметров


// // 3. Псевдомассив arguments отсутствует в стрелочных функциях
// function bar() {
//  console.log(arguments)
// }

// const barfoo = () => {
//   console.log(arguments) // undefined
// }

// // 4. Стрелочные функции не могут быть использованы в качестве конструкторов
// const Animal = (name, age) => {
//   this.name = name;
//   this.age = age;
// }

// new Animal() // error

// ==============

// Валидация объекта

// function printObject(object) { // object => {}
//   const proto = Object.prototype.toString.call(object)
//   if (proto === '[object Object]') {
//      console.log('It is an object')
//   }
//   else console.log('It is not an object, it is', proto)
// }

// printObject(Symbol())

// console.log(NaN + 1);
// console.log(undefined + 1);
// console.log(null + 1);
// console.log(null + 'null');
// console.log('undefined' + undefined);
// console.log([] + 'hello');

// console.log(String([[], [[1], 2]]));
// console.log(Number([[], [[1], 2]]));
// console.log(Number({ valueOf: () => 4 }));
// console.log(String([[[[]]]]));
// console.log(String({ valueOf: () => 2 }));
// console.log(String({ valueOf: () => 'string' }));
// console.log(String({ toString: () => 'i am object' }));
// console.log(Number({ toString: () => 'old unused number' }));
// console.log(String({ toString: () => 1 }));
// console.log(String([{ toString: () => 'object number 1' }, { toString: () => 'object number 2' }]));

// cc
// console.log(Boolean(new Boolean(false)));

// console.log(1 > 2);
// console.log(1 < 2);
// console.log(1 < 2 < 3);
// console.log(3 > 2 > 1);

// console.log(1 && 2);
// console.log(1 || 2);
// console.log();

// TASK
console.log({} === {}); // false
console.log({} == {}); // false
console.log([] == {}); // false
console.log([] === {}); // false

console.log({ valueOf: () => 3 } == 3); // true
// { valueOf: () => 3 } == 3
// 3 == 3
// 3 === 3

console.log([] == ![]); // true
// [] == false
// [] == 0
// '' == 0
// 0 == 0
// 0 === 0 -> true

console.log([1, 2, 3] == '1,2,3'); // true

console.log('0' == 0); // true
console.log(true == 1); // true
console.log(true == 2); // false
console.log(0 == -0); // true
console.log(0 == '-0'); // false
console.log(false == 0); // true
console.log(false == -0); // true
console.log(NaN == false) // false
console.log(NaN === NaN) // false
console.log(NaN == NaN) // false

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
