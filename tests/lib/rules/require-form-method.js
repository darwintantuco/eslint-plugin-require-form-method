"use strict";

const RuleTester = require("eslint").RuleTester;
const rule = require("../../../lib/rules/require-form-method");

const parserOptions = {
  ecmaVersion: 2018,
  sourceType: "module",
  ecmaFeatures: {
    jsx: true,
  },
};

const ruleTester = new RuleTester({ parserOptions });

const defaultErrors = [
  { message: "Form tags require explicit method attribute" },
];

ruleTester.run("require-form-method", rule, {
  valid: [
    // Allow form tags with explicit method="post"
    { code: `<form method="post" onSubmit={handleSubmit}></form>` },
    {
      code: `<form {...{ className }} data-testid='form' onSubmit={handleSubmit} method="post"></form>`,
    },
    // Allow form tags with explicit method="get"
    { code: `<form method="get"></form>` },
    // Allow form tags with explicit method="dialog"
    { code: `<form method="dialog"></form>` },
    { code: `<form className='form' method="get"></form>` },
    // Multiline
    {
      code: `<form
               method="post"
               className={className}
               onSubmit={handleSubmit}
               {...rest}
             >
             </form>`,
    },
    // Case insensitive
    { code: `<form method="POST"></form>` },
    { code: `<form METHOD="POST"></form>` },
  ],
  invalid: [
    // Disallow form tags without explicit method
    { code: `<form></form>`, errors: defaultErrors },
    { code: `<form onSubmit={handleSubmit}></form>`, errors: defaultErrors },
    {
      code: `<form {...{ className }} data-testid='form' onSubmit={handleSubmit}></form>`,
      errors: defaultErrors,
    },
    { code: `<form method="invalid"></form>`, errors: defaultErrors },
    {
      code: `<form
               className={className}
               onSubmit={handleSubmit}
               {...rest}
             >
             </form>`,
      errors: defaultErrors,
    },
  ],
});
