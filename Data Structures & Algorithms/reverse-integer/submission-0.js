class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    reverse(x) {
        const sign = x < 0 ? -1 : 1;
  const reversed = parseInt(Math.abs(x).toString().split('').reverse().join(''));

  const result = sign * reversed;

  // 32-bit signed integer range
  if (result < -2147483648 || result > 2147483647) {
    return 0;
  }

  return result;
    }
}
