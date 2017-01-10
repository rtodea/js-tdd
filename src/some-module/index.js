function firstFunction() {
  // first function prepares the argument
  return secondFunction('firstFunctionPreparedArgument');
}

function secondFunction(argument) {
  return `secondFunction:${argument}`
}


module.exports = {
  firstFunction,
  secondFunction
};
