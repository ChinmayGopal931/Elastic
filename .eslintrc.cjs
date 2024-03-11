/* eslint-env node */
module.exports = {
  extends: ['airbnb', 'airbnb-typescript'],
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  plugins: ['airbnb', 'prettier', '@typescript-eslint'],
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
};
