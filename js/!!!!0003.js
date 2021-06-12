let lengthOfLongestSubstring = function(s) {
    let tmpStr = '';
    let longestStr = '';
    let startInd = 0;
    for (let i = 0; i < s.length; i++) {
        if (tmpStr.includes(s[i])) {
            longestStr = i - startInd > longestStr.length ? 
                            tmpStr :
                            longestStr;
            startInd = 
        }
    }
}
