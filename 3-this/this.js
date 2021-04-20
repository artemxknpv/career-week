// 1
// const object = {
//   message: 'Hello, World!',
//
//   getMessage() {
//     const message = 'Hello, Earth!';
//     return this.message;
//   }
// };
//
// console.log(object.getMessage()); //

// 2

// function Pet(name) {
//   this.name = name;
//
//   this.getName = () => this.name;
// }
//
// const cat = new Pet('Fluffy');
//
// console.log(cat.getName()); // What is logged?
//
// const { getName } = cat;
// console.log(getName());     // What is logged?
//
// // 3
//
// const object = {
//   message: 'Hello, World!',
//
//   logMessage() {
//     console.log(this.message); // What is logged?
//   }
// };
//
// setTimeout(object.logMessage, 1000);

// 4

// Как вызвать функцию logMessage так, чтобы она выдала 'Hello, World!'?
// const object = {
//   message: 'Hello, World!'
// };
//
// function logMessage() {
//   console.log(this.message); // "Hello, World!"
// }

// 5
//
// const object = {
//   who: 'World',
//
//   greet() {
//     return `Hello, ${this.who}!`;
//   },
//
//   farewell: () => {
//     return `Goodbye, ${this.who}!`;
//   }
// };
//
// console.log(object.greet());    // What is logged?
// console.log(object.farewell()); // What is logged?

// 6

// var length = 4;
// function callback() {
//   console.log(this.length); // What is logged?
// }
//
// const object = {
//   length: 5,
//   method(callback) {
//     callback();
//   }
// };
//
// object.method(callback, 1, 2);

// 7

// var length = 4;
// function callback() {
//   console.log(this.length); // What is logged?
// }
//
// const object = {
//   length: 5,
//   method() {
//     arguments[0]();
//   }
// };
//
// object.method(callback, 1, 2);

// 8

// const age = 10;
// const user = {
//   age: 20,
//   getAge: function () {
//     const age = 30;
//     console.log(this.age);
//     return this.age;
//   }
// };
//
// // Что будет результатом выполнения?:
//
// user.getAge()
//
// const getAge = user.getAge;
// getAge();
//
// let getRealAge = getAge.bind(user);
// getRealAge();
// getAge();
//
// getRealAge = getAge.bind();
// getRealAge();
//
// setTimeout(user.getAge, 1000)
//

// 9
//
// var a = {
//   name: 'a',
//   foo: function () {
//     console.log(this.name);
//   }
// };
//
// a.foo(); // ?
//
// var bar = a.foo;
// bar(); // ?
//
// var b = {
//   name: 'b'
// };
// b.foo = a.foo;
// b.foo(); // ?
//
// var c = {
//   name: 'c'
// };
//
// bar.call(c, 1, 2); // ?
// a.foo.apply(b, [1, 2]); // ?
// a.foo.bind(b).call(c); // ?
// a.foo.bind(b).bind(c)(); // ?
