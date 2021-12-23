/* 2-type.ts */

let n: null = null
let udf: undefined = undefined
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
num = null
num = undefined
num = ''
num = true
num = { n, udf }
num.attr = 'attr'
num = [n, udf]
num.push(n)
num.push(udf)

str = 0
str = Infinity
str = null
str = undefined
str = ''
str = true
str = { n, udf }
str.attr = 'attr'
str = [n, udf]
str.push(n)
str.push(udf)

bool = 0
bool = Infinity
bool = null
bool = undefined
bool = ''
bool = true
bool = { n, udf }
bool.attr = 'attr'
bool = [n, udf]
bool.push(n)
bool.push(udf)

obj = 0
obj = Infinity
obj = null
obj = undefined
obj = ''
obj = true
obj = { n, udf }
obj.attr = 'attr'
obj = [n, udf]
obj.push(n)
obj.push(udf)

arr = 0
arr = Infinity
arr = null
arr = undefined
arr = ''
arr = true
arr = { n, udf }
arr.attr = 'attr'
arr = [n, udf]
arr.push(n)
arr.push(udf)

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