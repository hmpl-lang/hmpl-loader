const hmpl = require("hmpl-js/dist/hmpl.nodejs.js");

module.exports = function (source) {
  if (this.cacheable) this.cacheable();
  if (typeof source !== "string") throw Error("source is not a string");
  const result = hmpl.compile(source);
  return result;
};
