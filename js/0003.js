let lengthOfLongestSubstring = function(s) {
    let maxLength = 0;
    for (let i = 0; i < s.length; i++) {
        let tmpStr = s[i];
        j = 1;
        while (j < s.length - i && !(tmpStr.includes(s[i + j]))) {
            tmpStr += s[i + j];
            j++;
        }
        maxLength = Math.max(tmpStr.length, maxLength);
    }
    return maxLength;
 }