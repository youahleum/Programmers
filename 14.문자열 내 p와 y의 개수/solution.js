function solution(s) {
  let countP = 0;
  let countY = 0;
  let arr = s.split("");
  for (i of arr) {
    if (i === "y" || i === "Y") {
      countY++;
    } else if (i === "P" || i === "p") {
      countP++;
    }
  }
  if (countY === countP || (countY === 0 && countP === 0)) {
    return true;
  } else if (countY !== countP) {
    return false;
  }
}
