const webpack = require('webpack');

module.exports = {
    plugins: [
        new webpack.DefinePlugin({
            "VERSION": JSON.stringify("12345")
        })
    ]
};
