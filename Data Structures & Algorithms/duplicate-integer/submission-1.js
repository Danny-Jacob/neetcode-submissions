class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let count={}
        for (let c of nums){
            count[c]=(count[c] || 0) + 1;
            if(count[c]>1){
                return true;
            }
        }
        return false;
    }
}
