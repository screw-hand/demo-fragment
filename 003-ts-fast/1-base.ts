/* 1-base.ts */

let n = null
let udf = undefined
let num = NaN
let str = ''
let bool = true
let obj = {}
let arr = []
let fn = function (a) {
  return a++
}
function fn2(a) {
  return a--
}
let arrowFn = (a) => typeof a

console.log({
  n,
  udf,
  num,
  str,
  bool,
  obj,
  arr,
  'fn(udf)': fn(udf),
  'fn2(num)': fn2(num),
  'arrowFn(bool)': arrowFn(bool)
})

export {}