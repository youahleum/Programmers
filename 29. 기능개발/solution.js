function solution(progresses, speeds) {
  let answer = [];
  let result = progresses.map((x, index) => {
    return Math.ceil((100 - x) / speeds[index]);
  });
  while (result.length !== 0) {
    let count = 0;
    for (i = 0; i < result.length; i++) {
      if (result[i] <= result[0]) {
        count += 1;
      } else {
        break;
      }
    }
    answer.push(count);
    result.splice(0, count);
  }
  console.log(answer);
  return answer;
}
