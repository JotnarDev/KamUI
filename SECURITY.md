# Security Policy

## Overview

KamUI is a **CSS-only** component library. This means:

- **No JavaScript runtime** – Only CSS styles, no executable JS
- **No data collection** – No analytics, tracking, or user data storage
- **No external requests** – No API calls or remote resources at runtime
- **No cookies** – No storage or persistence in the browser

This design reduces the attack surface significantly, but **build and
dependency vulnerabilities can still affect users**, so we treat security
reports seriously.

---

## Supported Versions

We provide security updates for the following versions:

| Version | Supported |
| ------- | --------- |
| 1.x.x   | ✅ Yes    |
| < 1.0   | ❌ No     |

---

## Reporting a Vulnerability

### 1) Do **not** open a public issue

Security issues must be reported privately.

### 2) Report privately (preferred)

**GitHub Security Advisory (Recommended)**

1. Go to the [Security tab](https://github.com/JotnarDev/KamUI/security)
2. Click **Report a vulnerability**
3. Fill out the form with details

**Alternative: Contact the maintainer**

- Reach out via the maintainer’s [GitHub profile](https://github.com/JotnarDev)

### 3) Include the following details

- **Description** of the issue
- **Steps to reproduce**
- **Impact** and potential risk
- **Affected versions** (if known)
- **Suggested fix** (optional)

### 4) What happens next

- We respond within **48 hours**
- We verify and triage the report
- We coordinate a fix and release
- We credit you upon request after disclosure

---

## Response Timeline

| Action            | Target timeframe                 |
| ----------------- | -------------------------------- |
| First response    | Within 48 hours                  |
| Issue confirmed   | Within 7 days                    |
| Fix released      | Within 14 days (critical issues) |
| Public disclosure | After the fix is released        |

---

## What We Consider a Security Issue

### ✅ In scope

- CSS injection or unsafe CSS processing
- Malicious or compromised dependencies
- Build or release pipeline vulnerabilities
- Any issue that could impact library consumers

### ❌ Out of scope (open a regular issue instead)

- Visual bugs or styling defects
- Browser compatibility issues
- Feature requests
- Documentation errors

---

## Best Practices for Users

When using KamUI in your project:

1. **Keep dependencies updated**
2. **Use lockfiles** (`package-lock.json`, `pnpm-lock.yaml`, or `yarn.lock`)
3. **Audit your dependencies** regularly

Suggested commands:

```bash
npm outdated
npm audit
npm update kamui
```
