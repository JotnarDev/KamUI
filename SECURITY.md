# Security Policy

## 🛡️ About KamUI Security

KamUI is a **CSS-only** component library. This means:

- ✅ **No JavaScript runtime** - Only CSS styles, no executable code
- ✅ **No data collection** - We don't collect any user data
- ✅ **No external requests** - No API calls or external resources
- ✅ **No cookies** - We don't use cookies or local storage

This design makes KamUI very secure by default.

---

## 📦 Supported Versions

We provide security updates for the following versions:

| Version | Supported |
| ------- | --------- |
| 1.x.x   | ✅ Yes    |
| < 1.0   | ❌ No     |

---

## 🚨 Reporting a Vulnerability

If you find a security issue, please follow these steps:

### Step 1: Do NOT open a public issue

Security issues should be reported privately to protect users.

### Step 2: Report privately

You have two options:

**Option A: GitHub Security Advisory (Recommended)**

1. Go to the [Security tab](https://github.com/JotnarDev/KamUI/security)
2. Click "Report a vulnerability"
3. Fill out the form with details

**Option B: Email**

- Contact the maintainer through their [GitHub profile](https://github.com/JotnarDev)

### Step 3: Include this information

Please include:

- **Description**: What is the vulnerability?
- **Steps to reproduce**: How can we see the issue?
- **Impact**: What could happen if exploited?
- **Suggested fix**: If you have ideas (optional)

### Step 4: Wait for response

- We will respond within **48 hours**
- We will work with you to understand the issue
- We will create a fix and release it
- We will credit you (if you want) after the fix

---

## ⏱️ Response Timeline

| Action            | Time                                 |
| ----------------- | ------------------------------------ |
| First response    | Within 48 hours                      |
| Issue confirmed   | Within 1 week                        |
| Fix released      | Within 2 weeks (for critical issues) |
| Public disclosure | After fix is released                |

---

## 🔍 What We Consider Security Issues

### ✅ Security issues (please report)

- CSS injection vulnerabilities
- Malicious code in dependencies
- Build process vulnerabilities
- Issues that could affect users of the library

### ❌ Not security issues (open regular issue)

- Visual bugs or styling issues
- Browser compatibility problems
- Feature requests
- Documentation errors

---

## 🛠️ Security Best Practices for Users

When using KamUI in your project:

### 1. Keep dependencies updated

```bash
# Check for updates
npm outdated

# Update to latest version
npm update kamui
```
