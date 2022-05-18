function solution(s, n) {
  const arr1 = Array.from({ length: 26 }, (v, i) =>
    String.fromCharCode(i + 65)
  );
  const arr2 = Array.from({ length: 26 }, (v, i) =>
    String.fromCharCode(i + 97)
  );
  var answer = "";
  s.split("").map((x) => {
    if (x === " ") {
      answer += x;
    } else if (arr1.includes(x)) {
      let num = (arr1.indexOf(x) + n) % 26;
      answer += arr1[num];
    } else {
      let num = (arr2.indexOf(x) + n) % 26;
      answer += arr2[num];
    }
  });

  return answer;
}
