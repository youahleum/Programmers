function solution(nums) {
  let halfNum = nums.length / 2;
  let nums2 = [...new Set(nums)].length;
  return halfNum < nums2 ? halfNum : nums2;
}
