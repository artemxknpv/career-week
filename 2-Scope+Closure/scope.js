// // 1

function scope() {
  var x = 5
  if (true) {
    var x = 3
    function foo() { }
  }

  console.log(foo)
  console.log(x)
}

const x = 10
var foo = 6

/* */
(function immediateA(a) {
  return (function immediateB(b) {
    console.log(a); // 0
  })(1);
})(0);
/* */

function createCounter() {
  let counter = 0;

  const controls = {
    increase: (n = 1) => counter += n,
    drop: () => { counter = 0 },
    get: () => counter,
  }

  return controls;
}

const userCounter = createCounter();
userCounter.increase();

const adCounter = createCounter();

function createIncrement() {
  let count = 0;
  function increment() {
    count++;
  }
  let message = `Count is ${count}`;
  function log() {
    console.log(message);
  }

  return [increment, log];
}
const [increment, log] = createIncrement();
increment();
increment();
increment();
log();

// {
//    i = 2
//   const log = () => {
//     console.log(i);
//   }
//   setTimeout(log, 100);
// }

// for (let i = 0; i < 3; i++) {
//   const log = () => {
//     console.log(i);
//   }
//   setTimeout(log, 0);
// }

// //

// // 2
// //
// for (var j = 0; j < 10; j++) {
  // ((i) => setTimeout(() => console.log(i), 0))(j)
// }

// // 3

// // Что выведет код? Как называется этот паттерн? Как это работает?
// for (var s = 0; s < 5; s++) {
//   (function(i) { setTimeout(() => console.log(i)) }(s))
// }

// // 4 Which of these 3 functions access outer scope variables?

// // let countClicks = 0;
// // document.addEventListener('click', function clickHandler() {
// //   countClicks++;
// // });
// // // ----
// // const result = (function immediate(number) {
// //   const message = `number is: ${number}`;
// //   return message;
// // })(100);
// // // ----
// // setTimeout(function delayedReload() {
// //   location.reload();
// // }, 1000);

// // 5
// //
// // (function immediateA(a) {
// //   return (function immediateB(b) {
// //     console.log(a); // ?
// //   })(1);
// // })(0);

// // 6

// // let count = 0;
// // (function immediate() {
// //   if (count === 0) {
// //     let count = 1;
// //     console.log(count); // ?
// //   }
// //   console.log(count); // ?
// // })();

// 7 !important

// // function createIncrement() {
// //   let count = 0;
// //   function increment() {
// //     count++;
// //   }
// //
// //   let message = `Count is ${count}`;
// //   function log() {
// //     console.log(message);
// //   }
// //
// //   return [increment, log];
// // }
// //
// // const [increment, log] = createIncrement();
// // increment();
// // increment();
// // increment();
// // log(); // ?

// // 8

// // Initial snippet:
// // function createStack() {
// //   return {
// //     items: [],
// //     push(item) {
// //       this.items.push(item);
// //     },
// //     pop() {
// //       return this.items.pop();
// //     }
// //   };
// // }
// //
// // const stack = createStack();
// // stack.push(10);
// // stack.push(5);
// // stack.pop(); // => 5
// //
// // stack.items; // => [10]
// // stack.items = [10, 100, 1000]; // Encapsulation broken! Fix it.
// //
// // // Rewrite:
// //
// // function createStack() {
// //   // Write your code here...
// // }
// //
// // const stack = createStack();
// // stack.push(10);
// // stack.push(5);
// // stack.pop(); // => 5
// //
// // stack.items; // => undefined


// // 9

// // Напишите функцию multiply, которая принимает 2 числовых аргумента и возвращает результат их произведения;

// //   function multiply(num1, num2) {
// //     // Write your code here...
// //   }
// //
// // // Если multiply(num1, numb2) вызвана с 2 аргументами, нужно вернуть произведение этих аргументов.
// // // НО: если функция вызвана с одним аргументом num1:
// // // const anotherFunc = multiply(5) // num1 == 5
// // // она должна вернуть другую функцию, которая будет принимать один аргумент и возвращать результат произведения этого аргумента и num1;
// //
// // multiply(4, 5); // => 20
// // multiply(3, 3); // => 9
// //
// // const double = multiply(2);
// // double(5);  // => 10
// // double(11); // => 22
