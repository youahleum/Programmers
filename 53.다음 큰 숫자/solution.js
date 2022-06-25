function solution(n) {
  var answer = "";
  // return answer;
  let num = n.toString(2);
  let oneLength = num.match(/1/g).length;
  console.log(oneLength);
  console.log(num);
  if (num.includes("0")) {
    while (true) {}
  } else {
    answer = [num.slice(0, 1), 0, num.slice(1)].join("");
    console.log(answer);
  }
}
