function solution(brown, yellow) {
  let answer = [];
  for (i = 1; i <= yellow; i++) {
    if (yellow % i === 0) {
      let x = yellow / i;
      if (2 * (x + 2) + 2 * (i + 2) - 4 === brown) {
        answer.push(x + 2, i + 2);
        break;
      }
    }
  }
  console.log(answer);
  // var answer = [];
  return answer;
}
