class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let list={}
        for (let str of strs){
            let key =str.split("").sort().join("")
            if(list[key]==undefined){
                list[key]=[]
            }
            list[key].push(str);

        }
        return Object.values(list);
    }
}
