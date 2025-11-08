import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'
import tsParser from '@typescript-eslint/parser'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default [
	// Apply the recommended JavaScript rules
	js.configs.recommended,

	// Apply the recommended Vue rules
	...pluginVue.configs['flat/essential'],

	// Global ignores
	{
		ignores: [
			'dist/**',
			'node_modules/**',
			'docs/**',
			'*.d.ts',
			'coverage/**',
			'scripts/**',
			'update-titles.js',
			'vite.config.ts'
		]
	},

	// Configuration for Vue files
	{
		files: ['**/*.vue'],
		languageOptions: {
			parser: vueParser,
			parserOptions: {
				parser: tsParser,
				ecmaVersion: 'latest',
				sourceType: 'module'
			},
			globals: {
				process: 'readonly',
				Buffer: 'readonly',
				__dirname: 'readonly',
				__filename: 'readonly',
				global: 'readonly',
				module: 'readonly',
				require: 'readonly',
				exports: 'readonly',
				// Browser globals
				window: 'readonly',
				document: 'readonly',
				console: 'readonly',
				setTimeout: 'readonly',
				clearTimeout: 'readonly',
				localStorage: 'readonly',
				navigator: 'readonly',
				alert: 'readonly',
				fetch: 'readonly',
				NodeJS: 'readonly',
				// Web API globals
				Event: 'readonly',
				KeyboardEvent: 'readonly',
				HTMLElement: 'readonly',
				Element: 'readonly',
				HTMLInputElement: 'readonly',
				HTMLSelectElement: 'readonly',
				HTMLTextAreaElement: 'readonly',
				File: 'readonly',
				MediaQueryListEvent: 'readonly'
			}
		},
		plugins: {
			'@typescript-eslint': tsPlugin
		},
		rules: {
			// Vue 3 specific rules
			'vue/multi-word-component-names': 'off',
			'vue/no-v-html': 'warn',
			'vue/require-default-prop': 'off',
			'vue/require-explicit-emits': 'off',
			'vue/require-prop-types': 'off',
			'vue/prefer-import-from-vue': 'error',

			// Accessibility rules
			'vue/no-deprecated-slot-attribute': 'error',
			'vue/no-deprecated-slot-scope-attribute': 'error',
			'vue/no-deprecated-v-bind-sync': 'error',
			'vue/no-deprecated-v-on-native-modifier': 'error',
			'vue/no-deprecated-v-on-number-modifiers': 'error',

			// Code quality rules
			'vue/no-unused-components': 'warn',
			'vue/no-unused-vars': 'warn',
			'vue/component-name-in-template-casing': ['error', 'PascalCase'],
			'vue/custom-event-name-casing': 'off',
			'vue/html-self-closing': [
				'error',
				{
					html: {
						void: 'never',
						normal: 'always',
						component: 'always'
					},
					svg: 'always',
					math: 'always'
				}
			],
			'vue/max-attributes-per-line': [
				'error',
				{
					singleline: 3,
					multiline: 1
				}
			],
			'vue/no-empty-pattern': 'error',
			'vue/no-irregular-whitespace': 'error',
			'vue/no-loss-of-precision': 'error',
			'vue/no-reserved-component-names': 'error',
			'vue/no-useless-v-bind': 'error',
			'vue/no-useless-mustaches': 'error'
		}
	},

	// Configuration for TypeScript files
	{
		files: ['**/*.ts', '**/*.tsx'],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module'
			},
			globals: {
				process: 'readonly',
				Buffer: 'readonly',
				__dirname: 'readonly',
				__filename: 'readonly',
				global: 'readonly',
				module: 'readonly',
				require: 'readonly',
				exports: 'readonly',
				// Browser globals
				window: 'readonly',
				document: 'readonly',
				console: 'readonly',
				setTimeout: 'readonly',
				clearTimeout: 'readonly',
				localStorage: 'readonly',
				navigator: 'readonly',
				alert: 'readonly',
				fetch: 'readonly',
				NodeJS: 'readonly',
				// Web API globals
				Event: 'readonly',
				KeyboardEvent: 'readonly',
				HTMLElement: 'readonly',
				Element: 'readonly',
				HTMLInputElement: 'readonly',
				HTMLSelectElement: 'readonly',
				HTMLTextAreaElement: 'readonly',
				File: 'readonly',
				MediaQueryListEvent: 'readonly'
			}
		},
		plugins: {
			'@typescript-eslint': tsPlugin
		},
		rules: {
			// TypeScript specific rules
			'@typescript-eslint/no-unused-vars': [
				'warn',
				{
					argsIgnorePattern: '^_',
					varsIgnorePattern: '^_'
				}
			],
			'@typescript-eslint/no-explicit-any': 'warn',
			'@typescript-eslint/no-inferrable-types': 'off',
			'@typescript-eslint/ban-ts-comment': 'warn',
			'@typescript-eslint/no-non-null-assertion': 'warn',
			'@typescript-eslint/no-var-requires': 'error'
		}
	},

	// Configuration for JavaScript files (excluding Vue files)
	{
		files: ['**/*.js', '**/*.jsx'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: {
				process: 'readonly',
				Buffer: 'readonly',
				__dirname: 'readonly',
				__filename: 'readonly',
				global: 'readonly',
				module: 'readonly',
				require: 'readonly',
				exports: 'readonly'
			}
		},
		rules: {
			// JavaScript specific rules
			'no-unused-vars': [
				'warn',
				{
					argsIgnorePattern: '^_',
					varsIgnorePattern: '^_'
				}
			],
			'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
			'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
			'prefer-const': 'error',
			'no-var': 'error'
		}
	},

	// Configuration for all source files
	{
		files: ['**/*.{js,jsx,ts,tsx,vue}'],
		languageOptions: {
			globals: {
				process: 'readonly',
				Buffer: 'readonly',
				__dirname: 'readonly',
				__filename: 'readonly',
				global: 'readonly',
				module: 'readonly',
				require: 'readonly',
				exports: 'readonly',
				// Browser globals
				window: 'readonly',
				document: 'readonly',
				console: 'readonly',
				setTimeout: 'readonly',
				clearTimeout: 'readonly',
				localStorage: 'readonly',
				navigator: 'readonly',
				alert: 'readonly',
				fetch: 'readonly',
				NodeJS: 'readonly'
			}
		},
		rules: {
			// General code quality rules
			'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
			'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
			'no-unused-vars': 'off', // Handled by TypeScript-specific rule
			'prefer-const': 'error',
			'no-var': 'error',
			'object-shorthand': 'error',
			'prefer-template': 'error',
			'arrow-spacing': 'error',
			'comma-dangle': ['error', 'never'],
			quotes: ['error', 'single', { avoidEscape: true }],
			semi: ['error', 'never'],
			'max-len': ['warn', { code: 120, ignoreUrls: true, ignoreStrings: true, ignoreTemplateLiterals: true }],
			'eol-last': 'error',
			'no-trailing-spaces': 'error',
			'no-multiple-empty-lines': ['error', { max: 1 }],
			'comma-spacing': 'error',
			'key-spacing': 'error',
			'space-before-blocks': 'error',
			'space-infix-ops': 'error',
			'space-unary-ops': 'error',
			'spaced-comment': 'error',
			'brace-style': 'off',
			curly: 'error',
			eqeqeq: ['error', 'always'],
			'no-else-return': 'error',
			'no-empty-function': 'warn',
			'no-eval': 'error',
			'no-implied-eval': 'error',
			'no-new-func': 'error',
			'no-return-assign': 'error',
			'no-throw-literal': 'error',
			'no-unmodified-loop-condition': 'error',
			'no-unused-expressions': 'error',
			'no-useless-call': 'error',
			'no-useless-concat': 'error',
			'no-useless-return': 'error',
			'no-void': 'error',
			'no-with': 'error',
			radix: 'error',
			'wrap-iife': 'error',
			yoda: 'error'
		}
	}

	// Markdown files are excluded from ESLint to allow natural formatting
	// They will be handled by Prettier instead
]
