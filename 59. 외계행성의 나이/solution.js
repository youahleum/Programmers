function solution(age) {
  let alphabet = "abcdefghij";
  let answer = "";
  age
    .toString()
    .split("")
    .map((x) => (answer += alphabet[x]));
  console.log(answer);
  return answer;
}
