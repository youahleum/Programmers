function solution(name, yearning, photo) {
  var answer = [];
  for (array of photo) {
    let a = 0;
    name.map((x, index) => {
      if (array.includes(x)) {
        a = a + yearning[index];
      }
    });
    answer.push(a);
  }
  return answer;
}
