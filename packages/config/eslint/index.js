/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    "eslint:recommended",
    "next/core-web-vitals",
    "next/typescript",
    "prettier",
  ],
  rules: {
    "@next/next/no-img-element": "error",
    "react/self-closing-comp": "error",
    "react/jsx-curly-brace-presence": ["error", { props: "never", children: "never" }],
  },
};