import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import stylistic from "@stylistic/eslint-plugin";
import noTypeAssertion from "eslint-plugin-no-type-assertion";
import imports from "eslint-plugin-import";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default tseslint.config(
  eslint.configs.recommended,
  {
    files: ["src/**/*.{ts,tsx,js,jsx}"],
    ignores: [
      "dist/*",
      "build/*",
      "coverage/*",
      "public/*",
      ".github/*",
      "node_modules/*",
      ".vscode/*",
    ],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
        ecmaVersion: 2020,
      },
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      "@stylistic": stylistic,
      "no-type-assertion": noTypeAssertion,
      import: imports,
    },
    rules: {
      ...tseslint.configs.recommendedTypeChecked.rules,
      "@typescript-eslint/brace-style": ["error", "1tbs"],
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "none", // Allows unused function parameters. Useful for functions with specific signatures where not all parameters are always used.
          ignoreRestSiblings: true, // Allows unused variables that are part of a rest property in object destructuring. Useful for excluding certain properties from an object while using the rest.
        },
      ],
      "@typescript-eslint/semi": ["error", "always"], // Requires semicolons for TypeScript-specific syntax
      "@typescript-eslint/require-await": "error", // Requires async functions to have an await statement
      "@typescript-eslint/explicit-function-return-type": "error", // Requires explicit return types on functions and class methods
      "@typescript-eslint/no-unsafe-assignment": "off", // Disables the rule that disallows unsafe assignment operations
      "@typescript-eslint/no-unsafe-member-access": "off", // Disables the rule that disallows unsafe member access operations
      "@typescript-eslint/restrict-template-expressions": "off", // Disables the rule that restricts template expressions
      "@typescript-eslint/no-unsafe-return": "error", // Disallows returning any from a function
      "@typescript-eslint/no-explicit-any": "error", // Disallows the use of any as a type declaration
      "@typescript-eslint/no-unnecessary-type-assertion": "error", // Disallows unnecessary type assertions
      "@typescript-eslint/no-unsafe-argument": "error", // Disallows passing any as an argument to a function
      "@typescript-eslint/no-misused-promises": "error", // Disallows the misuse of promises
      "@typescript-eslint/no-unnecessary-condition": "error", // Disallows unnecessary conditions
      "@typescript-eslint/consistent-indexed-object-style": "error", // Enforces a consistent style for indexed object access
      "@typescript-eslint/consistent-generic-constructors": "error", // Enforces a consistent style for generic constructors
      "@typescript-eslint/no-floating-promises": "error", // Disallows floating promises
      "@typescript-eslint/no-unsafe-call": "error", // Disallows unsafe call operations
      "@typescript-eslint/restrict-plus-operands": "error", // Disallows the use of the + operator with strings
      "@typescript-eslint/ban-ts-comment": "error", // Bans @ts-<directive> comments
      "@stylistic/eol-last": "error", // Enforces at least one newline at the end of files
      "@stylistic/no-tabs": "error", // Disallows tabs
      "@stylistic/indent": ["error", 2], // Enforces a 2-space indentation
      "@stylistic/semi": "error", // Requires semicolons
      "@stylistic/comma-dangle": ["error"], // Requires a trailing comma
      "@stylistic/keyword-spacing": ["error", { before: true, after: true }], // Enforces spacing before and after keywords
      "@stylistic/space-before-blocks": ["error", "always"], // Enforces a space before blocks
      "@stylistic/no-trailing-spaces": [
        "error",
        {
          // Disallows trailing whitespace at the end of lines
          skipBlankLines: false, // Enforces the rule even on blank lines
          ignoreComments: false, // Enforces the rule on lines containing comments
        },
      ],
      "@stylistic/brace-style": "off", // Note: you must disable the base rule as it can report incorrect errors
      "@stylistic/no-extra-semi": ["error"], // Disallows unnecessary semicolons for TypeScript-specific syntax
      ...imports.configs.errors.rules,
      ...imports.configs.warnings.rules,
      ...imports.configs.typescript.rules,
      "import/order": "error", // Enforces a consistent order for imports
      "import/default": "off", // Disables the rule that requires a default export to be named the same as the file
      "import/first": "error", // Enforces that all imports are at the top of the file
      "import/no-named-as-default": "off", // Disables the rule that disallows the use of a default import as a named import
      "no-type-assertion/no-type-assertion": "error", // Disallows type assertions
      "no-throw-literal": "error", // Disallows throwing literals as exceptions
      "no-async-promise-executor": "error", // Disallows using an async function as a Promise executor
      "no-await-in-loop": "error", // Disallows using await inside of loops
      "no-promise-executor-return": "error", // Disallows returning a value from a Promise executor
      "require-atomic-updates": "error", // Disallows assignments that can lead
      "prefer-promise-reject-errors": "error", // Requires using Error objects as Promise rejection reasons
      "no-nested-ternary": "error", // Disallows nested ternary expressions
      eqeqeq: ["error", "always"], // Enforces the use of === and !== instead of == and !=
      quotes: ["error", "double"], // Enforces the use of double quotes for strings
      "no-var": "error", // Disallows the use of var, enforcing let or const instead
      "prefer-const": "error", // Prefers the use of const for variables that are never reassigned
      curly: ["error", "all"], // Enforces the use of curly braces for all control statements
    },
  },
  eslintPluginPrettierRecommended,
);
