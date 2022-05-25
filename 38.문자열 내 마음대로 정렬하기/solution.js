function solution(strings, n) {
  let strObj = { ...strings };
  console.log(strObj);
  let str = strings.map((x) => x.slice(n)).sort();
  console.log(str);

  // var answer = [];
  // return answer;
}
