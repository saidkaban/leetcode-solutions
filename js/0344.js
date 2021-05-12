var reverseString = function(s) {
    for (let i = 0; i < s.length; i++) {
        s.splice(i, 0, s.pop())
    }
    return s;
};

/*
var reverseString = function(s) {
    return s.reverse();
};
*/

/*
var reverseString = function(s) {
    let left = 0, right = s.length - 1;
    while (left < right) {
        let tmp = s[left];
        s[left] = s[right];
        s[right] = tmp;
        left += 1;
        right -= 1;
    }
    return s;
};
*/