const path = require('path');


module.exports = {
    mode: 'development',
    entry: './code/main.js',
    devServer:{
        static: {
            directory: path.join(__dirname, "/"),
        },
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.woff2$/i,
                type: "asset/resource"
            },
            {
                test: /\.woff$/i,
                type: "asset/resource"
            },
            {
                test: /\.png$/i,
                type: "asset/resource"
            },
            {
                type: /\.txt$/i,
                type: "asset/source"
            }
        ]       
    }
}