function solution(x, n) {
  // var answer = [];
  // return answer;
  let arr = [];
  for (i = 1; i < n + 1; i++) {
    arr.push(x * i);
  }
  return arr;
}
