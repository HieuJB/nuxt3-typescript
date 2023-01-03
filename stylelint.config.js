module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-vue',
    'stylelint-config-recommended-vue/scss',
  ],
  plugins: ['stylelint-selector-bem-pattern', 'stylelint-prettier'],
  ignorePath: '.gitignore',
  rules: {
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep'],
      },
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global', 'deep'],
      },
    ],
    'plugin/selector-bem-pattern': {
      preset: 'bem',
    },
    'string-quotes': 'single, { "avoidEscape" : false }',
    'prettier/prettier': [
      true,
      {
        singleQuote: false,
        tabWidth: 2,
      },
    ],
    'property-no-vendor-prefix': [null],
    'at-rule-no-vendor-prefix': [null],
    'declaration-block-trailing-semicolon': [null],
    'declaration-colon-space-after': [null],
    'value-no-vendor-prefix': [null],
    'no-descending-specificity': [null],
  },
  singleQuote: false,
}
