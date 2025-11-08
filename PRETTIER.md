# Prettier Configuration

This project uses Prettier for consistent code formatting. The configuration is defined in
`.prettierrc` and `.prettierignore` files in the root directory.

## Configuration

### `.prettierrc`

The Prettier configuration is optimized for Vue 3, TypeScript, and Tailwind CSS:

```json
{
	"semi": false,
	"singleQuote": true,
	"tabWidth": 2,
	"trailingComma": "none",
	"printWidth": 120,
	"bracketSpacing": true,
	"bracketSameLine": false,
	"arrowParens": "avoid",
	"endOfLine": "lf",
	"vueIndentScriptAndStyle": true,
	"htmlWhitespaceSensitivity": "ignore",
	"embeddedLanguageFormatting": "auto",
	"plugins": ["prettier-plugin-tailwindcss"]
}
```

### Key Settings

- **No semicolons** - Consistent with the existing ESLint configuration
- **Single quotes** - For string literals
- **2 spaces indentation** - Standard for Vue/TypeScript projects
- **120 character line width** - Balances readability and screen space utilization
- **Vue indentation** - Script and style blocks in Vue files are properly indented
- **Tailwind CSS plugin** - Automatically sorts Tailwind classes according to recommended order

## Available Scripts

The following npm scripts are available for formatting:

- `npm run format` - Formats all files in place
- `npm run format:check` - Checks if files are formatted without making changes
- `npm run lint:format` - Runs both ESLint and Prettier format check

## File Exclusions

The following files and directories are excluded from formatting (defined in `.prettierignore`):

- `node_modules/` - Dependencies
- `dist/`, `build/`, `output/` - Build outputs
- `docs/` - Generated documentation
- `*.d.ts` - TypeScript declaration files
- `coverage/` - Test coverage reports
- `.env*` - Environment files (except `.env.example`)
- Log files, cache directories, and IDE files
- `public/` and `static/` - Static assets
- `scripts/` - Build and utility scripts
- `.github/` - GitHub workflows

## Integration with ESLint

Prettier is configured to work alongside ESLint:

1. **ESLint handles code quality** - Catches errors, enforces best practices
2. **Prettier handles formatting** - Ensures consistent code style
3. **No conflicts** - ESLint rules that conflict with Prettier are disabled

## Usage in Development

1. **Automatic formatting** - Most editors can be configured to format on save
2. **Pre-commit hooks** - Consider adding husky + lint-staged for automatic formatting
3. **CI/CD** - The `format:check` script can be used in CI to ensure consistent formatting

## Editor Integration

### VS Code

Install these extensions for the best experience:

- Prettier - Code formatter
- ESLint
- Vue Language Features (Volar)

Add to your `.vscode/settings.json`:

```json
{
	"editor.defaultFormatter": "esbenp.prettier-vscode",
	"editor.formatOnSave": true,
	"editor.codeActionsOnSave": {
		"source.fixAll.eslint": "explicit"
	}
}
```

### WebStorm

1. Go to Settings → Languages & Frameworks → Prettier
2. Enable "On code reformat"
3. Set "Run for files" to your desired scope
4. Configure Prettier package to use the project's `node_modules`

## Troubleshooting

### Prettier and ESLint conflicts

If you encounter conflicts between Prettier and ESLint:

1. Check that `eslint-config-prettier` is installed (recommended)
2. Disable conflicting ESLint rules in `eslint.config.js`
3. Ensure both tools are using the same configuration

### Formatting not working

1. Check that the file isn't in `.prettierignore`
2. Verify the file extension is supported by Prettier
3. Check for syntax errors in the file
4. Ensure Prettier is properly installed in `node_modules`

## Customizing the Configuration

To modify the formatting rules:

1. Edit `.prettierrc` for global changes
2. Add file-specific overrides in the `overrides` section
3. Update `.prettierignore` to exclude additional files
4. Test changes with `npm run format:check` before committing

For more information, see the [Prettier documentation](https://prettier.io/docs/en/options.html).
