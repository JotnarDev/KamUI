<div align="center">
  
# 🎨 KamUI

**Modern CSS Component Library for Tailwind CSS 4**

[![npm version](https://img.shields.io/npm/v/kamui.svg?style=flat-square)](https://www.npmjs.com/package/kamui)
[![npm downloads](https://img.shields.io/npm/dm/kamui.svg?style=flat-square)](https://www.npmjs.com/package/kamui)
[![license](https://img.shields.io/npm/l/kamui.svg?style=flat-square)](https://github.com/JotnarDev/KamUI/blob/main/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/JotnarDev/KamUI?style=flat-square)](https://github.com/JotnarDev/KamUI/stargazers)

Beautiful, accessible, and customizable UI components built on Tailwind CSS 4.  
**Framework-agnostic** with zero JavaScript runtime.

[📖 Documentation](#-documentation) · [🚀 Getting Started](#-getting-started) · [🧩 Components](#-components) · [🎨 Theming](#-theming)

</div>

---

## ✨ Features

| Feature                   | Description                                                                   |
| ------------------------- | ----------------------------------------------------------------------------- |
| 🚀 **Framework Agnostic** | Works with Vue, React, Astro, Svelte, Angular, Next.js, Nuxt, or vanilla HTML |
| 🎨 **Tailwind CSS 4**     | Built on the latest version with the new `@theme` directive                   |
| 🌙 **Dark Mode**          | Automatic dark mode with system preference detection + manual toggle          |
| 📦 **Zero JS Runtime**    | Pure CSS components, no JavaScript overhead                                   |
| 🔧 **Modular Imports**    | Import only the components you need                                           |
| ♿ **Accessible**         | Built with accessibility best practices                                       |
| 🎯 **Utility-First**      | Seamlessly mix with Tailwind utilities                                        |
| 📱 **Responsive**         | Mobile-first responsive design                                                |

---

## 📦 Works With

KamUI is **pure CSS**, so it works with any framework or no framework at all:

| Framework | Supported | Framework | Supported |
| --------- | --------- | --------- | --------- |
| Vue 3     | ✅        | React     | ✅        |
| Astro     | ✅        | Next.js   | ✅        |
| Nuxt      | ✅        | Svelte    | ✅        |
| SvelteKit | ✅        | Angular   | ✅        |
| Solid     | ✅        | Qwik      | ✅        |
| HTML/CSS  | ✅        | PHP/Blade | ✅        |

---

## 🚀 Getting Started

### Installation

```bash
# npm
npm install kamui

# pnpm
pnpm add kamui

# yarn
yarn add kamui
```

### Requirements

- **Node.js** 18 or higher
- **Tailwind CSS** 4.x

---

## 📖 Framework Setup Guides

### Vue 3 + Vite

```bash
npm install kamui tailwindcss @tailwindcss/vite
```

```js
// vite.config.js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [vue(), tailwindcss()],
});
```

```css
/* src/assets/main.css */
@import 'tailwindcss';
@import 'kamui';
```

```vue
<!-- App.vue -->
<template>
  <button class="button button-primary">Click me</button>
</template>
```

---

### React + Vite

```bash
npm install kamui tailwindcss @tailwindcss/vite
```

```js
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

```css
/* src/index.css */
@import 'tailwindcss';
@import 'kamui';
```

```jsx
// App.jsx
export default function App() {
  return <button className="button button-primary">Click me</button>;
}
```

---

### Next.js

```bash
npm install kamui tailwindcss @tailwindcss/postcss postcss
```

```js
// postcss.config.mjs
const config = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
};
export default config;
```

```css
/* app/globals.css */
@import 'tailwindcss';
@import 'kamui';
```

```jsx
// app/page.jsx
export default function Home() {
  return <button className="button button-primary">Click me</button>;
}
```

---

### Nuxt 3

```bash
npm install kamui tailwindcss @tailwindcss/vite
```

```ts
// nuxt.config.ts
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  css: ['~/assets/css/main.css'],
});
```

```css
/* assets/css/main.css */
@import 'tailwindcss';
@import 'kamui';
```

```vue
<!-- app.vue -->
<template>
  <button class="button button-primary">Click me</button>
</template>
```

---

### Astro

```bash
npm install kamui tailwindcss @tailwindcss/vite
```

```js
// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
});
```

```css
/* src/styles/global.css */
@import 'tailwindcss';
@import 'kamui';
```

```astro
---
// src/pages/index.astro
import '../styles/global.css'
---

<button class="button button-primary">Click me</button>
```

---

### Svelte + Vite

```bash
npm install kamui tailwindcss @tailwindcss/vite
```

```js
// vite.config.js
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [svelte(), tailwindcss()],
});
```

```css
/* src/app.css */
@import 'tailwindcss';
@import 'kamui';
```

```svelte
<!-- src/App.svelte -->
<button class="button button-primary">Click me</button>
```

---

### SvelteKit

```bash
npm install kamui tailwindcss @tailwindcss/vite
```

```js
// vite.config.js
import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit(), tailwindcss()],
});
```

```css
/* src/app.css */
@import 'tailwindcss';
@import 'kamui';
```

```svelte
<!-- src/routes/+page.svelte -->
<button class="button button-primary">Click me</button>
```

---

### Angular

```bash
npm install kamui tailwindcss @tailwindcss/postcss postcss
```

```json
// .postcssrc.json
{
  "plugins": {
    "@tailwindcss/postcss": {}
  }
}
```

```css
/* src/styles.css */
@import 'tailwindcss';
@import 'kamui';
```

```html
<!-- component.html -->
<button class="button button-primary">Click me</button>
```

---

### Solid + Vite

```bash
npm install kamui tailwindcss @tailwindcss/vite
```

```js
// vite.config.js
import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [solid(), tailwindcss()],
});
```

```css
/* src/index.css */
@import 'tailwindcss';
@import 'kamui';
```

```jsx
// src/App.jsx
export default function App() {
  return <button class="button button-primary">Click me</button>;
}
```

---

### HTML (No Framework)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>KamUI Example</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="node_modules/kamui/library/index.css" />
  </head>
  <body class="bg-bg text-text p-8">
    <button class="button button-primary">Click me</button>
  </body>
</html>
```

---

## 🧩 Components

KamUI includes **23+ ready-to-use components**:

| Component          | Description                | Component         | Description          |
| ------------------ | -------------------------- | ----------------- | -------------------- |
| 🔘 **Buttons**     | Multiple variants & sizes  | 🃏 **Cards**      | Content containers   |
| 📝 **Forms**       | Inputs, labels, validation | 🔔 **Alerts**     | Feedback messages    |
| 🏷️ **Badges**      | Labels & status indicators | 📊 **Tables**     | Data display         |
| 💬 **Modals**      | Dialog windows             | 📑 **Tabs**       | Content organization |
| 📋 **Dropdowns**   | Menu lists                 | 👤 **Avatars**    | User images          |
| 🧭 **Breadcrumbs** | Navigation paths           | 💡 **Tooltips**   | Hover information    |
| 📍 **Popovers**    | Floating content           | ⏳ **Spinners**   | Loading indicators   |
| 📈 **Progress**    | Progress bars              | 🔔 **Toasts**     | Notifications        |
| 🎹 **Accordion**   | Collapsible content        | ➖ **Dividers**   | Visual separators    |
| 📝 **List Groups** | Grouped items              | 🚶 **Stepper**    | Multi-step progress  |
| 📄 **Pagination**  | Page navigation            | ✍️ **Typography** | Text styles          |

---

## 💡 Usage Examples

### Buttons

```html
<!-- Solid variants -->
<button class="button button-primary">Primary</button>
<button class="button button-secondary">Secondary</button>
<button class="button button-success">Success</button>
<button class="button button-warning">Warning</button>
<button class="button button-error">Error</button>

<!-- Outlined variants -->
<button class="button button-outlined button-outlined-primary">Outlined</button>

<!-- Ghost variant -->
<button class="button button-ghost">Ghost</button>

<!-- Sizes -->
<button class="button button-primary button-sm">Small</button>
<button class="button button-primary button-md">Medium</button>
<button class="button button-primary button-lg">Large</button>

<!-- Pill shape -->
<button class="button button-primary button-pill">Pill Button</button>
```

### Cards

```html
<div class="card">
  <div class="card-header">Card Title</div>
  <div class="card-body">
    <p>Card content goes here.</p>
  </div>
  <div class="card-footer">
    <button class="button button-primary">Action</button>
  </div>
</div>

<!-- Card with image -->
<div class="card">
  <img class="card-img" src="image.jpg" alt="Description" />
  <div class="card-body">Content</div>
</div>
```

### Forms

```html
<!-- Basic input -->
<div>
  <label class="form-label" for="email">Email</label>
  <input
    class="form-input"
    type="email"
    id="email"
    placeholder="you@example.com"
  />
</div>

<!-- Floating label -->
<div class="form-floating">
  <input
    id="name"
    type="text"
    class="form-floating-input peer"
    placeholder="Name"
  />
  <label for="name" class="form-floating-label">Your Name</label>
</div>

<!-- Validation states -->
<input class="form-input form-input-success" type="text" value="Valid input" />
<input class="form-input form-input-error" type="text" value="Invalid input" />
```

### Alerts

```html
<div class="alert alert-success">
  <span class="alert-icon">✓</span>
  <span class="alert-message">Operation completed successfully!</span>
</div>

<div class="alert alert-error">
  <span class="alert-icon">✕</span>
  <span class="alert-message">Something went wrong.</span>
</div>

<div class="alert alert-warning">
  <span class="alert-icon">⚠</span>
  <span class="alert-message">Please review your input.</span>
</div>

<div class="alert alert-info">
  <span class="alert-icon">ℹ</span>
  <span class="alert-message">Here's some information.</span>
</div>
```

### Badges

```html
<!-- Solid badges -->
<span class="badge badge-success">Success</span>
<span class="badge badge-warning">Warning</span>
<span class="badge badge-error">Error</span>
<span class="badge badge-info">Info</span>

<!-- Sizes -->
<span class="badge badge-success badge-sm">Small</span>
<span class="badge badge-success badge-lg">Large</span>

<!-- Pill shape -->
<span class="badge badge-success badge-pill">Pill</span>
```

### Tables

```html
<div class="table-wrapper">
  <table class="table">
    <thead class="table-head">
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
      </tr>
    </thead>
    <tbody>
      <tr class="table-row">
        <td class="table-cell">John Doe</td>
        <td class="table-cell">john@example.com</td>
        <td class="table-cell">Admin</td>
      </tr>
    </tbody>
  </table>
</div>
```

### Modal

```html
<div class="modal">
  <div class="modal-backdrop"></div>
  <div class="modal-content">
    <div class="modal-header">Modal Title</div>
    <div class="modal-body">
      <p>Modal content goes here.</p>
    </div>
    <div class="modal-footer">
      <button class="button button-ghost">Cancel</button>
      <button class="button button-primary">Confirm</button>
    </div>
  </div>
</div>
```

### Tabs

```html
<div class="tabs">
  <div class="tab-list">
    <button class="tab tab-active">Tab 1</button>
    <button class="tab">Tab 2</button>
    <button class="tab">Tab 3</button>
  </div>
  <div class="tab-panel">Tab content here.</div>
</div>
```

---

## 🔧 Modular Imports

Import only the components you need to reduce bundle size:

```css
/* Import only what you need */
@import 'tailwindcss';
@import 'kamui/color'; /* Required: theme colors */
@import 'kamui/buttons'; /* Only buttons */
@import 'kamui/cards'; /* Only cards */
@import 'kamui/forms'; /* Only forms */
```

### Available Imports

| Import              | Component               |
| ------------------- | ----------------------- |
| `kamui`             | All components          |
| `kamui/color`       | Theme colors (required) |
| `kamui/buttons`     | Buttons                 |
| `kamui/cards`       | Cards                   |
| `kamui/forms`       | Form inputs             |
| `kamui/alerts`      | Alerts                  |
| `kamui/badges`      | Badges                  |
| `kamui/tables`      | Tables                  |
| `kamui/modals`      | Modals                  |
| `kamui/tabs`        | Tabs                    |
| `kamui/dropdowns`   | Dropdowns               |
| `kamui/avatars`     | Avatars                 |
| `kamui/breadcrumbs` | Breadcrumbs             |
| `kamui/tooltips`    | Tooltips                |
| `kamui/popovers`    | Popovers                |
| `kamui/spinners`    | Spinners                |
| `kamui/progress`    | Progress bars           |
| `kamui/toasts`      | Toasts                  |
| `kamui/accordion`   | Accordion               |
| `kamui/dividers`    | Dividers                |
| `kamui/list-groups` | List groups             |
| `kamui/stepper`     | Stepper                 |
| `kamui/pagination`  | Pagination              |
| `kamui/typography`  | Typography              |

---

## 🎨 Theming

KamUI uses CSS custom properties (variables) for theming, defined with Tailwind CSS 4's `@theme` directive.

### Default Colors

| Variable            | Light Mode | Dark Mode |
| ------------------- | ---------- | --------- |
| `--color-primary`   | `#2f27ce`  | `#3a31d8` |
| `--color-secondary` | `#dddbff`  | `#020024` |
| `--color-accent`    | `#443dff`  | `#0600c2` |
| `--color-bg`        | `#fbfbfe`  | `#010104` |
| `--color-text`      | `#040316`  | `#eae9fc` |
| `--color-success`   | `#059669`  | `#10b981` |
| `--color-warning`   | `#d97706`  | `#f59e0b` |
| `--color-error`     | `#dc2626`  | `#ef4444` |
| `--color-info`      | `#0284c7`  | `#06b6d4` |

### Customizing Colors

Override the theme colors in your CSS:

```css
@import 'tailwindcss';
@import 'kamui';

/* Override colors */
@theme {
  --color-primary: #8b5cf6;
  --color-primary-hover: #7c3aed;
  --color-primary-focus: #a78bfa;
  --color-primary-active: #6d28d9;
  --color-primary-ring: #ddd6fe;
}

/* Override dark mode colors */
.dark {
  --color-primary: #a78bfa;
  --color-primary-hover: #8b5cf6;
}
```

### Using Colors with Tailwind Utilities

The theme colors work as Tailwind utilities:

```html
<div class="bg-primary text-white">Primary background</div>
<div class="text-success">Success text</div>
<div class="border-error">Error border</div>
<div class="bg-bg-elevated">Elevated background</div>
```

---

## 🌙 Dark Mode

KamUI supports dark mode out of the box with two methods:

### 1. Automatic (System Preference)

Dark mode is automatically applied based on the user's system preference using `prefers-color-scheme`.

### 2. Manual Toggle

Add the `.dark` class to the `<html>` element:

```html
<html class="dark">
  <!-- Dark mode active -->
</html>
```

### JavaScript Toggle Example

```js
// Toggle dark mode
function toggleTheme() {
  document.documentElement.classList.toggle('dark');
}

// Set specific theme
function setTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}
```

### React Example

```jsx
import { useState, useEffect } from 'react';

function useTheme() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;

    if (saved === 'dark' || (!saved && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', !isDark ? 'dark' : 'light');
  };

  return { isDark, toggleTheme };
}
```

### Vue Example

```vue
<script setup>
import { ref, onMounted } from 'vue';

const isDark = ref(false);

onMounted(() => {
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (saved === 'dark' || (!saved && prefersDark)) {
    isDark.value = true;
    document.documentElement.classList.add('dark');
  }
});

const toggleTheme = () => {
  isDark.value = !isDark.value;
  document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light');
};
</script>
```

---

## 📁 Project Structure

```
kamui/
├── library/                 # 📦 Distributed library (npm package)
│   ├── index.css           # Main entry point
│   ├── theme/
│   │   └── color.css       # Theme colors & dark mode
│   └── components/
│       ├── alerts.css
│       ���── avatars.css
│       ├── badges.css
│       ├── buttons.css
│       ├── cards.css
│       └── ...
├── src/                    # 🔧 Source & demo app
│   ├── library/           # Source CSS files
│   └── ...                # Demo application
├── tests/                  # 🧪 Test files
├── package.json
└── README.md
```

---

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) before submitting a Pull Request.

### Development Setup

```bash
# Clone the repository
git clone https://github.com/JotnarDev/KamUI.git
cd KamUI

# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm run test

# Check formatting
npm run format:check
```

---

## 📄 License

MIT License © 2025 [JotnarDev](https://github.com/JotnarDev)

See [LICENSE](LICENSE) for more information.

---

## 🙏 Acknowledgments

- Built with [Tailwind CSS 4](https://tailwindcss.com/)
- Inspired by modern design systems

---

<div align="center">

**Made with 💜 by [JotnarDev](https://github.com/JotnarDev)**

[⬆ Back to top](#-kamui)

</div>
