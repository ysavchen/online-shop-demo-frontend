module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:8090',
        ws: true,
        changeOrigin: true
      }
    }
  }
}