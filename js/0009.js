var isPalindrome = function(x) {
    let reverse_x = String(x).split("").reverse().join("")
    if (reverse_x == x) {
        return true
    } else {
        return false
    }
};