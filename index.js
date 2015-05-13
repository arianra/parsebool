"use strict"
var parseBool = module.exports = function (obj, opts) {
  opts = opts || {}
  return (function (obj) {
    return (obj === "false")
      ? false
      : (obj === "true")
        ? true
        : obj
  }(opts.ignoreCase && typeof obj === "string"
      ? obj.toLowerCase()
      : obj))
}

parseBool.not = function (obj, opts) {
  return (function (obj) {
    return (typeof obj === "boolean")
      ? !obj
      : obj
  }(parseBool(obj, opts)))
}