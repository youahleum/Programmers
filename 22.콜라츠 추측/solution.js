function solution(num) {
  let number = num;
  let count = 0;
  while (number !== 1) {
    if (number % 2 === 0) {
      number = number / 2;
      count++;
    } else {
      number = number * 3 + 1;
      count++;
    }
  }
  return count > 500 ? -1 : count;
}

// if문을 삼항연산자로 변경
function solution(num) {
  let number = num;
  let count = 0;
  while (number !== 1) {
    number % 2 === 0 ? (number = number / 2) : (number = number * 3 + 1);
    count++;
  }
  return count > 500 ? -1 : count;
}
