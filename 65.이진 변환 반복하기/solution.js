function solution(s) {
  let answer = [0, 0];
  // let n=s
  while (s > 1) {
    let a = s.length;
    s = s
      .split("")
      .filter((x) => x !== "0")
      .join("").length;
    answer[1] = answer[1] + a - s;
    s = s.toString(2);
    answer[0]++;
  }

  return answer;
}
