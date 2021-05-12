var convertToTitle = function(columnNumber) {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let answer = "";
    while (columnNumber > 26) {
        answer = answer 
            + letters[columnNumber - (Math.ceil(columnNumber / 26) - 1) * 26 - 1];
        if (columnNumber % 26 == 0) {
            columnNumber = Math.floor(columnNumber / 26) - 1;
        } else {
            columnNumber = Math.floor(columnNumber / 26);
        }
    }
    console.log(letters[columnNumber - 1])
    answer += letters[columnNumber - 1];
    return answer.split("").reverse().join("");
};