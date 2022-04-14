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

const defaultErrors = [{ message: 'Form tags require explicit method="POST"' }];

ruleTester.run("require-form-method-post", rule, {
  valid: [
    // Allow form tags with explicit method="post"
    { code: `<form method="post" onSubmit={handleSubmit}></form>` },
    {
      code: `<form {...{ className }} data-testid='form' onSubmit={handleSubmit} method="post"></form>`,
    },
    // Allow form tags with explicit method="get"
    { code: `<form method="get"></form>` },
    { code: `<form className='form' method="get"></form>` },
    // Case insensitive
    { code: `<form method="POST"></form>` },
    { code: `<form METHOD="POST"></form>` },
  ],
  invalid: [
    // Disallow form tags without explicit method="post"
    { code: `<form></form>`, errors: defaultErrors },
    { code: `<form onSubmit={handleSubmit}></form>`, errors: defaultErrors },
    {
      code: `<form {...{ className }} data-testid='form' onSubmit={handleSubmit}></form>`,
      errors: defaultErrors,
    },
    { code: `<form method="invalid"></form>`, errors: defaultErrors },
  ],
});
