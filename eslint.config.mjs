import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    plugins: {
      tailwindcss: require("eslint-plugin-tailwindcss"),
    },
    rules: {
      "tailwindcss/classnames-order": "warn", // optional: warn if classes are out of order
      "tailwindcss/no-custom-classname": "off", // optional
    },
    settings: {
      tailwindcss: {
        config: "./tailwind.config.js",
        // optional: include languages for IntelliSense inside strings
        // includeLanguages: { typescript: "javascript", typescriptreact: "javascriptreact" }
      },
    },
  },
];

export default eslintConfig;
