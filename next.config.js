const sitemap = require('nextjs-sitemap-generator');
const withSass = require('@zeit/next-sass');
const withFonts = require("next-fonts");

sitemap({
  // baseUrl: 'https://snipcart-nextjs-seo.netlify.com',
  pagesDirectory: __dirname + "/pages",
  targetDirectory: 'static/'
});

module.exports = withFonts(withSass({
  exportPathMap: function () {
    return {
      '/': { page: '/' },
    }
  }
}));