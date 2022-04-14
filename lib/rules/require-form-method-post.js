"use strict";

const METHOD_VALUES = ["post", "get"];

function withMethodPost(attributes) {
  const method = (attributes || []).find(
    (attribute) =>
      attribute.type === "JSXAttribute" &&
      attribute.name.name.toLowerCase() === "method"
  );

  return method && METHOD_VALUES.includes(method.value.value.toLowerCase());
}

module.exports = {
  create: function (context) {
    return {
      JSXOpeningElement(node) {
        if (node.name.name !== "form") return;
        if (withMethodPost(node.attributes)) return;

        context.report({
          node,
          message: 'Form tags require explicit method="POST"',
        });
      },
    };
  },
};
