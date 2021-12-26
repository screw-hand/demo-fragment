/* 6-fn.ts */

function fn(x: number, y: number) {
  return x + y
}

const func = function (x: number, y: number) {
  return x + y
}

function selectable(x: number, y?: number) {
  return x + (y ?? 0)
}

function defaultParams(x: number, y: number = 0) {
  return x + y
}

function selectableNotDefaultParams(x?: number = 0) {
}

function restParams(...args: number[]) { }

function deconstructionArr([x, y]: [number, number]) { }

function deconstructionObj({ x, y }: { x: number, y: number }) { }

function returnType(x: number, y: number): number {
  return x + y
}

function add(x: number, y: number): number;
function add(x: any[], y: any[]): any[];
function add(x: number | any[], y: number | any[]): any {
  if (typeof x === 'number' && typeof y === 'number') {
    return x + y;
  }
  if (Array.isArray(x) && Array.isArray(y)) {
    return [...x, ...y];
  }
}

const a: number = add(1, 2);
const b: number[] = add([1], [2]);

const arrowFn: (x: number, y: number) => number = (x: number, y: number) => {
  return x + y 
}

const arrowFn1 = (x: number, y: number) : number => {
  return x + y
}

export { }
