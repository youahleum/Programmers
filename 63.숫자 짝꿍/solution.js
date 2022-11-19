// case 11-15 시간초과

function solution(X, Y) {
  let xarr = X.split("");
  let yarr = Y.split("");
  let arr = [];
  xarr.map((x) => {
    if (yarr.includes(x)) {
      arr.push(x);
      let a = yarr.indexOf(x);
      yarr.splice(a, 1);
    }
  });
  let answer2 = arr.sort((a, b) => b - a).join("");
  if (answer2.startsWith("0")) {
    return "0";
  } else if (answer2 == "") {
    return "-1";
  } else {
    return answer2;
  }
}

// 통과
function solution2(X, Y) {
  let arrX = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let arrY = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  answer = [];
  for (i = 0; i < X.length; i++) {
    arrX[X[i]]++;
  }
  for (i = 0; i < Y.length; i++) {
    arrY[Y[i]]++;
  }
  for (i = 0; i <= 9; i++) {
    if (arrX[i] !== 0 || arrY[i] !== 0) {
      console.log(arrX[i], arrY[i]);
      if (arrX[i] <= arrY[i]) {
        for (x = 1; x <= arrX[i]; x++) {
          answer.push(i);
        }
      } else {
        for (x = 1; x <= arrY[i]; x++) {
          answer.push(i);
        }
      }
    }
  }
  answer2 = answer.sort((a, b) => b - a).join("");
  if (answer2.startsWith("0")) {
    return "0";
  } else if (answer2 == "") {
    return "-1";
  } else {
    return answer2;
  }
}
