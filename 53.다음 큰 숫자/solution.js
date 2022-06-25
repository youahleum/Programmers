function solution(n) {
  var answer = "";
  // return answer;
  let m = n;
  let num = n.toString(2);
  let oneLength = num.match(/1/g).length;
  // console.log(oneLength)
  // console.log(num)
  if (num.includes("0")) {
    while (true) {
      m += 1;
      let testNum = m.toString(2);
      // console.log(testNum)
      if (oneLength === testNum.match(/1/g).length) {
        answer = testNum;
        // console.log('answer',answer)
        break;
      }
    }
  } else {
    answer = [num.slice(0, 1), 0, num.slice(1)].join("");
    // console.log(answer)
  }
  // console.log(parseInt(answer,2))
  return parseInt(answer, 2);
}
