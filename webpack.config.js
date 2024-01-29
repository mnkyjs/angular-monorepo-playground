const webpack = require('webpack');

module.exports = {
    module: {
        rules: [
            {
                test: [/src\/index.ts/i],
                sideEffects: false,
            },
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            STABLE_FEATURE: JSON.stringify(true),
            EXPERIMENTAL_FEATURE: JSON.stringify(false),
        }),
    ],
};
