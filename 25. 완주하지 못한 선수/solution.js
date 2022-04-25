//시간초과
function solution(participant, completion) {
  // let arr1=participant
  // let arr2=completion
  completion.map((x) => {
    let ind = participant.indexOf(x);
    participant.splice(ind, 1);
  });
  return participant.join("");
}
