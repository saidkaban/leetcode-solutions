var isUgly = function(n) {
    const primeFactors = [2, 3, 5];
    if (n < 1) return false;
    for (let prime of primeFactors) {
        while (n % prime == 0) {
            n /= prime;
        }
    }
    if (n != 1) {
        return false;
    }
    return true;
};