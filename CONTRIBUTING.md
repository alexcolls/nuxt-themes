# Contributing to Nuxt XUI

First off, thank you for considering contributing to Nuxt XUI! 🎉

It's people like you that make Nuxt XUI such a great tool.

## Code of Conduct

This project and everyone participating in it is governed by respect and professionalism. By participating, you are expected to uphold this standard.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

* **Use a clear and descriptive title**
* **Describe the exact steps to reproduce the problem**
* **Provide specific examples**
* **Describe the behavior you observed and what you expected**
* **Include screenshots if possible**
* **Include your environment details** (OS, Node version, Nuxt version)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

* **Use a clear and descriptive title**
* **Provide a detailed description of the suggested enhancement**
* **Explain why this enhancement would be useful**
* **List some examples of how it would be used**

### Pull Requests

* Fork the repo and create your branch from `main`
* If you've added code that should be tested, add tests
* Ensure the test suite passes
* Make sure your code lints
* Update the documentation

## Development Setup

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/nuxt-xui.git
cd nuxt-xui

# Install dependencies
npm install

# Install playground dependencies
cd playground
npm install --legacy-peer-deps
cd ..

# Prepare development
npx nuxt-module-build build --stub
cd playground && npx nuxi prepare && cd ..

# Start development
npm start
```

## Coding Guidelines

### Style Guide

* Use TypeScript
* Follow the existing code style
* Use meaningful variable names
* Add comments for complex logic
* Keep functions small and focused

### Commit Messages

We use emoji commits to make the history more readable:

* ✨ `:sparkles:` - New feature
* 🐛 `:bug:` - Bug fix
* 📝 `:memo:` - Documentation
* ♻️ `:recycle:` - Refactoring
* 🎨 `:art:` - Style/UI changes
* ⚡ `:zap:` - Performance improvements
* 🔧 `:wrench:` - Configuration changes
* 🚀 `:rocket:` - Deployment
* 🔒 `:lock:` - Security fixes

Example:
```
✨ Add new login animation component
🐛 Fix dark mode toggle issue
📝 Update installation instructions
```

### Component Guidelines

* Components should be self-contained and reusable
* Use props for configuration
* Emit events for actions
* Document props and events
* Add TypeScript types
* Follow Vue 3 Composition API patterns

### Testing

```bash
# Run tests
npm test

# Run type check
npm run test:types

# Run linter
npm run lint
```

## Project Structure

```
nuxt-xui/
├── src/
│   ├── module.ts           # Module entry point
│   └── runtime/
│       ├── components/     # Vue components
│       │   ├── Auth/
│       │   ├── Common/
│       │   └── Layout/
│       ├── composables/    # Vue composables
│       ├── stores/         # Pinia stores
│       └── locales/        # i18n translations
├── playground/             # Development playground
├── docs/                   # Documentation
└── tests/                  # Test files
```

## Component Development

### Creating a New Component

1. Create the component file in the appropriate directory
2. Add TypeScript types for props
3. Add documentation comments
4. Export the component
5. Add usage example in playground
6. Update README if needed

Example:

```vue
<template>
  <div class="my-component">
    <slot />
  </div>
</template>

<script setup lang="ts">
/**
 * MyComponent - Brief description
 * 
 * @example
 * <MyComponent :prop="value">Content</MyComponent>
 */

interface Props {
  /** Description of the prop */
  prop?: string
}

const props = withDefaults(defineProps<Props>(), {
  prop: 'default'
})
</script>
```

## Documentation

* Update README.md for new features
* Update CHANGELOG.md for all changes
* Add inline documentation for complex code
* Include usage examples

## Questions?

Feel free to open an issue with your question or reach out to the maintainers.

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing! 🙏
