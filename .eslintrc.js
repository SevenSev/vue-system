// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {
    "indent":'off',
    "no-tabs":"off",
    "key-spacing":"off",
    "space-infix-ops":"off",
    "space-before-blocks":"off",
    "space-before-function-paren":"off",
    "semi":"off",
    "quotes":"off",
    "no-unused-vars":"off",
    "spaced-comment":"off",
    // allow async-await
    'generator-star-spacing': 'off',
    "no-mixed-spaces-and-tabs":"off",
    "no-trailing-spaces":"off",
    "no-multi-spaces":"off",
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
