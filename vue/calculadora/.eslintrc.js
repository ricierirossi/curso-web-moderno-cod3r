module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/essential',
    ],
    parserOptions: {
        parser: '@babel/eslint-parser',
        requireConfigFile: false,
        ecmaVersion: 2022,
        sourceType: 'module',
    },
    rules: {
        indent: ['error', 4],
        'linebreak-style': 0,
        'no-new': 0,
    },
};
