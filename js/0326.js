var isPowerOfThree = function(n) {
    while (n > 1) {
        n /= 3;
    }
    if (n !== 1) {
        return false;
    }
    return true;
};