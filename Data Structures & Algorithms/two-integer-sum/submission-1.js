class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let count = {}
        for (let i = 0; i < nums.length ; i++){
            let current=nums[i];
            let value= target-current;
            if (count[value]!== undefined){
                return [count[value],i]
            }
            count[current]=i
        }
    }
}
