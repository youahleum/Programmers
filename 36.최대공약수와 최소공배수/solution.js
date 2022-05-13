function solution(n, m) {
  let arr = [];
  let a = n > m ? n : m;
  for (i = 1; i <= a; i++) {
    n % i === 0 && m % i === 0 ? arr.push(i) : null;
  }
  arr.reverse();
  return [arr[0], (n * m) / arr[0]];
}
