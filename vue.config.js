module.exports = {
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        asar: true,
        copyright: 'Copyright © 2021 william.sv@icloud.com',
      },
      mainProcessFile: 'src/main/background.js',
      mainProcessWatch: ['src/main/**/*'],
      nodeIntegration: true,
    }
  },
  productionSourceMap: false
}
