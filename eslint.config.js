import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import hooks from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";
import importPlugin from "eslint-plugin-import";
import prettier from "eslint-config-prettier";

export default [
  js.configs.recommended,
  prettier,
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: { jsx: true },
        sourceType: "module"
      },
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    plugins: {
      react,
      "react-hooks": hooks,
      "jsx-a11y": jsxA11y,
      import: importPlugin
    },
    settings: {
      react: {
        version: "18.3"
      }
    },
    rules: {
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ...hooks.configs.recommended.rules,
      "import/order": [
        "warn",
        {
          "newlines-between": "always",
          groups: [
            ["builtin", "external"],
            ["internal"],
            ["parent", "sibling", "index"],
            ["object", "type"]
          ]
        }
      ],
      "react/react-in-jsx-scope": "off"
    }
  }
];
