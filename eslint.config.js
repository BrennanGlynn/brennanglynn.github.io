import globals from "globals";
import js from "@eslint/js";
import react from "eslint-plugin-react";
import jest from "eslint-plugin-jest";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
    js.configs.recommended,
    react.configs.flat.recommended,
    {
        ...jest.configs['flat/recommended'],
        files: ['**/*.test.js', '**/*.spec.js'],
    },

    {
        files: ["**/*.{js,jsx}"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                ...globals.browser,
                ...globals.node,
                Atomics: "readonly",
                SharedArrayBuffer: "readonly",
            },
        },
        settings: {
            react: {
                version: "detect",
            },
        },
        rules: {
            "indent": ["error", 2],
            "quotes": ["error", "single"],
            "semi": ["error", "never"],
        },
    },

    eslintConfigPrettier,
];