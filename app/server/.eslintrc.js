module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
    },
    extends: ['airbnb-base', 'prettier'],
    parserOptions: {
        ecmaVersion: 12,
    },
    rules: {
        'no-nested-ternary': 'off',
        'arrow-body-style': 'off',
        'consistent-return': 'off',
        'no-underscore-dangle': ['error', { allow: ['__session'] }],
        camelcase: 'off',
    },
};
