function solution(sizes) {
  let aArr = [];
  let bArr = [];
  for (x of sizes) {
    x.sort((a, b) => a - b);
    aArr.push(x[0]);
    bArr.push(x[1]);
  }
  aArr.sort((a, b) => b - a);
  bArr.sort((a, b) => b - a);
  return aArr[0] * bArr[0];
}
