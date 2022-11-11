function solution(n) {
  let arr = String(n).split("");
  let answer = 0;
  for (i = 0; i < arr.length; i++) {
    answer += parseInt(arr[i]);
  }
  return answer;
}
