// 모두 실패...
function solution(land) {
  let ind = land.length + 1;
  let answer = 0;
  let a = land.length + 1;
  for (i of land) {
    let count = 0;
    for (j = 0; j < i.length; j++) {
      if (count <= i[j]) {
        if (j != a) {
          count = i[j];
          ind = j;
        }
      }
    }
    a = ind;
    answer += count;
    count = 0;
  }
  return answer;
}
