// 첫번째 풀이 : 일부 시간 초과
// function solution(n) {
//     let arr=[]
//     let num=0
//     for(i=2; i<=n; i++){
//         let boolean=true;
//         for(a=2;a<i;a++){
//             if(i%a===0){
//             boolean=false
//             }
//         }
//         if(boolean){
//             arr.push(i)
//         }
//     }
//     // console.log(arr);
//     // let arr2=new Set(arr);
//     // arr=[...arr2]
//     // console.log(arr);
//     var answer = arr.length;
//     return answer;
// }

function solution(n) {
  let arr = Array(n + 1)
    .fill(true)
    .fill(false, 0, 2);

  for (let i = 2; i * i <= n; i++) {
    if (arr[i]) {
      for (let j = i * i; j <= n; j += i) {
        arr[j] = false;
      }
    }
  }

  return arr.filter((e) => e).length;
}
