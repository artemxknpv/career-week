var module = (function () {

  let counter = 0

  function increase(n = 1) { counter += n }
  function drop() { counter = 0 }
  function get() { return counter }

  return { increase, drop, get }
 })()
