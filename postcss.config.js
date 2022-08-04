module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: {},
    'postcss-flexbugs-fixes': {},
    'postcss-will-change-transition': {},
    'postcss-focus-visible': {},
    'postcss-pxtorem': {
      rootValue: 16,
      propList: ['*', '!border', '!border-width'],
    },
    'postcss-preset-env': {
      stage: 3,
      features: {'nesting-rules': false},
      autoprefixer: {
        cascade: false,
        flexbox: 'no-2009',
      },
    },
    'postcss-discard-comments': {
      removeAll: true,
    },
    'postcss-combine-duplicated-selectors': {
      removeDuplicatedValues: true,
    },
    autoprefixer: {},
  },
};
