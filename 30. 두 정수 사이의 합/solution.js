function solution(a, b) {
  let arr = [a, b].sort((a, b) => {
    return a - b;
  });
  let c = 0;
  for (i = arr[0]; i <= arr[1]; i++) {
    c += i;
  }
  return c;
}
