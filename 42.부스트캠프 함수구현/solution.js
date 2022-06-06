let arr = [1, 2, 3, 3, 3, 3, 4, 4].sort((a, b) => a - b);
// console.log("a");
// console.log(arr);
function solution() {
  // arr.sort((a, b) => a - b);
  let arr = [3, 2, 4, 4, 2, 5, 2, 5, 5].sort((a, b) => a - b);
  let count = 0;
  console.log(count);
  let resultArr = [];
  // console.log(arr);
  while (arr.length > 0) {
    let a = arr[0];
    if (a === arr[1]) {
      count++;
      arr.shift();
    } else {
      arr.shift();
      if (count > 0) {
        resultArr.push(count + 1);
        count = 0;
      }
    }
  }
  console.log(resultArr);
  // console.log(arr);
}
solution();
