### ESLint Shareable Configuration for JavaScript and TypeScript

### Overview

This documentation provides developers with a step-by-step guide on integrating ESLint with JavaScript and TypeScript rules in any project. ESLint is a static code analysis tool for identifying and fixing common programming errors and enforcing coding standards.

#### Getting Started

Install dev dependencies:
`npm install --save-dev eslint typescript typescript-eslint `

#### Integration

Update **.eslintrc.{js,yml,json,cjs}** with the following:

```diff
extends:[
- 'eslint:recommended',
- 'plugin:@typescript-eslint/recommended',
+ 'eslint-config-ts-js'
]
```

This project is created and maintained by [Covalience India Pvt Ltd.](https://covalience.com/)
