"use strict";

const RuleTester = require("eslint").RuleTester;
const rule = require("../../../lib/rules/require-form-method-post");

const parserOptions = {
  ecmaVersion: 2018,
  sourceType: "module",
  ecmaFeatures: {
    jsx: true,
  },
};

const ruleTester = new RuleTester({ parserOptions });

const defaultErrors = [
  { message: 'Form tags require explicit `method="POST"`' },
];

ruleTester.run("require-form-method-post", rule, {
  valid: [
    { code: `<form method="post" onSubmit={handleSubmit}></form>` },
    { code: `<form method="POST"></form>` },
    { code: `<form METHOD="POST"></form>` },
  ],
  invalid: [
    { code: `<form onSubmit={handleSubmit}></form>`, errors: defaultErrors },
    { code: `<form method="get"></form>`, errors: defaultErrors },
  ],
});
