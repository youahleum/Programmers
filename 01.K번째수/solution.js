var answer = [];
function solution(array, commands) {
  for (i = 0; i < commands.length; i++) {
    let a = commands[i][0] - 1;
    let b = commands[i][1];
    let c = commands[i][2] - 1;
    let arr1 = array.slice(a, b).sort((a, b) => a - b);
    answer.push(arr1[c]);
  }

  return answer;
}
