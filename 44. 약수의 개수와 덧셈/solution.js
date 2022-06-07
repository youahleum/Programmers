function solution(left, right) {
  var answer = 0;
  let arr = [];
  for (i = left; i <= right; i++) {
    arr.push(i);
  }
  arr.map((x) => {
    // console.log( Math.sqrt(x))
    Math.sqrt(x) % 1 !== 0 ? (answer += x) : (answer -= x);
  });
  return answer;
}
//-------------------------------

// 위 코드를 좀 더 줄여볼 수 있다 (다른 사람 코드 참고)

function solution(left, right) {
  var answer = 0;
  let arr = [];
  for (i = left; i <= right; i++) {
    Math.sqrt(i) % 1 !== 0 ? (answer += i) : (answer -= i);
  }

  return answer;
}

//--------------------------------
// 제곱근 구하기
Math.sqrt(9); // 3

// 정수인지 실수인지 확인하기

// 1. Number.isInterger()

Number.isInterger(8); // true
Number.isInterger(-3); // true
Number.isInterger(3.45345); //false

//2. % 나머지를 통한 정수 확인
3 % 1 === 0; // 나머지가 0일 경우 정수 0이 아닌경우 실수
