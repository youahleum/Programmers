function solution(a, b) {
  let week = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  const monthDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let daySum = 0;
  for (i = 0; i < a - 1; i++) {
    daySum += monthDays[i];
  }
  //console.log((daySum+b))
  return week[(daySum + b - 1) % 7];
}

// ----------------
// function getDayName(a,b){
//     var arr = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
//     var date = new Date(`2016-${a}-${b}`);
//   var day = date.getDay()
//     return arr[day];
// }
