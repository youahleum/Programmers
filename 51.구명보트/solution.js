function solution(people, limit) {
  let count = 0;
  people = people.sort((a, b) => a - b);

  let start = 0;
  let end = people.length - 1;
  while (start <= end) {
    if (people[start] + people[end] > limit || start === end) {
      end--;
      count++;
    } else {
      start++;
      end--;
      count++;
    }
  }
  return count;
}
