const path = require("path");

module.exports = function (source) {
  if (this.cacheable) this.cacheable();
  if (typeof source !== "string") throw Error("source is not a string");
  const modulePath = JSON.stringify(
    path.join("hmpl-js", "dist", "hmpl.runtime")
  );
  const result = [];
  const template = JSON.stringify(source);
  result.push(`const hmpl = require(${modulePath});\n`);
  result.push(`const template = hmpl.compile(${template});\n`);
  result.push(`module.exports = template;`);
  return result.join("");
};

module.exports.seperable = true;
