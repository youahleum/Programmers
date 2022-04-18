function solution(s) {
  if (s.length === 4 || s.length === 6) {
    let a = s.match(/[^0-9]/g);
    return a == null ? true : false;
  } else {
    return false;
  }
}
