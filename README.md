# Shiba game!

shame, for short

## Getting Started

1. Install dependencies:

    ```bash
    bun install # or pbun or yarn
    ```

2. Start the development server:

    ```bash
    bun run dev
    ```

3. Build for production:
    ```bash
    bun run build
    ```

## Code Formatting

This template includes Prettier with the Ripple plugin for consistent code formatting. Use it or you will actually genuinely explode

### Available Commands

- `bun run format` - Format all files
- `bun run format:check` - Check if files are formatted correctly

### Configuration

Prettier is configured in `.prettierrc` with the following settings:

- Uses tabs for indentation
- Single quotes for strings
- 100 character line width
- Includes the `@ripple-ts/prettier-plugin` for `.ripple` file formatting

### VS Code Integration

For the best development experience, install the [Prettier VS Code extension](https://open-vsx.org/extension/prettier/prettier-vscode) and the [Ripple VS Code extension](https://open-vsx.org/extension/ripple-ts/ripple-ts-vscode-plugin).

## Learn More

- [Ripple Documentation](https://www.ripplejs.com/docs)
- [Vite Documentation](https://vitejs.dev/)
