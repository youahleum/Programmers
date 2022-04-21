function solution(s) {
  const a = s.length / 2;
  if (s.length % 2 === 0) {
    return s.slice(a - 1, a + 1);
  } else {
    return s.charAt(a);
  }
}
