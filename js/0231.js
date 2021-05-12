var isPowerOfTwo = function(n) {
    while (n > 1) {
        n /= 2;
    }
    if (n !== 1) {
        return false
    }
    return true
};