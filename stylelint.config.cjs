module.exports = {
  extends: [
    'stylelint-config-html',
    'stylelint-config-standard',
    'stylelint-config-recess-order',
    'stylelint-config-prettier',
  ],
  plugins: ['stylelint-rscss'],
  rules: {
    'selector-class-pattern': null,
    'rscss/no-descendant-combinator': null,
    'rscss/class-format': [
      true,
      {
        // https://github.com/rstacruz/stylelint-rscss/blob/master/docs/rules.md#rscssclass-format
        component: '^[a-z][a-zA-Z0-9]+$', // camelCase
        element: '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$', // kebab-case
        helper: '^_([a-z][a-z0-9]*)(-[a-z0-9]+)*$', //  underscore prefix and kebab-case
        variant: '^-([a-z][a-z0-9]*)(-[a-z0-9]+)*$', // hyphen prefix and kebab-case
      },
    ],
  },
};
