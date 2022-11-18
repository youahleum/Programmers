function solution(babbling) {
  let answer = 0;
  babbling.map((x) => {
    if (x.split(/aya|ye|woo|ma/g).join("") == "") {
      answer++;
    }
  });
  return answer;
}
