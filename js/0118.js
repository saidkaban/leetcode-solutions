/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const pascal = [[1], [1, 1]];
    if (numRows == 1) {
        return [pascal[0]];
    } else if (numRows == 2) {
        return pascal;
    }
    for (let i = 2; i < numRows; i++) {
        let prevStep = [...pascal[i - 1]];
        prevStep.unshift(0);
        prevStep.push(0);
        let curStep = [];
        for (let j = 0; j <= i; j++) {
            curStep[j] = prevStep[j] + prevStep[j + 1];
        }
        pascal.push(curStep);
    }
    return pascal;
};
console.log(generate(5));