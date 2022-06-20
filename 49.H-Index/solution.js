// 테스트 11, 16 실패
function solution(citations) {
  citations.sort((a, b) => b - a);
  for (i = citations.length; i > 0; i--) {
    let arr = citations.filter((x) => x >= i);
    if (arr.length >= i) {
      return arr.length;
    }
  }
}

// 모두 통과
function solution(citations) {
  citations.sort((a, b) => b - a);
  for (i = citations.length; i >= 0; i--) {
    let arr = citations.filter((x) => x >= i);
    if (arr.length >= i) {
      return arr.length > i ? i : arr.length;
      // arr.length 또는 i중 더 작은 숫자를 반환하여하 한다.
    }
  }
}

// 위 케이스는 테스트케이스 [0,0,0,0] -> 0
//에서 11, 16이 실패하게 된다. 값은 0이 나와야 하는데 4가 나오기 때문
