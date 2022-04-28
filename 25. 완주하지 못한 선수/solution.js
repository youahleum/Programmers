//시간초과 효율성테스트 탈락
function solution(participant, completion) {
  // let arr1=participant
  // let arr2=completion
  completion.map((x) => {
    let ind = participant.indexOf(x);
    participant.splice(ind, 1);
  });
  return participant.join("");
}

// 성공한 문제풀이
function solution(participant, completion) {
  let parArr = participant.sort();
  let compArr = completion.sort();
  for (i = 0; i < parArr.length; i++) {
    if (parArr[i] !== compArr[i]) {
      return parArr[i];
    }
  }
}
