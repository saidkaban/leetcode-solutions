let addBinary = function(a, b) {
    let diff = Math.max(a.length, b.length) - Math.min(a.length, b.length);
    if (diff > 0) {
        let strArr = [a, b].sort((x, y) => x.length - y.length);
        var longer = strArr[1]
        var shorter = strArr[0]
        shorter = "0".repeat(diff) + shorter;
    } else {
        var longer = a;
        var shorter = b;
    }
    let binSum = "";
    let nextSum = 0;
    for (let i = longer.length - 1; i >= 0; i--) {
        let colSum = Number(shorter[i]) + Number(longer[i]) + nextSum;
        if (colSum == 0) {
            binSum += "0"
            nextSum = 0
        } else if (colSum == 1) {
            binSum += "1";
            nextSum = 0;
        } else if (colSum == 2) {
            binSum += "0";
            nextSum = 1;
        } else {
            binSum += "1";
            nextSum = 1;
        }
    }
    if (nextSum == 1) {
        binSum += "1"
    }

    return binSum.split("").reverse().join("");
}

console.log(addBinary("10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101"
, "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"))