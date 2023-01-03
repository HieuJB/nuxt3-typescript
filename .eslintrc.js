module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-strongly-recommended',
    'plugin:vue/vue3-recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
  },

  plugins: ['prettier', '@typescript-eslint'],

  rules: {
    'vue/no-deprecated-filter': 2,
    'vue/no-deprecated-functional-template': 2,
    'vue/require-default-prop': 2,
    'vue/multi-word-component-names': 0,
    'vue/no-deprecated-html-element-is': 2,
    'vue/no-deprecated-v-on-native-modifier': 0,
    'vue/require-explicit-emits': 0,
    'vue/v-on-event-hyphenation': 0,
    'vue/no-v-html': 0,
    'vue/block-lang': [
      2,
      {
        script: {
          lang: 'ts',
        },
      },
    ],
    'vue/component-api-style': [
      2,
      ['script-setup', 'composition'], // "script-setup", "composition", "composition-vue2", or "options"
    ],
    'vue/component-name-in-template-casing': [2, 'PascalCase'],
    'vue/component-options-name-casing': [2, 'PascalCase'],
    'vue/custom-event-name-casing': [2, 'camelCase'],
    'vue/html-button-has-type': 0,
    'vue/new-line-between-multi-line-property': [
      2,
      {
        minLineOfMultilineProperty: 2,
      },
    ],
    'vue/no-bare-strings-in-template': 0,
    'vue/no-boolean-default': 2,
    'vue/no-empty-component-block': 2,
    'vue/no-multiple-objects-in-class': 2,
    'vue/no-required-prop-with-default': 2,
    'vue/no-static-inline-styles': 2,
    'vue/no-unused-properties': 2,
    'vue/no-unused-refs': 2,
    'vue/padding-line-between-blocks': 2,
    'vue/require-name-property': 2,
    'block-scoped-var': 2,
    'arrow-body-style': ['error', 'as-needed'],
    camelcase: 2,
    'capitalized-comments': [
      'error',
      'always',
      {
        ignorePattern: 'pragma|ignored',
        ignoreInlineComments: true,
      },
    ],
    'no-console': ['warn'],
    'no-var': ['error'],
    'no-undef': ['off'],
    'nuxt/no-cjs-in-config': 'off',
    'vue/no-parsing-error': 0,
  },
}

//Note for rules: 0 = off , 1 = warning ,  2 = on
