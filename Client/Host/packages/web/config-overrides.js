const webpack = require('webpack');
const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = function override(config, env) {
    config.resolve.plugins = config.resolve.plugins.filter(
        (plugin) => plugin.constructor.name !== 'ModuleScopePlugin'
    );

    config.module.rules.push(
        {
            test: /\.[jt]sx?$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: require.resolve('babel-loader'),
                    options: {
                        plugins: [
                            isDevelopment &&
                                require.resolve('react-refresh/babel'),
                        ].filter(Boolean),
                    },
                },
            ],
        },
        {
            test: /\.m?js/,
            resolve: {
                fullySpecified: false,
            },
        }
    );

    config.plugins.push(
        new webpack.DefinePlugin({ __DEV__: env !== 'production' })
    );

    return config;
};
