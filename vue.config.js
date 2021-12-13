const Components = require('unplugin-vue-components/webpack')
const { VarletUIResolver } = require('unplugin-vue-components/resolvers')
module.exports = {
    publicPath:"/",
    outputDir: "dist",
    configureWebpack: {
        plugins: [
            Components({
                resolvers: [VarletUIResolver()]
            })
        ]
    }
}
