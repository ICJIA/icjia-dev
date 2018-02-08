// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  plugins: [
    require("postcss-import")(),
    require("autoprefixer")(),
    require("postcss-font-magician")(),
    require("postcss-url")()
  ]
};
