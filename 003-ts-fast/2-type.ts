/* 2-type.ts */

// 联合类型
type strOrNum = "string" | "number"

// 类型别名
type typeofResult = strOrNum | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function"

// 简单类型
let n: null = null
let udf: undefined = undefined
let num: number = NaN
let str: string = ''
let bool: boolean = true
let obj: {} = {}
let arr: [] = []

// 联合类型
let strNum: strOrNum = ''
strNum = 0

let fn = function (a: any): number {
  return a++
}
function fn2(a: any) {
  return a--
}
let arrowFn = (a: any): typeofResult => typeof a

console.log({
  n,
  udf,
  num,
  str,
  bool,
  obj,
  arr,
  'fn(udf)': fn(udf),
  'fn2(num)': fn(num),
  'arrowFn(bool)': arrowFn(bool)
})