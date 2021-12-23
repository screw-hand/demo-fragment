/* 3-diff.ts */

let n: null = null
let udf: undefined = undefined

let any: any;
let unknown: unknown;
let v: void;
let never: never;

any = 0
any = Infinity
any = null
any = undefined
any = ''
any = true
any = {}
any = []
any = { n, udf }
any = [n, udf]
any.push(n)
any.push(udf)
any = unknown
any = v
any = never

unknown = 0
unknown = Infinity
unknown = null
unknown = undefined
unknown = ''
unknown = true
unknown = {}
unknown = []
unknown = { n, udf }
unknown.attr = 'attr'
unknown = [n, udf]
unknown.push(n)
unknown.push(udf)
unknown = any
unknown = v
unknown = never

v = 0
v = Infinity
v = null
v = undefined
v = ''
v = true
v = {}
v = []
v = { n, udf }
v.attr = 'attr'
v = [n, udf]
v.push(n)
v.push(udf)
v = any
v = v
v = never

never = 0
never = Infinity
never = null
never = undefined
never = ''
never = true
never = {}
never = []
never = { n, udf }
never.attr = 'attr'
never = [n, udf]
never.push(n)
never.push(udf)
never = any
never = v
never = never

function returnNull(): void {
  return null
}

function returnUdf(): void {
  return undefined
}

function returnViod(): void {

}

function throwError(): never {
  throw Error()
}

n = undefined
udf = null

export { }