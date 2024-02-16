### ESLint Shareable Configuration for JavaScript and TypeScript

#### Getting Started

Install dev dependencies:
`npm install --save-dev eslint typescript typescript-eslint `

#### Integration

Update **.eslintrc.{js,yml,json,cjs}** with the following:

```diff
extends:[
- 'eslint:recommended',
- 'plugin:@typescript-eslint/recommended',
+ 'eslint-config-covalience-typescript'
]
```
