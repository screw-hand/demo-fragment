// const autoprefixer = require('autoprefixer');
const stylelint = require('stylelint');
const postcssCssnext = require('postcss-cssnext');

module.exports = {
  plugins: [
    /* Warning: postcss-cssnext found a duplicate plugin ('autoprefixer') in your postcss plugins. This might be inefficient. You should remove 'autoprefixer' from your postcss plugin list since it's already included by postcss-cssnext. */
    /* autoprefixer({
      grid: true,
      browsers: ['> 1%', 'last 3 versions', 'android 4.2', 'ie 8'],
    }), */
    stylelint({
      config: {
        rules: {
          'declaration-no-important': true,
        },
      },
    }),
    postcssCssnext({
      browsers: ['> 1%', 'last 2 versions'],
    })
  ],
};
