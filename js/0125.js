var isPalindrome = function(s) {
    let revString = s.match(/[a-z0-9]/gi);
    if (revString === null) {
        return true;
    }
    revString = revString.reverse().join("").toLowerCase();
    s = s.match(/[a-z0-9]/gi).join("").toLowerCase();
    return s === revString;
};
console.log(isPalindrome("sadoodas"));