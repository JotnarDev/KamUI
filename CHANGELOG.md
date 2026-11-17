# Changelog

All notable changes to KamUI will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

---

## [1.1.0] - 2026-11-16

### Added

- ✨ `--color-on-primary` and `--color-on-info` tokens for text on solid fills (`text-on-primary`, `text-on-info`)
- ✨ `--color-atom` brand token (light `#0891b2`, dark `#22d3ee`) for focus and selection accents
- ✨ Brand kit in `brand/`: symbol, lockups, avatars, web icons, PNG exports and `tokens.css`
- ✨ Publish workflow: pushing a `v*.*.*` tag publishes to npm with provenance and creates the GitHub Release

### Changed

- 🔄 New "Primitivos" K logo (line · diagonal · dot) in README banners, favicon and demo
- 🔄 Dark-mode primary is now a light tint (`#8b85ff`) readable both as text and as a fill with dark text
- 🔄 Info color moves from cyan to sky (light `#0369a1`, dark `#38bdf8`); cyan is reserved for the brand atom
- 🔄 Alerts, avatars, badges, buttons, pagination, stepper, toasts and tooltips use `text-on-primary` / `text-on-info` instead of `text-white`
- 🔄 `npm run release:*` no longer publishes from the local machine; it bumps, tags and pushes, and CI publishes

### Upgrade notes

- If you place `text-white` on `bg-primary` or `bg-info` in your own markup, switch to `text-on-primary` / `text-on-info`: in dark mode those fills are now light, so white text loses contrast.

---

## [1.0.3] - 2026-01-25

### Changed

- 🔄 Republish of 1.0.2 (1.0.2 was tagged but never reached npm)

---

## [1.0.2] - 2026-01-25

### Changed

- 🔄 Package described as a framework-agnostic CSS library; keywords added for React, Next.js, Astro, Svelte, Nuxt, Angular, Solid and Qwik
- 🔄 README rewritten with per-framework setup guides

### Fixed

- 🐛 Demo breadcrumb, form and blockquote examples still referenced Flowbite

---

## [1.0.1] - 2026-01-25

### Added

- ✨ Full color scale per role (`hover`, `focus`, `active`, `ring`) for light and dark mode
- ✨ Dark mode via `.dark` class on `<html>`, plus `prefers-color-scheme` fallback (opt out with `.light`)
- ✨ `version:*` and `release:*` npm scripts

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
- **Accordion**, **Dividers**, **List groups**, **Pagination**, **Progress**, **Spinners**, **Stepper**, **Toasts**, **Tooltips**

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

| Version | Date       | Description                               |
| ------- | ---------- | ----------------------------------------- |
| 1.1.0   | 2026-11-16 | New brand, on-color tokens, CI publishing |
| 1.0.3   | 2026-01-25 | Republish of 1.0.2                        |
| 1.0.2   | 2026-01-25 | Framework-agnostic positioning, README    |
| 1.0.1   | 2026-01-25 | Full theme scales, dark mode class        |
| 1.0.0   | 2026-01-25 | Initial release                           |

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

[Unreleased]: https://github.com/JotnarDev/KamUI/compare/v1.1.0...HEAD
[1.1.0]: https://github.com/JotnarDev/KamUI/compare/v1.0.3...v1.1.0
[1.0.3]: https://github.com/JotnarDev/KamUI/compare/v1.0.2...v1.0.3
[1.0.2]: https://github.com/JotnarDev/KamUI/compare/v1.0.1...v1.0.2
[1.0.1]: https://github.com/JotnarDev/KamUI/compare/d65a953...v1.0.1
[1.0.0]: https://github.com/JotnarDev/KamUI/tree/d65a953
