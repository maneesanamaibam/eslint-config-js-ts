module.exports = {
  extends: ["plugin:@typescript-eslint/recommended"],
  plugins: ["@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  rules: {
    // STYLISTIC Category
    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/consistent-type-definitions": "error",
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/non-nullable-type-assertion-style": "error",
    "no-empty-function": "off",
    "@typescript-eslint/no-empty-function": "error",
    "@typescript-eslint/array-type": "error",
    "@typescript-eslint/no-confusing-non-null-assertion": ["error"],
    "@typescript-eslint/no-empty-interface": ["error"],
    "@typescript-eslint/prefer-nullish-coalescing": ["error"], // "strictNullChecks" needs to be enabled
    "@typescript-eslint/prefer-optional-chain": ["error"], // "strictNullChecks" needs to be enabled

    // STRICT Category
    "@typescript-eslint/unified-signatures": ["error"],
    "@typescript-eslint/prefer-literal-enum-member": ["error"],
    "@typescript-eslint/no-useless-template-literals": "error",
    "no-throw-literal": "off",
    "@typescript-eslint/no-throw-literal": "error",
    "@typescript-eslint/no-non-null-assertion": "error",
    "@typescript-eslint/no-dynamic-delete": ["error"],
    "@typescript-eslint/no-array-delete": "error",
    "@typescript-eslint/no-confusing-void-expression": "error",
    "@typescript-eslint/no-invalid-void-type": "error",
    "@typescript-eslint/no-meaningless-void-operator": "error",
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
    "@typescript-eslint/no-unnecessary-condition": "error",
    "@typescript-eslint/no-mixed-enums": "error",
    // OTHER Category
    "@typescript-eslint/explicit-function-return-type": "error",
    "no-magic-numbers": "off",
    "@typescript-eslint/no-magic-numbers": [
      "error",
      {
        ignoreTypeIndexes: true,
        ignoreEnums: true,
        ignoreNumericLiteralTypes: true,
      },
    ],
    "@typescript-eslint/no-unsafe-unary-minus": "error",
    "@typescript-eslint/require-array-sort-compare": "error",
    "@typescript-eslint/no-useless-empty-export": "error",
  },
};
