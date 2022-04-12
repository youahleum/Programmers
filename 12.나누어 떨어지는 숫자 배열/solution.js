function solution(arr, divisor) {
  var answer = [];
  for (i of arr) {
    if (i % divisor === 0) {
      answer.push(i);
    }
  }
  if (answer.length === 0) {
    answer.push(-1);
  }
  answer.sort((a, b) => {
    return a - b;
  });
  return answer;
}

// function solution(arr, divisor){
//     var answer=arr.filter(i=>i%divisor===0);
//     return answer.length===0 ? [-1] : answer.sort((a,b)=>{return a-b})
// }
