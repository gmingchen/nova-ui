module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "node": true,
  },
  "extends": [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "plugin:@typescript-eslint/recommended",
    "@vue/typescript/recommended",
  ],
  "parserOptions": {
    "ecmaVersion": "lastest",
    "parser": "@typescript-eslint/parser",
    "sourceType": "module",
  },
  "rule": {
    "vue/html-self-closing": "off",
    "vue/max-attributes-per-line": "off",
    "vue/singleline-html-element-content-newline": "off",
    "vue/multi-word-component-names": "off",
  },
  "globals": {
    "defiineProps": "readonly",
    "defiineOptions": "readonly"
  }
}
