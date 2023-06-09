module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ['airbnb-base', 'plugin:prettier/recommended'],
    plugins: ['prettier'],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    rules: {
        'no-console': 'off',
        'no-unused-vars': 'off'
    }
};
