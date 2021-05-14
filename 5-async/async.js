// Promise.resolve(1)
//   .then(x => x + 1)
//   .then(x => { throw x })
//   .then(x => console.log(x))
//   .catch(err => console.log(err))
//   .then(x => Promise.resolve(1))
//   .catch(err => console.log(err))
//   .then(x => console.log(x)) // 1
//
//

// Логи в каком порядке выведутся и почему?
//
// console.log('script start');
// setTimeout(function() {
//   console.log('setTimeout');
// }, 0);
// Promise.resolve().then(function() {
//   console.log('promise1');
// }).then(function() {
//   console.log('promise2');
// });
// console.log('script end');

// ==========================================================================================

let a;
let p = new Promise(function (resolve) {
  console.log('TEST A1', a);
  a = 25;
  setTimeout(() => {
    console.log('TEST A2', a);
    resolve(a);
  }, 1000);
});
setTimeout(function timeout() {
  a = 10;
  console.log('TEST A3', a);
}, 1000);
p.then(function (b) {
  console.log('TEST A4', a);
});
console.log('TEST A5', a);
// ====================================================================================

// setTimeout(() => console.log('1'), 0);
// setTimeout(() => console.log('2'), 100);
//
// const promise = new Promise((resolve) => {
//   console.log('3'); // ?
//   resolve('6');
// }).then(console.log); // ?
//
// Promise.resolve('5').then(console.log); // ?
//
// Promise.reject(5)
//   .then(console.log)
//   .then(() => console.log('35'))
//   .catch(() => console.log('error')) // ?
//   .then(() => console.log('ok')) // ?
//
// promise.then(() => console.log('promise is done')); // ?
//
// setTimeout(() => {
//   console.log('first timeout'); // ?
//   setTimeout(() => {
//     console.log('second timeout'); // ?
//   }, 100);
// }, 1000);
//
// console.log('last one'); // ?

// =======================================================

/**
 * Необходимо написать функцию, которая на вход принимает урл,
 * асинхронно ходит по этому урлу GET запросом и возвращает данные (json).
 * Для получении данных использовать fetch.
 * Если во время запроса произошла ошибка, то пробовать запросить ещё 5 раз.
 * Если в итоге информацию получить не удалось, вернуть ошибку "Заданный URL недоступен".
 */

// ========

// function resolveAfter2Seconds(x) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve(x); //
//     }, 2000);
//   });
// }
//
// async function add1(x) {
//   const a = await resolveAfter2Seconds(20);
//   const b = await resolveAfter2Seconds(30);
//   return x + a + b;
// }
//
// add1(10).then(console.log);
//
// async function add2(x) {
//   const p_a = resolveAfter2Seconds(20);
//   const p_b = resolveAfter2Seconds(30);
//   return x + await p_a + await p_b;
// }
//
// add2(10).then(console.log);
