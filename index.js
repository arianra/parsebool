"use strict"
module.exports = function parseBool(obj, opts) {
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
