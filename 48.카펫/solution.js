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
//------------------
function solution2(brown, yellow) {
  for (i = 1; i <= yellow; i++) {
    if (yellow % i === 0) {
      let x = yellow / i;
      if (2 * (x + 2) + 2 * (i + 2) - 4 === brown) {
        return [x + 2, i + 2];
        // 위처럼 array에 넣고 밖에서 return 하는것보다 훨씬 속도가 빠르다
      }
    }
  }
}
