let lengthOfLastWord = function(s) {
    let splitStr = s.trim().split(" ")
    return splitStr[splitStr.length - 1].length;
  };