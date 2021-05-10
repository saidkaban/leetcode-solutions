var mySqrt = function(x) {
    for (let i = 1; i < x; i++) {
        if (i ** 2 > x) {
            return i - 1;
        }
    }
    let answer;
    x == 0 ? answer = 0 : answer = 1;
    return answer;
};