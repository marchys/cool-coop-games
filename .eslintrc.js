module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  parser: 'babel-eslint',
  plugins: ['react', 'prettier'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      generators: true,
    },
  },
  rules: {
    // http://eslint.org/docs/rules/
    'no-void': 0,
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: false,
        allowTernary: false,
        allowTaggedTemplates: true,
      },
    ],
    // https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules
    'import/prefer-default-export': 1,
    'import/no-extraneous-dependencies': 1,
    'import/no-named-as-default': 0,
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules
    'react/prefer-stateless-function': 1,
    // https://github.com/prettier/prettier/blob/master/docs/configuration.md
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
};
