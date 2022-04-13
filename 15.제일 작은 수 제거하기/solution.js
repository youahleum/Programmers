function solution(arr) {
  if (arr.length === 1) {
    return [-1];
  } else {
    let min = Math.min(...arr);
    return arr.filter((x) => x !== min);
  }
}
