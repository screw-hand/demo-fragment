/* 8-extends.ts */

interface B {
  b: string;
}

interface AB extends B {
  a: string
}

const ab: AB = {
  a: '',
  b: ''
}

interface c extends B, AB {
  c: string
}

const abc: c = {
  a: '',
  b: '',
  c: ''
}

interface Ic extends c {
  a: String
}

