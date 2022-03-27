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
