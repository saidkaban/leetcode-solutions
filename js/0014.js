var longestCommonPrefix = function(strs) {
    let i = 0
    let commonPrefix = ""
    var shortest = Math.min.apply(Math, strs.map(x => x.length));
    while (i < shortest) {
        firstLetter = strs[0][i]
        const map1 = strs.filter(x => x[i] === firstLetter);
        if (map1.length !== strs.length) {
            break
        }
        commonPrefix += strs[0][i]
        i += 1
    }
    return commonPrefix
};