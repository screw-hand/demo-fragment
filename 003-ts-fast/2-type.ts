/* 2-type.ts */

let n: any = null
let udf: any = undefined
let num: number = NaN
let str: string = ''
let bool: boolean = true
let obj: {} = {}
let arr: any[] = []
let fn = function (a: any): number {
  return a++
}
function fn2(a: any): number {
  return a--
}
let arrowFn = (a: any): any => typeof a

num = 0
num = Infinity
// num = ''
// num = true
// num = {}
// num = []

// TODO



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

export { }