var titleToNumber = function(columnTitle) {
    columnTitle = columnTitle.split("").reverse().join("");
    let colNum = 0
    for (let i = 0; i < columnTitle.length; i++) {
        colNum += (26 ** i) * (columnTitle.charCodeAt(i) - 64);
    } 
    return colNum;
};