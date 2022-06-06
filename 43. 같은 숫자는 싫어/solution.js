// 효율성 탈락 - 시간초과
function solution(arr) {
  let a = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      a.push(i);
    }
  }
  a.reverse();
  for (i of a) {
    arr.splice(i, 1);
  }

  console.log(arr);
  console.log(a.reverse());

  return arr;
}

// 성공
function solution(arr) {
  let result = [];
  arr = arr.map((i, idx) => {
    i == arr[idx + 1] ? null : result.push(i);
  });
  return result;
}

// 다른 사람 풀이  -  filter 사용
function solution(arr) {
  let result = [];
  result = arr.filter((i, idx) => i !== arr[idx + 1]);
  return result;
}
