class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number} - a positive integer
     */
    reverseBits(n) {
    //      let result = 0;

    // for (let i = 0; i < 32; i++) {
    //     // Get the last bit of n
    //     let bit = n & 1;

    //     // Shift result left and add the bit
    //     result = (result << 1) | bit;

    //     // Remove the last bit from n
    //     n = n >>> 1;
    // }

    // return result >>> 0;
    // }
    let result = 0;

    for (let i = 0; i < 32; i++) {
        // Get the last bit of n
        let bit = n & 1;

        // Shift result left and add the bit
        result = (result << 1) | bit;

        // Remove the last bit from n
        n = n >>> 1;
    }

    return result >>> 0;
    }
    
}
