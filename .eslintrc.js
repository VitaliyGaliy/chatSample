module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: ['@react-native-community', 'plugin:react/recommended', 'airbnb'],
  plugins: ['react-native', 'prettier', 'import'],
  rules: {
    'react/jsx-filename-extension': [1, {extensions: ['.js', '.jsx']}],
    'import/prefer-default-export': ['off'],
    'react/jsx-curly-newline': 0,
    'react/state-in-constructor': 0,
    'react/static-property-placement': 0,
    'react/jsx-props-no-spreading': 0,
    'no-use-before-define': 0,
    'import/no-cycle': 0,
    'arrow-parens': 0,
    'object-curly-newline': 0
  },
};
