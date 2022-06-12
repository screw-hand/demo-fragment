/* 11-generic.ts */

function fn<T>(arg: T): T {
  return arg
}

fn<number>(1)
fn<string>('')
fn<null>(null)
fn<undefined>(undefined)






fn<boolean>(NaN)
