/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    var results = [nums.length];
    results[0] = nums[0];

    for (i = 1; i < nums.length; i++) {
        results[i] = nums[i] + results[i - 1];
    }

    return results;
};