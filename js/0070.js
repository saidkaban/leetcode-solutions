var climbStairs = function(n) {
    let stairs = [1, 2];
    if (n == 1) {
        return stairs[0];
    } else if (n == 2) {
        return stairs[1];
    }
    for (let i = 2; i < n; i++) {
        stairs.push(stairs[i - 1] + stairs[i - 2]);
    }
    return stairs[n - 1];
};