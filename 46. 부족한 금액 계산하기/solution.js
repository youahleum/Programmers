function solution(price, money, count) {
  let sum = 0;
  for (i = 1; i <= count; i++) {
    sum += price * i;
  }
  let answer = sum - money;
  return answer > 0 ? answer : 0;
}

// 다른 사람 풀이 - 가우스 공식 이용
//1~100 모두 더하기
// 1+100이 반복하는것
// 식으로 표현
// 1~n모두 더하기
// n* (n+1) / 2

// 적용해보기
function solution2(price, money, count) {
  let sum = 0;
  sum = ((count * (count + 1)) / 2) * price - money;
  return sum > 0 ? sum : 0;
}
