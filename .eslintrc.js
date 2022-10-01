module.exports = {
  root: true,
  extends: '@react-native-community',
  // extends: ['prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    '`endOfLine`': 'auto',
  },
};
