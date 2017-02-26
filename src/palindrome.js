function main(number) {
  const numberStrArray = Array.from(`${number}`);
  const reverseNumberStrArray = Array.from(numberStrArray).reverse();

  return Object.keys(numberStrArray).every((i) => (
    numberStrArray[i] === reverseNumberStrArray[i]
  ));
}

module.exports = main;
