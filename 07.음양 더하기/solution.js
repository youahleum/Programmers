function solution(absolutes, signs) {
  let num = 0;
  for (i = 0; i < absolutes.length; i++) {
    if (!signs[i]) {
      absolutes[i] = absolutes[i] * -1;
    }
    num = num + absolutes[i];
  }
  // console.log(absolutes)
  var answer = num;
  return answer;
}
