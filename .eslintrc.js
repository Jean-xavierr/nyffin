module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	parser: '@typescript-eslint/parser', // allows ESLint to understand TypeScript
	parserOptions: {
		ecmaVersion: 2021,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	extends: [
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
	],
	plugins: ['@typescript-eslint'],
	rules: {
		'no-console': 'off',
		'object-shorthand': 'off',
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': [
			'warn',
			{
				argsIgnorePattern: '^_',
				varsIgnorePattern: '^_',
				caughtErrorsIgnorePattern: '^_',
			},
		],
		'react/react-in-jsx-scope': 'off',
		'react/no-unescaped-entities': 'off',
	},
};
