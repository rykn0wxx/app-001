module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true
  },
  extends: ['plugin:vue/essential', '@vue/standard', 'eslint:recommended'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': 'off',
    'no-undef': 'off',
    'no-useless-return': 0,
    'no-useless-escape': 0,
    camelcase: 'off',
    'template-curly-spacing': 0,
    'vue/no-use-v-if-with-v-for': 0,
    'no-unused-vars': 0
  }
}
