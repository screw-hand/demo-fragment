function main() {
  let result = {};

  // code start

  // code end

  return result;
}

const inputCode = main.toString();
const outputObj = main().valueOf();
const outputCode =
  "{" +
  "\n" +
  Object.keys(outputObj)
    .map((k) => {
      const v = outputObj[k];
      return `  ${k}: ${v}`;
    })
    .join("\n") +
  "\n" +
  "}";
const inputCodeDom = document.getElementById("input");
const outputCodeDom = document.getElementById("output");
inputCodeDom.innerHTML = inputCode;
outputCodeDom.innerHTML = outputCode;
console.log({ inputCode, outputCode });
