function solution(answers) {
  var answer = [];
  let ans1 = [1, 2, 3, 4, 5];
  let ans2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let ans3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let a = 0;
  let b = 0;
  let c = 0;
  let sum1 = 0;
  let sum2 = 0;
  let sum3 = 0;
  for (i = 0; i < answers.length; i++) {
    if (answers[i] === ans1[a]) {
      sum1 += 1;
    }
    {
      a === 4 ? (a = 0) : (a += 1);
    }
    if (answers[i] === ans2[b]) {
      sum2 += 1;
    }
    {
      b === 7 ? (b = 0) : (b += 1);
    }
    if (answers[i] === ans3[c]) {
      sum3 += 1;
    }
    {
      c === 9 ? (c = 0) : (c += 1);
    }
  }
  let d = Math.max(sum1, sum2, sum3);

  {
    d === sum1 ? answer.push(1) : null;
  }
  {
    d === sum2 ? answer.push(2) : null;
  }
  {
    d === sum3 ? answer.push(3) : null;
  }

  // answer.push(sum1,sum2,sum3);

  return answer;
}
