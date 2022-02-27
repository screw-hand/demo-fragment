function main() {
  let result = {};

  // code start
  // code end

  return result;
}

const inputCode = main.toString();
const outputCode = (main()).valueOf();
const inputCodeDom = document.getElementById("input");
const outputCodeDom = document.getElementById("output");
inputCodeDom.innerHTML = inputCode;
outputCodeDom.innerHTML = outputCode;
console.log({ inputCode, outputCode });