module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['vue', '@typescript-eslint', 'prettier'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    eqeqeq: ['error', 'always', { null: 'never' }],
    'no-empty': ['error', { allowEmptyCatch: true }],
    'no-process-exit': 'off',
    'no-useless-escape': 'off',
    'no-var': 'error',
    'prettier/prettier': 'error',
    'no-duplicate-case': 'warn',
    'no-extra-parens': 'off',
    'no-func-assign': 'warn',
    'no-unreachable': 'warn',
    curly: 'warn',
    'default-case': 'warn',
    'dot-notation': 'warn',
    'no-else-return': 'warn',
    'no-empty-function': 'warn',
    'no-lone-blocks': 'warn',
    'no-multi-spaces': 'warn',
    'no-redeclare': 'warn',
    'no-return-assign': 'warn',
    'no-return-await': 'warn',
    'no-self-assign': 'warn',
    'no-self-compare': 'warn',
    'no-useless-catch': 'warn',
    'no-useless-return': 'warn',
    'no-shadow': 'off',
    'no-delete-var': 'off',
    'array-bracket-spacing': 'warn',
    'brace-style': 'warn',
    camelcase: 'warn',
    indent: 'off',
    'jsx-quotes': 'warn',
    'max-depth': 'warn',
    'max-statements': ['warn', 100],
    'max-nested-callbacks': ['warn', 3],
    'max-params': ['warn', 3],
    'max-statements-per-line': ['warn', { max: 1 }],
    'newline-per-chained-call': ['warn', { ignoreChainWithDepth: 3 }],
    'no-lonely-if': 'warn',
    'no-mixed-spaces-and-tabs': 'warn',
    'no-multiple-empty-lines': 'warn',
    semi: ['warn', 'never'],
    'space-before-blocks': 'warn',
    'space-in-parens': 'warn',
    'space-infix-ops': 'warn',
    'space-unary-ops': 'warn',
    'switch-colon-spacing': 'warn',
    'arrow-spacing': 'warn',
    'prefer-const': 'warn',
    'prefer-rest-params': 'warn',
    'no-irregular-whitespace': 'warn',
    'no-prototype-builtins': 'warn',
    'no-fallthrough': 'warn',
    'no-extra-boolean-cast': 'warn',
    'no-case-declarations': 'warn',
    'no-async-promise-executor': 'warn',
    'vue/multi-word-component-names': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-extra-semi': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-var-requires': 'off'
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
    $ref: 'readonly'
  }
}
