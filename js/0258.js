var addDigits = function(num) {
    while (String(num).length > 1) {
        num = String(num).split("").reduce((a, b) => {
            return Number(a) + Number(b);
        })
    }
    return num;
};