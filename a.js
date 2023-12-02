function sum(a, b) {
  return a + b;
}

function sumOf(numbers) {
    return numbers.reduce((acc, current) => acc + current, 0);
}

/*
module.exports = sum; //es문법의 export default sum; 과 동일
*/

/*
function sumOf(numbers) {
  let result = 0;

  numbers.forEach((v) => (result += v));

  return result;
}
*/




exports.sum = sum;
exports.sumOf = sumOf; // export const sumOf = () => {}
