function solution(arr) {
  arr.sort((a, b) => {
    a - b;
  });
  let count = 0;
  let arr = [];
  // for(i of arr){
  //   if(i===arr[0]){
  //     count+=1
  //   }

  // }
  // let a = arr[0];
  // while(!arr.include(a)){
  //   if(arr[0]===a){
  //     count++
  //     arr.shift()
  //   }

  // }
  for (i = 0; i < arr.length; i++) {
    if (arr[i - 1] === arr[0]) {
      count++;
    } else {
    }
  }
}
