// 테스트10 실패
// function solution(n) {
//     let num=n.toString(3);
//     let arr=num.split("").reverse();
//     let num2=parseInt(arr.join(""))

//     var answer = Number.parseInt(num2,3);
//     return answer;
// }

function solution(n) {
  let num = n.toString(3).split("").reverse().join("");
  var answer = Number.parseInt(num, 3);
  return answer;
}
