module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  rules: {
    'import/prefer-default-export': 'off',
    camelcase: 'off',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'brace-style': 'off',
  },
};
