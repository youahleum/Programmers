function solution(arr1, arr2) {
  // 먼저 array를 선언을 해주지 않으면 따로 넣는게 복잡,,,
  var answer = arr1;
  for (i = 0; i < arr1.length; i++) {
    for (a = 0; a < arr1[i].length; a++) {
      answer[i][a] = arr1[i][a] + arr2[i][a];
    }
  }
  return answer;
}
