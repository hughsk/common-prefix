module.exports = common

function common(strings) {
  if (!Array.isArray(strings)) {
    throw new Error('common-prefix expects an array of strings')
  }

  var common = ''
  var j = -1

  while (true) {
    var ch = strings[0].charAt(++j)
    if(!ch.length) return common

    for (var i = 1; i < strings.length; i++) {
      var ch2 = strings[i].charAt(j)
      if (ch2 !== ch) return common
    }

    common += ch
  }
}
