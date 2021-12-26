/* 7-interface.ts */

const num: { x: number, y: number } = {
  x: 0,
  y: NaN
}

interface obj {
  attr: string;
  method(arg: string): void
}

const obj: obj = {
  attr: '',
  method(str: string) { },
}

interface IndexString {
  [indexName: string]: number
}

const indexString: IndexString = {
  a: 1,
  b: 2,
  c: ''
}

interface IndexNumber {
  [index: number]: string
}

const indexNumber: IndexNumber = [
  'a', 'b', 'c', NaN
]

interface Foo {
  x?: string;
  y?(): number;
}

const foo: Foo = {
  x: '',
  y() {
    return NaN
  }
}

interface Readonly {
  readonly attr: string
}

const readonly: Readonly = {
  attr: ''
}
readonly.attr = 'y'


export { }