let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let num = 0;
function solution(numbers) {
  arr = arr.filter((x) => !numbers.includes(x));
  for (i = 0; i < arr.length; i++) {
    num = num + arr[i];
  }
  console.log(num);
  // var answer = -1;
  // return answer;
  return num;
}
