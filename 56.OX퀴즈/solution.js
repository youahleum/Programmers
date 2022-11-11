function solution(quiz) {
  var answer = [];
  let arr = [];

  quiz.map((x) => {
    arr = x.split("=");
    console.log(arr, eval(arr[0]));
    if (eval(arr[0]) == arr[1]) {
      answer.push("O");
    } else {
      answer.push("X");
    }
  });
  return answer;
}
