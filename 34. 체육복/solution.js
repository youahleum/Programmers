//  테스트 2,3,5,7,12,13,18 실패
function solution(n, lost, reserve) {
  const num = lost.length;
  count = 0;
  for (x of reserve) {
    let arr = [];
    arr.push(x - 1, x + 1);
    for (i = 0; i < lost.length; i++) {
      if (arr.includes(lost[i])) {
        count += 1;
        lost.splice(i, 1);
        arr = [];
      }
    }
  }
  return n - num + count;
}

// 테스트 3,5,7,12 실패
function solution(n, lost, reserve) {
  lost.sort();
  reserve.sort();
  const num = lost.length;
  count = 0;
  for (x of reserve) {
    let arr = [];
    arr.push(x - 1, x + 1);
    for (i = 0; i < lost.length; i++) {
      if (arr.includes(lost[i])) {
        count += 1;
        lost.splice(i, 1);
        arr = [];
      }
    }
  }
  return n - num + count;
}

// 성공
function solution(n, lost, reserve) {
  let set = lost.filter((x) => reserve.includes(x));
  for (i of set) {
    a = lost.indexOf(i);
    lost.splice(a, 1);
    b = reserve.indexOf(i);
    reserve.splice(b, 1);
  }
  lost.sort();
  reserve.sort();
  const num = lost.length;
  count = 0;
  for (x of reserve) {
    let arr = [];
    arr.push(x - 1, x + 1);
    for (i = 0; i < lost.length; i++) {
      if (arr.includes(lost[i])) {
        count += 1;
        lost.splice(i, 1);
        arr = [];
      }
    }
  }
  return n - num + count;
}
