var isPowerOfFour = function(n) {
    while (n > 1) {
        n /= 4;
    } 
    if (n !== 1) {
        return false;
    }
    return true;
};