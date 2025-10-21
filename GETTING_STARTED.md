# Getting Started with Nuxt XUI

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Prepare Development Environment

```bash
npm run dev:prepare
```

This command will:
- Build the module in stub mode
- Prepare the module builder
- Prepare the Nuxt playground

### 3. Start Development Server

```bash
npm start
```

Or use the longer form:

```bash
npm run dev
```

The playground will be available at `http://localhost:3000`

## What's Included

### Example Pages

The playground includes two example pages:

#### 1. **Home Page** (`/`)
- Showcases various components from the library
- Demonstrates Layout components (Header, Footer)
- Shows Common components (Buttons, Loaders, Text, etc.)
- Features dark mode support
- Includes component examples

#### 2. **Login Page** (`/login`)
- Full-featured animated login form based on the docai project
- Progressive form reveal on hover
- Username and password validation
- Success/error state animations
- Optional background video support
- Flashlight cursor effect
- Demo mode (no backend required)

### Key Components

The module includes **48+ components** organized in categories:

- **Auth**: Login component with animations
- **Layout**: Header, Footer, Logo, Theme controls
- **Common**: Buttons, Loaders, Text components, Containers, and more

### Features

✨ **Auto-Import** - All components are automatically available  
🌙 **Dark Mode** - Integrated theme switching  
🌍 **i18n** - Multi-language support (EN, ES, FR)  
💾 **State Persistence** - Pinia stores with persistence  
🎨 **Customizable** - Tailwind CSS + Nuxt UI based  
⚡ **TypeScript** - Full type safety  

## Development

### Build the Module

```bash
npm run prepack
```

### Run Tests

```bash
npm test
```

### Type Checking

```bash
npm run test:types
```

## Demo Login

The login page works in demo mode:

- **Username**: Any username longer than 3 characters
- **Password**: Any password longer than 8 characters

No backend is required for testing!

## Next Steps

1. **Explore the playground**: Navigate between `/` and `/login` to see components in action
2. **Customize**: Modify the playground pages to test your own implementations
3. **Read the docs**: Check `README.md` for full API documentation
4. **Create your app**: Install `@nuxt-xui/layout-ui` in your own Nuxt project

## Configuration

The playground is configured in `playground/nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  modules: ['../src/module'],
  
  nuxtXui: {
    version: '0.1.0',
    logoURL: 'https://nuxt.com'
  }
})
```

## Need Help?

Check the main `README.md` for:
- Full component list
- Configuration options
- Customization guides
- API documentation

---

Happy coding! 🚀
