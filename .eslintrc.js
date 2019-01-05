module.exports = {
  root: true,
  env: {
    node: true
  },
  plugins: ['prettier'],
  extends: [
    'plugin:prettier/recommended',
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/typescript'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'prettier/prettier': 'error',
    'space-before-function-paren': ['error', 'never']
  },
  parserOptions: {
    parser: 'typescript-eslint-parser'
  }
}
