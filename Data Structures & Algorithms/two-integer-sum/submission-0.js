class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let count = {}
        for (let i = 0; i < nums.length ; i++){
            let value= target-nums[i];
            if (count[value]!== undefined){
                return [count[value],i]
            }
            count[nums[i]]=i
        }
    }
}
