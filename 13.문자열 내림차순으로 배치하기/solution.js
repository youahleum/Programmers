function solution(s) {
  let arr = s.split("");
  arr.sort().reverse();
  var answer = arr.join("");
  return answer;
}

// arr.sort().reverse().join();
// 위처럼 작성하였더니 그대로 array상태로 나옴
// arr은 배열상태이고 join()을 하게 되면 string으로 변환이 되기때문에
// type이 string인 새로운 변수에 할당이 필요하다.
//만약 변수에 할당하지 않고 바로 return한다면
// return s.sort().reverse().join();
// 이렇게 작성하는것은 가능하다.
