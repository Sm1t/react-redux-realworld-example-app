module.exports = {
    env: {
        browser: true,
        es2021: true,
        "jest/globals": true
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 12,
        sourceType: "module"
    },
    settings: {
        react: {
            version: "detect"
        }
    },
    plugins: [
        "react",
        "jest"
    ],
    rules: {
        "react/prop-types": "off",
        "react/display-name": "off",
        "no-case-declarations": "off",
    },
    globals: {
        process: "readonly",
        global: "readonly"
    }
};
