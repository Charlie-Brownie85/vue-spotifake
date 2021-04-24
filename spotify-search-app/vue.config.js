//vue.config.js
module.exports = {
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = 'My Spotify Search App';
      return args;
    });
  },
  css: {
    sourceMap: true,
    requireModuleExtension: false,
    loaderOptions: {
      scss: {
        sourceMap: true,
        additionalData: `@import "~@/assets/styles/scss/_colors.scss";
        @import "~@/assets/styles/scss/_variables.scss";`
      },
    },
  },
};
