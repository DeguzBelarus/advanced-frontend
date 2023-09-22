module.exports = {
  "parser": "@typescript-eslint/parser",
  "extends": [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/jsx-runtime",
    "standard-with-typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:i18next/recommended"
  ],
  "env": {
    "browser": true,
    "es6": true,
    "jest": true,
    "node": true
  },
  "root": true,
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": ["@typescript-eslint", "react", "prettier", "react-hooks", "i18next"],
  "settings": {
    "react": {
      "pragma": "React",
      "version": "detect"
    }
  },
  "rules": {
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-var-reqiures": "off",
    "@typescript-eslint/ban-ts-comment": "error",
    "@typescript-eslint/prefer-nullish-coalescing": "off",
    "@typescript-eslint/no-unused-vars": ["warn"],
    "@typescript-eslint/no-shadow": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/naming-convention": "off",
    "@typescript-eslint/no-misused-promises": "off",
    "@typescript-eslint/no-floating-promises": ["off"],
    "comma-dangle": ["error", "only-multiline"],
    "prettier/prettier": ["error", {
      "endOfLine": "auto"
    }],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/prop-types": "off",
    "react/display-name": "off",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-indent": ["error", 2],
    "react/jsx-indent-props": ["error", 2],
    "react/jsx-filename-extension": ["error", {
      "extensions": [".js", ".jsx", ".tsx"]
    }],
    "react/jsx-props-no-spreading": "warn",
    "react/require-default-props": "off",
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "indent": ["error", 2],
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "no-unused-vars": "warn",
    "import/extensions": "off",
    "import/no-extraneous-dependencies": "off",
    "i18next/no-literal-string": ["warn", {
      markupOnly: true,
      ignoreAllAttributes: true
    }, ],
    "max-len": ["error", {
      "ignoreComments": true,
      "code": 120
    }]
  },
  "overrides": [{
    files: ['**/src/**/*.test{ts, tsx}'],
    rules: {
      "i18next/no-literal-string": "off"
    }
  }],
  "ignorePatterns": [".eslintrc.js"],
  "globals": {
    '__IS_DEVELOPMENT': true,
  }
}