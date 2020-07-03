module.exports = {
  root: true,
  extends: '@react-native-community',
  // NOTE: 所有的规则配置在/node_module/@react-native-community/eslint-config/index.js 中
  // 以下只是单独的自定义配置
  rules: {
    'eqeqeq': 0,
    'no-undef':0,
    'no-bitwise':0,
    '@typescript-eslint/no-unused-vars': 1,
    'jsx-quotes': [1, 'prefer-single'], // enforces the usage of double quotes for all JSX attribute values which doesn’t contain a double quote
    'max-lines': [2, {"max": 1000, "skipComments": true}],
    "prettier/prettier": [2, {"singleQuote": true, "parser": "flow", "jsxSingleQuote": true}]
  },
  globals: {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: true
  }
};