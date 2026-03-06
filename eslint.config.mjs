import config from "@10xly/eslint-config"
import tseslint from "typescript-eslint"

export default [
  ...config,
  {
    ignores: ["dist/**"],
  },
  ...tseslint.configs.all.map(c => ({
    ...c,
    files: ["**/*.ts", "**/*.tsx"],
  })),
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    }
  },
]