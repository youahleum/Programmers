function solution(n) {
  var answer = 0;
  // return answer;
  for (i = 1; i < n; i++) {
    if (n % i === 1) {
      return i;
    }
  }
}
