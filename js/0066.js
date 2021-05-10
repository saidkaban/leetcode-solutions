let plusOne = function(digits) {
    let i = digits.length - 1;
    let sign;
    while (i >= 0) {
        if (digits[i] !== 9) {
            digits[i] += 1;
            sign = false;
            break;
        }
        digits[i] = 0;
        i -= 1;
        sign = true
    } 
    if (sign) {
        digits.unshift(1);
    }
    return digits;
};
digits()