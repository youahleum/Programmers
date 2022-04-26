function solution(phone_number) {
  let num = phone_number.split("");
  for (i = 0; i < num.length - 4; i++) {
    num[i] = "*";
  }
  return num.join("");
}
