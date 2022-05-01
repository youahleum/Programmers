function solution(n) {
  // var answer = 0;
  // return answer;
  let a = Math.sqrt(n);
  return a == parseInt(a) && a > 0 ? (a + 1) ** 2 : -1;
}
