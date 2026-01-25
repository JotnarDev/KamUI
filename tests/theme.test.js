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
    return matches.map(m => m.slice(0, -1)) // Remove trailing :
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
        ]

        primaryColors.forEach((colorVar) => {
            it(`should define ${colorVar}`, () => {
                expect(content).toContain(colorVar)
            })
        })
    })

    describe('Secondary color variables', () => {
        it('should define --color-secondary', () => {
            expect(content).toContain('--color-secondary')
        })

        it('should define --color-accent', () => {
            expect(content).toContain('--color-accent')
        })
    })

    describe('Background and text colors', () => {
        const bgColors = [
            '--color-bg',
            '--color-text',
        ]

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
        const variants = ['success', 'warning', 'error', 'info']

        variants.forEach((status) => {
            it(`should have hover variant for ${status}`, () => {
                expect(content).toContain(`--color-${status}-hover`)
            })
        })
    })
})

describe('Dark Mode', () => {
    const content = readFile('src/library/theme/color.css')

    it('should have dark mode media query', () => {
        expect(content).toContain('prefers-color-scheme: dark')
    })

    it('should have @media block for dark mode', () => {
        expect(content).toMatch(/@media\s*\(\s*prefers-color-scheme:\s*dark\s*\)/)
    })

    describe('Dark mode redefines colors', () => {
        it('should redefine primary color in dark mode', () => {
            // Split content at dark mode media query
            const darkModeMatch = content.split('prefers-color-scheme: dark')

            if (darkModeMatch.length > 1) {
                const darkModeSection = darkModeMatch[1]
                expect(darkModeSection).toContain('--color-primary')
            } else {
                // If we can't split, just check it exists
                expect(content).toContain('prefers-color-scheme: dark')
            }
        })

        it('should redefine background color in dark mode', () => {
            const darkModeMatch = content.split('prefers-color-scheme: dark')

            if (darkModeMatch.length > 1) {
                const darkModeSection = darkModeMatch[1]
                expect(darkModeSection).toContain('--color-bg')
            }
        })

        it('should redefine text color in dark mode', () => {
            const darkModeMatch = content.split('prefers-color-scheme: dark')

            if (darkModeMatch.length > 1) {
                const darkModeSection = darkModeMatch[1]
                expect(darkModeSection).toContain('--color-text')
            }
        })
    })
})

describe('Color Values', () => {
    const content = readFile('src/library/theme/color.css')

    it('should use valid hex colors', () => {
        // Find all hex colors
        const hexColors = content.match(/#[0-9a-fA-F]{3,8}/g) || []

        hexColors.forEach((color) => {
            // Valid hex: #RGB, #RGBA, #RRGGBB, or #RRGGBBAA
            expect(color).toMatch(/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/)
        })
    })

    it('should have at least 10 color variables', () => {
        const variables = extractCSSVariables(content)
        const colorVariables = variables.filter(v => v.startsWith('--color'))

        expect(colorVariables.length).toBeGreaterThanOrEqual(10)
    })
})

describe('Theme Consistency', () => {
    const content = readFile('src/library/theme/color.css')

    it('light and dark mode should have similar structure', () => {
        // Count @theme occurrences (should be at least 2 - light and dark)
        const themeCount = (content.match(/@theme/g) || []).length
        expect(themeCount).toBeGreaterThanOrEqual(2)
    })

    it('should not have duplicate variable definitions in same scope', () => {
        // This is a basic check - we split by @theme and check each block
        const themeBlocks = content.split('@theme')

        themeBlocks.forEach((block, index) => {
            if (index === 0) return // Skip content before first @theme

            const variables = extractCSSVariables(block)
            const uniqueVars = [...new Set(variables)]

            // Each variable should appear only once per @theme block
            expect(variables.length).toBe(uniqueVars.length)
        })
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
})