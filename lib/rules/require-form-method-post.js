"use strict";

function withMethodPost(attributes) {
  const method = (attributes || []).find(
    (attribute) => attribute.name.name.toLowerCase() === "method"
  );

  return method && method.value.value.toLowerCase() === "post";
}

module.exports = {
  create: function (context) {
    return {
      JSXOpeningElement(node) {
        if (node.name.name !== "form") return;
        if (withMethodPost(node.attributes)) return;

        context.report({
          node,
          message: 'Form tags require explicit `method="POST"`',
        });
      },
    };
  },
};
