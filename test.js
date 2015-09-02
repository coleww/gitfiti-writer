var tap = require('tape')

var gitfitiWriter = require('./')

tap.test('does the thing', function (t) {
  t.plan(1)
  t.equal(gitfitiWriter('world'), 'hello world', 'does it')
})
