### ESLint Shareable Configurations for JavaScript and TypeScript

### Overview

This documentation provides developers with a step-by-step guide on integrating  shareable ESLint configuration `eslint-config-js-ts`  for javascript and typescript rules in any front-end project. ESLint is a static code analysis tool for identifying and fixing common programming errors and enforcing coding standards.

#### Installation

Install dev dependencies:
```
npm install	--save-dev eslint typescript git+https://github.com/maneesanamaibam/eslint-config-js-ts.git @typescript-eslint/parser@^6.21.0 @typescript-eslint/eslint-plugin@^6.21.0 
 ```





#### Dependencies
Please ensure that you have the following dependencies in your project:
```
    "@typescript-eslint/eslint-plugin": "^6.21.0",
    "@typescript-eslint/parser": "^6.21.0",
    "typescript": "^5.3.3",
    "eslint": "^8.56.0",
```
### Usage
Once the `eslint-config-js-ts` package is installed, you can use by specifying `js-ts` in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section in your ESLint configuration.

1. Update **.eslintrc.{js,yml,json,cjs}** with the following:

```diff
extends:[
- 'eslint:recommended',
- 'plugin:@typescript-eslint/recommended',
+ 'eslint-config-js-ts'
]
```

2. Update your typescript configuration file **tsconfig.json** with the following:
```diff
+ "strictNullChecks":true
```



*This repository is created and maintained by [Covalience India Pvt Ltd.](https://covalience.com/)*
