import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import tseslint from "typescript-eslint";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    plugins: {
      "@typescript-eslint": tseslint.plugin,
    },
    rules: {
      // Format rules
      semi: ["error", "never"],
      quotes: ["error", "single"],
      indent: ["error", 2],
      "comma-dangle": ["error", "always-multiline"],
      "object-curly-spacing": ["error", "always"],
      "arrow-spacing": ["error", { before: true, after: true }],
      "space-before-function-paren": ["error", "never"],
      "no-multi-spaces": "error",
      // Optional stricter rule
      "@typescript-eslint/explicit-function-return-type": "off",
    },
  },
];

export default eslintConfig;
