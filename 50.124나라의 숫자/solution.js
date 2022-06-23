function solution(n) {
  var answer = "";
  // let num=n.toString(3)
  // let num=Number.parseInt(n,3);
  // console.log(num)
  // return answer;
  let divNum;
  let arr = [4, 1, 2];
  while (n > 0) {
    divNum = n % 3;
    // console.log('divNum',divNum)
    // console.log('n',n)
    answer = arr[divNum] + answer;
    n = Math.floor((n - 1) / 3);
    // console.log('(n-1)/3',n)
    // console.log('answer',answer)
  }
  return answer;
}
