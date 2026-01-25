# Changelog

All notable changes to KamUI will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

### Added

- Initial project setup

---

## [1.0.0] - 2026-01-25

### Added

#### Core

- 🎨 Theme system using Tailwind CSS 4 `@theme` directive
- 🌙 Automatic dark mode with `prefers-color-scheme`
- 📦 Modular imports for individual components

#### Components

- **Alerts** - Success, warning, error, info variants
- **Avatars** - Sizes (sm, md, lg, xl) and group stacking
- **Badges** - Soft, solid, outlined variants with multiple colors
- **Breadcrumbs** - Basic and icon separator styles
- **Buttons** - Primary, secondary, ghost variants with sizes
- **Cards** - Image cards, outlined, soft, hover effects
- **Dropdowns** - Menus with items, dividers, states
- **Forms** - Inputs, floating labels, states, sizes
- **Modals** - Modal windows with backdrop
- **Popovers** - Positioned popovers (top, bottom, left, right)
- **Tables** - Striped, hover, responsive tables
- **Tabs** - Base, underline, pill variants
- **Typography** - Headings, paragraphs, links, text styles

#### Theme Colors

- Primary, secondary, accent colors
- Background and text colors
- Status colors: success, warning, error, info
- Interactive states: hover, focus, active, ring

#### Documentation

- README with installation and usage guide
- Contributing guidelines
- Code examples for all components

#### Development

- Vite development server
- Prettier for code formatting
- Vitest for testing
- GitHub Actions for CI/CD

### Technical Details

- Built on Tailwind CSS 4.x
- Vue 3 for demo components
- Zero runtime JavaScript for styles
- Tree-shakeable exports

---

## Version History

| Version | Date       | Description     |
| ------- | ---------- | --------------- |
| 1.0.0   | 2026-01-25 | Initial release |

---

## Versioning Guide

We use [Semantic Versioning](https://semver.org/):

| Version           | When to Update   | Example                          |
| ----------------- | ---------------- | -------------------------------- |
| **MAJOR** (1.0.0) | Breaking changes | Remove component, rename classes |
| **MINOR** (1.1.0) | New features     | Add new component, add variant   |
| **PATCH** (1.0.1) | Bug fixes        | Fix color, fix spacing           |

### Examples

```
1.0.0 → 1.0.1  (bug fix)
1.0.1 → 1.1.0  (new feature)
1.1.0 → 2.0.0  (breaking change)
```

---

## How to Read This File

### Change Types

| Icon | Type       | Description                   |
| ---- | ---------- | ----------------------------- |
| ✨   | Added      | New features                  |
| 🔄   | Changed    | Changes in existing features  |
| 🗑️   | Deprecated | Features that will be removed |
| ❌   | Removed    | Features that were removed    |
| 🐛   | Fixed      | Bug fixes                     |
| 🔒   | Security   | Security updates              |

### Example Entry

```markdown
## [1.2.0] - 2026-02-15

### Added

- ✨ New `spinner` component for loading states
- ✨ New `progress` component for progress bars

### Changed

- 🔄 Improved button hover animations

### Fixed

- 🐛 Fixed modal backdrop not covering full screen
- 🐛 Fixed dropdown menu z-index issues
```

---

## Links

- [GitHub Releases](https://github.com/JotnarDev/KamUI/releases)
- [npm Package](https://www.npmjs.com/package/kamui)

[Unreleased]: https://github.com/JotnarDev/KamUI/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/JotnarDev/KamUI/releases/tag/v1.0.0
