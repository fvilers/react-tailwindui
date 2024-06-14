module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "react", "perfectionist"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "react/jsx-sort-props": "error",
    "perfectionist/sort-objects": "error",
    "perfectionist/sort-object-types": "error",
    "perfectionist/sort-union-types": [
      "error",
      {
        "nullable-last": true,
      },
    ],
  },
};
