// TASK

// // console.log(typeof undefined) // ?
// // console.log(typeof 0) // ?
// // console.log(typeof true) // ?
// // console.log(typeof "foo" ) // ?
// // console.log(typeof {}) // ?
// // console.log(typeof [] ) // ?
// // console.log(typeof null) // ?
// // console.log(typeof function() {}) // ?
// // console.log(typeof (function() {})()) // ?
// // console.log(typeof Symbol() ) // ?
// // console.log(typeof typeof window) // ?

// // TASK

// // Различия между стрелочной и обычной функцией
// // 1. У стрелочных нет this; он определяется лексически;
// // 2. Синтаксис (implicit return)
// const print = () => console.log(this);

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

// // 5. Метод попадет в прототип / метод попадет в сам экземпляр класса
// class Hero {
//   print() {}
// }

// const batman = new Hero()
// batman.print() // from Hero.prototype

// class Hero {
//   print = function() {};
// }

// const batman = new Hero()
// batman.print() // from batman object

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
// console.log({} === {});
// console.log({} == {});
// console.log([] == {});
// console.log([] === []);
// console.log({ valueOf: () => 3 } == 3);
// console.log([] == ![]);
// console.log([1, 2, 3] == '1,2,3');
// console.log('0' == 0);
// console.log(true == 1);
// console.log(true == 2);
// console.log(0 == -0);
// console.log(false == 0);
// console.log(false == -0);


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
