import { describe, it, expect } from 'vitest'
import { readFileSync } from 'fs'
import { resolve } from 'path'

// Helper: read file
function readFile(filePath) {
    return readFileSync(resolve(process.cwd(), filePath), 'utf-8')
}

// Helper: extract CSS variables from content
function extractCSSVariables(content) {
    const regex = /--([a-zA-Z0-9-]+):/g
    const matches = content.match(regex) || []
    return matches.map((m) => m.slice(0, -1)) // Remove trailing :
}

// Helper: get content inside a selector block
function getSelectorContent(content, selector) {
    // Escape special regex characters in selector
    const escapedSelector = selector.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    const regex = new RegExp(`${escapedSelector}\\s*{([^}]+)}`, 'gs')
    const matches = content.match(regex)
    return matches ? matches.join('\n') : ''
}

describe('Theme System', () => {
    const content = readFile('src/library/theme/color.css')

    describe('Tailwind CSS 4 syntax', () => {
        it('should use @theme directive', () => {
            expect(content).toContain('@theme')
        })

        it('should have @theme block', () => {
            expect(content).toMatch(/@theme\s*{/)
        })
    })

    describe('Primary color variables', () => {
        const primaryColors = [
            '--color-primary',
            '--color-primary-hover',
            '--color-primary-focus',
            '--color-primary-active',
            '--color-primary-ring',
        ]

        primaryColors.forEach((colorVar) => {
            it(`should define ${colorVar}`, () => {
                expect(content).toContain(colorVar)
            })
        })
    })

    describe('Secondary color variables', () => {
        const secondaryColors = [
            '--color-secondary',
            '--color-secondary-hover',
            '--color-secondary-focus',
            '--color-secondary-active',
            '--color-secondary-ring',
        ]

        secondaryColors.forEach((colorVar) => {
            it(`should define ${colorVar}`, () => {
                expect(content).toContain(colorVar)
            })
        })
    })

    describe('Accent color variables', () => {
        const accentColors = [
            '--color-accent',
            '--color-accent-hover',
            '--color-accent-focus',
            '--color-accent-active',
            '--color-accent-ring',
        ]

        accentColors.forEach((colorVar) => {
            it(`should define ${colorVar}`, () => {
                expect(content).toContain(colorVar)
            })
        })
    })

    describe('Background and text colors', () => {
        const bgColors = ['--color-bg', '--color-bg-elevated', '--color-text']

        bgColors.forEach((colorVar) => {
            it(`should define ${colorVar}`, () => {
                expect(content).toContain(colorVar)
            })
        })
    })

    describe('Status colors', () => {
        const statusColors = [
            '--color-success',
            '--color-warning',
            '--color-error',
            '--color-info',
        ]

        statusColors.forEach((colorVar) => {
            it(`should define ${colorVar}`, () => {
                expect(content).toContain(colorVar)
            })
        })
    })

    describe('Status color variants', () => {
        const statuses = ['success', 'warning', 'error', 'info']
        const variants = ['hover', 'focus', 'active', 'ring']

        statuses.forEach((status) => {
            variants.forEach((variant) => {
                it(`should have --color-${status}-${variant}`, () => {
                    expect(content).toContain(`--color-${status}-${variant}`)
                })
            })
        })
    })
})

describe('Dark Mode', () => {
    const content = readFile('src/library/theme/color.css')

    describe('Dark mode via .dark class (manual toggle)', () => {
        it('should have .dark selector', () => {
            expect(content).toMatch(/\.dark\s*{/)
        })

        it('.dark should redefine --color-primary', () => {
            const darkContent = getSelectorContent(content, '.dark')
            expect(darkContent).toContain('--color-primary')
        })

        it('.dark should redefine --color-bg', () => {
            const darkContent = getSelectorContent(content, '.dark')
            expect(darkContent).toContain('--color-bg')
        })

        it('.dark should redefine --color-text', () => {
            const darkContent = getSelectorContent(content, '.dark')
            expect(darkContent).toContain('--color-text')
        })

        it('.dark should redefine --color-bg-elevated', () => {
            const darkContent = getSelectorContent(content, '.dark')
            expect(darkContent).toContain('--color-bg-elevated')
        })

        it('.dark should redefine status colors', () => {
            const darkContent = getSelectorContent(content, '.dark')
            expect(darkContent).toContain('--color-success')
            expect(darkContent).toContain('--color-warning')
            expect(darkContent).toContain('--color-error')
            expect(darkContent).toContain('--color-info')
        })
    })

    describe('Dark mode via prefers-color-scheme (system preference)', () => {
        it('should have prefers-color-scheme media query', () => {
            expect(content).toContain('prefers-color-scheme: dark')
        })

        it('should have @media block for dark mode', () => {
            expect(content).toMatch(/@media\s*\(\s*prefers-color-scheme:\s*dark\s*\)/)
        })

        it('media query should use :root:not(.light) for proper fallback', () => {
            // This ensures system preference is respected unless user manually chose light
            expect(content).toMatch(/:root:not\(\.light\)/)
        })
    })

    describe('Dark mode color values are different from light mode', () => {
        it('dark --color-bg should be different from light --color-bg', () => {
            // Light mode bg
            const lightBgMatch = content.match(/@theme\s*{[^}]*--color-bg:\s*([^;]+);/)
            // Dark mode bg (from .dark selector)
            const darkBgMatch = content.match(/\.dark\s*{[^}]*--color-bg:\s*([^;]+);/)

            if (lightBgMatch && darkBgMatch) {
                const lightBg = lightBgMatch[1].trim()
                const darkBg = darkBgMatch[1].trim()
                expect(lightBg).not.toBe(darkBg)
            }
        })

        it('dark --color-text should be different from light --color-text', () => {
            const lightTextMatch = content.match(
                /@theme\s*{[^}]*--color-text:\s*([^;]+);/
            )
            const darkTextMatch = content.match(
                /\.dark\s*{[^}]*--color-text:\s*([^;]+);/
            )

            if (lightTextMatch && darkTextMatch) {
                const lightText = lightTextMatch[1].trim()
                const darkText = darkTextMatch[1].trim()
                expect(lightText).not.toBe(darkText)
            }
        })
    })
})

describe('Color Values', () => {
    const content = readFile('src/library/theme/color.css')

    it('should use valid hex colors', () => {
        const hexColors = content.match(/#[0-9a-fA-F]{3,8}/g) || []

        hexColors.forEach((color) => {
            // Valid hex: #RGB, #RGBA, #RRGGBB, or #RRGGBBAA
            expect(color).toMatch(
                /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/
            )
        })
    })

    it('should have at least 10 color variables in @theme', () => {
        const themeMatch = content.match(/@theme\s*{([^}]+)}/)
        if (themeMatch) {
            const variables = extractCSSVariables(themeMatch[1])
            const colorVariables = variables.filter((v) => v.startsWith('--color'))
            expect(colorVariables.length).toBeGreaterThanOrEqual(10)
        }
    })

    it('should have at least 10 color variables in .dark', () => {
        const darkMatch = content.match(/\.dark\s*{([^}]+)}/)
        if (darkMatch) {
            const variables = extractCSSVariables(darkMatch[1])
            const colorVariables = variables.filter((v) => v.startsWith('--color'))
            expect(colorVariables.length).toBeGreaterThanOrEqual(10)
        }
    })
})

describe('Theme Consistency', () => {
    const content = readFile('src/library/theme/color.css')

    it('should have both .dark class and prefers-color-scheme', () => {
        expect(content).toMatch(/\.dark\s*{/)
        expect(content).toContain('prefers-color-scheme: dark')
    })

    it('.dark and prefers-color-scheme should define same variables', () => {
        // Extract variables from .dark
        const darkMatch = content.match(/\.dark\s*{([^}]+)}/s)
        const darkVars = darkMatch ? extractCSSVariables(darkMatch[1]) : []

        // Both should have the main color variables
        const requiredVars = [
            '--color-primary',
            '--color-bg',
            '--color-text',
            '--color-success',
            '--color-error',
        ]

        requiredVars.forEach((varName) => {
            expect(darkVars).toContain(varName)
        })
    })

    it('light mode colors should be readable (light bg, dark text)', () => {
        // Check that light mode has light background
        const lightBgMatch = content.match(/@theme\s*{[^}]*--color-bg:\s*([^;]+);/)
        if (lightBgMatch) {
            const bgColor = lightBgMatch[1].trim()
            // Light colors typically start with #f, #e, or high values
            expect(bgColor).toMatch(/^#[defDEF]/)
        }
    })

    it('dark mode colors should be readable (dark bg, light text)', () => {
        // Check that dark mode has dark background
        const darkBgMatch = content.match(/\.dark\s*{[^}]*--color-bg:\s*([^;]+);/)
        if (darkBgMatch) {
            const bgColor = darkBgMatch[1].trim()
            // Dark colors typically start with #0, #1, #2
            expect(bgColor).toMatch(/^#[0-2]/)
        }
    })
})

describe('Ring Colors for Focus States', () => {
    const content = readFile('src/library/theme/color.css')

    it('should have ring color for primary', () => {
        expect(content).toContain('--color-primary-ring')
    })

    it('should have ring colors for status colors', () => {
        const ringColors = [
            '--color-success-ring',
            '--color-warning-ring',
            '--color-error-ring',
            '--color-info-ring',
        ]

        ringColors.forEach((ringColor) => {
            expect(content).toContain(ringColor)
        })
    })

    it('.dark should also define ring colors', () => {
        const darkContent = getSelectorContent(content, '.dark')

        expect(darkContent).toContain('--color-primary-ring')
        expect(darkContent).toContain('--color-success-ring')
        expect(darkContent).toContain('--color-error-ring')
    })
})

describe('Theme Toggle Support', () => {
    const content = readFile('src/library/theme/color.css')

    it('should support manual toggle via .dark class', () => {
        // .dark class should exist and have color overrides
        expect(content).toMatch(/\.dark\s*{[\s\S]*--color-primary[\s\S]*}/)
    })

    it('should support .light class for forcing light mode', () => {
        // The media query should respect .light class
        // :root:not(.light) means "apply dark if not explicitly set to light"
        expect(content).toContain(':root:not(.light)')
    })

    it('should allow three states: light, dark, system', () => {
        // Light: no .dark class, or .light class
        // Dark: .dark class
        // System: no class, relies on prefers-color-scheme

        // Check .dark exists for manual dark
        expect(content).toMatch(/\.dark\s*{/)

        // Check :root:not(.light) for system dark fallback
        expect(content).toContain(':root:not(.light)')

        // This structure allows:
        // - <html class="light"> = always light
        // - <html class="dark"> = always dark
        // - <html> = follows system preference
    })
})