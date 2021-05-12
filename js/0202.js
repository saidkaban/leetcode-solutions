var isHappy = function(n) {
    let prevArr = [];
    while (n !== 1) {
        if (prevArr.indexOf(n) >= 0) {
            return false;
        }
        prevArr.push(n);
        n = String(n).split("").map(digit => {
            return Number(digit) ** 2;
        }).reduce((a, b) => a + b);
    }
    return true;
};