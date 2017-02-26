class Some {

  static firstFunction() {
    // first function prepares the argument
    return Some.secondFunction('firstFunctionPreparedArgument');
  }

  static secondFunction(argument) {
    return `secondFunction:${argument}`;
  }

}

const obj = {
  firstFunction: () => {
    return obj.secondFunction('firstFunctionPreparedArgument');
  },

  secondFunction: (argument) => {
    return `secondFunction:${argument}`;
  }
};


module.exports = obj;
