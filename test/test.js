var test = require("tape").test
var parseBool = require("../")

test("defaults", function (t) {
  t.equal(parseBool(true), true)
  t.equal(parseBool(false), false)
  t.equal(parseBool("true"), true)
  t.equal(parseBool("false"), false)
  t.equal(parseBool("maybe"), "maybe")
  t.equal(parseBool("TRUE", {
    ignoreCase: true
  }), true)
  t.equal(parseBool("False", {
    ignoreCase: true
  }), false)
  t.equal(parseBool(undefined), undefined)

  t.equal(parseBool.not("true"), false)
  t.equal(parseBool.not("false"), true)
  t.equal(parseBool.not("maybe"), "maybe")
  t.end()
})
