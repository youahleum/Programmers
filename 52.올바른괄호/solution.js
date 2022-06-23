// 테스트 17, 효율성 테스트 2 실패

function solution(s) {
  let arr = s.split("()").join("").split("()").join("").split("");
  console.log(arr);
  if (
    arr[0] == ")" ||
    arr[arr.length - 1] == "(" ||
    (arr[arr.length - 1] == "" && arr[arr.length - 2] == "(")
  ) {
    return false;
  } else {
    return true;
  }
}

//  반복문을 통한 효율성 높이고 시간 줄이기
function solution(s) {
  let num = 0;
  for (i = 0; i < s.length; i++) {
    s[i] == "(" ? num++ : num--;
    if (num < 0) break;
  }
  return num !== 0 ? false : true;
}
