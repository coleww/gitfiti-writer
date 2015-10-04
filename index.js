var alphabet = require('./alphabet')

module.exports = function (str) {
  var gitfiti = [[],[],[],[],[],[],[]]
  str.split(" ").forEach(function (word) {
    word.split("").forEach(function (charmander) {
      var rows = alphabet[charmander]
      if (rows) for (var i = 0; i < 7;  gitfiti[i].push(rows[i]) && gitfiti[i++].push([0])) {}
    })
    for (var i = 0; i < 7;  gitfiti[i++].push([0, 0, 0])) {}
  })

  return gitfiti.map(function (row) {
    return row.reduce(function (a, b) {return a.concat(b)})
  })
}

