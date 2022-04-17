function solution(n) {
  var answer = 0;
  let arr = n.toString().split("");
  for (i of arr) {
    answer = answer + parseInt(i);
  }
  return answer;
}
