import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
  { ignores: ['dist'] },
  { files: ['**/*.{mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { ecmaVersion: 2020, globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.strict,
  pluginReact.configs.flat.all,
  eslintPluginPrettierRecommended,
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    rules: {
      'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
      'react/jsx-indent': 'off',
      'react/jsx-no-literals': 'off',
      'react/jsx-max-depth': [1, { max: 3 }],
    },
  },
];
