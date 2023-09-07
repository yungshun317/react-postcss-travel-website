const path = require('path');

postCSSPlugins = [
    require("postcss-import"),
    require("postcss-mixins"),
    require("postcss-simple-vars"),
    require("postcss-nested"),
    require("autoprefixer")
]

module.exports = {
    entry: './app/assets/scripts/App.js',
    output: {
        filename: 'bundled.js',
        path: path.resolve(__dirname, 'app')
    },
    devServer: {
      watchFiles: [ "app/**/*.html" ],
      static: {
          directory: path.join(__dirname, "app"),
          watch: false
      },
      hot: true,
      port: 3000
    },
    mode: 'development',
    // watch: true,
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    "style-loader",
                    { loader: "css-loader", options: { url: false } },
                    { loader: "postcss-loader", options: { postcssOptions: { plugins: postCSSPlugins } } }
                ]
            }
        ]
    }
}