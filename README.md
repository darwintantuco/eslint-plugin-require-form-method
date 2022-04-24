# eslint-plugin-require-form-method

![Node.js CI](https://github.com/darwintantuco/eslint-plugin-require-form-method/workflows/Node.js%20CI/badge.svg?branch=master)

Disallow form tags without explicit method attribute

Prevents sensitive data appearing on URLs

![](demo.png)

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-require-form-method`:

### npm

```
$ npm install eslint-plugin-require-form-method --save-dev
```

### yarn

```
$ yarn add eslint-plugin-require-form-method --dev
```

## Usage

Add `require-form-method` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["require-form-method"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "require-form-method/require-form-method": "error"
  }
}
```
