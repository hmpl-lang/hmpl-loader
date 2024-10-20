const path = require("path");
const schemaUtils = require("schema-utils");

const schema = {
  type: "object",
  properties: {
    memo: {
      type: "boolean",
    },
    autoBody: {
      anyOf: [
        {
          type: "object",
          properties: {
            formData: {
              type: "boolean",
            },
          },
        },
        { type: "boolean" },
      ],
    },
  },
};

module.exports = function (source) {
  if (this.cacheable) this.cacheable();
  if (typeof source !== "string")
    throw Error(
      "Template was not found or the type of the passed value is not string"
    );
  const modulePath = JSON.stringify(
    path.join("hmpl-js", "dist", "hmpl.runtime")
  );
  const result = [];
  const template = JSON.stringify(source);
  const options = this.getOptions();
  schemaUtils.validate(schema, options, {
    name: "hmpl-loader",
    baseDataPath: "options",
  });
  const stringOptions = JSON.stringify(options);
  result.push(`const hmpl = require(${modulePath});\n`);
  result.push(`const template = hmpl.compile(${template},${stringOptions});\n`);
  result.push(`module.exports = template;`);
  return result.join("");
};

module.exports.seperable = true;
