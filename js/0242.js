var isAnagram = function(s, t) {
    s = s.split("").sort();
    t = t.split("").sort();
    const iterLen = Math.max(s.length, t.length);
    for (let i = 0; i < iterLen; i++) {
        if (s[i] !== t[i]) {
            return false;
        }
    }
    return true;
};