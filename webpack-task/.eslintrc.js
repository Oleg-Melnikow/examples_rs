module.exports = {
  root: true,
  env: {
    commonjs: true,
    es6: true,
    browser: true,
  },
  extends: ["airbnb-base", "plugin:prettier/recommended"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2022,
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
        singleQuote: false,
      },
    ],
  },
  plugins: ["prettier"],
  noInlineConfig: true,
  "import/ignore": ["/*.png/", "/*.jpg/"],
};
