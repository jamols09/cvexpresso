# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# Start the development server on `http://localhost:3000`:
npm run dev

# Build the application for production
npm run build

# Locally preview production build
npm run preview
```

## Folder Structure

**assets** - Contains uncompiled assets such as styles, images, or fonts.

**components** - Contains Vue.js components that can be used throughout the application.

**composables** - Contains reusable logic and state management using Vue 3's Composition API.

**seo** - Contains all the texts or descriptions to the components

**constants** - Contains all the constant texts where text is permanent

**layouts** - Contains layout components that wrap around page components to provide a consistent structure.

**middleware** - Contains middleware functions that run before rendering a page or layout.

**pages** - Contains Vue.js page components that map to routes in the application.

**plugins** - Contains JavaScript plugins that need to be run before initializing the root Vue.js application.

**public** - Contains static assets that are directly served by the server.

**store** - Contains Vuex store modules for state management.

**utils** - Contains utility functions and helpers.

**prisma** - Contains Prisma ORM schema and migration files.

**server** - Contains server-side code, including API routes and server middleware.

**types** - Contains all the types used for TS

## Modules used

- Prisma ORM
- Oslo for encryption
