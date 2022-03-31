function solution(s) {
  let arr = s.split(" ");
  let answer = "";
  let count = 0;
  for (let a of arr) {
    count += 1;
    for (i = 0; i < a.length; i++) {
      if (i % 2 === 0) {
        answer += a[i].toUpperCase();
      } else {
        answer += a[i].toLowerCase();
      }
    }
    if (count !== arr.length) {
      answer += " ";
    }
  }

  // for(i=0;i<arr.length;i++){
  //     for(a=0;arr[i].length;a++){
  //         if(a%2===0){
  //         arr[i][a].toUpperCase()
  //      }else{
  //          arr[i][a].toLowerCase()
  //      }
  //     }
  // }
  // console.log(answer)
  // console.log(s[4])

  return answer;
}
