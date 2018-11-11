const path = require('path')

// see https://cli.vuejs.org/config/#vue-config-js
module.exports = {
    // set base url from default '/' to be able serve index.html without a server
    baseUrl: './',
    css: {
        loaderOptions: {
            sass: {
                // include node_modules as source path so that scss loader can compile @material imports from third-party material components
                includePaths: [path.resolve(__dirname, 'node_modules')]
            },
        }
    }
}