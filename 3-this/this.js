// 1
// function foo() {} // function declaration
// const bar = function () {} // function expression

const object = {
  message: 'Hello, World!',

  getMessage() {
    const message = 'Hello, Earth!';
    return this.message;
  }
};

//
// console.log(object.getMessage()); // ?

// Способы вызова функций:
// 1. direct invocation / прямой вызов – foo()
// 2. method invocation / вызов метода - obj.foo()
// 3. [.bind] | .call, .apply / indirect invocation - foo.call(this, ...)
// 4. new Foo() - вызов конструктора / constructor invocation

// Алгоритм определения this в НЕ-стрелочных функциях:
// 1. Функция вызвана с ключ. словом new ->
// this === вновь созданный объект в теле этой функции

// 2. Функция вызвана с помощью метода .call / .apply ИЛИ
// ранее была создана с помощью метода .bind ->
// this === объект, переданный в эти методы первым аргументом

// 3. Функция вызвана как метод объекта N -> this === N

// 4. В остальных случаях -> this === глобальный объект

// Если функция стрелочная:
// this -> определяется лексически

// function showThis() {
//   // this = Object.create(showThis.prototype) – если new showThis()
//   console.log(this)
//   // return this – если new showThis()
// }

// 1)
// const thisObj = new showThis() // this -> thisObj

// new foo():
// ДО ВЫПОЛНЕНИЯ:
// 1. Создает в теле функции новый объект
// 2. this -> этот новый объект
// 3. this.__proto__ -> foo.prototype
// ВЫПОЛНЕНИЕ:
// 4. Выполняем функцию
// 5. Функция возвращает this автоматически;

// 2)
// showThis.call({ prop: 'hello world' }) // { prop: 'hello world' }

// 3)
// const showThisBound = showThis.bind({ prop: 'hello world' })
// const result = new showThisBound(); // result {}

// 4)
// const bar = { showThis };
// bar.showThis(); // { showThis: f } (bar)
// const newObj = new bar.showThis(); // {} newObj
// const anotherObj = new bar.showThis.call({ test: '1' }); // {} anotherObj

// function showThisWithArrow() {
//   // this -> window
//   const arrow = () => {
//     // собственный this отсутствует
//     console.log(this)
//   }
//   arrow();
// }

// showThisWithArrow();


// 2
// function Pet(name) {
//   // this -> Object.create(Pet.prototype)
//   this.name = name;
//   this.getName = () => this.name;
// }
//
// const cat = new Pet('Fluffy');
// console.log(cat.getName()); // What is logged?
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
//   console.log(this.message);
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
