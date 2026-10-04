const prompt = require("prompt-sync")();

function twoSum() {
  const rawInput = prompt("Enter numbers separated by space or comma: ");
  const target = prompt("Enter target number");

  const nums = rawInput
    .split(/[\s,]+/)
    .filter(Boolean)
    .map(Number)
    .sort((a, b) => a - b);

  const uniquePairs = [];

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let diffnum = target - nums[i];
    
    const partnerIndex = nums.findIndex(
      (num, idx) => num === diffnum && idx > i,
    );
    if (partnerIndex !== -1) {
      uniquePairs.push([nums[i], nums[partnerIndex]]);
    }
  }
}

twoSum();