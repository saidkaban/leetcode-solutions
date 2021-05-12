var getRow = function(rowIndex) {
    const pascal = [[1], [1, 1]];
    if (rowIndex == 0) {
        return pascal[0];
    } else if (rowIndex == 1) {
        return pascal[1];
    }
    for (let i = 2; i <= rowIndex; i++) {
        let prevStep = [...pascal[i - 1]];
        prevStep.unshift(0);
        prevStep.push(0);
        let curStep = [];
        for (let j = 0; j <= i; j++) {
            curStep[j] = prevStep[j] + prevStep[j + 1];
        }
        pascal.push(curStep);
    }
    return pascal[rowIndex];
};