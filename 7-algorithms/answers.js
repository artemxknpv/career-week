// memoize
function memoize(func, timeout = null) {
  const cache = new Map();
  
  return function (...args) {
    if (cache.has(JSON.stringify(args))) {
      return cache.get(args);
    }
    
    cache.set(JSON.stringify(args), JSON.stringify(func.apply(null, args)));
    
    if (timeout && typeof timeout === 'number') {
      setTimeout(() => {
        cache.delete(JSON.stringify(args));
      }, timeout);
    }
    
    return cache.get(args);
  };
}

const calculateSometh = (arg) => {
  if (arg > 10) return arg * 100;
  return arg * 1000;
};
const cacheTimeout = 3000;

const memoizedCalculateSmth = memoize(calculateSometh, cacheTimeout);
memoizedCalculateSmth(1); // вызывает внутри calculateSometh(1) и возвращает результат
memoizedCalculateSmth(1); // не вызывает calculateSometh, а возвращает сохраненное значение из кэша
memoizedCalculateSmth(2); // вызывает внутри calculateSometh(2), т.к. аргумент изменился
memoizedCalculateSmth(1); // не вызывает calculateSometh, по-прежнему из кэша от первого вызова
// опять вызывает calculateSometh(1), т.к. с момента предыдущего вызова прошло больше заданного времени
setTimeout(() => memoizedCalculateSmth(1), 5000); // считается заново


// string division
function divideString(input) {
  const result = []
  let substring = ''
  let targetLettersSet = new Set(input)
  
  for (let i = 0; i < input.length; i++) {
    const currentLetter = input[i]
    substring += currentLetter
    const substringSet = new Set(substring)
    if (!new Set(input.slice(i + 1)).has(currentLetter)) {
      targetLettersSet.delete(currentLetter)
      if (!doIntersect(substringSet, targetLettersSet)) {
        result.push(substring)
        substring = ''
      }
    }
  }
  return result
}
function doIntersect(set1, set2) {
  return new Set(Array.from(set1).filter(x => set2.has(x))).size !== 0
}


// unit sequence
// function findLongestUnitSequence(input) {
//   if (input.length === 0) return 0
//   let prevCounter = 0
//   let curCounter = 0
//   let max = 0
//   let haveZero = false
//
//   for (let i = 0; i < input.length; i++) {
//     if (input[i] == 1) curCounter++
//     else {
//       if (!haveZero) haveZero = true
//       prevCounter = curCounter
//       curCounter = 0
//     }
//     if (prevCounter + curCounter > max) max = prevCounter + curCounter
//   }
//   if (!haveZero) max -= 1
//   return max
// }
//
// console.log(findLongestUnitSequence([1, 0, 1, 1, 1, 1, 1, 1, 0, 1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1])) // 7
// console.log(findLongestUnitSequence([1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1])) // 5
// console.log(findLongestUnitSequence([1, 1, 1, 1, 1])) // 4
// console.log(findLongestUnitSequence([]));

