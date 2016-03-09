module.exports = common

function common(strings) {
  if (!Array.isArray(strings)) {
    throw new Error('common-prefix expects an array of strings')
  }

  var first = strings[0] || '';
  var commonLength = first.length

  for (var i = 1; i < strings.length; ++i) {
    for (var j = 0; j < commonLength; ++j) {
      if (strings[i].charAt(j) !== first.charAt(j)) {
        commonLength = j
        break
      }
    }
  }

  return first.slice(0, commonLength)
}
