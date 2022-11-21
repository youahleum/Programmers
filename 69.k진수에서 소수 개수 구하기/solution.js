function solution(n, k) {
  let arr = n.toString(k).split("0");
  let answer = 0;
  for (x of arr) {
    if (x === "2") {
      answer++;
      console.log(x);
    } else {
      for (i = 2; i <= Math.ceil(Math.sqrt(x)); i++) {
        if (x % i === 0) break;
        if (i === Math.ceil(Math.sqrt(x)) && x % i !== 0) answer++;
      }
    }
  }
  return answer;
}
