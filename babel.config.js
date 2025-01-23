module.exports = {
    presets: [
        ['@babel/preset-env', { targets: { node: 'current' } }]
    ],
    ignore: ['node_modules'],
    plugins: [
        '@babel/plugin-proposal-object-rest-spread',
        '@babel/plugin-proposal-class-properties'
    ],
    include: ['src/**/*.js', 'index.js'],
    sourceMaps: false,
};
