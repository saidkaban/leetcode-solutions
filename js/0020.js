var isValid = function(s) {
    var myDeck = [];
    var openers = ["(", "[", "{"]
    var closers = [")", "]", "}"]
    for (let i = 0; i < s.length; i++) {
        if (openers.indexOf(s[i]) > -1) {
            myDeck.push(s[i])
        } else {
            if (myDeck[myDeck.length - 1] == openers[closers.indexOf(s[i])]) {
                myDeck.pop()
            } else {
                return false
            }
        }
    }
    if (myDeck.length > 0) {
        return false
    }
    return true
};