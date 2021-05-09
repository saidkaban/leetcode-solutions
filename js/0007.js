var reverse = function(x) {
  let str_x = String(x)
  let reverse_x = ""
  if (str_x[0] === "-") {
      var sign = "-"
      str_x = str_x.slice(1)
  }
  for (let i = str_x.length - 1; i >= 0; i--) {
      reverse_x += str_x[i]
  }
  if (Number(reverse_x) > 2 ** 31 -  1) {
      return 0
  }
  if (sign === "-") {
      return sign + reverse_x
  } else {
      return reverse_x
  }
};