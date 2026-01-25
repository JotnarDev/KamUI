<div align="center">
  <h1>🎨 KamUI</h1>
  <p><strong>UI component library built on Tailwind CSS 4 for Vue 3</strong></p>

  <p>
    <a href="#installation">Installation</a> •
    <a href="#quick-start">Quick Start</a> •
    <a href="#components">Components</a> •
    <a href="#customization">Customization</a> •
    <a href="#license">License</a>
  </p>

  <p>
    <img src="https://img.shields.io/badge/Vue-3.x-42b883?style=flat-square&logo=vue.js" alt="Vue 3">
    <img src="https://img.shields.io/badge/Tailwind_CSS-4.x-38bdf8?style=flat-square&logo=tailwindcss" alt="Tailwind CSS">
    <img src="https://img.shields.io/badge/License-MIT-blue?style=flat-square" alt="MIT License">
    <img src="https://img.shields.io/badge/Version-1.0.0-purple?style=flat-square" alt="Version">
  </p>
</div>

---

## ✨ Features

- ⚡ **Tailwind CSS 4** - Uses the new `@theme` directive and CSS engine
- 🌙 **Dark Mode** - Automatic dark mode with `prefers-color-scheme`
- 🎨 **Design Tokens** - Color system using Tailwind 4 CSS variables
- 📦 **Modular** - Import only the components you need
- 🔧 **Utility-First** - Mix component classes with Tailwind utilities
- 🚀 **Zero Runtime** - Only CSS, no extra JavaScript for styles

---

## 📦 Installation

### Requirements

- Node.js 18+
- Tailwind CSS 4.x
- Vue 3.x (recommended, but works with any framework)

```bash
# npm
npm install kamui

# pnpm
pnpm add kamui

# yarn
yarn add kamui
```

---

## 🚀 Quick Start

### Step 1: Setup Tailwind CSS 4

Make sure you have Tailwind CSS 4 with the Vite plugin:

```javascript
// vite.config.js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwind from '@tailwindcss/vite';

export default defineConfig({
  plugins: [vue(), tailwind()],
});
```

### Step 2: Import KamUI

```css
/* In your main CSS file */
@import 'tailwindcss';
@import 'kamui';
```

### Step 3: Use the components

```vue
<template>
  <div class="card max-w-sm">
    <div class="card-header">Welcome to KamUI!</div>
    <div class="card-body">
      Build modern interfaces with components and Tailwind utilities.
    </div>
    <div class="card-footer">
      <button class="button button-primary">Get Started</button>
      <button class="button button-ghost ml-2">Cancel</button>
    </div>
  </div>
</template>
```

---

## 📦 Modular Imports

Import only what you need to keep your bundle small:

```css
/* Theme system (required) */
@import 'kamui/color';

/* Individual components */
@import 'kamui/buttons';
@import 'kamui/forms';
@import 'kamui/cards';
@import 'kamui/alerts';
@import 'kamui/badges';
/* ... */
```

---

## 🧩 Components

| Component          | Description                                 | Import              |
| ------------------ | ------------------------------------------- | ------------------- |
| 🎨 **Color/Theme** | Design tokens and color system              | `kamui/color`       |
| 🔘 **Buttons**     | Buttons with solid, ghost, outline variants | `kamui/buttons`     |
| 📝 **Forms**       | Inputs, selects, floating labels, states    | `kamui/forms`       |
| 🃏 **Cards**       | Cards with image, hover, outlined, soft     | `kamui/cards`       |
| 🔔 **Alerts**      | Alerts for success, warning, error, info    | `kamui/alerts`      |
| 👤 **Avatars**     | Avatars with sizes and groups               | `kamui/avatars`     |
| 🏷️ **Badges**      | Badges soft, solid, outlined                | `kamui/badges`      |
| 📊 **Tables**      | Tables with striped, hover, responsive      | `kamui/tables`      |
| 📑 **Tabs**        | Tabs base, underline, pill                  | `kamui/tabs`        |
| 📍 **Breadcrumbs** | Navigation with separators                  | `kamui/breadcrumbs` |
| 📋 **Dropdowns**   | Dropdown menus with states                  | `kamui/dropdowns`   |
| 💬 **Modals**      | Modal windows                               | `kamui/modals`      |
| 💭 **Popovers**    | Popovers with positions                     | `kamui/popovers`    |
| ✏️ **Typography**  | Headings, paragraphs, links                 | `kamui/typography`  |

---

## 🎨 Theme System

KamUI uses the `@theme` directive from Tailwind CSS 4. This creates design tokens that work as Tailwind utilities:

```css
@theme {
  /* Primary colors - use as bg-primary, text-primary, etc. */
  --color-primary: #2f27ce;
  --color-primary-hover: #2620b8;
  --color-primary-focus: #3a31d8;
  --color-primary-active: #1f1a9e;
  --color-primary-ring: #c7c4ff;

  /* Secondary colors */
  --color-secondary: #dddbff;
  --color-accent: #443dff;

  /* Backgrounds */
  --color-bg: #fbfbfe;
  --color-bg-elevated: #f3f2ff;
  --color-text: #040316;

  /* Status colors */
  --color-success: #059669;
  --color-warning: #d97706;
  --color-error: #dc2626;
  --color-info: #0284c7;
}
```

### Using Tokens with Tailwind

The colors from `@theme` become Tailwind utilities:

```html
<!-- Use design tokens as utilities -->
<div class="bg-primary text-white">Primary background</div>
<div class="bg-bg-elevated text-text">Elevated surface</div>
<span class="text-success">Success message</span>
<button class="bg-accent hover:bg-accent-hover">Accent button</button>
```

### Automatic Dark Mode

Dark mode activates based on system preferences:

```css
@media (prefers-color-scheme: dark) {
  @theme {
    --color-primary: #3a31d8;
    --color-bg: #010104;
    --color-bg-elevated: #0b0a1a;
    --color-text: #eae9fc;
    /* ... all colors adapt */
  }
}
```

---

## 💡 How It Works: Components + Utilities

KamUI works **together with** Tailwind utilities, not as a replacement:

```html
<!-- Mix component classes with Tailwind utilities -->
<button
  class="button button-primary px-8 shadow-lg transition-shadow hover:shadow-xl"
>
  Custom button
</button>

<div class="card ring-primary/20 mx-auto mt-8 max-w-md ring-2">
  <div class="card-header text-lg font-bold">Title with extra utilities</div>
  <div class="card-body space-y-4">
    <p class="text-text/70">Content with opacity</p>
  </div>
</div>
```

---

## 📖 Component Examples

### Buttons

```html
<!-- Variants -->
<button class="button button-primary">Primary</button>
<button class="button button-secondary">Secondary</button>
<button class="button button-ghost">Ghost</button>

<!-- Sizes -->
<button class="button button-sm button-primary">Small</button>
<button class="button button-md button-primary">Medium</button>
<button class="button button-lg button-primary">Large</button>

<!-- With Tailwind utilities -->
<button class="button button-primary w-full rounded-full">
  Full width rounded
</button>
```

### Forms with Floating Labels

```html
<div class="form-floating">
  <input
    id="email"
    type="email"
    class="form-floating-input peer"
    placeholder="Email"
  />
  <label for="email" class="form-floating-label"> Email </label>
</div>

<!-- States -->
<input class="form-input form-input-success" placeholder="Valid" />
<p class="form-success-text">Looks good!</p>

<input class="form-input form-input-error" placeholder="Error" />
<p class="form-error-text">This field is required.</p>
```

### Badges

```html
<!-- Soft variants (default) -->
<span class="badge badge-md badge-success badge-pill">Success</span>
<span class="badge badge-md badge-warning badge-rounded">Warning</span>
<span class="badge badge-md badge-error badge-pill">Error</span>

<!-- Solid variants -->
<span class="badge badge-md badge-success-solid badge-pill">Solid</span>

<!-- Outlined variants -->
<span class="badge badge-md badge-success-outlined badge-pill">Outlined</span>
```

### Cards

```html
<div class="card card-hover max-w-sm">
  <img class="card-img" src="image.jpg" alt="" />
  <div class="card-header">Card Title</div>
  <div class="card-body">Card content with Tailwind utilities support.</div>
  <div class="card-footer flex gap-2">
    <button class="button button-primary flex-1">Accept</button>
    <button class="button button-ghost flex-1">Cancel</button>
  </div>
</div>

<!-- Variants -->
<div class="card card-outline">Outlined</div>
<div class="card card-soft">Soft background</div>
```

### Tabs

```html
<div class="tabs">
  <div class="tab-list">
    <button class="tab tab-active">Active</button>
    <button class="tab">Inactive</button>
    <button class="tab tab-disabled" disabled>Disabled</button>
  </div>
  <div class="tab-panel">Tab content here</div>
</div>

<!-- Variants -->
<div class="tabs tabs-underline">...</div>
<div class="tabs tabs-pill">...</div>
```

### Alerts

```html
<div class="alert alert-success">
  <span class="alert-icon">✓</span>
  <span class="alert-message">Operation completed!</span>
</div>

<div class="alert alert-error">
  <span class="alert-icon">✕</span>
  <span class="alert-message">Something went wrong.</span>
</div>

<div class="alert alert-warning">
  <span class="alert-icon">⚠</span>
  <span class="alert-message">Please check your input.</span>
</div>
```

### Tables

```html
<div class="table-wrapper">
  <table class="table">
    <thead class="table-head">
      <tr>
        <th>Name</th>
        <th>Role</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr class="table-row">
        <td class="table-cell">John Doe</td>
        <td class="table-cell">Admin</td>
        <td class="table-cell">Active</td>
      </tr>
    </tbody>
  </table>
</div>

<!-- Variants -->
<table class="table-striped table-hover table">
  ...
</table>
```

---

## 🛠️ Local Development

```bash
# Clone the repository
git clone https://github.com/JotnarDev/KamUI.git
cd KamUI

# Install dependencies
npm install

# Start development server
npm run dev

# Format code
npm run format

# Check format
npm run format:check
```

---

## 📁 Project Structure

```
KamUI/
├── src/
│   ├── library/                  # 📦 Publishable library
│   │   ├── components/           # CSS components
│   │   │   ├── alerts.css
│   │   │   ├── avatars.css
│   │   │   ├── badges.css
│   │   │   ├── breadcrumbs.css
│   │   │   ├── buttons.css
│   │   │   ├── cards.css
│   │   │   ├── dropdowns.css
│   │   │   ├── forms.css
│   │   │   ├── modals.css
│   │   │   ├── popovers.css
│   │   │   ├── tables.css
│   │   │   ├── tabs.css
│   │   │   └── typography.css
│   │   ├── theme/
│   │   │   └── color.css         # Design tokens with @theme
│   │   └── index.css             # Entry point
│   ├── components/               # 🎭 Vue demos for development
│   │   ├── blocks/
│   │   ├── components/
│   │   └── templates/
│   ├── App.vue
│   └── main.js
├── package.json
├── vite.config.js
└── README.md
```

---

## 🔧 Why Tailwind CSS 4?

KamUI needs Tailwind CSS 4 for these features:

| Feature                 | How KamUI uses it                                    |
| ----------------------- | ---------------------------------------------------- |
| `@theme` directive      | Creates design tokens that become Tailwind utilities |
| CSS-first config        | No `tailwind.config.js` file needed                  |
| `@import 'tailwindcss'` | New import syntax                                    |
| Vite plugin             | `@tailwindcss/vite` for best performance             |

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create your branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Style Guide

- Run `npm run format` before committing
- Follow the existing naming convention for CSS classes
- Add examples for new components

---

## 📄 License

MIT License. See [LICENSE](LICENSE) for more information.

---

<div align="center">
  <p>Built with 💜 on <strong>Tailwind CSS 4</strong></p>
  <p>By <a href="https://github.com/JotnarDev">JotnarDev</a></p>
</div>
