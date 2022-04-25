function solution(x) {
  const n = x.toString().split("");
  let sum = 0;
  for (a of n) {
    sum += parseInt(a);
  }
  return x % sum === 0 ? true : false;
}
