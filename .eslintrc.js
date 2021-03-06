const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8')
);

module.exports = {
  extends: ['react-app', 'prettier', 'prettier/react', 'airbnb'],
  plugins: ['prettier', 'react', 'jsx-a11y', 'react-hooks'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    node: true,
    browser: false,
    es6: true
  },
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', './', '.expo', '.expo-shared'],
        extensions: [".js", ".jsx", ".json", ".native.js"]
      }
    }
  },
  rules: {
    'arrow-body-style': [2, 'as-needed'],
    'class-methods-use-this': 0,
    'comma-dangle': 0,
    'implicit-arrow-linebreak': 0,
    'import/imports-first': 0,
    'import/newline-after-import': 0,
    'import/no-dynamic-require': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-named-as-default': 0,
    'import/no-unresolved': 2,
    'import/no-webpack-loader-syntax': 0,
    'import/prefer-default-export': 0,
    indent: [
      2,
      2,
      {
        SwitchCase: 1
      }
    ],
    'function-paren-newline': 0,
    "global-require": 0,
    'no-console': 1, // 1
    'max-len': 0,
    'newline-per-chained-call': 0,
    'no-confusing-arrow': 0,
    'no-underscore-dangle': 0,
    'no-use-before-define': 0,
    "object-curly-newline": 0,
    'no-unused-vars': 1,
    'guard-for-in': 0,
    'require-yield': 0,
    'prefer-template': 2,
    'no-plusplus': [2, { allowForLoopAfterthoughts: true }],
    'jsx-a11y/aria-props': 2,
    "jsx-a11y/anchor-is-valid": 0,
    'jsx-a11y/heading-has-content': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/label-has-for': 2,
    'jsx-a11y/mouse-events-have-key-events': 2,
    'jsx-a11y/role-has-required-aria-props': 2,
    'jsx-a11y/role-supports-aria-props': 2,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/require-default-props': 0,
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/jsx-uses-vars': 2,
    'react/require-extension': 0,
    'react/state-in-constructor': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-no-target-blank': 0,
    'react/self-closing-comp': 0,
    'react/jsx-props-no-spreading': 0,
    "react/react-in-jsx-scope": 0,
    'react/prop-types': 0,
    'react/jsx-indent': [2, 2],
    'react/destructuring-assignment': 1,
    'prettier/prettier': ['error', prettierOptions]
  }
};
