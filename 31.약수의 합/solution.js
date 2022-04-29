// 1,16 테스트 실패
// function solution(n) {
//     let num=1+n
//     for(i=2;i<=n/2;i++){
//         n%i===0? num+=i : null
//     }
//        return num
// }

function solution(n) {
  let num = 0;
  for (i = 1; i <= n; i++) {
    n % i === 0 ? (num += i) : null;
  }
  return num;
}
