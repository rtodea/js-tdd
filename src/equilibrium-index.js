function main(list) {
  let sum = 0;
  list.forEach((element) => { sum += element; });

  let leftSum = 0;
  let equilibriumIndices = [];
  list.forEach((element, i) => {
    sum -= element;
    if (i != list.length - 1 && i != 0 && sum === leftSum) {
      equilibriumIndices.push(i);
    }
    leftSum += element;
  });

  if (equilibriumIndices.length === 1) { return equilibriumIndices[0]; }
  if (equilibriumIndices.length > 1) { return equilibriumIndices; }

  return -1;
}

module.exports = main;
