const simplifiedFractions = function(n) {
    let fractionVals = [];
    let fractions = [];
    for (let i = 1; i <= n - 1; i++) {
        for (let j = i + 1; j <= n; j++) {
            if (fractionVals.includes(i / j)) {
                continue;
            } else {
                fractionVals.push(i / j);
                fractions.push(i+ '/' +j);    
            }
            
        }
    }
    return fractions;
};