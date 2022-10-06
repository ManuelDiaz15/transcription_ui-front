
module.exports = ({
  transpileDependencies: [
    'vuetify'
  ],
 /*  se agrego lo sigiente para tratar de solucionar el problema de CORS */ 
  devServer: {
    proxy: 'http://localhost/',
  },

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false,
      enableBridge: true,
      includeLocales: false
    }
  }
})
