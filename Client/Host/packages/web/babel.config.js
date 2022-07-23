module.exports = {
    presets: [
        '@babel/preset-react',
        '@babel/preset-env',
        '@babel/preset-typescript',
        'module:metro-react-native-babel-preset',
    ],
    plugins: ['@babel/plugin-proposal-class-properties', 'inline-react-svg'],
};
