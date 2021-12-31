/* 0-enum.ts */

enum ABCD {
  A, // 0
  B, // 1
  C, // 2
  D  // 3
}

const a: ABCD = ABCD.A;

console.log(a) // 0


enum ABCD2 {
  A = 1, // 1
  B,     // 2
  C = 5, // 2
  D      // 6
}

const a1: ABCD2 = ABCD2.A
const b1: ABCD2 = ABCD2.B
const c1: ABCD2 = ABCD2.C
const d1: ABCD2 = ABCD2.D

console.log(
  {
    a1,
    b1,
    c1,
    d1
  }
)
/* { a1: 1, b1: 2, c1: 5, d1: 6 } */

export {}
