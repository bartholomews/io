module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    // @see https://github.com/vuejs/eslint-plugin-vue/issues/920
    'plugin:vue/essential',
    // '@vue/airbnb',          // "@vue/eslint-config-airbnb": "^4.0.0",
    // '@vue/typescript',      // "@vue/eslint-config-typescript": "^4.0.0",
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
};
