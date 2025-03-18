var maxSubArray = function (nums) {
  let max_sum = nums[0];
  let current_sum = 0;

  for (let i = 0, lim = nums.length; i < lim; i++) {
    current_sum += nums[i];

    if (max_sum < current_sum) {
      max_sum = current_sum;
    }

    if (current_sum < 0) {
      current_sum = 0;
    }
  }
  return max_sum;
};
