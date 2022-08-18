// 현재 풀고있는중
function solution(id_list, report, k) {
  const report2 = new Set(report);
  const newReport = [...report2];
  // console.log(newReport)

  let arr = [];
  for (i of newReport) {
    let a = i.split(" ")[1];
    arr.push(a);
    // for
    console.log(arr);
  }

  //     for(i of id_list){
  //         for
  //     }

  //     var answer = [];

  //     return answer;
}
