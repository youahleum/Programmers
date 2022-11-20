function solution(a, b, n) {
  let rest = 0;
  let answer = 0;
  while (n + rest >= a) {
    let x = parseInt((n + rest) / a) * b;
    rest = (n + rest) % a;
    answer += x;
    n = x;
  }
  return answer;
}
