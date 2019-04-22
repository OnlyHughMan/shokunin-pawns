module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "jest": true
    },
    "extends": "airbnb-base",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
        "no-console": "off",
        "comma-dangle": "off",
        "eol-last": "warn",
        "space-before-function-paren": "off",
        "func-names": "off",
        "prefer-arrow-callback": "off",
        "semi": "off",
        "no-unused-vars": "warn",
        "function-paren-newline": "off",
        "arrow-parens": "off",
        "arrow-body-style": "off",
        "indent": ["error", 2],
        "padded-blocks": "off",
        "no-confusing-arrow": "off",
        "no-underscore-dangle": "off",
        "max-len": "warn",
        "import/newline-after-import": "off",
        "camelcase": "warn",
        "no-prototype-builtins": "off"
    }
};