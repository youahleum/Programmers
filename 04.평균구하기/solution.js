function solution(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  // console.log(sum)
  var answer = sum / arr.length;
  return answer;
}
