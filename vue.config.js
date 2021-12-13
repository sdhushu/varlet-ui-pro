const Components = require('unplugin-vue-components/webpack')
const { VarletUIResolver } = require('unplugin-vue-components/resolvers')
module.exports = {
    outputDir: "dist/varlet-ui-pro",
    configureWebpack: {
        plugins: [
            Components({
                resolvers: [VarletUIResolver()]
            })
        ]
    }
}
