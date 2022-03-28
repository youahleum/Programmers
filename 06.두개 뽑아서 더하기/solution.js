function solution(numbers) {
  let result = [];
  for (a = 0; a < numbers.length - 1; a++) {
    for (b = a + 1; b < numbers.length; b++) {
      result.push(numbers[a] + numbers[b]);
    }
  }
  let set = new Set(result);
  result = [...set].sort((a, b) => {
    return a - b;
  });
  // console.log(result)
  var answer = result;
  return answer;
}
