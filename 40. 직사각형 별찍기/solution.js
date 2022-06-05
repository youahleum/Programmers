process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
  let string = "";
  for (i = 0; i < a; i++) {
    string += "*";
  }
  for (i = 0; i < b; i++) {
    console.log(string);
  }
  // console.log(a);
  // console.log(b);
});

//---------------
// 다른사람 풀이
// repeat() 활용한 문제풀이
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
  const row = "*".repeat(a);
  for (let i = 0; i < b; i++) {
    console.log(row);
  }
});

//repeat을 활용하여 for 문을 한번만 사용하거나 아예 사용하지 않는 방법도 있음
