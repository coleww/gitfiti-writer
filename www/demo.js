var gitfitiWriter = require('../')

document.getElementById('input').addEventListener('keyup', function (e) {
  document.getElementById('output').textContent = gitfitiWriter(document.getElementById('input').value)
})
