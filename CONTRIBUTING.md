# Contributing to KamUI

Thank you for your interest in contributing to KamUI! 🎉

This guide will help you get started. We welcome all contributions: bug fixes, new features, documentation, and more.

---

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [Development Setup](#development-setup)
- [Project Structure](#project-structure)
- [Coding Guidelines](#coding-guidelines)
- [Commit Messages](#commit-messages)
- [Pull Request Process](#pull-request-process)
- [Adding New Components](#adding-new-components)

---

## 📜 Code of Conduct

Please be respectful and kind to everyone. We want KamUI to be a welcoming community for all.

**Our rules:**

- Be friendly and patient
- Be welcoming to newcomers
- Be respectful of different viewpoints
- Accept constructive criticism
- Focus on what is best for the community

---

## 🚀 Getting Started

### Prerequisites

Before you begin, make sure you have:

- [Node.js](https://nodejs.org/) version 18 or higher
- [Git](https://git-scm.com/) installed
- A [GitHub](https://github.com/) account
- Basic knowledge of CSS and Tailwind CSS

### Quick Start

```bash
# 1. Fork the repository on GitHub

# 2. Clone your fork
git clone https://github.com/YOUR_USERNAME/KamUI.git
cd KamUI

# 3. Add the original repo as upstream
git remote add upstream https://github.com/JotnarDev/KamUI.git

# 4. Install dependencies
npm install

# 5. Start development server
npm run dev
```

---

## 🤝 How to Contribute

### Types of Contributions

| Type                 | Description                                | Label         |
| -------------------- | ------------------------------------------ | ------------- |
| 🐛 **Bug Fix**       | Fix something that is broken               | `bug`         |
| ✨ **New Feature**   | Add new component or functionality         | `enhancement` |
| 📝 **Documentation** | Improve docs, README, comments             | `docs`        |
| 🎨 **Style**         | CSS improvements, design changes           | `style`       |
| ♻️ **Refactor**      | Code improvement without changing behavior | `refactor`    |
| 🧪 **Tests**         | Add or improve tests                       | `test`        |

### Step by Step

1. **Find or create an issue**
   - Check [existing issues](https://github.com/JotnarDev/KamUI/issues)
   - If your issue doesn't exist, create a new one
   - Wait for approval before starting big changes

2. **Create a branch**

   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/bug-description
   ```

3. **Make your changes**
   - Write clean, readable code
   - Follow our coding guidelines
   - Add tests if needed

4. **Test your changes**

   ```bash
   npm run test
   npm run format:check
   ```

5. **Commit your changes**

   ```bash
   git add .
   git commit -m "feat: add new button variant"
   ```

6. **Push and create a Pull Request**
   ```bash
   git push origin feature/your-feature-name
   ```

---

## 💻 Development Setup

### Available Scripts

| Command                | Description               |
| ---------------------- | ------------------------- |
| `npm run dev`          | Start development server  |
| `npm run build`        | Build for production      |
| `npm run test`         | Run all tests             |
| `npm run test:watch`   | Run tests in watch mode   |
| `npm run format`       | Format code with Prettier |
| `npm run format:check` | Check code format         |

### Development Workflow

```bash
# 1. Start the dev server
npm run dev

# 2. Open browser at http://localhost:5173

# 3. Edit files in src/library/

# 4. See changes in real-time

# 5. Before committing, run:
npm run format
npm run test
```

---

## 📁 Project Structure

```
KamUI/
├── src/
│   ├── library/                 # 📦 The actual library
│   │   ├── components/          # Component CSS files
│   │   │   ├── alerts.css
│   │   │   ├── buttons.css
│   │   │   └── ...
│   │   ├── theme/
│   │   │   └── color.css        # Design tokens
│   │   └── index.css            # Main entry point
│   │
│   ├── components/              # 🎭 Demo components (Vue)
│   │   ├── blocks/
│   │   ├── components/
│   │   └── templates/
│   │
│   ├── App.vue                  # Demo app
│   └── main.js
│
├── tests/                       # 🧪 Test files
├── .github/workflows/           # 🔄 CI/CD
├── package.json
└── README.md
```

### Important Files

| File                           | Purpose                             |
| ------------------------------ | ----------------------------------- |
| `src/library/index.css`        | Main entry - imports all components |
| `src/library/theme/color.css`  | Color system with `@theme`          |
| `src/library/components/*.css` | Individual component styles         |
| `package.json`                 | Exports configuration               |

---

## 📝 Coding Guidelines

### CSS Guidelines

#### Use clear class names

```css
/* ✅ Good */
.button {
}
.button-primary {
}
.button-lg {
}

/* ❌ Bad */
.btn {
}
.btn-p {
}
.btn-l {
}
```

#### Follow naming convention

```css
/* Component: .component-name */
.card {
}

/* Variant: .component-variant */
.card-outlined {
}

/* Size: .component-size */
.card-sm {
}

/* State: .component-state */
.card-hover {
}
```

#### Use Tailwind CSS 4 features

```css
/* ✅ Use @theme for design tokens */
@theme {
  --color-primary: #2f27ce;
}

/* ✅ Use CSS variables from theme */
.button-primary {
  background-color: var(--color-primary);
}
```

#### Add comments for sections

```css
/* ======================
   BUTTONS
   ====================== */

/* Base button styles */
.button {
  /* ... */
}

/* Button variants */
.button-primary {
  /* ... */
}
```

### File Guidelines

- One component per file
- Keep files under 300 lines if possible
- Group related styles together
- Add comments explaining complex styles

---

## 💬 Commit Messages

We use [Conventional Commits](https://www.conventionalcommits.org/). This helps us generate changelogs automatically.

### Format

```
type: short description

[optional body]

[optional footer]
```

### Types

| Type       | When to Use      | Example                            |
| ---------- | ---------------- | ---------------------------------- |
| `feat`     | New feature      | `feat: add tooltip component`      |
| `fix`      | Bug fix          | `fix: button hover color`          |
| `docs`     | Documentation    | `docs: update README`              |
| `style`    | CSS/formatting   | `style: improve card shadows`      |
| `refactor` | Code restructure | `refactor: simplify alert classes` |
| `test`     | Tests            | `test: add button tests`           |
| `chore`    | Maintenance      | `chore: update dependencies`       |

### Examples

```bash
# New feature
git commit -m "feat: add loading state to buttons"

# Bug fix
git commit -m "fix: modal not closing on overlay click"

# Documentation
git commit -m "docs: add examples for forms"

# With body for more details
git commit -m "feat: add avatar component

- Add sizes: sm, md, lg, xl
- Add group variant for stacking
- Add status indicator"
```

---

## 🔄 Pull Request Process

### Before Creating PR

- [ ] Code follows our style guidelines
- [ ] Tests pass: `npm run test`
- [ ] Code is formatted: `npm run format`
- [ ] Commit messages follow convention
- [ ] Branch is up to date with main

### PR Title Format

Use the same format as commits:

```
feat: add new component
fix: resolve issue with X
docs: improve contributing guide
```

### PR Description Template

```markdown
## Description

Brief description of changes.

## Type of Change

- [ ] Bug fix
- [ ] New feature
- [ ] Documentation
- [ ] Other

## How to Test

Steps to test your changes.

## Screenshots (if applicable)

Add screenshots for visual changes.

## Checklist

- [ ] Tests pass
- [ ] Code is formatted
- [ ] Documentation updated
```

### Review Process

1. Create Pull Request
2. Automated checks run (CI)
3. Maintainer reviews code
4. Make requested changes (if any)
5. PR gets approved and merged

---

## 🧩 Adding New Components

### Step 1: Create CSS file

```bash
# Create new component file
touch src/library/components/newcomponent.css
```

### Step 2: Write component CSS

```css
/* src/library/components/newcomponent.css */

/* ======================
   NEW COMPONENT
   ====================== */

/* Base */
.newcomponent {
  /* base styles */
}

/* Variants */
.newcomponent-primary {
  background-color: var(--color-primary);
}

.newcomponent-secondary {
  background-color: var(--color-secondary);
}

/* Sizes */
.newcomponent-sm {
  padding: 0.5rem;
}

.newcomponent-md {
  padding: 1rem;
}

.newcomponent-lg {
  padding: 1.5rem;
}
```

### Step 3: Add to index.css

```css
/* src/library/index.css */
@import './components/newcomponent.css';
```

### Step 4: Add export to package.json

```json
{
  "exports": {
    "./newcomponent": "./library/components/newcomponent.css"
  }
}
```

### Step 5: Create demo component

```vue
<!-- src/components/components/newcomponent/demo.vue -->
<template>
  <div class="newcomponent newcomponent-primary newcomponent-md">
    Demo content
  </div>
</template>
```

### Step 6: Add tests

```javascript
// tests/classes.test.js
describe('NewComponent', () => {
  const content = readCSSFile('src/library/components/newcomponent.css');

  it('should have .newcomponent class', () => {
    expect(hasClass(content, 'newcomponent')).toBe(true);
  });
});
```

### Step 7: Update documentation

Add your component to README.md in the components table.

---

## ❓ Questions?

- Check existing [issues](https://github.com/JotnarDev/KamUI/issues)
- Create a new issue with the `question` label
- Be clear and provide context

---

## 🙏 Thank You!

Every contribution helps make KamUI better. We appreciate your time and effort!

Happy coding! 💜
