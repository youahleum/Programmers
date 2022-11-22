function solution(nums) {
  let arr = [];
  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      for (s = j + 1; s < nums.length; s++) {
        let a = nums[i] + nums[j] + nums[s];
        arr.push(a);
      }
    }
  }

  let count = 0;
  for (x of arr) {
    for (i = 2; i < x; i++) {
      if (x % i === 0) break;
      if (i == Math.ceil(Math.sqrt(x))) count++;
    }
  }
  return count;
}
